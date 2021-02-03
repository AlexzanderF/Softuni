// # 1
function revealWords(words, string) {
    words = words.split(", ");
    for (let word of words) {
        let toReplace = "*".repeat(word.length);
        string = string.replace(toReplace, word);
    }
    console.log(string);
}

// # 2
function hashTag(string) {
    let speacialWords = [];
    let words = string.split(" ");
    for (let word of words) {
        if (word.length > 1 && word.includes("#")) {
            let valid = true;
            for (let i = 1; i < word.length; i++) {
                let char = word.charCodeAt(i);
                if ((char < 65 || char > 90) && (char < 97 || char > 122)) {
                    valid = false;
                    break;
                }
            }
            if (valid) {
                speacialWords.push(word.substr(1));
            }
        }
    }
    speacialWords.forEach(x => {
        console.log(x);
    });
}

// # 3
function extractFile(path) {
    path = path.split("\\");
    let file = path.pop();
    let fileName = file.substring(0, file.lastIndexOf("."));
    let fileExt = file.substr(file.lastIndexOf(".") + 1);
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExt}`);

}

// # 4
function stringSubstring(word, string) {
    let originalWord = word;
    string = string.toLowerCase();
    word = word.toLowerCase();
    // if (string.includes(`${word} `) || string.includes(` ${word}`)) {   !ALSO WORKS AND ITS SHORTER
    //     console.log(originalWord);
    // } else {
    //     console.log(`${originalWord} not found!`);
    // }
    string = string.split(" ");
    let found = false;
    for (let elem of string) {
        if (elem === word) {
            console.log(originalWord);
            found = true;
            break;
        }
    }
    if (!found) {
        console.log(`${originalWord} not found!`);
    }
}

// # 5
function replaceRepeatingChars(string) {
    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i + 1]) {
            let repCount = 1;
            let repChar = string[i];
            while (string[i + 1] === repChar) {
                repCount++;
                i++;
            }
            string = string.replace(repChar.repeat(repCount), repChar);
            i = 0;
        }
    }
    console.log(string);
}


// # 6
function pascalCaseSplitter(string) {
    let array = [];
    function isUpper(letter) {
        let charCode = letter.charCodeAt(0);
        return (charCode >= 65 && charCode <= 90);
    }
    function isLower(letter) {
        let charCode = letter.charCodeAt(0);
        return (charCode >= 97 && charCode <= 122);
    }
    for (let i = 0; i < string.length; i++) {
        let letter = string[i];
        if (isUpper(letter)) {
            let toPush = letter;
            i++;
            while (string[i] !== undefined && isLower(string[i])) {
                toPush += string[i];
                i++;
            }
            array.push(toPush);
            i--;
        }
    }
    console.log(array.join(", "));
}

// # 7
function cutAndReverse(string) {
    string = string.split("");
    let firstHalf = string.splice(0, string.length / 2);
    let secHalf = string;
    let reversedFirst = "";
    let reversedSec = "";
    for (let i = firstHalf.length - 1; i >= 0; i--) {
        reversedFirst += firstHalf[i];
    }
    for (let i = secHalf.length - 1; i >= 0; i--) {
        reversedSec += secHalf[i];
    }
    console.log(reversedFirst);
    console.log(reversedSec);
}

// # 8
function hardWord(input) {
    let text = input.shift();
    let words = input.shift();
    for (let i = 0; i < words.length; i++) {
        let toSearch = "_".repeat(words[i].length);
        text = text.replace(` ${toSearch} `, ` ${words[i]} `);
        text = text.replace(` ${toSearch}.`, ` ${words[i]}.`);
        text = text.replace(` ${toSearch},`, ` ${words[i]},`);
    }
    console.log(text);
}

// # 9
function passwordGenerator(array) {
    let vowels = ["a", "e", "i", "o", "u"];
    let index = 0;
    array[2] = array[2].toUpperCase();
    let password = array[0].concat(array[1]);
    for (let i = 0; i < password.length; i++) {
        if (vowels.includes(password[i])) {
            password = password.replace(password[i], array[2][index]);
            index++;
            if (index > array[2].length - 1) {
                index = 0;
            }
        }
    }
    password = password.split("").reverse().join("");
    console.log(`Your generated password is ${password}`);
}

// # 10
function lettersChangeNumbers(input) {
    input = input.split(" ");
    input = input.filter(x => x !== "");    // removes white spaces
    let totalSum = 0;
    for (let element of input) {
        // while (element.includes(" ")) {    
        //     element = element.replace(" ", "");
        // }
        element = element.split("");
        let firstLetter = element.shift();
        let secLetter = element.pop();
        let number = Number(element.join(""));
        if (isUpper(firstLetter)) {
            number = number / getAlphabetPosition(firstLetter);
        } else {
            number = number * getAlphabetPosition(firstLetter);
        }
        if (isUpper(secLetter)) {
            number = number - getAlphabetPosition(secLetter);
        } else {
            number = number + getAlphabetPosition(secLetter);
        }

        totalSum += number;
    }

    console.log(totalSum.toFixed(2));

    function getAlphabetPosition(letter) {
        letter = letter.toUpperCase();
        let code = letter.charCodeAt(0);
        return code - 64;
    }
    function isUpper(letter) {
        let charCode = letter.charCodeAt(0);
        return (charCode >= 65 && charCode <= 90);
    }
    function isLower(letter) {
        let charCode = letter.charCodeAt(0);
        return (charCode >= 97 && charCode <= 122);
    }
}

lettersChangeNumbers('a1A');