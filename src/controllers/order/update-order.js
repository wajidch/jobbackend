'use strict';

const randomString = require("randomstring");
const responses = require('../../utilities/responses');
const statusCodes = require('http-status-codes');
const responseMsg = require("../../../constants/response-messages");

const emailUtils = require('../../utilities/emails').employeeAddedEmail;
const hashPasswordUtility = require('../../utilities/password').hashPassword;
const model = require('../../models');
const Op = model.Sequelize.Op;
const orderModel = 'orders';




/**
 * Update order
 * @param req is containing payload sent from user
 * @param callback will return response to handler
 * Update order
 */
module.exports = (req, callback) => {

    console.log(req)

    var promises = [];
    req.forEach(function(order){

    let orderUpdate={
       
      item_name: order.item_name,
      item_supplier_name: order.item_supplier_name,
      item_type: order.item_type,
      item_id:order.item_id,
      location: order.location,
      latitude: order.latitude,
      longitude: order.longitude,
      quantity: order.quantity,
      price: order.price,
      user_id: order.user_id,
      datetime: order.datetime,
      status: order.status
    }
   promises.push(model[orderModel].update(orderUpdate,{where : {id:order.id}}));
});
Promise.all(promises).then(function(){
    // success
    return callback(null, responses.dataResponse(statusCodes.OK, responseMsg.UPDATION_SUCCESSFULL));

}, function(err){
    // error
});

            


        
  
}