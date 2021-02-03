// # 1
function printChar(word) {
    for (let i = 0; i < word.length; i++) {
        console.log(word[i]);
    }
}

// # 2
function removeOccurrences(word, text) {
    while (text.includes(word)) {
        text = text.replace(word, "");
    }
    console.log(text);
}

// # 3
function substring(string, start, count) {
    let result = "";
    result = string.substr(start, count);
    console.log(result);
}

// # 4
function censoredWords(text, word) {
    while (text.includes(word)) {
        text = text.replace(word, repeat(word));
    }
    function repeat(word) {
        let len = word.length;
        let stars = "";
        for (let i = 0; i < len; i++) {
            stars += "*";
        }
        return stars;
    }
    console.log(text);
}

// # 5
function countOccurr(text, string) {
    let count = 0;
    text = text.split(" ");
    for (let word of text) {
        if (word == string) {
            count++;
        }
    }
    console.log(count);
}

// # 6
function stringIterator(string) {
    string = string.split(" ");
    for (let word of string) {
        console.log(word);
    }
}

// # 7 from Final Exam - 04 April 2020 Group 2\
function passReset(input) {
    let password = input.shift();
    for (let command of input) {
        if (command === "Done") {
            break;
        }
        if (command.includes("TakeOdd")) {
            let result = "";
            for (let i = 1; i < password.length; i += 2) {
                result += password[i];
            }
            password = result;
            console.log(password);
        } else if (command.includes("Cut")) {
            let index = command.split(" ")[1];
            let length = command.split(" ")[2];
            let toReplace = password.substr(index, length);
            password = password.replace(toReplace, "");
            console.log(password);
        } else {
            let substring = command.split(" ")[1];
            let substitute = command.split(" ")[2];
            if (!password.includes(substring)) {
                console.log("Nothing to replace!");
            } else {
                while (password.includes(substring)) {
                    password = password.replace(substring, substitute);
                }
                console.log(password);
            }
        }
    }
    console.log(`Your password is: ${password}`);
}

passReset([
    'up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy',
    'TakeOdd',
    'Cut 18 2',
    'Substitute ! ***',
    'Substitute ? .!.',
    'Done'
]
);