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
      res.send('Error finding records');
    } else {
      res.json(recordsArray);
    }
  });
}

module.exports = {
  createRecord, getData
};
