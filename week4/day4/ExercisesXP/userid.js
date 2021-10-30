const users = { user1: 18273, user2: 92833, user3: 90315 }

console.log(Object.entries(users))

let multiplingId = [];

for (item of Object.entries(users)){
    multiplingId.push(item[0], item[1] * 2)
}
console.log(multiplingId)