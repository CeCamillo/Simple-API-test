const fs = require('fs');
const http = require('http');

const data = fs.readFileSync(`${__dirname}/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) =>{
    const pathName = req.url;

    if(pathName === '/' || pathName === '/overview') {
        res.end('This is the OVERVIEW');
    } else if (pathName === '/product') {
        res.end('This is the PRODUCT');
    } else if (pathName === '/API') {
        res.writeHead(200, {'Content-type': 'application/json'})
        res.end(data);
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'hello wordl'
        });
        res.end('<h1>Page not found!</h1>');
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to request on port 8000');
})