const { model, Schema } = require('mongoose');

const ShopModel = new Schema({
  storeName: String,
  adress: String,
  ownerName: String,
  email: String,
  coordinates: {
    latitude: Number,
    longitude: Number
  },
  records: [{
    record: { type: Schema.Types.ObjectId, ref: 'Record' },
    stock: Number
  }]

});

module.exports = model('Shop', ShopModel);
