'use strict';

const statusCodes = require('http-status-codes');
const responseMsg = require("../../../constants/response-messages");
const responses = require('../../utilities/responses');
const model = require('../../models');
const Op = model.Sequelize.Op;

const orderModel = 'orders';
const orderlocationModel = 'order_location';


const moment = require('moment');

module.exports = (req, callback) => {



    model[orderlocationModel].findAll({


        order: [['id', 'DESC']],

        include:[
            {model:model[orderModel],as:'items'}
        ]


    }).then(orderlist => {



        return callback(null, responses.dataResponse(statusCodes.OK, responseMsg.FETCH_SUCCESSFULL, orderlist));


    })
}