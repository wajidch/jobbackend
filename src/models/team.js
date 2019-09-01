module.exports = function (sequelize, DataTypes) {
    return sequelize.define('team', {


        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(45)
        },
        profile_picture: {
            type: DataTypes.STRING(45)
        },
        designation: {
            type: DataTypes.STRING(45)
        },
        phone: {
            type: DataTypes.STRING(45)
        },
        email: {
            type: DataTypes.STRING(45)
        },
        
    



    },
        {
            tableName: 'team'
        });
}