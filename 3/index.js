const {readFile} = require('./utils/readFile')

readFile('/files/file1.txt').then(text => console.log('FILE TEXT:', text))
    .catch(err => console.log('ERROR', err))


console.log('index started')
