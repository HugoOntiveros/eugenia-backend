const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
  products: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
  subtotal: {
    type: Number,
    default: 0,
  },
  total: {
    type: Number,
    default: 0,
  },
  client: { type: Schema.Types.ObjectId, ref: 'Client' },
}, {
  timestamps: true,
  versionKey: false,
});

const Order = mongoose.model('Order', orderSchema, 'Orders');

module.exports = Order;
