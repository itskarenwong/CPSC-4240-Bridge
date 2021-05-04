"use strict";
exports.__esModule = true;
exports.MessageModel = void 0;
var Mongoose = require("mongoose");
var DataAccess_1 = require("./../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var MessageModel = /** @class */ (function () {
    function MessageModel() {
        this.createSchema();
        this.createModel();
    }
    MessageModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            delivered: Boolean,
            originalText: String,
            translatedText: String,
            userId: Number,
            friendId: Number,
            dateCreated: Date,
            language: String,
            messageId: Number,
            chatId: Number
        }, { collection: "messages" });
    };
    MessageModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("Messages", this.schema);
    };
    MessageModel.prototype.sendMessage = function (message) {
        console.log('testing to see if message was added to database');
        console.log(message);
        //var query =
        this.model.create(message);
        //query.exec();
    };
    MessageModel.prototype.retrieveAllMessages = function (response, filter) {
        var query = this.model.find(filter);
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    MessageModel.prototype.retrieveAll = function (response) {
        var query = this.model.find({});
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    MessageModel.prototype.retrieveChat = function (response, filter) {
        var query = this.model.findOne(filter);
        query.exec(function (err, item) {
            response.json(item);
        });
    };
    return MessageModel;
}());
exports.MessageModel = MessageModel;
