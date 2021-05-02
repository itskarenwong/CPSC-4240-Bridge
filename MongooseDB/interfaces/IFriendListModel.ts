import Mongoose = require("mongoose");
import { IUserModel } from "../interfaces/IUserModel";

interface IFriendListModel extends Mongoose.Document {
  users: IUserModel;
}
export { IFriendListModel };
