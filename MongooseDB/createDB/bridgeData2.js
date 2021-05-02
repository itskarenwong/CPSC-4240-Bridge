db = db.getSiblingDB('bridgeSample')
db.createCollection('messages')
message = db.getCollection("messages")

message.insert(
    {
        delivered: true,
        originalText: "¿Cómo estás?",
        translatedText: "Apa kabar?",
        userId: 1,
        friendId: 2,
        dateCreated: Date.now(),
        languageTo: "es",
        languageFrom: "id",
        messageId: 1
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
        languageTo: "id",
        languageFrom: "en",
        messageId: 2
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
        languageTo: "en",
        languageFrom: "fr",
        messageId: 3
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
        languageTo: "fr",
        languageFrom: "es",
        messageId: 4
    }
)
