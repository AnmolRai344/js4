const comments = [
    { id: 1, text: "Great post!", parentId: null },
    { id: 2, text: "Thank you!", parentId: 1 },
    { id: 3, text: "Interesting!", parentId: null },
    { id: 4, text: "I agree!", parentId: 2 },
    { id: 5, text: "Nice explanation!", parentId: 1 }
];

function buildCommentTree(comments) {
    const map = new Map();

    for (const comment of comments) {
        map.set(comment.id, {
            ...comment,
            replies: []
        });
    }

    const roots = [];

    for (const comment of comments) {
        const current = map.get(comment.id);

        if (comment.parentId === null) {
            roots.push(current);
        } else {
            const parent = map.get(comment.parentId);

            if (parent) {
                parent.replies.push(current);
            } else {
                roots.push(current);
            }
        }
    }

    return roots;
}

console.log(
    JSON.stringify(buildCommentTree(comments), null, 2)
);