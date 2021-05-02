"use strict";
exports.__esModule = true;
var Mongoose = require("mongoose");
var DataAccess_1 = require("./../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var ChatModel = /** @class */ (function () {
  function ChatModel() {
    this.createSchema();
    this.createModel();
  }
  ChatModel.prototype.createSchema = function () {
    this.schema = new Mongoose.Schema(
      {
        chatId: Number,
        users: this.chats,
        messages: this.messages,
      },
      { collection: "chats" }
    );
  };
  ChatModel.prototype.createModel = function () {
    this.model = mongooseConnection.model("Chats", this.schema);
  };
  ChatModel.prototype.retrieveAllLists = function (response) {
    var query = this.model.find({});
    query.exec(function (err, itemArray) {
      response.json(itemArray);
    });
  };
  return ChatModel;
})();
exports.ChatModel = ChatModel;
