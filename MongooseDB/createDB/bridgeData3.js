import { ChatModel } from "../model/ChatModel";

db = db.getSiblingDB('bridgeSample')
db.createCollection('chats')
chat = db.getCollection("chats")
chat.remove({})
var userOne = new User("andrea@andrea.com", "callista", 1, "Andrea", "Callista", "es");
var userTwo = new User("karen@karen.com", "wong", 2, "Karen", "Wong", "id");
var userThree = new User("megan@megan.com", "gao", 3, "Megan", "Gao", "en");
var userFour = new User("nathan@nathan.com", "nishi", 4, "Nathan", "Nishi", "fr");
var messageOne = new Message(true, "¿Cómo estás?", "Apa kabar?", 1, 2, Date.now(), "es", "id", 1);
var messageTwo = new Message(true, "Kamu sudah makan?", "Have you eaten?", 2, 3, Date.now(), "id", "en", 2);
var messageThree = new Message(true, "Did you study for the exam?", "Avez-vous étudié pour l'examen?", 3, 4, Date.now(), "en", "fr", 3);
var messageFour = new Message(true, "Avez-vous étudié pour l'examen?", "¿Has estudiado para el examen?", 4, 1, Date.now(), "fr", "es", 4);


chat.insert(
    {
        chatId: 1,
        users: ,
        messages: ,
    }
)
chat.insert(
    {
        chatId: 2,
    }
)
chat.insert(
    {
        chatId: 3,
    }
)
chat.insert(
    {
        chatId: 4,
    }
)