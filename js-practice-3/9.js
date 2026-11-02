function formatFileSize(bytes) {
    if (!Number.isFinite(bytes) || bytes < 0) {
        return "Invalid file size";
    }

    if (bytes === 0) {
        return "0 Bytes";
    }

    const units = ["Bytes", "KB", "MB", "GB", "TB"];

    const index = Math.floor(Math.log(bytes) / Math.log(1024));

    const size = bytes / Math.pow(1024, index);

    return `${size.toFixed(2)} ${units[index]}`;
}

console.log(formatFileSize(1024));
console.log(formatFileSize(5000000));
console.log(formatFileSize(2000000000));