const fs = require('fs');

// Read from file

fs.readFile('./read.txt',(err, data) => {
    if (err) {
        console.log('error!');
    }
    console.log(data.toString());
}
)

// Write to file

fs.writeFile('./write.txt','Writing Files With Node JS', err => {
    if (err){
        console.log(err);
    }
})

// Delete file
// fs.unlink('./write.txt', err => {
//     if (err){
//         console.log(err);
//     }
// })

