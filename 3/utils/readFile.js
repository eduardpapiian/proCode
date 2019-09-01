const fs = require('fs');
const path = require('path');


function readFile (url) {
    return new Promise((resolve, reject) => {
        let test = path.join(process.cwd(), url)
        let test2 = path.join(__dirname, url)
        console.log('test', test)
        console.log('test2', test2)
        fs.readFile(path.join(process.cwd(),  url), 'utf-8', (err, data ) =>{
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
