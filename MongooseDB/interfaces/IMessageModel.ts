import Mongoose = require("mongoose");
import {IUserModel} from '../interfaces/IUserModel';

interface IMessageModel extends Mongoose.Document {
    delivered: Boolean;
    originalText: String;
    translatedText: String;
    userId: Number;
    dateCreated: Date;
    languageTo: String;
    languageFrom: String;
    messageId: String;
}
export {IMessageModel};