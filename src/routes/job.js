
'use strict';

const statusCodes = require('http-status-codes');
const plugins = require('../../constants/routes-config');
const responses = require('../utilities/responses');
const config = require('../../configs/config');

const validator = require('../validators/job');
const addjob= require('../controllers/jobs/add-job');
const jobStatus=require('../controllers/jobs/job-status');
const jobList=require('../controllers/jobs/all-job');
const updateJob=require('../controllers/jobs/update-job');
const teamList=require('../controllers/jobs/team-list');


module.exports = [


{
    method: 'POST',
    path: config.apiPrefix + '/job/addJob',
    config: {
        description: 'Add job',
        notes: 'Add job.',
        tags: ['api', 'Job'],
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
    method: 'GET',
    path: config.apiPrefix + '/job/jobStatus',
    config: {
        description: 'check status of job',
        notes: 'check status of job.',
        tags: ['api', 'Job'],
        auth: false,

        handler: (request, reply) => {
            jobStatus(request.query, (err, results) => {
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
    path: config.apiPrefix + '/job/jobList',
    config: {
        description: 'all job list',
        notes: 'all job list.',
        tags: ['api', 'Job'],
        auth: false,

        handler: (request, reply) => {
            jobList(request.query, (err, results) => {
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
    path: config.apiPrefix + '/job/teamList',
    config: {
        description: 'all team list',
        notes: 'all team list.',
        tags: ['api', 'Job'],
        auth: false,

        handler: (request, reply) => {
            teamList(request.query, (err, results) => {
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
    method: 'PUT',
    path: config.apiPrefix + '/job/updateJob',
    config: {
        description: 'updateJob',
        notes: 'updateJob.',
        tags: ['api', 'Job'],
        auth: false,
        handler: (request, reply) => {
            updateJob(request.payload, (err, results) => {
                if (err) {
                    console.log(err);
                    reply(responses.makeMessageResponse(false, statusCodes.EXPECTATION_FAILED, err.message.replace(/[^a-zA-Z ]/g, ''))).code(statusCodes.INTERNAL_SERVER_ERROR);
                } else {
                    reply(results);
                }
            });
        },
        validate: {
            payload: validator.updateJob,
            failAction: (request, reply, source, err) => {
                reply(responses.makeMessageResponse(false, statusCodes.BAD_REQUEST, err.message.replace(/[^a-zA-Z ]/g, '')));
            }
        },
        plugins: plugins.swaggerPlugin
    }
},

]








