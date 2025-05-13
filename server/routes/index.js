const express = require('express');
const router = express.Router();

// Import des routeurs spécifiques
const productSpecsRouter = require('./productSpecs');
const productOffersRouter = require('./productOffers');
const ordersRouter = require('./orders');
const usersRouter = require('./users');

// Montage des routeurs avec des préfixes d'URL
router.use('/product-specifications', productSpecsRouter);
router.use('/product-offerings', productOffersRouter);
router.use('/orders', ordersRouter);
router.use('/users', usersRouter);

// Route santé pour vérifier que l'API fonctionne
router.get('/health', (req, res) => {
    res.status(200).json({ status: 'healthy' });
});

module.exports = router;