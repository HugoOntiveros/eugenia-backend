const { OrderService } = require('../services');

const { Orders } = require('../models/Product');

module.exports = {
  create: async (req, res) => {
    try {
      const order = await OrderService.create(req.body);
      res.status(201).json(order);
    } catch (err) {
      res.status(400).json(err);
    }
  },
  findAll: async (req, res) => {
    try {
      const orders = await OrderService.findAll();
      res.status(200).json(orders);
    } catch (err) {
      res.status(400).json(err);
    }
  },
  findOne: async (req, res) => {
    const { id } = req.params;
    try {
      const orders = await OrderService.findOneById(id);
      if (!orders) res.status(404).json({ message: 'Client not found' });
      res.status(200).json(orders);
    } catch (err) {
      res.status(400).json(err);
    }
  },
  updateOne: async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
      const client = await OrderService.findOneById(id);
      if (!client) res.status(404).json({ message: 'User not found' });
      const modifiedOrder = await OrderService.updateOne(client, body);
      res.status(200).json(modifiedOrder);
    } catch (err) {
      res.status(400).json(err);
    }
  },
  check: async (req, res) => {
    const { id } = req.params;
    try {
      const prices = Orders.products.map((product) => product.price);
      const subtotal = prices.reduce((total, price) => total + price, 0);
      const taxes = subtotal * 0.16;
      const total = subtotal + taxes;

      await Orders.findByIdAndUpdate(id, { subtotal, total }, { new: true });
    } catch (err) {
      res.status(400).json(err);
    }
  },
  deleteOne: async (req, res) => {
    const { id } = req.params;
    try {
      const order = await OrderService.findOneById(id);
      if (!order) res.status(404).json({ message: 'Client not found' });
      await OrderService.updateOne(order);
      res.status(204).json();
    } catch (err) {
      res.status(400).json(err);
    }
  },
};
