const express = require('express');
const app = express();
const fs = require('fs')
const jwt = require('jsonwebtoken')
const jws = require('jws')
const pubKey = fs.readFileSync('./public.key', 'utf8')
const privKey = fs.readFileSync('./private.key', 'utf8')


// console.log(pubKey)
// console.log(privKey)
// console.log(jws)

const token = jws.sign({
  header:{alg : 'RS256'},
  payload:'secret data',
  privateKey: privKey
});

console.log('token', token)

const c = {a: '10'}
c.a = 5

console.log(c)

const a = jwt.verify(token, pubKey, { algorithms: ['RS256'] })

console.log('a', a)
// (async ()=>{
//   try{
//     const token = await jwt.sign({user: 'Vasya'}, pubKey, {algorithm: "RS1024"})
//     console.log('token', token)
//     const data = jwt.decode(privKey)
//     console.log('data', data)
//   }catch(err){
//     console.log('err', err)
//   }
// })
