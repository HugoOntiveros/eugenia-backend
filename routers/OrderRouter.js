const express = require('express');

const router = express.Router();

const { OrderValidator } = require('../validators');
const { OrderController } = require('../controllers');

router.post('/orders',
  OrderValidator.create, OrderController.create);

router.get('/orders',
  OrderValidator.findAll);

router.get('/orders/:id',
  OrderValidator.findOne, OrderController.findOne);

router.patch('/orders/:id',
  OrderValidator.updateOne, OrderController.updateOne);

router.delete('/orders/:id',
  OrderValidator.deleteOne, OrderController.deleteOne);

router.patch('/orders/:id/checkout',
  OrderValidator.check);

module.exports = router;
