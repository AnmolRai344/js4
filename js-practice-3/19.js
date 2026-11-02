const mimeTypes = {
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".png": "image/png",
    ".webp": "image/webp",
    ".pdf": "application/pdf",
    ".json": "application/json",
    ".mp4": "video/mp4",
    ".mp3": "audio/mpeg",
    ".txt": "text/plain",
    ".html": "text/html"
};

function getMimeType(filename) {
    const extension = filename
        .slice(filename.lastIndexOf("."))
        .toLowerCase();

    return mimeTypes[extension] || "application/octet-stream";
}

console.log(getMimeType("profile.png"));
console.log(getMimeType("resume.pdf"));
console.log(getMimeType("video.mp4"));