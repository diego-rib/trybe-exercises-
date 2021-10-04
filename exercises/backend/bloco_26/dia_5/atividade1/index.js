const express = require('express');
const cors = require('cors');
// const rescue = require('express-rescue');
const bodyParser = require('body-parser');
const userRoutes = require('./userRoutes');
const btcRoutes = require('./btcRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/user', userRoutes);
app.use('/btc', btcRoutes);

app.listen(3001, () => console.log('Aoba'));
