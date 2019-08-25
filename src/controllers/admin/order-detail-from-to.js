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
    let startDate = moment(new Date(req.startDate)).startOf('day').format("YYYY-MM-DD HH:mm:ss");

    let endDate = moment(new Date(req.endDate)).endOf('day').format("YYYY-MM-DD HH:mm:ss")

    console.log('req', req.startDate, req.endDate)


    model[orderlocationModel].findAll({


        where: {
            // created_date: {
            //     [Op.gte]: startDate,
            //     [Op.lte]: endDate
            // },
            
            created_date: {
                // [Op.gte]: startDate,
                // [Op.lte]: endDate
                [Op.between]: [startDate, endDate],

            },
            
        },


        order: [['id', 'DESC']],

        include: [
            { model: model[orderModel],where:{status:req.status}, as: 'items' }
        ]


    }).then(orderlist => {



        return callback(null, responses.dataResponse(statusCodes.OK, responseMsg.FETCH_SUCCESSFULL, orderlist));


    })
}