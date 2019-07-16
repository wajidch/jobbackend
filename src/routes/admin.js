
'use strict';

const statusCodes = require('http-status-codes');
const plugins = require('../../constants/routes-config');
const responses = require('../utilities/responses');
const config = require('../../configs/config');
const validator = require('../validators/admin');

const orderList = require('../controllers/admin/order-list');
const updateOrderStatus= require('../controllers/admin/update-order-status');
const orderdetail=require('../controllers/admin/order-detail-from-to');


module.exports = [
    {
        method: 'GET',
        path: config.apiPrefix + '/admin/orderList',
        config: {
            description: 'all order list',
            notes: 'all order list.',
            tags: ['api', 'Admin'],
            auth: false,

            handler: (request, reply) => {
                orderList(request.query, (err, results) => {
                    if (err) {
                        console.log(err);
                        reply(responses.makeMessageResponse(false, statusCodes.EXPECTATION_FAILED, err.message.replace(/[^a-zA-Z ]/g, ''))).code(statusCodes.INTERNAL_SERVER_ERROR);
                    } else {
                        reply(results);
                    }
                });
            },

            plugins: plugins.swaggerPlugin
        }
    },
    {
        method: 'GET',
        path: config.apiPrefix + '/admin/orderDetailfromto',
        config: {
            description: 'all order on based of date filter',
            notes: 'all order list.',
            tags: ['api', 'Admin'],
            auth: false,

            handler: (request, reply) => {
                orderdetail(request.query, (err, results) => {
                    if (err) {
                        console.log(err);
                        reply(responses.makeMessageResponse(false, statusCodes.EXPECTATION_FAILED, err.message.replace(/[^a-zA-Z ]/g, ''))).code(statusCodes.INTERNAL_SERVER_ERROR);
                    } else {
                        reply(results);
                    }
                });
            },
            validate: {
                query: validator.orderdetail,
                failAction: (request, reply, source, err) => {
                    reply(responses.makeMessageResponse(false, statusCodes.BAD_REQUEST, err.message.replace(/[^a-zA-Z ]/g, '')));
                }
            },
            plugins: plugins.swaggerPlugin
        }
    },

    {
        method: 'PUT',
        path: config.apiPrefix + '/admin/updateOrderStatus',
        config: {
            description: 'updateOrderStatus',
            notes: 'updateOrderStatus.',
            tags: ['api', 'Admin'],
            auth: false,
            handler: (request, reply) => {
                updateOrderStatus(request.payload, (err, results) => {
                    if (err) {
                        console.log(err);
                        reply(responses.makeMessageResponse(false, statusCodes.EXPECTATION_FAILED, err.message.replace(/[^a-zA-Z ]/g, ''))).code(statusCodes.INTERNAL_SERVER_ERROR);
                    } else {
                        reply(results);
                    }
                });
            },
            validate: {
                payload: validator.updateOrderStatusParam,
                failAction: (request, reply, source, err) => {
                    reply(responses.makeMessageResponse(false, statusCodes.BAD_REQUEST, err.message.replace(/[^a-zA-Z ]/g, '')));
                }
            },
            plugins: plugins.swaggerPlugin
        }
    },

   
    
]