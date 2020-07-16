const Client = require('../models');

module.exports = {
  create: (body) => new Client(body).save(),
  findAll: () => Client.find(),
  findOneByEmail: (email) => Client.findOne({ email, is_active: true }),
  findOneById: (id) => Client.findOne({ _id: id, is_active: true }),
  updateOne: (user, body) => {
    Object.assign(user, body);
    return user.save();
  },
  deleteOneById: (id) => Client.findByIdAndDelete(id),
};
