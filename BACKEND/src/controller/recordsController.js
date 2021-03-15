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

// Not working yet
async function deleteRecordByReferenceParam(req, res) {
  const { param } = req.params;

  try {
    await RecordModel.findByIdAndDelete({ _id: param });
    res.send('Record deleted');
  } catch (error) {
    res.status(500);
    res.send('There was an error deleting this record');
  }
}

/* recordsArray.remove(reference)
    .then((removed) => {
      if (removed) {
        res.status(204);
        res.send('Record deleted');
      }
    })
    .catch((err) => {
      res.status(500).json({ err });
    });
} */

module.exports = {
  createRecord, getData, deleteRecordByReferenceParam
};
