require('dotenv').config();
const express = require('express');
const { router } = require('./routes/route');
const { default: mongoose } = require('mongoose');
const app = express();
app.use(express.json());
app.use(router);
mongoose.connect(`mongodb+srv://${process.env['MONGO_USERNAME']}:${process.env['MONGO_PASSWORD']}@cluster0.fwrpoyk.mongodb.net/${process.env['MONGO_DATABASE']}?retryWrites=true&w=majority`);
app.listen(process.env['NODE_PORT']);