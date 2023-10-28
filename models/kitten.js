const mongoose = require ("../connection");

const kittySchema = new mongoose.Schema({
    name: String
  });

const Kitten = mongoose.model('Kitten', kittySchema);

module.exports = Kitten