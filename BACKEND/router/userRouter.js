const { Router } = require('express');
const { createRecord, getData } = require('../controller/recordsController');

function UserRouter() {
  const router = Router();

  router
    .route('/')
    .post(createRecord)
    .get(getData);

  return router;
}

module.exports = UserRouter();
