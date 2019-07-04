
'use strict';

const statusCodes = require('http-status-codes');
const plugins = require('../../constants/routes-config');
const responses = require('../utilities/responses');
const config = require('../../configs/config');

const validator = require('../validators/addorder');
const addOrder= require('../controllers/order/add-order');
const orderStatus=require('../controllers/order/order-status');
const orderList=require('../controllers/order/all-order');
const updateOrder=require('../controllers/order/update-order');


module.exports = [


{
    method: 'POST',
    path: config.apiPrefix + '/order/addOrder',
    config: {
        description: 'Add multiple order',
        notes: 'Add multiple order.',
        tags: ['api', 'Order'],
        auth: false,
        handler: (request, reply) => {
            addOrder(request.payload, (err, results) => {
                if (err) {
                    console.log(err);
                    reply(responses.makeMessageResponse(false, statusCodes.EXPECTATION_FAILED, err.message.replace(/[^a-zA-Z ]/g, ''))).code(statusCodes.INTERNAL_SERVER_ERROR);
                } else {
                    reply(results);
                }
            });
        },
        validate: {
            payload: validator.addOrder,
            failAction: (request, reply, source, err) => {
                reply(responses.makeMessageResponse(false, statusCodes.BAD_REQUEST, err.message.replace(/[^a-zA-Z ]/g, '')));
            }
        },
        plugins: plugins.swaggerPlugin
    }
},
  {
    method: 'GET',
    path: config.apiPrefix + '/order/orderStatus',
    config: {
        description: 'check status of order',
        notes: 'check status of order.',
        tags: ['api', 'Order'],
        auth: false,

        handler: (request, reply) => {
            orderStatus(request.query, (err, results) => {
                if (err) {
                    console.log(err);
                    reply(responses.makeMessageResponse(false, statusCodes.EXPECTATION_FAILED, err.message.replace(/[^a-zA-Z ]/g, ''))).code(statusCodes.INTERNAL_SERVER_ERROR);
                } else {
                    reply(results);
                }
            });
        },
        validate: {
            query: validator.status,
            failAction: (request, reply, source, err) => {
                reply(responses.makeMessageResponse(false, statusCodes.BAD_REQUEST, err.message.replace(/[^a-zA-Z ]/g, '')));
            }
        },
        plugins: plugins.swaggerPlugin
    }
},
{
    method: 'GET',
    path: config.apiPrefix + '/order/orderList',
    config: {
        description: 'all order list',
        notes: 'all order list.',
        tags: ['api', 'Order'],
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
        validate: {
            query: validator.status,
            failAction: (request, reply, source, err) => {
                reply(responses.makeMessageResponse(false, statusCodes.BAD_REQUEST, err.message.replace(/[^a-zA-Z ]/g, '')));
            }
        },
        plugins: plugins.swaggerPlugin
    }
},

{
    method: 'PUT',
    path: config.apiPrefix + '/order/updateOrder',
    config: {
        description: 'updateOrder',
        notes: 'updateOrder.',
        tags: ['api', 'Order'],
        auth: false,
        handler: (request, reply) => {
            updateOrder(request.payload, (err, results) => {
                if (err) {
                    console.log(err);
                    reply(responses.makeMessageResponse(false, statusCodes.EXPECTATION_FAILED, err.message.replace(/[^a-zA-Z ]/g, ''))).code(statusCodes.INTERNAL_SERVER_ERROR);
                } else {
                    reply(results);
                }
            });
        },
        validate: {
            payload: validator.updateOrder,
            failAction: (request, reply, source, err) => {
                reply(responses.makeMessageResponse(false, statusCodes.BAD_REQUEST, err.message.replace(/[^a-zA-Z ]/g, '')));
            }
        },
        plugins: plugins.swaggerPlugin
    }
},

]








