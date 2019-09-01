'use strict';

const statusCodes = require('http-status-codes');
const plugins = require('../../constants/routes-config');
const responses = require('../utilities/responses');
const config = require('../../configs/config');

const validator = require('../validators/users');
const login = require('../controllers/users/login');
const signUp = require('../controllers/users/sign-up');
const cvList = require('../controllers/users/list');
const updateProfile=require('../controllers/users/update-profile');
const registeruserList=require('../controllers/users/register-user');
const updatePassword=require('../controllers/users/update-password');
const getuserinfo=require('../controllers/users/get-user-info');

const Joi = require('joi');
module.exports = [

    // Users login
    {
        method: 'POST',
        path: config.apiPrefix + '/User/login',
        config: {
            description: 'Login for User',
            notes: 'Login for user using email and password.',
            tags: ['api', 'User'],
            auth: false,
            handler: (request, reply) => {
                login(request.payload, (err, results) => {
                    if (err) {
                        console.log(err);
                        reply(responses.makeMessageResponse(false, statusCodes.EXPECTATION_FAILED, err.message.replace(/[^a-zA-Z ]/g, ''))).code(statusCodes.INTERNAL_SERVER_ERROR);
                    } else {
                        reply(results);
                    }
                });
            },
            validate: {
                payload: validator.userLogin,
                failAction: (request, reply, source, err) => {
                    reply(responses.makeMessageResponse(false, statusCodes.BAD_REQUEST, err.message.replace(/[^a-zA-Z ]/g, '')));
                }
            },
            plugins: plugins.swaggerPlugin
        }
    },
    // Users Register
    {
        method: 'POST',
        path: config.apiPrefix + '/User/Register',
        config: {
            description: 'Register for User',
            notes: 'Register for user.',
            tags: ['api', 'User'],
            auth: false,
            handler: (request, reply) => {
                signUp(request.payload, (err, results) => {
                    if (err) {
                        console.log(err);
                        reply(responses.makeMessageResponse(false, statusCodes.EXPECTATION_FAILED, err.message.replace(/[^a-zA-Z ]/g, ''))).code(statusCodes.INTERNAL_SERVER_ERROR);
                    } else {
                        reply(results);
                    }
                });
            },
            validate: {
                payload: validator.add,
                failAction: (request, reply, source, err) => {
                    reply(responses.makeMessageResponse(false, statusCodes.BAD_REQUEST, err.message.replace(/[^a-zA-Z ]/g, '')));
                }
            },
            plugins: plugins.swaggerPlugin
        }
    },
    {
        method: 'PUT',
        path: config.apiPrefix + '/User/updateProfile',
        config: {
            description: 'updateProfile',
            notes: 'updateProfile.',
            tags: ['api', 'User'],
            auth: false,
            handler: (request, reply) => {
                updateProfile(request.payload, (err, results) => {
                    if (err) {
                        console.log(err);
                        reply(responses.makeMessageResponse(false, statusCodes.EXPECTATION_FAILED, err.message.replace(/[^a-zA-Z ]/g, ''))).code(statusCodes.INTERNAL_SERVER_ERROR);
                    } else {
                        reply(results);
                    }
                });
            },
            validate: {
                payload: validator.updateProfile,
                failAction: (request, reply, source, err) => {
                    reply(responses.makeMessageResponse(false, statusCodes.BAD_REQUEST, err.message.replace(/[^a-zA-Z ]/g, '')));
                }
            },
            plugins: plugins.swaggerPlugin
        }
    },

    {
        method: 'PUT',
        path: config.apiPrefix + '/User/updatePassword',
        config: {
            description: 'updatePassword',
            notes: 'updatePassword.',
            tags: ['api', 'User'],
            auth: false,
            handler: (request, reply) => {
                updatePassword(request.payload, (err, results) => {
                    if (err) {
                        console.log(err);
                        reply(responses.makeMessageResponse(false, statusCodes.EXPECTATION_FAILED, err.message.replace(/[^a-zA-Z ]/g, ''))).code(statusCodes.INTERNAL_SERVER_ERROR);
                    } else {
                        reply(results);
                    }
                });
            },
            validate: {
                payload: validator.updatePassword,
                failAction: (request, reply, source, err) => {
                    reply(responses.makeMessageResponse(false, statusCodes.BAD_REQUEST, err.message.replace(/[^a-zA-Z ]/g, '')));
                }
            },
            plugins: plugins.swaggerPlugin
        }
    },
{
    method: 'GET',
    path: config.apiPrefix + '/User/RegisterUserList',
    config: {
        description: 'all order list',
        notes: 'all order list.',
        tags: ['api', 'User'],
        auth: false,

        handler: (request, reply) => {
            registeruserList(request.query, (err, results) => {
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
    path: config.apiPrefix + '/User/getuserList',
    config: {
        description: 'all user list',
        notes: 'all user list.',
        tags: ['api', 'User'],
        auth: false,

        handler: (request, reply) => {
            getuserinfo(request.query, (err, results) => {
                if (err) {
                    console.log(err);
                    reply(responses.makeMessageResponse(false, statusCodes.EXPECTATION_FAILED, err.message.replace(/[^a-zA-Z ]/g, ''))).code(statusCodes.INTERNAL_SERVER_ERROR);
                } else {
                    reply(results);
                }
            });
        },
        validate: {
            query: validator.getuserid,
            failAction: (request, reply, source, err) => {
                reply(responses.makeMessageResponse(false, statusCodes.BAD_REQUEST, err.message.replace(/[^a-zA-Z ]/g, '')));
            }
        },
        plugins: plugins.swaggerPlugin
    }
}, 
   
   
    //  Product list API
  
];
