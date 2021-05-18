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
db.createCollection('messages')
message = db.getCollection("messages")
message.remove({})
message.insert(
    {
        delivered: true,
        originalText: "¿Cómo estás?",
        translatedText: "Apa kabar?",
        userId: 1,
        friendId: 2,
        dateCreated: Date.now(),
        languageTo: "id",
        languageFrom: "es",
        messageId: 1,
        chatId: 1
    }
)
message.insert(
    {
        delivered: true,
        originalText: "Kamu sudah makan?",
        translatedText: "Have you eaten?",
        userId: 2,
        friendId: 3,
        dateCreated: Date.now(),
        languageTo: "en",
        languageFrom: "id",
        messageId: 1,
        chatId: 2
    }
)
message.insert(
    {
        delivered: true,
        originalText: "Did you study for the exam?",
        translatedText: "Avez-vous étudié pour l'examen?",
        userId: 3,
        friendId: 4,
        dateCreated: Date.now(),
        languageTo: "fr",
        languageFrom: "en",
        messageId: 1,
        chatId: 3
    }
)
message.insert(
    {
        delivered: true,
        originalText: "Avez-vous étudié pour l'examen?",
        translatedText: "¿Has estudiado para el examen?",
        userId: 4,
        friendId: 1,
        dateCreated: Date.now(),
        languageTo: "es",
        languageFrom: "fr",
        messageId: 1,
        chatId: 4
    }
)
message.insert(
    {
        delivered: true,
        originalText: "Kabar saya baik baik saja.",
        translatedText: "Lo estoy haciendo bien.",
        userId: 2,
        friendId: 1,
        date: Date.now(),
        languageTo: "es",
        languageFrom: "id",
        messageId: 2,
        chatId: 1
    }
)
db.createCollection('chats')
chat = db.getCollection("chats")
chat.remove({})

chat.insert(
    {
        chatId: 1,
        users: [{
            userId: 1
        }, {
            userId: 2
        }]
    }
)
chat.insert(
    {
        chatId: 2,
        users: [{
            userId: 2
        }, {
            userId: 3
        }]
    }
)
chat.insert(
    {
        chatId: 3,
        users: [{
            userId: 3
        }, {
            userId: 4
        }]
    }
)
chat.insert(
    {
        chatId: 4,
        users: [{
            userId: 4
        }, {
            userId: 1
        }]
    }
)
db.createCollection('friends')
friendList = db.getCollection("friends")
friendList.remove({})
// Andrea's friend list
friendList.insert(
    {
        userId: 1,
        friends: [{
            friendId: 2
        }, {
            friendId: 3
        }, {
            friendId: 4
        }]
    }
)
// Karen's friend list
friendList.insert(
    {
        userId: 2,
        friends: [{
            friendId: 1
        }, {
            friendId: 3
        }, {
            friendId: 4
        }]
    }
)
// Megan's friend list
friendList.insert(
    {
        userId: 3,
        friends: [{
            friendId: 2
        }, {
            friendId: 1
        }, {
            friendId: 4
        }]
    }
)
// Nathan's friend list
friendList.insert(
    {
        userId: 4,
        friends: [{
            friendId: 2
        }, {
            friendId: 3
        }, {
            friendId: 1
        }]
    }
)