import Mongoose = require("mongoose");
import { DataAccess } from "./../DataAccess";
import { IChatModel } from "../interfaces/IChatModel";

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class User {
  email: String;
  password: String;
  userId: Number;
  fname: String;
  lname: String;
  language: String;
  public constructor(
    email: String,
    password: String,
    userId: Number,
    fname: String,
    lname: String,
    language: String
  ) {
    this.email = email;
    this.password = password;
    this.userId = userId;
    this.fname = fname;
    this.lname = lname;
    this.language = language;
  }
}

class Message {
  delivered: Boolean;
  originalText: String;
  translatedText: String;
  userId: Number;
  friendId: Number;
  dateCreated: Date;
  language: String;
  messageId: Number;
  public constructor(
    delivered: Boolean,
    originalText: String,
    translatedText: String,
    userId: Number,
    friendId: Number,
    dateCreated: Date,
    language: String,
    messageId: Number
  ) {
    this.delivered = delivered;
    this.originalText = originalText;
    this.translatedText = translatedText;
    this.userId = userId;
    this.friendId = friendId;
    this.dateCreated = dateCreated;
    this.language = language;
    this.messageId = messageId;
  }
}

class ChatModel {
  public schema: any;
  public model: any;
  chats: Array<Number>; // array of user ids
  messages: Array<Number>; // array of message ids
  public constructor(chats: Array<Number>, messages: Array<Number>) {
    this.createSchema();
    this.createModel();
    this.chats = chats;
    this.messages = messages;
  }

  public createSchema(): void {
    this.schema = new Mongoose.Schema(
      {
        chatId: Number,
        users: this.chats,
        messages: this.messages,
      },
      { collection: "chats" }
    );
  }

  public createModel(): void {
    this.model = mongooseConnection.model<IChatModel>("Chats", this.schema);
  }

  public retrieveAllChats(response: any): any {
    var query = this.model.find({});
    query.exec((err, itemArray) => {
      response.json(itemArray);
    });
  }
}
export { ChatModel };
export { User };
