const cart = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 1000, quantity: 2 },
    { name: "Keyboard", price: 2000, quantity: 1 }
];

function calculateBill(cart, coupon = null) {
    const subtotal = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    let discount = 0;

    if (coupon === "SAVE10") {
        discount = subtotal * 0.10;
    }

    const taxableAmount = subtotal - discount;
    const tax = taxableAmount * 0.18;

    return {
        subtotal,
        discount,
        tax,
        total: taxableAmount + tax
    };
}

console.log(calculateBill(cart, "SAVE10"));