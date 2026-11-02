function myAllSettled(promises) {
    return Promise.all(
        Array.from(promises, promise =>
            Promise.resolve(promise).then(
                value => ({
                    status: "fulfilled",
                    value
                }),
                reason => ({
                    status: "rejected",
                    reason
                })
            )
        )
    );
}

const tasks = [
    Promise.resolve("User loaded"),
    Promise.reject("Database error"),
    Promise.resolve("Products loaded")
];

myAllSettled(tasks).then(console.log);