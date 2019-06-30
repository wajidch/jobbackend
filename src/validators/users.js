'use strict';

const Joi = require('joi');

const add = Joi.object({


      name: Joi.string().empty('').optional(),
      email: Joi.string().empty('').optional(),
     password: Joi.string().empty('').optional(),
    phone:Joi.string().empty('').optional()
   

});
const detailCV={
    user_id:Joi.string().empty('').optional(),
   
}
const updateCV={
    user_id:Joi.number().required(),
    user_name: Joi.string().empty('').optional(),
    user_email: Joi.string().empty('').optional(),
    user_phone:Joi.string().empty('').optional(),
    website:Joi.string().empty('').optional(),
    address:Joi.string().empty('').optional(),
    job_title:Joi.string().empty('').optional(),
    company_name:Joi.string().empty('').optional(),
    startDate:Joi.string().empty('').optional(),
    endDate:Joi.string().empty('').optional(),
    skill:Joi.string().empty('').optional(),
    profile_picture:Joi.string().empty('').optional(),
    isCV:Joi.number().default(1).optional(),
    breif_description:Joi.string().empty('').optional(),
    
}


const userLogin = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),


})

module.exports = {
    add,
    detailCV,
    updateCV,
    userLogin,
};