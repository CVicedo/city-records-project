const { model, Schema } = require('mongoose');

const RecordModel = new Schema({
  artist: String,
  title: String,
  reference: String,
  format: String,
  mediaCondition: String,
  sleeveCondition: String
});

module.exports = model('Record', RecordModel);
