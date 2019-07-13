
const joi=require('joi')

const updateOrderStatusParam={

    order_id:joi.number().integer().required(),
    status:joi.string().required()
}

module.exports={
    updateOrderStatusParam
}