//import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
//import * as mongodb from 'mongodb';
//import * as url from 'url';
import * as bodyParser from 'body-parser';
//var MongoClient = require('mongodb').MongoClient;
//var Q = require('q');

import {UserModel} from './model/UserModel';
import {MessageModel} from './model/MessageModel';
import {ChatModel} from './model/ChatModel';
import {FriendListModel} from './model/FriendListModel';

//import {DataAccess} from './DataAccess';

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public expressApp: express.Application;
  public User:UserModel;
  public Message:MessageModel;
  public Chat:ChatModel;
  public FriendList:FriendListModel;
  public idGenerator:number;

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
    this.expressApp.use(logger('dev'));
    this.expressApp.use(bodyParser.json());
    this.expressApp.use(bodyParser.urlencoded({ extended: false }));
  }

  // Configure API endpoints.
  private routes(): void {
    let router = express.Router();
    //route to return JSON of all users
    router.get('/users', (req, res) => {
      console.log("Query all users");
      this.User.retrieveAllUsers(res);
    });

    //route to return JSON of a single user
    router.get('/users/:userId', (req, res) => {
      var id = req.params.userId;
      console.log("Query a user with id:" + id);
      this.User.retrieveUser(res, {userId: id});
    });

    // route to return a unique chat based on ID
    router.get('/chats/:chatId', (req, res) => {
      var id = req.params.chatId;
      console.log("Query a chat with id:" + id);
      this.Chat.retrieveChat(res, {chatId: id});
    });
    
    //route to return JSON of messages by chat
    router.get('/messages/:chatId', (req, res) => {
      var id = req.params.chat_id;
      console.log("Query messages from chat:" + id);
      this.Message.retrieveAllMessages(res, {chatId: id});
    });

    //route to return JSON of all messages
    router.get('/messages', (req, res) => {
        console.log("Query all messages");
        this.Message.retrieveAll(res);
    });

    // route to post JSON of a message
    router.post("/messages/:chatId", (req, res) => {
        console.log("sending a message");
        this.Message.sendMessage(req.body);
    });

    this.expressApp.use('/', router);

    this.expressApp.use('/app/json/', express.static(__dirname+'/app/json'));
    this.expressApp.use('/images', express.static(__dirname+'/img'));
    this.expressApp.use('/', express.static(__dirname+'/pages'));
    
  }

}

export {App};