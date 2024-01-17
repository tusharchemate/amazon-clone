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

//http://127.0.0.1:5001/clone-9d11f/us-central1/api
