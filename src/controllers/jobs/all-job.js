'use strict';

const statusCodes = require('http-status-codes');
const responseMsg = require("../../../constants/response-messages");
const responses = require('../../utilities/responses');
const model = require('../../models');
const Op = model.Sequelize.Op;

const jobModel = 'jobs';

const moment=require('moment');

module.exports = (req, callback) => {

    console.log(req);
    
    
    model[jobModel].findAll({

        where: {
              id:req.id
        },
       
        order: [ [ 'id', 'DESC' ]]


    }).then(orderlist => {
        return callback(null, responses.dataResponse(statusCodes.OK, responseMsg.FETCH_SUCCESSFULL, orderlist));


    })
}