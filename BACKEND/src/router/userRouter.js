const { Router } = require('express');
const { createRecord, getData } = require('../controller/recordsController');
const { getStores, createStore } = require('../controller/storesController');

function UserRouter() {
  const router = Router();

  router
    .route('/')
    .post(createRecord)
    .get(getData);

  router
    .route('/stores')
    .get(getStores)
    .post(createStore);

  return router;
}

module.exports = UserRouter();
