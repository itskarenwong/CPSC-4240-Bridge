db = db.getSiblingDB('bridgeSample')
db.createCollection('chats')
chat = db.getCollection("chats")
chat.remove({})
chat.insert(
    {
        chatId: 1,
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