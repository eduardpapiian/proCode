const {readFile} = require('./utils/readFile')
const path = require('path');

readFile(path.join(__dirname, '/files/file1.txt')).then(text => console.log('FILE TEXT:', text))
    .catch(err => console.log('ERROR', err))


console.log('index started')
