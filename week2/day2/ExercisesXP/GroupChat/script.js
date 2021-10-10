let users = ['Lea123', 'Princess45', 'cat&doglovers', 'helooo@000','z'];
if (users.length === 0) {
    console.log('no one is online')
} else if (users.length === 1){
    console.log (users [0])
} else if (users.length === 2){
    console.log (users [0][1])
} else if (users.length >= 2){
    console.log (users[0],',',users[1],'and',[users.length - 2],'more are online')
}