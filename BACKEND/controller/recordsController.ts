const recordModel = require('../model/RecordModel');

function createRecord(req, res) {
    const newRecord = new recordModel(req.body);

    newRecord.save();

    return res.json(newRecord);
}

module.exports = {
    createRecord
};