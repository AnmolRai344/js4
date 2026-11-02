const inventory = [
    { id: 1, name: "Laptop", stock: 10 },
    { id: 2, name: "Mouse", stock: 25 },
    { id: 3, name: "Keyboard", stock: 15 }
];

function purchaseProduct(id, quantity) {
    const product = inventory.find(item => item.id === id);

    if (!product) {
        return "Product not found";
    }

    if (!Number.isInteger(quantity) || quantity <= 0) {
        return "Invalid quantity";
    }

    if (product.stock < quantity) {
        return "Insufficient stock";
    }

    product.stock -= quantity;

    return {
        message: "Purchase successful",
        remainingStock: product.stock
    };
}

console.log(purchaseProduct(1, 3));
console.log(inventory);