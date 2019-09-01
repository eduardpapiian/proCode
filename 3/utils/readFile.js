const fs = require('fs');
var date = new Date();
var timestamp = date.getTime();

function readFile (url) {
    return new Promise((resolve, reject) => {
        fs.readFile(url, 'utf-8', (err, data ) =>{
            if(data){
                // console.log('DATA IN PROMISE', data)
                resolve(data)
            }else{
                // console.log('ERROR PROMISE', err)
                reject(err)
            }
        })
    })
}

function readAndWriteTo (readUrl, writeUrl) {
    return new Promise ((resolve, reject) => {
        fs.readFile(readUrl, 'utf-8', (err, data ) =>{
            if(data){
                console.log('DATA IN PROMISE', data);
                fs.appendFile(writeUrl, timestamp + data, (err) => {
                    if (err) {
                        reject({ status: 'Write error' })
                    }else {
                        resolve('File appended succesfuly');
                    }
                });
            }else{
                console.log('ERROR PROMISE', err);
                reject({ status: 'Read error' })
            }
        })
    }).then(data => console.log(data)).catch( err => console.log('ERROR', err))
}


module.exports = {
    readFile: readFile,
    readAndWriteTo: readAndWriteTo
}
