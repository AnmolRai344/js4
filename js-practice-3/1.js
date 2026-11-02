function createSlug(title) {
    return title
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
}

console.log(createSlug("My First MERN Project!"));
console.log(createSlug("JavaScript Is Amazing"));