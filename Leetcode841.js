// 841. Keys and Rooms

// There are n rooms labeled from 0 to n - 1 and all the rooms are locked except for room 0. Your goal is to visit all the rooms. However, you cannot enter a locked room without having its key.
// When you visit a room, you may find a set of distinct keys in it. Each key has a number on it, denoting which room it unlocks, and you can take all of them with you to unlock the other rooms.
// Given an array rooms where rooms[i] is the set of keys that you can obtain if you visited room i, return true if you can visit all the rooms, or false otherwise.

var canVisitAllRooms = function(rooms) {
    let visited = [];
    let roomKeys = [0];

    while (roomKeys.length) {
        let currRoom = roomKeys.pop();

        if (!visited.includes(currRoom)) {
            visited.push(currRoom);
            for (const key of rooms[currRoom]) {
                if (!visited.includes(key) && !roomKeys.includes(key)) {
                    roomKeys.push(key);
                };
            };
        };
    };

    return visited.length === rooms.length;
};

console.log(canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]]));
