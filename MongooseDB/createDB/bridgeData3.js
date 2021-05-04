db = db.getSiblingDB('bridgeSample')
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