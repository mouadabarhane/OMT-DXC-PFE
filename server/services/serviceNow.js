const axios = require('axios');
const config = require('../config/config').serviceNow;

const serviceNow = axios.create({
    baseURL: config.url,
    auth: config.auth
});

module.exports = {
    getRecords: async(endpoint) => {
        const { data } = await serviceNow.get(endpoint);
        return data.result;
    },

    getRecordById: async(endpoint, id) => {
        const { data } = await serviceNow.get(`${endpoint}/${id}`);
        return data.result;
    },

    createRecord: async(endpoint, payload) => {
        const { data } = await serviceNow.post(endpoint, payload);
        return data.result;
    },

    updateRecord: async(endpoint, id, payload) => {
        const { data } = await serviceNow.put(`${endpoint}/${id}`, payload);
        return data.result;
    },

    deleteRecord: async(endpoint, id) => {
        await serviceNow.delete(`${endpoint}/${id}`);
        return { deleted: true, id };
    }
};