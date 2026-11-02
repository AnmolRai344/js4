function getChangedFields(oldUser, newUser) {
    const changes = {};

    for (const key of Object.keys(newUser)) {
        if (oldUser[key] !== newUser[key]) {
            changes[key] = {
                oldValue: oldUser[key],
                newValue: newUser[key]
            };
        }
    }

    return changes;
}

const oldUser = {
    name: "Rahul",
    email: "old@gmail.com",
    city: "Delhi"
};

const newUser = {
    name: "Rahul Kumar",
    email: "old@gmail.com",
    city: "Gurgaon"
};

console.log(getChangedFields(oldUser, newUser));