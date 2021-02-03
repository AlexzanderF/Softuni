// # 1
function stringManipulator(input) {
    let string = input.shift();
    for (let line of input) {
        if (line === "End") {
            break;
        }
        line = line.split(" ");
        if (line[0] === "Translate") {
            let char = line[1];
            let replacement = line[2];
            while (string.includes(char)) {
                string = string.replace(char, replacement);
            }
            console.log(string);
        } else if (line[0] === "Includes") {
            let substr = line[1];
            if (string.includes(substr)) {
                console.log("True");
            } else {
                console.log("False");
            }
        } else if (line[0] === "Start") {
            let substr = line[1];
            if (string.indexOf(substr) === 0) {
                console.log("True");
            } else {
                console.log("False");
            }
        } else if (line[0] === "Lowercase") {
            string = string.toLowerCase();
            console.log(string);
        } else if (line[0] === "FindIndex") {
            let char = line[1];
            console.log(string.lastIndexOf(char));
        } else {
            let start = Number(line[1]);
            let count = Number(line[2]);
            let toRemove = string.substr(start, count);
            string = string.replace(toRemove, "");
            console.log(string);
        }
    }
}

// # 2
function messageDecrypter(input) {
    input.shift();
    for (let message of input) {
        let valid = /^(\%|\$)(?<tag>[A-Z][a-z]{2,})\1:\s\[\d+\]\|\[\d+\]\|\[\d+\]\|$/g.exec(message);
        if (valid) {
            let numbers = message.match(/\d+/g);
            let tag = valid.groups.tag;
            let decrypted = "";
            for (let num of numbers) {
                let char = String.fromCharCode(Number(num));
                decrypted += char;
            }
            console.log(`${tag}: ${decrypted}`);
        } else {
            console.log("Valid message not found!");
        }
    }

}

// # 3
function messagesManager(input) {
    let capacity = Number(input.shift());
    let messages = {};
    for (let line of input) {
        if (line === "Statistics") {
            break;
        }
        line = line.split("=");
        if (line[0] === "Add") {
            let user = line[1];
            let sent = Number(line[2]);
            let received = Number(line[3]);
            if (!messages.hasOwnProperty(user)) {
                messages[user] = {};
                messages[user].sent = sent;
                messages[user].received = received;
            }
        } else if (line[0] === "Message") {
            let [sender, receiver] = line.slice(1);
            if (messages.hasOwnProperty(sender) && messages.hasOwnProperty(receiver)) {
                messages[sender].sent++;
                if (messages[sender].sent + messages[sender].received >= capacity) {
                    delete messages[sender];
                    console.log(`${sender} reached the capacity!`);
                }
                messages[receiver].received++;
                if (messages[receiver].sent + messages[receiver].received >= capacity) {
                    delete messages[receiver];
                    console.log(`${receiver} reached the capacity!`);
                }
            }
        } else {
            let user = line[1];
            if (user === "All") {
                messages = {};
            } else if (messages.hasOwnProperty(user)) {
                delete messages[user];
            }
        }
    }
    messages = Object.entries(messages).sort((a, b) => b[1].received - a[1].received || a[0].localeCompare(b[0]));
    console.log(`Users count: ${messages.length}`);
    for(let pair of messages){
        console.log(`${pair[0]} - ${pair[1].received + pair[1].sent}`);
    }
}

messagesManager([
    '20',
    'Add=Mark=3=9',
    'Add=Berry=5=5',
    'Add=Clark=4=0',
    'Empty=Berry',
    'Add=Blake=9=3',
    'Add=Michael=3=9',
    'Add=Amy=9=9',
    'Message=Blake=Amy',
    'Message=Michael=Amy',
    'Statistics'
  ]  
);