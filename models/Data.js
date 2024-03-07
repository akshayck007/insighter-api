const mongoose = require("mongoose");
const { Schema } = mongoose;

const dataSchema = new Schema({
  end_year: {
    type: Number,
    default: null,
  },
  intensity: {
    type: Number,
    default: null,
  },
  sector: {
    type: String,
    trim: true,
    default: null,
  },
  topic: {
    type: String,
    trim: true,
    default: null,
  },
  insight: {
    type: String,
    trim: true,
    default: null,
  },
  url: {
    type: String,
    trim: true,
    default: null,
  },
  region: {
    type: String,
    trim: true,
    default: null,
  },
  start_year: {
    type: Number,
    default: null,
  },
  impact: {
    type: Number,
    default: null,
  },
  added: {
    type: String,
    trim: true,
    default: null,
  },
  published: {
    type: String,
    trim: true,
    default: null,
  },
  country: {
    type: String,
    trim: true,
    default: null,
  },
  relevance: {
    type: Number,
    default: null,
  },
  pestle: {
    type: String,
    trim: true,
    default: null,
  },
  source: {
    type: String,
    trim: true,
    default: null,
  },
  title: {
    type: String,
    trim: true,
    default: null,
  },
  likelihood: {
    type: Number,
    default: null,
  },
});

const Data = mongoose.model("Data", dataSchema);

module.exports = Data;
