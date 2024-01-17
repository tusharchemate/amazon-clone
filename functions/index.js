const { onRequest } = require('firebase-functions/v2/https');
const logger = require('firebase-functions/logger');
const express = require('express');
const cors = require('cors');

const stripe = require('stripe')(
  'sk_test_51OZGIdSG3yi8p7yufrOp3PuGBT7AHPYrJBgJkbp2RBJJqaio0iTXTHXrzSrqMiIkKawWPAPbORtwBteQbzbQ9pXq00DCkvz6zB'
);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get('/', (req, res) => res.status(200).send('hey !'));

exports.api = onRequest(app);
