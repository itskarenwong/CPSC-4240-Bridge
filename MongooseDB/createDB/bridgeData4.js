db = db.getSiblingDB('bridgeSample')
db.createCollection('friends')
friendList = db.getCollection("friends")
friendList.remove({})
// Andrea's friend list
friendList.insert(
    {
        friends: new Map(1, [
            {
                email: "karen@karen.com",
                password: "wong",
                userId: 2,
                fname: "Karen",
                lname: "Wong",
                language: "id",
            },
            {
                email: "megan@megan.com",
                password: "gao",
                userId: 3,
                fname: "Megan",
                lname: "Gao",
                language: "en",
            },
            {
                email: "nathan@nathan.com",
                password: "nishi",
                userId: 4,
                fname: "Nathan",
                lname: "Nishi",
                language: "fr",
            },
        ]),
    }
)
// Karen's friend list
friendList.insert(
    {
        friends: new Map(2, [
            {
                email: "andrea@andrea.com",
                password: "callista",
                userId: 1,
                fname: "Andrea",
                lname: "Callista",
                language: "es",
            },
            {
                email: "megan@megan.com",
                password: "gao",
                userId: 3,
                fname: "Megan",
                lname: "Gao",
                language: "en",
            },
            {
                email: "nathan@nathan.com",
                password: "nishi",
                userId: 4,
                fname: "Nathan",
                lname: "Nishi",
                language: "fr",
            },
        ]),
    }
)
// Megan's friend list
friendList.insert(
    {
        friends: new Map(3, [
            {
                email: "karen@karen.com",
                password: "wong",
                userId: 2,
                fname: "Karen",
                lname: "Wong",
                language: "id",
            },
            {
                email: "andrea@andrea.com",
                password: "callista",
                userId: 1,
                fname: "Andrea",
                lname: "Callista",
                language: "es",
            },
            {
                email: "nathan@nathan.com",
                password: "nishi",
                userId: 4,
                fname: "Nathan",
                lname: "Nishi",
                language: "fr",
            },
        ]),
    }
)
// Nathan's friend list
friendList.insert(
    {
        friends: new Map(4, [
            {
                email: "karen@karen.com",
                password: "wong",
                userId: 2,
                fname: "Karen",
                lname: "Wong",
                language: "id",
            },
            {
                email: "megan@megan.com",
                password: "gao",
                userId: 3,
                fname: "Megan",
                lname: "Gao",
                language: "en",
            },
            {
                email: "andrea@andrea.com",
                password: "callista",
                userId: 1,
                fname: "Andrea",
                lname: "Callista",
                language: "es",
            },
        ]),
    }
)