const transitions = {
    pending: ["confirmed", "cancelled"],
    confirmed: ["shipped", "cancelled"],
    shipped: ["delivered"],
    delivered: [],
    cancelled: []
};

class Order {
    constructor(id) {
        this.id = id;
        this.status = "pending";
    }

    updateStatus(newStatus) {
        const allowed = transitions[this.status];

        if (!allowed || !allowed.includes(newStatus)) {
            return {
                success: false,
                message: `Cannot change ${this.status} to ${newStatus}`
            };
        }

        this.status = newStatus;

        return {
            success: true,
            status: this.status
        };
    }
}

const order = new Order(101);

console.log(order.updateStatus("confirmed"));
console.log(order.updateStatus("shipped"));
console.log(order.updateStatus("delivered"));
console.log(order.updateStatus("pending"));