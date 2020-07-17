const express = require('express');

const router = express.Router();

// Rutas
router.use(require('./ProductRouter'));
router.use(require('./ClientRouter'));
router.use(require('./OrderRouter'));

module.exports = router;
