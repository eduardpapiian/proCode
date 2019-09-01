const http = require('http');
const fs = require('fs');
const os = require('os');
var app = require('./app');



const server = http.createServer(app.handleRequest).listen(3000, () => {
    console.log('START SERVER')
    var date = new Date();
    var timestamp = date.getTime();
    fs.writeFile(__dirname + `/logs/${timestamp}.txt`, os.type() + '-' + os.platform() + ' ' + process.platform, function(err) {
    if(err) {
        console.log(err);
    }
    console.log("The file was saved!");
    });
});

