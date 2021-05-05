"use strict";
exports.__esModule = true;
exports.App = void 0;
//import * as path from 'path';
var express = require("express");
var logger = require("morgan");
//import * as mongodb from 'mongodb';
//import * as url from 'url';
var bodyParser = require("body-parser");
//var MongoClient = require('mongodb').MongoClient;
//var Q = require('q');
var UserModel_1 = require("./model/UserModel");
var MessageModel_1 = require("./model/MessageModel");
var ChatModel_1 = require("./model/ChatModel");
var FriendListModel_1 = require("./model/FriendListModel");
//import {DataAccess} from './DataAccess';
// Creates and configures an ExpressJS web server.
var App = /** @class */ (function () {
    //Run configuration methods on the Express instance.
    function App() {
        this.expressApp = express();
        this.middleware();
        this.routes();
        this.idGenerator = 102;
        this.User = new UserModel_1.UserModel();
        this.Message = new MessageModel_1.MessageModel();
        this.Chat = new ChatModel_1.ChatModel();
        this.FriendList = new FriendListModel_1.FriendListModel();
    }
    // Configure Express middleware.
    App.prototype.middleware = function () {
        this.expressApp.use(logger("dev"));
        this.expressApp.use(bodyParser.json());
        this.expressApp.use(bodyParser.urlencoded({ extended: false }));
    };
    // Configure API endpoints.
    App.prototype.routes = function () {
        var _this = this;
        var router = express.Router();
        router.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
        //route to return JSON of all users
        router.get("/users", function (req, res) {
            console.log("Query all users");
            _this.User.retrieveAllUsers(res);
        });
        //route to return JSON of a single user
        router.get("/users/:userId", function (req, res) {
            var id = req.params.userId;
            console.log("Query a user with id:" + id);
            _this.User.retrieveUser(res, { userId: id });
        });
        // route to return JSON of chat objects
        router.get("/chats", function (req, res) {
            console.log("Query all chats:");
            _this.Chat.retrieveAllChats(res);
        });
        // route to return a unique chat based on ID
        router.get("/chats/:chatId", function (req, res) {
            var id = req.params.chatId;
            console.log("Query a chat with id:" + id);
            _this.Chat.retrieveChat(res, { chatId: id });
        });
        //route to return JSON of messages by chat
        router.get("/messages/:chatId", function (req, res) {
            var id = req.params.chatId;
            console.log("Query messages from chatId:" + id);
            _this.Message.retrieveAllMessages(res, { chatId: id });
        });
        router.get("/messages/message/:messageId", function (req, res) {
            var id = req.params.messageId;
            console.log("Query a single message:" + id);
            _this.Message.retrieveMessage(res, { messageId: id });
        });
        //route to return JSON of all messages
        router.get("/messages", function (req, res) {
            console.log("Query all messages");
            _this.Message.retrieveAll(res);
        });
        // route to post JSON of a message
        router.post("/messages/", function (req, res) {
            console.log("testing to see if message was added to database");
            console.log(req.body);
            _this.Message.sendMessage(req.body);
            res.send("201 CREATED");
        });
        this.expressApp.use("/", router);
        this.expressApp.use("/app/json/", express.static(__dirname + "/app/json"));
        this.expressApp.use("/images", express.static(__dirname + "/img"));
        this.expressApp.use("/", express.static(__dirname + "/pages"));
    };
    return App;
}());
exports.App = App;
