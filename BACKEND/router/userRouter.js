const { Router } = require('express');
const { createRecord } = require('../controller/recordsController');

function UserRouter() {
    const router = Router();

    router
        .route('/')
        .post(createRecord);

    return router
}

module.exports = UserRouter();