const RecordModel = require('../model/RecordModel');
const ConditionModel = require('../model/ConditionModel');

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

function createRecordCondition(req, res) {
  const condition = new ConditionModel(req.body);

  condition.save();

  return res.json(condition);
}

function getRecordCondition(req, res) {
  const query = {};

  ConditionModel.find(query, (findError, conditionArray) => {
    if (findError) {
      res.status(500);
      res.send('City Records says: Error finding records conditions');
    } else {
      res.json(conditionArray);
    }
  });
}

module.exports = {
  createRecord, getData, getRecordsWithStores, createRecordCondition, getRecordCondition
};
