module.exports = function (sequelize, DataTypes) {
    return sequelize.define('users', {

        
            id: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            name:{
                type:DataTypes.STRING(45)
            },
            email:{
                type:DataTypes.STRING(45)
            },
            password:{
                type:DataTypes.STRING(45)
            },
            phone:{
                type:DataTypes.STRING(45)
            },
            profile_picture:{
                type:DataTypes.STRING(200)
            },
           
            deleted: {
                type: DataTypes.INTEGER(4),
                defaultValue: '0'
            },
                    
        
    },
     {
        tableName: 'users'
    });
}