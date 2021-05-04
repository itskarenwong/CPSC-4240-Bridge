import Mongoose = require("mongoose");
import { DataAccess } from "./../DataAccess";
import { IUserModel } from "../interfaces/IUserModel";

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class UserModel {
  public schema: any;
  public model: any;

  public constructor(chats: Array<Number>) {
    this.createSchema();
    this.createModel();
  }

  public createSchema(): void {
    this.schema = new Mongoose.Schema(
      {
        email: String,
        password: String,
        userId: String,
        fname: String,
        lname: String,
        language: String,
        chats: [
          {
            chatId: Number
          }
        ]
      },
      { collection: "users" }
    );
  }

  public createModel(): void {
    this.model = mongooseConnection.model<IUserModel>("Users", this.schema);
  }

  public retrieveAllUsers(response: any): any {
    var query = this.model.find({});
    query.exec((err, itemArray) => {
      response.json(itemArray);
    });
  }

  public retrieveUser(response: any, filter: Object) {
    var query = this.model.findOne(filter);
    query.exec((err, item) => {
      response.json(item);
    });
  }
  public retrieveAllChats(response: any): any {
    var query = this.model.find({});
    query.exec((err, itemArray) => {
      response.json(itemArray);
    });
  }
}
export { UserModel };
