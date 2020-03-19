const Chat = require('../models/chat');
const logEvent = require('../event/myEmitter');
const moment = require('moment');
class ChatService {

    async getChat() {
        let result;
        try {
            result = await Chat.findAll({paranoid:false});
            
        } catch(e) {
            logEvent.emit('APP_ERROR',{
                logTitle: '[GET-ALL-CHAT-ERROR]',
                logMessage: e
            });
            throw new Error(e);
        }
        const optionTime = {hour12:false};
        result.date = moment(result.date).format('DD-MM-YYYY hh:mm')
        return result;
    }

    async createChat(data) {
        let result;
        try {
            
            result = await Chat.create(data)
        } catch(e) {
            logEvent.emit('APP_ERROR',{
                logTitle: '[CREATE-CHAT-ERROR]',
                logMessage: e
            });
            throw new Error(e);
        }
        return result;
    }


}
module.exports = ChatService;