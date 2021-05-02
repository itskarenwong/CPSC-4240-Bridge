import Mongoose = require("mongoose");
import { DataAccess } from "./../DataAccess";
import { IFriendListModel } from "../interfaces/IFriendListModel";

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

class FriendListModel {
  public schema: any;
  public model: any;
  userList: Map<Number, Array<User>>;
  public constructor() {
    this.createSchema();
    this.createModel();
    this.userList = new Map();
  }

  public createSchema(): void {
    this.schema = new Mongoose.Schema(
      {
        friends: this.userList,
      },
      { collection: "friends" }
    );
  }

  public createModel(): void {
    this.model = mongooseConnection.model<IFriendListModel>(
      "FriendList",
      this.schema
    );
  }

  public retrieveFriendListDetails(response: any, filter: Object) {
    var query = this.model.findOne(filter);
    query.exec((err, itemArray) => {
      response.json(itemArray);
    });
  }
}
export { FriendListModel };
