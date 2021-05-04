import Mongoose = require("mongoose");

interface IMessageModel extends Mongoose.Document {
    delivered: boolean;
    originalText: string;
    translatedText: string;
    userId: number;
    dateCreated: string;
    languageTo: string;
    languageFrom: string;
    messageId: string;
    chatId: number;
}
export {IMessageModel};