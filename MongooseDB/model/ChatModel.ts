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

  public retrieveAllChats(response: any): any {
    var query = this.model.find({});
    query.exec((err, itemArray) => {
      response.json(itemArray);
    });
  }
  public retrieveChat(response:any, filter:Object) {
    var query = this.model.findOne(filter);
    query.exec ( (err, item) => {
        response.json(item);
    });
  }
  public createChat(message): any {
    this.model.create([message], (err) => {
      if (err) {
        console.log("object creation failed");
        return false;
      }
      return true;
    });
  }

  public retrieveAllChatsByUserId(response:any, filter:Object){
    var query = this.model.find({"users.userId": filter});
    query.exec ( (err, itemArray) => {
        response.json(itemArray);
    });
  }

}
export { ChatModel };