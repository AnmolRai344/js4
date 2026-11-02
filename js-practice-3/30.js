class PaymentService {
    constructor() {
        this.processedPayments = new Map();
    }

    async processPayment(idempotencyKey, amount) {
        if (!idempotencyKey) {
            throw new Error("Idempotency key is required");
        }

        if (!Number.isFinite(amount) || amount <= 0) {
            throw new Error("Invalid payment amount");
        }

        const existing = this.processedPayments.get(idempotencyKey);

        if (existing) {
            if (existing.amount !== amount) {
                throw new Error(
                    "Idempotency key reused with different amount"
                );
            }

            return existing.result;
        }

        const result = {
            transactionId: crypto.randomUUID(),
            amount,
            status: "success"
        };

        this.processedPayments.set(idempotencyKey, {
            amount,
            result
        });

        return result;
    }
}

const crypto = require("node:crypto");

async function main() {
    const payments = new PaymentService();

    const first = await payments.processPayment("ORDER-101", 500);

    const second = await payments.processPayment("ORDER-101", 500);

    console.log("First request:", first);
    console.log("Second request:", second);

    console.log("Same transaction:", first.transactionId === second.transactionId);
}

main().catch(console.error);