const fs = require("fs");
const http = require("http");
const filContent = fs.readFileSync('indext.html')

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.end(filContent)
}).listen(5000)




