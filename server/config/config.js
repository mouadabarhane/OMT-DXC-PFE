require('dotenv').config();

module.exports = {
    serviceNow: {
        url: process.env.SERVICE_NOW_URL,
        auth: {
            username: process.env.SERVICE_NOW_USER,
            password: process.env.SERVICE_NOW_PASSWORD
        },
        endpoints: {
            productSpecs: '/api/now/table/u_product_specification',
            productOffers: '/api/now/table/u_product_offerings',
            orders: '/api/now/table/u_order',
            users: '/api/now/table/u_users'
        }
    },
    port: process.env.PORT || 3000
};