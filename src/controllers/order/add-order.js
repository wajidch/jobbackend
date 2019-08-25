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
const request = require('request-promise');
const orderlocationModel = 'order_location';
const axios = require('axios');


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
         
           
      model[orderModel].bulkCreate(ordersArray
         ).then(updated=>{
          
            console.log(ordersArray)
            sendMessage(ordersArray);
           
            return callback(null, responses.dataResponse(statusCodes.OK, responseMsg.ADDITION_SUCCESSFULL, updated));


         })
      })
      }
    })
    
           


        
  
}

  // Set your app credentials
  const credentials = {
   apiKey: '152e524e4eca5dd914edb4ff45793f197e6833efbcd1dcbd620d5ba3f1c150c9',
   username: 'pata_fundi',
}

// Initialize the SDK
const AfricasTalking = require('africastalking')(credentials);

// Get the SMS service
const sms = AfricasTalking.SMS;

function sendMessage(order) {
   console.log("in",order)

   const options = {
       // Set the numbers you want to send to in international format
       to: ['+923435020149'],
       // Set your message
       message: `order id:${order[0].item_id}, Details:${order[0].quantity} 
       ${order[0].item_name}
        ${order[0].price} 
         ,order status:${order[0].status}`,
      
   }

   // That’s it, hit send and we’ll take care of the rest
   sms.send(options)

       .then(res =>{
         console.log("sdfs",res)
       })
       .catch(console.log);
}