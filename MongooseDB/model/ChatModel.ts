import Mongoose = require("mongoose");
import { DataAccess } from "./../DataAccess";
import { IChatModel } from "../interfaces/IChatModel";

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class ChatModel {
  public schema: any;
  public model: any;
  public constructor() {
    this.createSchema();
    this.createModel();
  }

  public createSchema(): void {
    this.schema = new Mongoose.Schema(
      {
        chatId: Number,
        users: [
          {
            userId: Number
          }
        ]
      },
      { collection: "chats" }
    );
  }

  public createModel(): void {
    this.model = mongooseConnection.model<IChatModel>("Chats", this.schema);
  }

  public retrieveAllMessages(response: any): any {
    var query = this.model.find({});
    query.exec((err, itemArray) => {
      response.json(itemArray);
    });
  }
}
export { ChatModel };