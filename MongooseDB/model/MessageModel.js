"use strict";
exports.__esModule = true;
var Mongoose = require("mongoose");
var DataAccess_1 = require("../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var MessageModel = /** @class */ (function () {
  function MessageModel() {
    this.createSchema();
    this.createModel();
  }
  MessageModel.prototype.createSchema = function () {
    this.schema = new Mongoose.Schema(
      {
        delivered: Boolean,
        originalText: String,
        translatedText: String,
        userId: Number,
        dateCreated: Date,
        language: String,
        messageId: Number,
      },
      { collection: "messages" }
    );
  };
  MessageModel.prototype.createModel = function () {
    this.model = mongooseConnection.model("Messages", this.schema);
  };
  MessageModel.prototype.retrieveAllMessages = function (response) {
    var query = this.model.find({});
    query.exec(function (err, itemArray) {
      response.json(itemArray);
    });
  };
  return MessageModel;
})();
exports.MessageModel = MessageModel;
