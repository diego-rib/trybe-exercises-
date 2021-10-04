const express = require('express');
const rescue = require('express-rescue');
const bodyParser = require('body-parser');
const userRoutes = require('./userRoutes');

const app = express();

app.use(bodyParser.json());

app.use('/user', userRoutes);

app.listen(3001);
