module.exports = function (sequelize, DataTypes) {
    return sequelize.define('orders', {

        
            id: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            item_name:{
                type:DataTypes.STRING(45)
            },
            item_supplier_name:{
                type:DataTypes.STRING(45)
            },
            item_type:{
                type:DataTypes.STRING(45)
            },
            item_id:{
                type:DataTypes.INTEGER(11)
            },
            location:{
                type:DataTypes.STRING(200)
            },
            latitude:{
                type:DataTypes.STRING(200)
            },
            longitude:{
                type:DataTypes.STRING(200)
            },
            quantity:{
                type:DataTypes.INTEGER(11)
            },
            price:{
                type:DataTypes.INTEGER(11)
            },
            user_id:{
                type:DataTypes.INTEGER(4)
            },
            datetime:{
                type:DataTypes.INTEGER(100)
            },
            status:{
                type:DataTypes.STRING(),
                default:'pending'
            }
                    
        
    },
     {
        tableName: 'orders'
    });
}