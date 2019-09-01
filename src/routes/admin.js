
'use strict';

const statusCodes = require('http-status-codes');
const plugins = require('../../constants/routes-config');
const responses = require('../utilities/responses');
const config = require('../../configs/config');
const validator = require('../validators/admin');
const alljoblist=require('../controllers/admin/all-job');
const addjob=require('../controllers/admin/add-job');
const addteam=require('../controllers/admin/add-team');


module.exports = [
   
    {
        method: 'GET',
        path: config.apiPrefix + '/admin/joblist',
        config: {
            description: 'all job list',
            notes: 'all job list.',
            tags: ['api', 'Admin'],
            auth: false,

            handler: (request, reply) => {
                alljoblist(request.query, (err, results) => {
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
    method: 'POST',
    path: config.apiPrefix + '/admin/addJob',
    config: {
        description: 'Add job',
        notes: 'Add job.',
        tags: ['api', 'Admin'],
        auth: false,
        handler: (request, reply) => {
            addjob(request.payload, (err, results) => {
                if (err) {
                    console.log(err);
                    reply(responses.makeMessageResponse(false, statusCodes.EXPECTATION_FAILED, err.message.replace(/[^a-zA-Z ]/g, ''))).code(statusCodes.INTERNAL_SERVER_ERROR);
                } else {
                    reply(results);
                }
            });
        },
        validate: {
            payload: validator.addJob,
            failAction: (request, reply, source, err) => {
                reply(responses.makeMessageResponse(false, statusCodes.BAD_REQUEST, err.message.replace(/[^a-zA-Z ]/g, '')));
            }
        },
        plugins: plugins.swaggerPlugin
    }
},
   
    
{
    method: 'POST',
    path: config.apiPrefix + '/admin/addTeam',
    config: {
        description: 'Add team',
        notes: 'Add team.',
        tags: ['api', 'Admin'],
        auth: false,
        handler: (request, reply) => {
            addteam(request.payload, (err, results) => {
                if (err) {
                    console.log(err);
                    reply(responses.makeMessageResponse(false, statusCodes.EXPECTATION_FAILED, err.message.replace(/[^a-zA-Z ]/g, ''))).code(statusCodes.INTERNAL_SERVER_ERROR);
                } else {
                    reply(results);
                }
            });
        },
        validate: {
            payload: validator.addteam,
            failAction: (request, reply, source, err) => {
                reply(responses.makeMessageResponse(false, statusCodes.BAD_REQUEST, err.message.replace(/[^a-zA-Z ]/g, '')));
            }
        },
        plugins: plugins.swaggerPlugin
    }
},
   
]