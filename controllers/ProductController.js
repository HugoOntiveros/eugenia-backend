const { ProductService } = require('../services');

module.exports = {
  create: async (req, res) => {
    try {
      const product = await ProductService.create(req.body);
      res.status(201).json(product);
    } catch (err) {
      res.status(400).json(err);
    }
  },
  findAll: async (req, res) => {
    try {
      const products = await ProductService.findAll();
      res.status(200).json(products);
    } catch (err) {
      res.status(400).json(err);
    }
  },
  findOne: async (req, res) => {
    const { id } = req.params;
    try {
      const product = await ProductService.findOneById(id);
      if (!product) res.status(404).json({ message: 'Client not found' });
      res.status(200).json(product);
    } catch (err) {
      res.status(400).json(err);
    }
  },
  updateOne: async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
      const product = await ProductService.findOneById(id);
      if (!product) res.status(404).json({ message: 'User not found' });
      const modifiedproduct = await ProductService.updateOne(body);
      res.status(200).json(modifiedproduct);
    } catch (err) {
      res.status(400).json(err);
    }
  },
  deleteOne: async (req, res) => {
    const { id } = req.params;
    try {
      const user = await ProductService.findOneById(id);
      if (!user) res.status(404).json({ message: 'Client not found' });
      await ProductService.updateOne(user);
      res.status(204).json();
    } catch (err) {
      res.status(400).json(err);
    }
  },
};
