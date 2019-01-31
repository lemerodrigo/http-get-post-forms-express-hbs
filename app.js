const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.get('/form/:username', (req, res) => {
  res.render('form', { username: req.params.username });
});

app.get('/form', (req, res) => {
  res.render('form');
});

app.get('/login', (req, res) => {
  console.log('/login params', req.params);
  console.log('/login query', req.query);
  res.send('Logado por get');
});

app.post('/login', (req, res) => {
  console.log('Dados do form que vieram por post', req.body);
  res.send('Logado por post');
});

app.listen(4000);