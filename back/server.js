const express = require('express');
const cors = require('cors');

app = express();
port = 3001;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./routes');
routes(app);

app.listen(port);

console.log('Listening on PORT: ' + port);