function timeAgo(date) {
    const seconds = Math.floor((Date.now() - new Date(date).getTime()) / 1000);

    if (!Number.isFinite(seconds)) {
        return "Invalid date";
    }

    if (seconds < 0) {
        return "In the future";
    }

    if (seconds < 60) return "Just now";

    const units = [
        ["year", 31536000],
        ["month", 2592000],
        ["day", 86400],
        ["hour", 3600],
        ["minute", 60]
    ];

    for (const [name, value] of units) {
        const amount = Math.floor(seconds / value);

        if (amount >= 1) {
            return `${amount} ${name}${amount > 1 ? "s" : ""} ago`;
        }
    }
}

console.log(timeAgo(new Date(Date.now() - 300000)));
console.log(timeAgo(new Date(Date.now() - 7200000)));