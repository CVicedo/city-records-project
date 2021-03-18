const RecordModel = require('../model/RecordModel');

function createRecord(req, res) {
  const newRecord = new RecordModel(req.body);

  newRecord.save();

  return res.json(newRecord);
}

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

module.exports = {
  createRecord, getData, getRecordsWithStores
};
