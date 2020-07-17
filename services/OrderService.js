const Order = require('../models');

module.exports = {
  create: (body) => new Order(body).save(),
  findAll: () => Order.find(),
  updateOne: (order, body) => {
    Object.assign(order, body);
    return order.save();
  },
  deleteOneById: (id) => Order.findByIdAndDelete(id),
};
