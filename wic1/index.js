// const myFunc = require('./external_function')
const fs = require('fs')
const path = require('path')
const {func1, func2} = require('./external_function')
const { user} = require('./objectFile')

func1('Petya')
func2(1, 3)

// console.log(user.name)
// console.log(__dirname, __filename)


fs.readFile(__dirname + '/docs.txt', 'utf-8', (err, data) =>{
    if(err) throw err;
    // console.log(data)
})

// fs.appendFile(__dirname + "/docs2.txt", new Date(), function(err) {
//     if(err) {
//         return console.log(err);
//     }
//     console.log("The file was saved!");
// });

console.log(path.join(__dirname, 'docs.txt'))
