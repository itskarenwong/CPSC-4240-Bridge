import Mongoose = require("mongoose");
import { IUserModel } from "../interfaces/IUserModel";
import { IMessageModel } from "../interfaces/IMessageModel";

interface IChatModel extends Mongoose.Document {
  users: IUserModel;
  messages: IMessageModel;
  chatId: Number;
}
export { IChatModel };
