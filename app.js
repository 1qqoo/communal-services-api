const express = require('express');
const mongoose = require('mongoose');
const { DEV_DB_ADDRESS } = require('./utils/config');

const { PORT = 3000 } = process.env;

mongoose.connect(DEV_DB_ADDRESS);

const app = express();

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
})