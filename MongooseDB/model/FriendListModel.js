"use strict";
exports.__esModule = true;
var Mongoose = require("mongoose");
var DataAccess_1 = require("./../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var FriendListModel = /** @class */ (function () {
  function FriendListModel() {
    this.createSchema();
    this.createModel();
  }
  FriendListModel.prototype.createSchema = function () {
    this.schema = new Mongoose.Schema(
      {
        users: this.userList,
      },
      { collection: "friend lists" }
    );
  };
  FriendListModel.prototype.createModel = function () {
    this.model = mongooseConnection.model("Friend Lists", this.schema);
  };
  FriendListModel.prototype.retrieveFriendListDetails = function (
    response,
    filter
  ) {
    var query = this.model.findOne(filter);
    query.exec(function (err, itemArray) {
      response.json(itemArray);
    });
  };
  return FriendListModel;
})();
exports.FriendListModel = FriendListModel;
