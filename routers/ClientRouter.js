const express = require('express');

const router = express.Router();

const { ClientValidator } = require('../validators');
const { ClientController } = require('../controllers');

router.post('/clients',
  ClientValidator.create, ClientController.create);

router.get('/clients',
  ClientValidator.findAll);

router.get('/clients/:id',
  ClientValidator.findOne, ClientController.findOne);

router.patch('/clients/:id',
  ClientValidator.updateOne, ClientController.updateOne);

router.delete('/clients/:id',
  ClientValidator.deleteOne, ClientController.deleteOne);

module.exports = router;
