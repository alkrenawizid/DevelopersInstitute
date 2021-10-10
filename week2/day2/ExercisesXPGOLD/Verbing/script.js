let verb = prompt('Enter a verb?');

if (verb.length >= 3 & verb.slice(-3) !== 'ing') {
    verb.concat('ing');
    console.log(verb)
} else if (verb.length >= 3 & verb.slice(-3) === 'ing') {
    console.concat('ly')
} else if (verb === 'Hebrew') {
    console.log('Shalom')
} else {
    console.log(verb)
}