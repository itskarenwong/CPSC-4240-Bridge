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
        language: String,
        messageId: Number,
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

  public retrieveAllMessages(response: any): any {
    var query = this.model.find({});
    query.exec((err, itemArray) => {
      response.json(itemArray);
    });
  }
}
export { MessageModel };
