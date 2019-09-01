'use strict';

const statusCodes = require('http-status-codes');
const responseMsg = require("../../../constants/response-messages");
const responses = require('../../utilities/responses');
const model = require('../../models');
const Op = model.Sequelize.Op;

const orderModel = 'orders';

const moment=require('moment');

module.exports = (req, callback) => {
    
    model[orderModel].findAll({

        where: {
              user_id:req.user_id,
              status:'pending'
        },
 
        order: [ [ 'id', 'DESC' ]]


    }).then(orderStatus => {


        return callback(null, responses.dataResponse(statusCodes.OK, responseMsg.FETCH_SUCCESSFULL, orderStatus));


    })
}