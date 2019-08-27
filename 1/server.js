const http = require('http');
const fs = require('fs')
const os = require('os');



const server = http.createServer((req, res) => {
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
    <!doctype>
        <html>
            <head>
                <meta charset="utf-8">
                <title>Main Page</title>
            </head>
            <body>
                <a href="/about">about</a>
            </body>
            </html>
    `);
}).listen(3000, () => {
    console.log('START SERVER')
    var date = new Date();
    var timestamp = date.getTime();
    fs.writeFile(__dirname + `/logs/${timestamp}.txt`, os.type() + '-' + os.platform() + ' ' + process.platform, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
    });
});

