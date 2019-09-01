const fs = require('fs');


function readFile (url) {
    return new Promise((resolve, reject) => {
        fs.readFile(url, 'utf-8', (err, data ) =>{
            if(data){
                console.log('DATA IN PROMISE', data)
                resolve(data)
            }else{
                console.log('ERROR PROMISE', err)
                reject(err)
            }
        })
    })
}


module.exports = {
    readFile: readFile
}
