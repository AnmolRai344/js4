function validateUser(user) {
    const errors = [];

    if (!user.name || user.name.trim().length < 3) {
        errors.push("Name must contain at least 3 characters");
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(user.email || "")) {
        errors.push("Invalid email address");
    }

    if (!user.password || user.password.length < 8) {
        errors.push("Password must contain at least 8 characters");
    }

    if (!Number.isInteger(user.age) || user.age < 18) {
        errors.push("User must be at least 18 years old");
    }

    return {
        valid: errors.length === 0,
        errors
    };
}

const user = {
    name: "Rahul Kumar",
    email: "rahul@gmail.com",
    password: "secure123",
    age: 22
};

console.log(validateUser(user));