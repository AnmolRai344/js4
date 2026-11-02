function withTimeout(promise, milliseconds) {
    let timer;

    const timeout = new Promise((_, reject) => {
        timer = setTimeout(() => {
            reject(new Error("Operation timed out"));
        }, milliseconds);
    });

    return Promise.race([promise, timeout])
        .finally(() => clearTimeout(timer));
}

function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Data received"), 1000);
    });
}

async function main() {
    try {
        const result = await withTimeout(fetchData(), 2000);
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
}

main();