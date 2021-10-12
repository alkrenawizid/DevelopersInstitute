let sentence = "This movie is not so bad!"
let wordNot = sentence.indexOf("not");
let wordBad = sentence.indexOf("bad");
if (wordBad < wordNot || wordBad === -1 || wordNot === -1) {
	console.log(sentence);
} else {
	let result = sentence.replace(sentence.subsentenceing(wordNot, (wordBad + 3)), "good");
	console.log(result);
};