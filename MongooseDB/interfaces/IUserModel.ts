import Mongoose = require("mongoose");

interface IUserModel extends Mongoose.Document {
    email: String;
    password: String;
    userId: String;
    fname: String;
    lname: String;
    language: String;
}
export {IUserModel};