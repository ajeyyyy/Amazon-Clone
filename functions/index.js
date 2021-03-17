const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
// eslint-disable-next-line max-len
const stripe = require("stripe")("sk_test_51IVAVAIT0LJjRYwPktBmS8TlRjs9YCmKVi12b61go5xNhB7426tTMVXClAl8DSHdWAkVmis1KwtMidF1sYmsfTHy0099fpsLw2");

// API

// ->App config
const app = express();

// ->Middlewares
app.use(cors({orgin: true}));
app.use(express.json());

// ->API routes
app.get("/", (request, response) => response.status(200).send("Hello World"));

app.post("/payment/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment req received for this amount >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // in cents (sub-units)
    currency: "usd",
  });
  // OK - created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// ->Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint(local)
// http://localhost:5001/copy-cf611/us-central1/api

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
