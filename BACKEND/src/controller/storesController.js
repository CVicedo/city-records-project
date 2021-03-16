const ShopModel = require('../model/ShopModel');
const Store = require('../model/ShopModel');

function getStores(req, res) {
  const query = {};

  Store.find(query, (findError, storesArray) => {
    if (findError) {
      res.status(500);
      res.send('City Records says: Error finding stores');
    } else {
      res.json(storesArray);
    }
  });
}

function createStore(req, res) {
  const newStore = new Store(req.body);

  newStore.save();

  return res.json(newStore);
}

function getStoresWithrecords(req, res) {
  return ShopModel.findById(req.params.shopId)
    .populate('records.record').exec((err, shop) => {
      if (err) {
        res.status(500);
        res.send('Error');
      } else {
        res.json(shop);
      }
    });
}

module.exports = {
  getStores, createStore, getStoresWithrecords
};
