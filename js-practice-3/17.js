async function fetchAllPosts() {
    const allPosts = [];

    let page = 1;
    const limit = 10;

    while (true) {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
        );

        if (!response.ok) {
            throw new Error(`Request failed: ${response.status}`);
        }

        const posts = await response.json();

        if (posts.length === 0) {
            break;
        }

        allPosts.push(...posts);

        if (posts.length < limit) {
            break;
        }

        page++;
    }

    return allPosts;
}

fetchAllPosts()
    .then(posts => console.log("Total posts:", posts.length))
    .catch(error => console.error(error.message));