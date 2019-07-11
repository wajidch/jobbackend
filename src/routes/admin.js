
'use strict';

const statusCodes = require('http-status-codes');
const plugins = require('../../constants/routes-config');
const responses = require('../utilities/responses');
const config = require('../../configs/config');

const orderList = require('../controllers/admin/order-list');


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
]