import Mongoose = require("mongoose");

interface IChatModel extends Mongoose.Document {
  chatId: Number;
  users: Array<Number>;
  messages: Array<Number>;
}
export { IChatModel };
