const express = require('express');
const router = express.Router();
const serviceNow = require('../services/serviceNow');
const { serviceNow: { endpoints } } = require('../config/config');

const ENDPOINT = endpoints.users;

// GET all users
router.get('/', async(req, res, next) => {
    try {
        const records = await serviceNow.getRecords(ENDPOINT);
        res.json(records);
    } catch (error) {
        next(error);
    }
});

// GET single user by sys_id
router.get('/:sys_id', async(req, res, next) => {
    try {
        const record = await serviceNow.getRecordById(ENDPOINT, req.params.sys_id);
        if (!record) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(record);
    } catch (error) {
        next(error);
    }
});

// CREATE new user
router.post('/', async(req, res, next) => {
    try {
        const newRecord = await serviceNow.createRecord(ENDPOINT, req.body);
        res.status(201).json(newRecord);
    } catch (error) {
        next(error);
    }
});

// UPDATE user by sys_id
router.put('/:sys_id', async(req, res, next) => {
    try {
        const updatedRecord = await serviceNow.updateRecord(ENDPOINT, req.params.sys_id, req.body);
        res.json(updatedRecord);
    } catch (error) {
        next(error);
    }
});

// DELETE user by sys_id
router.delete('/:sys_id', async(req, res, next) => {
    try {
        await serviceNow.deleteRecord(ENDPOINT, req.params.sys_id);
        res.status(204).end();
    } catch (error) {
        next(error);
    }
});

module.exports = router;