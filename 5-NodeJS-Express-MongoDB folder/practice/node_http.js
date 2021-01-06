const http = require('http');


const port = 3000;

const server = http.createServer((req, res) => {
    console.log('test');
    res.end('<h1>hello world!</h1>');
})

server.listen(port);