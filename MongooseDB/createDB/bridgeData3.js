db = db.getSiblingDB('bridgeSample')
db.createCollection('chats')
chat = db.getCollection("chats")
chat.remove({})

chat.insert(
    {
        chatId: 1,
        users: [1, 2],
        messages: [1, 5],
    }
)
chat.insert(
    {
        chatId: 2,
        users: [2, 3],
        messages: [1],
    }
)
chat.insert(
    {
        chatId: 3,
        users: [3, 4],
        messages: [3],
    }
)
chat.insert(
    {
        chatId: 4,
        users: [4, 1],
        messages: [4],
    }
)