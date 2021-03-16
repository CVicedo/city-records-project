const { Router } = require('express');
const { createRecord, getData, getRecordsWithStores } = require('../controller/recordsController');
const { getStores, createStore, getStoresWithrecords } = require('../controller/storesController');

function UserRouter() {
  const router = Router();

  router
    .route('/')
    .post(createRecord)
    .get(getData);

  router
    .route('/:recordId')
    .get(getRecordsWithStores);

  router
    .route('/stores')
    .get(getStores)
    .post(createStore);

  router
    .route('/stores/:shopId')
    .get(getStoresWithrecords);

  return router;
}

module.exports = UserRouter();
