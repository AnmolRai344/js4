class ExpiringCache {
    constructor() {
        this.cache = new Map();
    }

    set(key, value, ttl) {
        const expiresAt = Date.now() + ttl;

        this.cache.set(key, {
            value,
            expiresAt
        });
    }

    get(key) {
        const item = this.cache.get(key);

        if (!item) {
            return null;
        }

        if (Date.now() >= item.expiresAt) {
            this.cache.delete(key);
            return null;
        }

        return item.value;
    }

    delete(key) {
        return this.cache.delete(key);
    }

    clear() {
        this.cache.clear();
    }
}

const cache = new ExpiringCache();

cache.set("user:101", { name: "Rahul" }, 3000);

console.log(cache.get("user:101"));

setTimeout(() => {
    console.log(cache.get("user:101"));
}, 3500);