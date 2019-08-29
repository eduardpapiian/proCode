const express = require('express')
    , bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.send('Main Page!');
});

// FIRST TASK
app.get('/form', (req, res) =>{
  res.render('form');
});

app.post('/api/form', (req, res) => {
  const data = req.body
  console.log(data);
  res.send(req.body);
});

// SECOND TASK
app.get('/api/promise', (req, res) => {
  res.send('4');
});

app.get('/promise', (req, res) =>{
  res.render('promise');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

