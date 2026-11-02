class ActivityLogger {
    constructor() {
        this.logs = [];
    }

    log(level, message) {
        const entry = {
            level,
            message,
            timestamp: new Date().toISOString()
        };

        this.logs.push(entry);

        return entry;
    }

    getLogs(level = null) {
        if (!level) {
            return this.logs;
        }

        return this.logs.filter(log => log.level === level);
    }
}

const logger = new ActivityLogger();

logger.log("INFO", "User logged in");
logger.log("ERROR", "Database connection failed");
logger.log("INFO", "Product created");

console.log(logger.getLogs());
console.log(logger.getLogs("ERROR"));