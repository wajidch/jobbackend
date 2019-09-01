'use strict';

const randomString = require("randomstring");
const responses = require('../../utilities/responses');
const statusCodes = require('http-status-codes');
const responseMsg = require("../../../constants/response-messages");
const model = require('../../models');
const Op = model.Sequelize.Op;
const jobModel = 'jobs';




/**
 * Update Job
 * @param req is containing payload sent from user
 * @param callback will return response to handler
 * Update Job
 */
module.exports = (req, callback) => {

  console.log(req)

  model[jobModel].update(req, {
    where: {
      id: req.id
    }
  }
  ).then(updated => {



    return callback(null, responses.dataResponse(statusCodes.OK, responseMsg.UPDATION_SUCCESSFULL, req));


  })




}