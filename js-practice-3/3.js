const products = [
    { name: "iPhone", category: "Electronics" },
    { name: "Shirt", category: "Fashion" },
    { name: "Laptop", category: "Electronics" },
    { name: "Shoes", category: "Fashion" },
    { name: "Book", category: "Education" }
];

function groupProducts(products) {
    return products.reduce((groups, product) => {
        const category = product.category;

        if (!groups[category]) {
            groups[category] = [];
        }

        groups[category].push(product);

        return groups;
    }, {});
}

console.log(groupProducts(products));