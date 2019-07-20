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

const orderlocationModel = 'order_location';



/**
 * Add order
 * @param req is containing payload sent from user
 * @param callback will return response to handler
 * Add order
 */
module.exports = (req, callback) => {


   let itemId=[];
   let date=[];
   let userId=[];
   let orderLocation=[];

   let ordersArray=[]
   let index=0;
   req.forEach(detail=>{
index++
       itemId.push(detail.item_id);
       date.push(detail.datetime);
       userId.push(detail.user_id);
       if(index===1){
       orderLocation.push({
          location:detail.location,
          latitude:detail.latitude,
          longitude:detail.longitude
       })
      }
     
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

         model[orderlocationModel].bulkCreate(orderLocation).then(created =>{

            req.forEach(detail=>{
               ordersArray.push({
                  item_name:detail.item_name,
                  item_supplier_name: detail.item_supplier_name,
                   item_type: detail.item_type,
                   item_id:detail.item_id,
                   location:detail.location,
                   latitude:detail.latitude,
                   longitude:detail.longitude,
                   quantity:detail.quantity,
                   price:detail.price,
                   user_id:detail.user_id,
                   datetime:detail.datetime,
                   status:detail.status,
                   order_location_id:created[0].id
                })
            })
         
            console.log("order",ordersArray)
      model[orderModel].bulkCreate(ordersArray
         ).then(updated=>{

            return callback(null, responses.dataResponse(statusCodes.OK, responseMsg.ADDITION_SUCCESSFULL, updated));


         })
      })
      }
    })
    
           


        
  
}