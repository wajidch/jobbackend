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
let startDate=moment(req.startDate).startOf('day').format("YYYY-DD-MM hh:mm:ss");
let endDate=moment(req.endDate).endOf('day').format("YYYY-DD-MM hh:mm:ss");

console.log('req',startDate,endDate)


    model[orderlocationModel].findAll({

         

        order: [['id', 'DESC']],

        include:[
            {model:model[orderModel],as:'items',where:{ 
                created_date:{
                    [Op.gte]: startDate,
                    [Op.lte]:endDate
            },}}
        ]


    }).then(orderlist => {



        return callback(null, responses.dataResponse(statusCodes.OK, responseMsg.FETCH_SUCCESSFULL, orderlist));


    })
}