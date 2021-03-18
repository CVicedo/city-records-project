const { model, Schema } = require('mongoose');

const ConditionModel = new Schema({
  condition: String
});

module.exports = model('Condition', ConditionModel);
