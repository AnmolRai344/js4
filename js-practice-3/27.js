const crypto = require("node:crypto");

const SECRET = "my-webhook-secret";

function generateSignature(payload) {
    return crypto
        .createHmac("sha256", SECRET)
        .update(payload)
        .digest("hex");
}

function verifySignature(payload, receivedSignature) {
    if (
        typeof receivedSignature !== "string" ||
        !/^[a-f0-9]{64}$/i.test(receivedSignature)
    ) {
        return false;
    }

    const expected = Buffer.from(
        generateSignature(payload),
        "hex"
    );

    const received = Buffer.from(receivedSignature, "hex");

    return crypto.timingSafeEqual(expected, received);
}

const payload = JSON.stringify({
    orderId: 101,
    amount: 5000,
    status: "paid"
});

const signature = generateSignature(payload);

console.log(verifySignature(payload, signature));
console.log(verifySignature(payload, "invalid-signature"));