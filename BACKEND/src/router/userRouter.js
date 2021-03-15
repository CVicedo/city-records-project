const { Router } = require('express');
const { createRecord, getData, deleteRecordByReferenceParam } = require('../controller/recordsController');
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

  router
    .route('/:recordParam')
    .delete(deleteRecordByReferenceParam);

  return router;
}

module.exports = UserRouter();
