
const Joi=require('joi')

const updateOrderStatusParam={

    order_id:Joi.number().integer().required(),
    status:Joi.string().required()
}
const orderdetail={
    startDate:Joi.date().required(),
    endDate:Joi.date().required(),
    status:Joi.string().required()
}

const addJob=Joi.object({
    title : Joi.string().empty('').optional(),
    designation: Joi.string().empty('').optional(),
    description: Joi.string().empty('').optional(),
    expereince:Joi.string().empty('').optional(),
    salary:Joi.string().empty('').optional(),
  
   
   
})

const addteam=Joi.object({
    name : Joi.string().empty('').optional(),
    profile_picture: Joi.string().empty('').optional(),
    designation: Joi.string().empty('').optional(),
    phone:Joi.string().empty('').optional(),
    email:Joi.string().empty('').optional(),
  
   
   
})
module.exports={
    updateOrderStatusParam,
    orderdetail,
    addJob,
    addteam
}