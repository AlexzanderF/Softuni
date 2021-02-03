function getAlphabetPosition(letter) {
    letter = letter.toUpperCase();
    let code = letter.charCodeAt(0);
    return code - 64;
}
function getAlphabet(position) {  // the oposite of the above
    let code = position + 64;
    return String.fromCharCode(code);
}

// console.log(getAlphabetPosition("z"));

let string = '==Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=';
let substr = "sdg"
console.log(Number(false));

let a = 10;
let b = 20;
let c = a > b ? a : b;
console.log(string.match(/([=\/]+)\w+[=\/]+/g));