import Mongoose = require("mongoose");
import { DataAccess } from "./../DataAccess";
import { IMessageModel } from "../interfaces/IMessageModel";

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class MessageModel {
  public schema: any;
  public model: any;

  public constructor() {
    this.createSchema();
    this.createModel();
  }

  public createSchema(): void {
    this.schema = new Mongoose.Schema(
      {
        delivered: Boolean,
        originalText: String,
        translatedText: String,
        userId: Number,
        friendId: Number,
        dateCreated: Date,
        languageTo: String,
        languageFrom: String,
        messageId: Number,
        chatId: Number,
      },
      { collection: "messages" }
    );
  }

  public createModel(): void {
    this.model = mongooseConnection.model<IMessageModel>(
      "Messages",
      this.schema
    );
  }

  public sendMessage(message): any {
    this.model.create([message], (err) => {
      if (err) {
        console.log("object creation failed");
        return false;
      }
      return true;
    });
  }
  public retrieveMessageFromChat(response:any, filter:Object) {
    var query = this.model.findOne(filter);
    query.exec ( (err, item) => {
        response.json(item);
    });
  }
  public retrieveAllMessagesByChatId(response: any, filter: Object) {
    var query = this.model.find(filter);
    query.exec((err, itemArray) => {
      response.json(itemArray);
    });
  }
  public retrieveAllMessagesByUserId(response: any, filter: Object) {
    var query = this.model.find(filter);
    query.exec((err, itemArray) => {
      response.json(itemArray);
    });
  }

  public retrieveAllMessages(response: any): any {
    var query = this.model.find({});
    query.exec((err, itemArray) => {
      response.json(itemArray);
    });
  }

  public retrieveMessage(response: any, filter: Object) {
    var query = this.model.findOne(filter);
    query.exec((err, item) => {
      response.json(item);
    });
  }
}
export { MessageModel };
