const Sequelize = require('sequelize');
const connection = require('../../dbConn');

const User = connection.define('users',{
    id : {
        type: Sequelize.UUID,
        defaultValue : Sequelize.UUIDV1,
        primaryKey : true,
        allowNull : false
    },

    name : {
        type : Sequelize.STRING,
    }, 
    email : {
        type: Sequelize.STRING
    },

    photo : {
        type : Sequelize.BLOB
    },

    signature : {
        type: Sequelize.BLOB
    },

}, { 
    freezeTableName : true,
    tableName : 'users',
    paranoid: false,
    timestamps: false
});

module.exports = User;