const express = require('express');

const router = express.Router();

const { ProductValidator } = require('../validators');
const { ProductController } = require('../controllers');

router.post('/products',
  ProductValidator.create, ProductController.create);

router.get('/products',
  ProductValidator.findAll);

router.get('/products/:id',
  ProductValidator.findOne, ProductController.findOne);

router.patch('/products/:id',
  ProductValidator.updateOne, ProductController.updateOne);

router.delete('/products/:id',
  ProductValidator.deleteOne, ProductController.deleteOne);

module.exports = router;
