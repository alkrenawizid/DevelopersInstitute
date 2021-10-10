let translator = prompt('which language they speak?');
console.log(translator.toLowerCase())
if (translator === 'French') {
    console.log('Bonjour')
} else if (translator === 'English') {
    console.log('Hello')
} else if (translator === 'Hebrew') {
    console.log('Shalom')
} else {
    console.log('01110011 01101111 01110010 01110010 01111001')
}