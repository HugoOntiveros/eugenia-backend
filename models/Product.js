const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  class: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  image: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
}, {
  timestamps: true,
  versionKey: false,
});

const Product = mongoose.model('Product', productSchema, 'Products');

module.exports = Product;
