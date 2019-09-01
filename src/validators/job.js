
'use strict';

const Joi = require('joi');

const addJob=Joi.object({
    title : Joi.string().empty('').optional(),
    designation: Joi.string().empty('').optional(),
    description: Joi.string().empty('').optional(),
    expereince:Joi.string().empty('').optional(),
    salary:Joi.string().empty('').optional(),
  
   
   
})

const updateJob=Joi.object({
    id:Joi.number().integer().required(),
    title : Joi.string().empty('').optional(),
    designation: Joi.string().empty('').optional(),
    description: Joi.string().empty('').optional(),
    expereince:Joi.string().empty('').optional(),
    salary:Joi.string().empty('').optional(),
   
   
})
const joblist=Joi.object({
 id:Joi.number().integer().required(),
})

module.exports = {
addJob: addJob,
status: joblist,
updateJob: updateJob
}