'use strict';


const responses = require('../../utilities/responses');
const statusCodes = require('http-status-codes');
const responseMsg = require("../../../constants/response-messages");
const model = require('../../models');
const Op = model.Sequelize.Op;
const jobModel = 'jobs';



/**
 * Add job
 * @param req is containing payload sent from user
 * @param callback will return response to handler
 * Add job
 */
module.exports = (req, callback) => {
   model[jobModel].create(req
   ).then(updated => {
      return callback(null, responses.dataResponse(statusCodes.OK, responseMsg.ADDITION_SUCCESSFULL, updated));


   })
}









