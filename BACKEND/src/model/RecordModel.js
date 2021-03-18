const { model, Schema } = require('mongoose');

const RecordModel = new Schema({
  artist: String,
  title: String,
  reference: String,
  format: String,
  shops: [
    { type: Schema.Types.ObjectId, ref: 'Shop' }
  ]
});

module.exports = model('Record', RecordModel);
