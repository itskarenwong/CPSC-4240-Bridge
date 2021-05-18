//import * as path from 'path';
import * as express from "express";
import * as logger from "morgan";
//import * as mongodb from 'mongodb';
//import * as url from 'url';
import * as bodyParser from "body-parser";
//var MongoClient = require('mongodb').MongoClient;
//var Q = require('q');

import { UserModel } from "./model/UserModel";
import { MessageModel } from "./model/MessageModel";
import { ChatModel } from "./model/ChatModel";
import { FriendListModel } from "./model/FriendListModel";

//import {DataAccess} from './DataAccess';

// Creates and configures an ExpressJS web server.
class App {
  // ref to Express instance
  public expressApp: express.Application;
  public User: UserModel;
  public Message: MessageModel;
  public Chat: ChatModel;
  public FriendList: FriendListModel;
  public idGenerator: number;

  //Run configuration methods on the Express instance.
  constructor() {
    this.expressApp = express();
    this.middleware();
    this.routes();
    this.idGenerator = 102;
    this.User = new UserModel();
    this.Message = new MessageModel();
    this.Chat = new ChatModel();
    this.FriendList = new FriendListModel();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.expressApp.use(logger("dev"));
    this.expressApp.use(bodyParser.json());
    this.expressApp.use(bodyParser.urlencoded({ extended: false }));
  }

  // Configure API endpoints.
  private routes(): void {
    let router = express.Router();

    router.use(function (req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      next();
    });

    //route to return JSON of all users
    router.get("/users", (req, res) => {
      console.log("Query all users");
      this.User.retrieveAllUsers(res);
    });

    //route to return JSON of a single user
    router.get("/users/:userId", (req, res) => {
      var id = req.params.userId;
      console.log("Query a user with id:" + id);
      this.User.retrieveUser(res, { userId: id });
    });

    //route to return JSON of all friends for a single user
    router.get("/users/:userId/friends", (req, res) => {
        var id = req.params.userId;
        console.log("Query all friends for userId: " + id);
        this.FriendList.retrieveAllFriendsByUserId(res, { userId: id });
    });

    // route to return JSON of chat objects
    router.get("/chats", (req, res) => {
      console.log("Query all chats:");
      this.Chat.retrieveAllChats(res);
    });

    // route to return a unique chat based on ID
    router.get("/chats/:chatId", (req, res) => {
      var id = req.params.chatId;
      console.log("Query a chat with id:" + id);
      this.Chat.retrieveChat(res, { chatId: id });
    });

    //route to return JSON of messages by chatID
    router.get("/chats/:chatId/messages", (req, res) => {
      var id = req.params.chatId;
      console.log("Query messages from chatId:" + id);
      this.Message.retrieveAllMessagesByChatId(res, { chatId: id });
    });
    router.get("chats/:chatId/messages/:messageId", (req, res) => {
      var chat_id = req.params.chatId;
      var message_id = req.params.messageId;
      console.log("Query messageId " + message_id + " from chatId:" + chat_id);
      this.Message.retrieveMessageFromChat(res, { messageId: message_id, chatId: chat_id });
    });
    //route to return JSON of a single message
    router.get("/messages/:messageId", (req, res) => {
      var id = req.params.messageId;
      console.log("Query a single message:" + id);
      this.Message.retrieveMessage(res, { messageId: id });
    });
    router.get("/messages", (req, res) => {
      this.Message.retrieveAllMessages(res);
    });

    //route to return JSON of all messages from single user
    router.get("/users/:userId/messages", (req, res) => {
      var id = req.params.userId;
      console.log("Query all messages for userId: " + id);
      this.Message.retrieveAllMessagesByUserId(res, { userId: id });
    });

    //route to return JSON of all chats from single user
    router.get("/users/:userId/chats", (req, res) => {
      var id = req.params.userId;
      console.log("Query all chats for userId: " + id);
      this.Chat.retrieveAllChatsByUserId(res, id);
    });

    // route to post JSON of a message
    router.post("/messages/", (req, res) => {
      console.log("testing to see if message was added to database");
      console.log(req.body);
      this.Message.sendMessage(req.body);
      res.send("201 CREATED");
    });
    router.post("/chats/", (req, res) => {
      console.log("testing to see if chat was added to database");
      console.log(req.body);
      this.Chat.createChat(req.body);
      res.send("201 CREATED");
    });
    this.expressApp.use("/", router);

    this.expressApp.use("/app/json/", express.static(__dirname + "/app/json"));
    this.expressApp.use("/images", express.static(__dirname + "/img"));
    this.expressApp.use("/", express.static(__dirname + "/pages"));
  }
}

export { App };
