const { ClientService } = require('../services');

module.exports = {
  create: async (req, res) => {
    try {
      const client = await ClientService.create(req.body);
      res.status(201).json(client);
    } catch (err) {
      res.status(400).json(err);
    }
  },
  findAll: async (req, res) => {
    try {
      const clients = await ClientService.findAll();
      res.status(200).json(clients);
    } catch (err) {
      res.status(400).json(err);
    }
  },
  findOne: async (req, res) => {
    const { id } = req.params;
    try {
      const user = await ClientService.findOneById(id);
      if (!user) res.status(404).json({ message: 'Client not found' });
      res.status(200).json(user);
    } catch (err) {
      res.status(400).json(err);
    }
  },
  updateOne: async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
      const client = await ClientService.findOneById(id);
      if (!client) res.status(404).json({ message: 'User not found' });
      const modifiedClient = await ClientService.updateOne(client, body);
      res.status(200).json(modifiedClient);
    } catch (err) {
      res.status(400).json(err);
    }
  },
  deleteOne: async (req, res) => {
    const { id } = req.params;
    try {
      const client = await ClientService.findOneById(id);
      if (!client) res.status(404).json({ message: 'Client not found' });
      await ClientService.updateOne(client);
      res.status(204).json();
    } catch (err) {
      res.status(400).json(err);
    }
  },
};
