// # 1
function emailValidator(input) {
    let email = input.shift();

    for (let line of input) {
        if (line === 'Complete') {
            break;
        }
        if (line.includes("Upper")) {
            email = email.toUpperCase();
            console.log(email);
        } else if (line.includes("Lower")) {
            email = email.toLowerCase();
            console.log(email);
        } else if (line.includes("GetDomain")) {
            let count = Number(line.split(" ")[1]);
            console.log(email.substring(email.length - count));
        } else if (line.includes("GetUsername")) {
            if (email.includes("@")) {
                console.log(email.substring(0, email.indexOf("@")));
            } else {
                console.log(`The email ${email} doesn't contain the @ symbol.`);
            }
        } else if (line.includes("Replace")) {
            let char = line.split(" ")[1];
            while (email.includes(char)) {
                email = email.replace(char, "-");
            }
            console.log(email);
        } else {
            let codes = [];
            for (let char of email) {
                let code = char.charCodeAt();
                codes.push(code);
            }
            console.log(codes.join(" "));
        }
    }
}

// # 2
function registration(input) {
    let n = Number(input.shift());
    let count = 0;
    for (let i = 0; i < n; i++) {
        let line = input.shift();
        let valid = /U\$(?<name>[A-Z][a-z]{2,})U\$P@\$(?<pass>[A-Za-z]{5,}\w*[0-9])P@\$/g.exec(line);
        if (valid) {
            console.log("Registration was successful");
            console.log(`Username: ${valid.groups.name}, Password: ${valid.groups.pass}`);
            count++;
        } else {
            console.log("Invalid username or password");
        }
    }
    console.log(`Successful registrations: ${count}`);
}

// # 3
function inboxManager(input) {
    let inbox = {};
    for (let line of input) {
        if (line === "Statistics") {
            break;
        }
        line = line.split("->");
        if (line.includes("Add")) {
            let user = line[1];
            if (!inbox.hasOwnProperty(user)) {
                inbox[user] = [];
            } else {
                console.log(`${user} is already registered`);
            }
        } else if (line.includes("Send")) {
            let user = line[1];
            let email = line[2];
            inbox[user].push(email);
        } else {
            let user = line[1];
            if(inbox.hasOwnProperty(user)){
                delete inbox[user];
            } else {
                console.log(`${user} not found!`);
            }
        }
    }
    console.log(`Users count: ${Object.keys(inbox).length}`);
    inbox = Object.entries(inbox).sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]));
    for(let pair of inbox){
        console.log(pair[0]);
        for(let email of pair[1]){
            console.log(` - ${email}`);
        }
    }
}

inboxManager([
    'Add->Mike',
    'Add->George',
    'Send->George->Hello World',
    'Send->George->Some random test mail',
    'Send->Mike->Hello, do you want to meet up tomorrow?',
    'Send->George->It would be a pleasure',
    'Send->Mike->Another random test mail',
    'Statistics'
]
);
