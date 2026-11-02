function maskEmail(email) {
    const [username, domain] = email.split("@");

    if (!username || !domain) {
        return "Invalid email";
    }

    return username[0] +
        "*".repeat(Math.max(username.length - 1, 2)) +
        "@" + domain;
}

function maskPhone(phone) {
    const digits = phone.replace(/\D/g, "");

    if (digits.length < 4) {
        return "Invalid phone";
    }

    return "*".repeat(digits.length - 4) + digits.slice(-4);
}

console.log(maskEmail("rahulkumar@gmail.com"));
console.log(maskPhone("9876543210"));