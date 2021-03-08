const express = require('express');
require('dotenv').config()


const app = express(),
const port = process.env.PORT || 5000;

app.use(express.json())

connect('mongodb+srv://admin:<password>@cluster0.ipfsx.mongodb.net/records'), { newUrlParser: true, useUnifiedTopology: true });

app.use(morgan('dev'));

app.use('/api/records', UserRouter);

app.use(cors());

app.listen(port, () => debug(`Server running in port ${chalk.blue(port)}`));
