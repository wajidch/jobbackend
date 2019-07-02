
'use strict';

const Joi = require('joi');

const addOrder=Joi.array().items({
    item_name : Joi.string().empty('').optional(),
    item_supplier_name: Joi.string().empty('').optional(),
    item_type: Joi.string().empty('').optional(),
    item_id:Joi.number().integer().optional(),
    location:Joi.string().empty('').optional(),
    latitude:Joi.string().empty('').optional(),
    longitude:Joi.string().empty('').optional(),
    quantity:Joi.string().empty('').optional(),
    price:Joi.string().empty('').optional(),
    user_id:Joi.number().empty('').optional(),
    datetime:Joi.date().empty('').optional(),
    status:Joi.string().default('pending').optional()
   
   
})

const status=Joi.object({
    user_id:Joi.number().integer().required(),
})

module.exports = {
addOrder,
status
}