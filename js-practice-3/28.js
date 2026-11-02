function analyzePassword(password) {
    const checks = {
        length: password.length >= 12,
        uppercase: /[A-Z]/.test(password),
        lowercase: /[a-z]/.test(password),
        number: /\d/.test(password),
        special: /[^A-Za-z0-9]/.test(password)
    };

    const score = Object.values(checks)
        .filter(Boolean).length;

    let strength;

    if (score <= 2) {
        strength = "Weak";
    } else if (score <= 3) {
        strength = "Medium";
    } else if (score === 4) {
        strength = "Strong";
    } else {
        strength = "Very Strong";
    }

    return {
        strength,
        score,
        checks
    };
}

console.log(analyzePassword("Rahul@2026Strong"));
console.log(analyzePassword("hello123"));