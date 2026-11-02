const fs = require("node:fs/promises");

const FILE = "users.json";

async function readUsers() {
    try {
        const data = await fs.readFile(FILE, "utf8");
        return JSON.parse(data);
    } catch (error) {
        if (error.code === "ENOENT") {
            return [];
        }

        throw error;
    }
}

async function saveUser(user) {
    const users = await readUsers();

    users.push({
        ...user,
        createdAt: new Date().toISOString()
    });

    await fs.writeFile(
        FILE,
        JSON.stringify(users, null, 2)
    );

    return users;
}

async function main() {
    const users = await saveUser({
        id: 1,
        name: "Rahul",
        email: "rahul@gmail.com"
    });

    console.log("Saved users:", users);
}

main().catch(console.error);