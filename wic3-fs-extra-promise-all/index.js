const fs = require('fs-extra');
const axios = require('axios')
const file = './files/file.txt';

// fs.writeFile(file, 'hello')
//   .then(() => fs.readFile(file, 'utf-8').then(data => console.log(data))
//   .catch(err => console.error(err))

// let c = fs.writeFile(file, 'hello1')
//   .then(() => fs.readFile(file, 'utf-8')).then(data => {
//     return data
// })
//   .catch(err => console.error(err))
//
// let b = axios.get('https://jsonplaceholder.typicode.com/todos/1')
//   .then(function (response) {
//       // handle success
//       return response.data.id
//   })
//   .catch(function (error) {
//       // handle error
//       console.log(error);
//   }).finally(() => console.log('END OF PROMISE'))
//
// let a = new Promise ((resolve, reject) => {
//     setTimeout(() => {
//         resolve(2)
//     }, 10000)
// }).then(data => data)

// Promise.all([a, b, c]).then(values => {
//     console.log('values', values);
// });

(async () => {
    await setTimeout(()=> console.log('wawaw'), 2000 )
    const a = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    console.log('a.data', a.data)
})();

console.log('hello world')


