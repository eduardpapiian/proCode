const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  title: String,
  content: String
});

const Model = mongoose.model('Article', ArticleSchema);
module.exports = Model;
