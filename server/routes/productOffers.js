const express = require('express');
const router = express.Router();
const serviceNow = require('../services/serviceNow');
const { serviceNow: { endpoints } } = require('../config/config');

const ENDPOINT = endpoints.productOffers;

// GET all product offerings
router.get('/', async(req, res, next) => {
    try {
        const records = await serviceNow.getRecords(ENDPOINT);
        res.json(records);
    } catch (error) {
        next(error);
    }
});

// GET single product offering
router.get('/:sys_id', async(req, res, next) => {
    try {
        const record = await serviceNow.getRecordById(ENDPOINT, req.params.sys_id);
        if (!record) {
            return res.status(404).json({ error: 'Record not found' });
        }
        res.json(record);
    } catch (error) {
        next(error);
    }
});

// CREATE new product offering
router.post('/', async(req, res, next) => {
    try {
        const newRecord = await serviceNow.createRecord(ENDPOINT, req.body);
        res.status(201).json(newRecord);
    } catch (error) {
        next(error);
    }
});

// UPDATE product offering
router.put('/:sys_id', async(req, res, next) => {
    try {
        const updatedRecord = await serviceNow.updateRecord(
            ENDPOINT,
            req.params.sys_id,
            req.body
        );
        res.json(updatedRecord);
    } catch (error) {
        next(error);
    }
});

// DELETE product offering
router.delete('/:sys_id', async(req, res, next) => {
    try {
        await serviceNow.deleteRecord(ENDPOINT, req.params.sys_id);
        res.status(204).end();
    } catch (error) {
        next(error);
    }
});

module.exports = router;