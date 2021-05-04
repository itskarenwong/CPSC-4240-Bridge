db = db.getSiblingDB('bridgeSample')
db.createCollection('users')
user = db.getCollection("users")
user.remove({})
user.insert(
    {
        email: "andrea@andrea.com",
        password: "callista",
        userId: 1,
        fname: "Andrea",
        lname: "Callista",
        language: "es",
        chats: [{
            chatId: 1
        }, {
            chatId: 4
        }]
    }
)
user.insert(
    {
        email: "karen@karen.com",
        password: "wong",
        userId: 2,
        fname: "Karen",
        lname: "Wong",
        language: "id",
        chats: [{
            chatId: 1
        }, {
            chatId: 2
        }]
    }
)
user.insert(
    {
        email: "megan@megan.com",
        password: "gao",
        userId: 3,
        fname: "Megan",
        lname: "Gao",
        language: "en",
        chats: [{
            chatId: 2
        }, {
            chatId: 3
        }]
    }
)
user.insert(
    {
        email: "nathan@nathan.com",
        password: "nishi",
        userId: 4,
        fname: "Nathan",
        lname: "Nishi",
        language: "fr",
        chats: [{
            chatId: 3
        }, {
            chatId: 4
        }]
    }
)
