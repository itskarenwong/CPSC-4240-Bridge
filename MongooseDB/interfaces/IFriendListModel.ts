import Mongoose = require("mongoose");
import { User } from "../model/ChatModel";


interface IFriendListModel extends Mongoose.Document {
  friends: Map<Number, Array<User>>;
}
export { IFriendListModel };
