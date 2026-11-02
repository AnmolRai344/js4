const fs = require("node:fs");

const users = [
    { name: "Rahul", email: "rahul@gmail.com", city: "Delhi" },
    { name: "Aman", email: "aman@gmail.com", city: "Gurgaon" },
    { name: "Priya", email: "priya@gmail.com", city: "Mumbai" }
];

function escapeCSV(value) {
    const text = String(value ?? "");

    return `"${text.replace(/"/g, '""')}"`;
}

function exportCSV(data) {
    if (data.length === 0) {
        return "";
    }

    const headers = Object.keys(data[0]);

    const rows = data.map(item =>
        headers.map(header => escapeCSV(item[header])).join(",")
    );

    return [
        headers.map(escapeCSV).join(","),
        ...rows
    ].join("\n");
}

const csv = exportCSV(users);

fs.writeFileSync("users.csv", csv, "utf8");

console.log("CSV file created successfully!");