db = db.getSiblingDB('bridgeSample')
db.createCollection('friends')
friendList = db.getCollection("friends")
friendList.remove({})
// Andrea's friend list
friendList.insert(
    {
        friends: [2, 3, 4],
        userId: 1,
    }
)
// Karen's friend list
friendList.insert(
    {
        friends: [1, 3, 4],
        userId: 2,
    }
)
// Megan's friend list
friendList.insert(
    {
        friends: [2, 1, 4],
        userId: 3,
    }
)
// Nathan's friend list
friendList.insert(
    {
        friends: [2, 3, 1],
        userId: 4,
    }
)