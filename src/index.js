const dotenv = require('dotenv').config();
console.log(process.env.TESTE)

const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes.js');

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);