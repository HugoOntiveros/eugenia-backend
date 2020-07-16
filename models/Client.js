const mongoose = require('mongoose');

const { Schema } = mongoose;

const clientSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  last_name: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  address: {
    type: Number,
    required: true,
  },
}, {
  timestamps: true,
  versionKey: false,
});

const Client = mongoose.model('Client', clientSchema, 'Clients');

module.exports = Client;
