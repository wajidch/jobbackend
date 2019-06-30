'use strict';

const Joi = require('joi');

const add = Joi.object({


      name: Joi.string().empty('').optional(),
      email: Joi.string().empty('').optional(),
     password: Joi.string().empty('').optional(),
    phone:Joi.string().empty('').optional()
   

});

const updateProfile={
    user_id:Joi.number().required(),
    name: Joi.string().empty('').optional(),
    password: Joi.string().empty('').optional(),
    phone:Joi.string().empty('').optional(),
    profile_picture:Joi.string().empty('').optional()
    
}


const userLogin = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),


})

module.exports = {
    add,
  updateProfile,
    userLogin,
};