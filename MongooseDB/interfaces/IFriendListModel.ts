import Mongoose = require("mongoose");
import { User } from "../model/ChatModel";


interface IFriendListModel extends Mongoose.Document {
  friends: Array<Number>;
  userId: Number;
}
export { IFriendListModel };
