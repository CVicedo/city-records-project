const RecordModel = require('../model/RecordModel');

// Creates record in record collection w/o assaigning it to any store
function createRecord(req, res) {
  const newRecord = new RecordModel(req.body);

  newRecord.save();

  return res.json(newRecord);
}

// Fetch all records data w/o populate
function getData(req, res) {
  const query = {};

  RecordModel.find(query, (findError, recordsArray) => {
    if (findError) {
      res.status(500);
      res.send('City Records says: Error finding records');
    } else {
      res.json(recordsArray);
    }
  });
}

// Fetch one record populating it's stores
function getRecordsWithStores(req, res) {
  return RecordModel.findById(req.params.recordId)
    .populate('shops').exec((err, record) => {
      if (err) {
        res.status(500);
        res.send('Error found by finding records');
      } else {
        res.json(record);
      }
    });
}

// Get only the last record added to data base
function getLastRecord(req, res) {
  return RecordModel.find().sort({ $natural: -1 }).limit(1)
    .exec((err, record) => {
      if (err) {
        res.status(500);
        res.send('Error found');
      } else {
        res.json(record);
      }
    });
}

module.exports = {
  createRecord, getData, getRecordsWithStores, getLastRecord
};
