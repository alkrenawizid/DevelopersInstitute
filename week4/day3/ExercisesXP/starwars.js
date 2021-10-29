let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

let result2 = epic.reduce((a, value) => (a += " " + value + " "))
console.log(result2)