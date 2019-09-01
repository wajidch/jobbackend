'use strict';

const statusCodes = require('http-status-codes');
const responseMsg = require("../../../constants/response-messages");
const responses = require('../../utilities/responses');
const model = require('../../models');
const Op = model.Sequelize.Op;

const teamModel = 'team';

const moment=require('moment');

module.exports = (req, callback) => {

    
    
    model[teamModel].findAll({

     
       
        order: [ [ 'id', 'DESC' ]]


    }).then(teamlist => {
        return callback(null, responses.dataResponse(statusCodes.OK, responseMsg.FETCH_SUCCESSFULL, teamlist));


    })
}