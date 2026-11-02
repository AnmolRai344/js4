async function getUsers() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const users = await response.json();

        return users.map(user => ({
            id: user.id,
            name: user.name,
            email: user.email,
            company: user.company.name
        }));

    } catch (error) {
        console.error("API Error:", error.message);
        return [];
    }
}

async function main() {
    const users = await getUsers();
    console.log(users);
}

main();