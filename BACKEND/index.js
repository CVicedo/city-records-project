const express = require('express');
require('dotenv').config();
const { connect } = require('mongoose');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const cors = require('cors');

const UserRouter = require('./src/router/userRouter');

const app = express();
const port = process.env.PORT || 5000;
const url = process.env.DB_URL;

app.use(express.json());

connect(url, { newUrlParser: true, useUnifiedTopology: true });

app.use(morgan('dev'));

app.use('/api/records', UserRouter);

app.use(cors());

app.listen(port, () => debug(`Server running in port ${chalk.blue(port)}`));
