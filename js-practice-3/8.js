const csv = `name,email,age
Rahul,rahul@gmail.com,22
Aman,aman@gmail.com,24
Priya,priya@gmail.com,21`;

function parseCSV(data) {
    const lines = data.trim().split("\n");

    const headers = lines[0].split(",").map(item => item.trim());

    return lines.slice(1).map(line => {
        const values = line.split(",").map(item => item.trim());

        return Object.fromEntries(
            headers.map((header, index) => [
                header,
                values[index]
            ])
        );
    });
}

console.log(parseCSV(csv));