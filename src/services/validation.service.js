const Validation = require('../models/user');
const logEvent = require('../event/myEmitter');

class ValidationService {

    async createValidation(data) {
        let result;
        try{
            result = await Validation.create(data,{paranoid: false});
        }catch(e){
            logEvent.emit('APP_ERROR',{
                logTitle: '[CREATE-VALIDATION-ERROR]',
                logMessage: e
            });
            throw new Error(e);
        }
    }
}

module.exports = ValidationService;