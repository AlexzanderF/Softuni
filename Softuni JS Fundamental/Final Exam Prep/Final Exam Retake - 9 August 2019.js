// # 1
function username(input) {
    let name = input.shift();
    for (let line of input) {
        if (line === "Sign up") {
            break;
        }
        line = line.split(" ");
        if (line[0] === "Case") {
            if (line[1] === "lower") {
                name = name.toLowerCase();
            } else {
                name = name.toUpperCase();
            }
            console.log(name);
        } else if (line[0] === "Reverse") {
            let start = Number(line[1]);
            let end = Number(line[2]);
            if (start >= 0 && end < name.length) {
                let substr = name.substring(start, end + 1);
                substr = substr.split("").reverse().join("");
                console.log(substr);
            }
        } else if (line[0] === "Cut") {
            let substr = line[1];
            if (name.includes(substr)) {
                name = name.replace(substr, "")
                console.log(name);
            } else {
                console.log(`The word ${name} doesn't contain ${substr}.`);
            }
        } else if (line[0] === "Replace") {
            let char = line[1];
            while (name.includes(char)) {
                name = name.replace(char, "*");
            }
            console.log(name);
        } else {
            let char = line[1];
            if (name.includes(char)) {
                console.log("Valid");
            } else {
                console.log(`Your username must contain ${char}.`);
            }
        }

    }
}

// # 2
function password(input) {
    input.shift();
    for (let line of input) {
        let valid = /(.+)>(\d{3})\|([a-z]{3})\|([A-Z]{3})\|([^\<\>]{3})<\1/g.exec(line);
        if (valid) {
            let pass = "";
            for (let i = 2; i <= 5; i++) {
                pass += valid[i];
            }
            console.log(`Password: ${pass}`);
        } else {
            console.log("Try another password!");
        }
    }

}

// # 3
function followers(input) {
    let followers = {};
    for (let line of input) {
        if (line === "Log out") {
            break;
        }
        line = line.split(": ")
        if (line[0] === "New follower") {
            let username = line[1];
            if (!followers.hasOwnProperty(username)) {
                followers[username] = {
                    likes: 0,
                    comments: 0
                };
            }
        } else if (line[0] === "Like") {
            let username = line[1];
            let count = Number(line[2]);
            if (!followers.hasOwnProperty(username)) {
                followers[username] = {
                    likes: count,
                    comments: 0
                };
            } else {
                followers[username].likes += count;
            }
        } else if (line[0] === "Comment") {
            let username = line[1];
            if (!followers.hasOwnProperty(username)) {
                followers[username] = {
                    likes: 0,
                    comments: 1
                };
            } else {
                followers[username].comments += 1;
            }
        } else {
            let username = line[1];
            if (followers.hasOwnProperty(username)) {
                delete followers[username];
            } else {
                console.log(`${username} doesn't exist.`);
            }
        }
    }
    followers = Object.entries(followers).sort((a, b) => b[1].likes - a[1].likes || a[0].localeCompare(b[0]));
    console.log(`${followers.length} followers`);
    for (let pair of followers) {
        console.log(`${pair[0]}: ${pair[1].likes + pair[1].comments}`);
    }
}

followers([
    'Like: A: 3',
    'Comment: A',
    'New follower: B',
    'Blocked: A',
    'Comment: B',
    'Like: C: 5',
    'Like: D: 5',
    'Log out'
]
);