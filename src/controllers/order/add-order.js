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
 * Add order
 * @param req is containing payload sent from user
 * @param callback will return response to handler
 * Add order
 */
module.exports = (req, callback) => {


   console.log(req)
   let itemId=[];
   let date=[];
   let userId=[];

   req.forEach(detail=>{

       itemId.push(detail.item_id);
       date.push(detail.datetime);
       userId.push(detail.user_id);
   })
 
    model[orderModel].findAll({
       where:{
         item_id:{[Op.in]:itemId},
         datetime:{[Op.in]:date},
         user_id:{[Op.in]:userId},

       }
    }).then(orders =>{

      if(orders.length){
         return callback(null, responses.dataResponse(statusCodes.OK, responseMsg.ALREADY_EXISTS));

      }
      else{
      model[orderModel].bulkCreate(req
         ).then(updated=>{

            return callback(null, responses.dataResponse(statusCodes.OK, responseMsg.ADDITION_SUCCESSFULL, updated));


         })
      }
    })
           


        
  
}