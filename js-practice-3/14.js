async function runWithLimit(tasks, limit) {
    if (!Number.isInteger(limit) || limit < 1) {
        throw new Error("Limit must be a positive integer");
    }

    const results = new Array(tasks.length);
    let nextIndex = 0;

    async function worker() {
        while (nextIndex < tasks.length) {
            const index = nextIndex++;

            try {
                results[index] = await tasks[index]();
            } catch (error) {
                results[index] = {
                    error: error.message
                };
            }
        }
    }

    const workers = Array.from(
        { length: Math.min(limit, tasks.length) },
        () => worker()
    );

    await Promise.all(workers);

    return results;
}

const tasks = Array.from({ length: 8 }, (_, index) => {
    return async () => {
        await new Promise(resolve => setTimeout(resolve, 500));

        return `Task ${index + 1} completed`;
    };
});

runWithLimit(tasks, 3).then(console.log);