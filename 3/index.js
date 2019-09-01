const {readFile, readAndWriteTo} = require('./utils/readFile')
const path = require('path');

readFile(path.join(__dirname, '/files/file1.txt')).then(text => console.log('FILE TEXT:', text))
    .catch(err => console.log('ERROR', err))

readAndWriteTo(path.join(__dirname, '/files/file1.txt'), path.join(__dirname, '/files/file2.txt'))


console.log('index started')
