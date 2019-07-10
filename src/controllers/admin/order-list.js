'use strict';

const statusCodes = require('http-status-codes');
const responseMsg = require("../../../constants/response-messages");
const responses = require('../../utilities/responses');
const model = require('../../models');
const Op = model.Sequelize.Op;

const orderModel = 'orders';

const moment = require('moment');

module.exports = (req, callback) => {



    model[orderModel].findAll({


        order: [['id', 'DESC']]


    }).then(orderlist => {

        let orderlistObj = {
            latitude: 0,
            longitude: 0,
            location: '',
            itemList: []
        }

        orderlist.forEach(order => {
            orderlistObj.latitude = order[0].latitude;
            orderlistObj.longitude = order[0].longitude;
            orderlistObj.location = order[0].location;
            orderlistObj.itemList.push({

                id: order.id,
                item_name: order.item_name,
                item_supplier_name: order.item_supplier_name,
                item_type: order.item_type,
                item_id: order.item_id,
                quantity: order.quantity,
                price: order.price,
                user_id: order.user_id,
                datetime: order.datetime,
                status: order.status



            })

        });




        return callback(null, responses.dataResponse(statusCodes.OK, responseMsg.FETCH_SUCCESSFULL, orderlistObj));


    })
}