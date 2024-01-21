const express = require('express');
const app = express();
// const { onRequest } = require('firebase-functions/v2/https');

const logger = require('firebase-functions/logger');
const { Firestore } = require('@google-cloud/firestore');
const cors = require('cors');

const stripe = require('stripe')(
  'sk_test_51OZGIdSG3yi8p7yufrOp3PuGBT7AHPYrJBgJkbp2RBJJqaio0iTXTHXrzSrqMiIkKawWPAPbORtwBteQbzbQ9pXq00DCkvz6zB'
);

app.use(cors({ origin: true }));
app.use(express.json());

const functions = require('firebase-functions');

app.use(cors({ origin: true }));
app.use(express.json());

app.post('/payment', async (request, response) => {
  const total = request.query.total;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd',
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);
