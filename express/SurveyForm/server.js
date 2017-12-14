const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.resolve('views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve('static')));

require('./routes/index.js')(app);

app.listen(8000, function() {
  console.log("listening on port 8000");
});
