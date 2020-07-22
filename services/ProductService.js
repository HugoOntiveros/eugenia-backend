const { Product } = require('../models');

module.exports = {
  create: (body) => new Product(body).save(),
  findAll: () => Product.find(),
  updateOne: (prod, body) => {
    Object.assign(prod, body);
    return prod.save();
  },
  deleteOneById: (id) => Product.findByIdAndDelete(id),
};
