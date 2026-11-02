const permissions = {
    admin: [
        "create",
        "read",
        "update",
        "delete"
    ],

    editor: [
        "create",
        "read",
        "update"
    ],

    user: [
        "read"
    ]
};

function hasPermission(user, action) {
    if (!user || !permissions[user.role]) {
        return false;
    }

    return permissions[user.role].includes(action);
}

const users = [
    { name: "Rahul", role: "admin" },
    { name: "Aman", role: "editor" },
    { name: "Priya", role: "user" }
];

console.log(hasPermission(users[0], "delete"));
console.log(hasPermission(users[1], "delete"));
console.log(hasPermission(users[2], "read"));