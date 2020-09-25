import * as functions from 'firebase-functions';

const express = require('express');
const app = express();

app.get('/data', (request: any, response: any) => {
    response.json({value: "Hello world"});
 });

exports.api = functions.https.onRequest(app);
