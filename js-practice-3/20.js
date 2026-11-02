const configText = `
PORT=5000
NODE_ENV=development
APP_NAME=GenWeb
DEBUG=true
MAX_USERS=100
`;

function parseConfig(text) {
    const config = {};

    for (const line of text.split(/\r?\n/)) {
        const trimmed = line.trim();

        if (!trimmed || trimmed.startsWith("#")) {
            continue;
        }

        const separator = trimmed.indexOf("=");

        if (separator === -1) {
            continue;
        }

        const key = trimmed.slice(0, separator).trim();
        const value = trimmed.slice(separator + 1).trim();

        config[key] = value;
    }

    return config;
}

console.log(parseConfig(configText));