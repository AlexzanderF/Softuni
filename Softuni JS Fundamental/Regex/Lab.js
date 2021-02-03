// # 1
function matchFullName(names) {
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let validNames = [];
    let valid = pattern.exec(names);
    while (valid !== null) {
        validNames.push(valid[0]);
        valid = pattern.exec(names);
    }
    console.log(validNames.join(" "));
}

// # 2
function matchPhoneNumber(input) {
    let pattern = /\+359([ \-])2\1\d{3}\1\d{4}\b/g;
    let validNumbers = [];
    let valid = pattern.exec(input);
    while (valid !== null) {
        validNumbers.push(valid[0]);
        valid = pattern.exec(input);
    }
    console.log(validNumbers.join(", "));
}

// # 3
function matchDates(input) {
    let pattern = /\b(?<day>\d{2})([.\-\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;
    let validDates = [];
    let valid = pattern.exec(input);
    while (valid !== null) {
        // let [day, month, year] = valid[0].split(/[.\-\/]/g);   <-- works as well
        let day = valid.groups.day;
        let month = valid.groups.month;
        let year = valid.groups.year;
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
        valid = pattern.exec(input);
    }   
}

matchDates("13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016");