
'use strict';

const statusCodes = require('http-status-codes');
const plugins = require('../../constants/routes-config');
const responses = require('../utilities/responses');
const config = require('../../configs/config');

const validator = require('../validators/addorder');
const addOrder= require('../controllers/order/add-order');
const orderStatus=require('../controllers/order/order-status');


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


]








