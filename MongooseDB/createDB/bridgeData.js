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
        chats: [1, 4],
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
        chats: [1, 2],
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
        chats: [2, 3],
    },
)
user.insert(
    {
        email: "nathan@nathan.com",
        password: "nishi",
        userId: 4,
        fname: "Nathan",
        lname: "Nishi",
        language: "fr",
        chats: [3, 4],
    }
)
