db = db.getSiblingDB('bridgeSample')
db.createCollection('chats')
chat = db.getCollection("chats")
chat.remove({})

chat.insert(
    {
        chatId: 1,
        // Map<>
        users: new Map(1, [
            {
                email: "karen@karen.com",
                password: "wong",
                userId: 2,
                fname: "Karen",
                lname: "Wong",
                language: "id",
            }
        ]),
        // Map<chatId, Array<Message>>
        messages: new Map(1, [
            {
                delivered: true,
                originalText: "¿Cómo estás?",
                translatedText: "Apa kabar?",
                userId: 1,
                friendId: 2,
                date: Date.now(),
                languageTo: "id",
                languageFrom: "es",
                messageId: 1,
            },
            {
                delivered: true,
                originalText: "Kabar saya baik baik saja.",
                translatedText: "Lo estoy haciendo bien.",
                userId: 2,
                friendId: 1,
                date: Date.now(),
                languageTo: "es",
                languageFrom: "id",
                messageId: 5,
            },
        ]),
    }
)
chat.insert(
    {
        chatId: 2,
        users: new Map(2, [
            {
                email: "megan@megan.com",
                password: "gao",
                userId: 3,
                fname: "Megan",
                lname: "Gao",
                language: "en",
            }
        ]),
        messages: new Map(2, [
            {
                delivered: true,
                originalText: "Kamu sudah makan?",
                translatedText: "How are you?",
                userId: 1,
                friendId: 2,
                date: Date.now(),
                languageTo: "id",
                languageFrom: "es",
                messageId: 1,
            }
        ]),
    }
)
chat.insert(
    {
        chatId: 3,
        users: new Map(3, [
            {
                email: "megan@megan.com",
                password: "gao",
                userId: 3,
                fname: "Megan",
                lname: "Gao",
                language: "en",
            }
        ]),
        messages: new Map(3, [
            {
                delivered: true,
                originalText: "Kamu sudah makan?",
                translatedText: "How are you?",
                userId: 1,
                friendId: 2,
                date: Date.now(),
                languageTo: "id",
                languageFrom: "es",
                messageId: 1,
            }
        ]),
    }
)
chat.insert(
    {
        chatId: 4,
        users: new Map(4, [
            {
                email: "andrea@andrea.com",
                password: "callista",
                userId: 1,
                fname: "Andrea",
                lname: "Callista",
                language: "es",
            }
        ]),
        messages: new Map(4, [
            {
                delivered: true,
                originalText: "Avez-vous étudié pour l'examen?",
                translatedText: "¿Has estudiado para el examen?",
                userId: 4,
                friendId: 1,
                date: Date.now(),
                languageTo: "es",
                languageFrom: "fr",
                messageId: 4,
            }
        ]),
    }
)