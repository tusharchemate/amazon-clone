// const { onRequest } = require('firebase-functions/v2/https');
const logger = require('firebase-functions/logger');
const { Firestore } = require('@google-cloud/firestore');
const express = require('express');
const cors = require('cors');

const stripe = require('stripe')(
  'sk_test_51OZGIdSG3yi8p7yufrOp3PuGBT7AHPYrJBgJkbp2RBJJqaio0iTXTHXrzSrqMiIkKawWPAPbORtwBteQbzbQ9pXq00DCkvz6zB'
);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

const functions = require('firebase-functions');
const { onRequest } = functions.https;

exports.api = onRequest((request, response) => {
  // Your function logic here
  response.send('Hello, World!');
});

app.post('/payments/create', async (request, response) => {
  console.log('==called 1');
  const total = request.query.total;
  console.log('Payment Request Received Boom ', total);

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: 'usd',
    });
    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    response.status(500).json({ error: 'Failed to create payment intent' });
  }
});

// exports.api = onRequest(async (request, response) => {
//   if (request.path === '/payments/create' && request.method === 'POST') {
//     const total = request.query.total;
//     console.log('Payment Request Received Boom ', total);

//     try {
//       const paymentIntent = await stripe.paymentIntents.create({
//         amount: total,
//         currency: 'usd',
//       });
//       response.status(201).send({
//         clientSecret: paymentIntent.client_secret,
//       });
//     } catch (error) {
//       console.error('Error creating payment intent:', error);
//       response.status(500).json({ error: 'Failed to create payment intent' });
//     }
//   } else {
//     response.status(404).send('Not Found');
//   }
// });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//http://127.0.0.1:5001/clone-9d11f/us-central1/api
