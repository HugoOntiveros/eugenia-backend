const Client = require('../models');

module.exports = {
  create: (body) => new Client(body).save(),
  findAll: () => Client.find(),
  updateOne: (client, body) => {
    Object.assign(client, body);
    return client.save();
  },
  deleteOneById: (id) => Client.findByIdAndDelete(id),
};
