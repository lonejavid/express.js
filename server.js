const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  
  res.send('<html><head></head><body><h1>This is from the home page</h1></body></html>');
});

app.get('/add', (req, res) => {
  console.log('in the add-product page');
  res.send('<html><head></head><body><form action="/product" method="POST"><input type="text" name="title"><br/><input type="text" name="price"><br/><button type="submit">Add product</button></form></body></html>');
});

app.post('/product', (req, res) => {
  console.log(req.body);

  // Process the form data if needed

  // Redirect to the home page after form submission
  res.redirect('/');
});

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
