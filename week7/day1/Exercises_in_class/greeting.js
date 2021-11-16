const greeting  = function(name){
    console.log(`Hello ${name}, Welcome to NodeJS`);
}

const print = function (param) {
    console.log(`this is the param ${param}`);
}


module.exports = {
    a: greeting,
    b: print
};