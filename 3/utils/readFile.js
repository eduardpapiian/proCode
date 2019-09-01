const fs = require('fs')

function readFile (url) {
    return new Promise((resolve, reject) => {
        let test = process.cwd() + url
        console.log('test', test)
        fs.readFile(process.cwd() + url, 'utf-8', (err, data ) =>{
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
