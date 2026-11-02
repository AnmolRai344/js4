const products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 1500 },
    { name: "Monitor", price: 12000 },
    { name: "Headphones", price: 3000 }
];

function searchProducts(products, query, maxPrice) {
    return products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase()) &&
        product.price <= maxPrice
    );
}

console.log(searchProducts(products, "m", 15000));