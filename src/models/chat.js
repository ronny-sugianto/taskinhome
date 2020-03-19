const Sequelize = require('sequelize');
const connection = require('../../dbConn');

       
const Chat = connection.define('chats',{
    id : {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        allowNull: false,
        primaryKey: true,
    },  
    sender: {
        type: Sequelize.STRING,
    },
    message:{
        type: Sequelize.STRING
    },
    date: {
        type : Sequelize.DATE,
        defaultValue : Date.now(),
    }
},{
   
    paranoid: false,
    timestamps: false
});

module.exports = Chat;