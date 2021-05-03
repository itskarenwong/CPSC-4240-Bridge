import Mongoose = require("mongoose");
import { DataAccess } from "./../DataAccess";
import { IFriendListModel } from "../interfaces/IFriendListModel";

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;
class FriendListModel {
  public schema: any;
  public model: any;
  friends: Array<Number>;

  public constructor(friends: Array<Number>) {
    this.createSchema();
    this.createModel();
    this.friends = friends;
  }

  public createSchema(): void {
    this.schema = new Mongoose.Schema(
      {
        userId: Number,
        friends: this.friends,
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
