const { Router } = require('express');
const {
  createRecord,
  getData,
  getRecordsWithStores,
  getRecordCondition,
  createRecordCondition
} = require('../controller/recordsController');
const {
  getStores,
  createStore,
  getStoresWithrecords
} = require('../controller/storesController');

function UserRouter() {
  const router = Router();

  router
    .route('/')
    .post(createRecord)
    .get(getData);

  router
    .route('/record/:recordId')
    .get(getRecordsWithStores);

  router
    .route('/stores')
    .get(getStores)
    .post(createStore);

  router
    .route('/stores/:shopId')
    .get(getStoresWithrecords);

  router
    .route('/conditions')
    .get(getRecordCondition)
    .post(createRecordCondition);

  return router;
}

module.exports = UserRouter();
