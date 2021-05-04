db = db.getSiblingDB('bridgeSample')
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