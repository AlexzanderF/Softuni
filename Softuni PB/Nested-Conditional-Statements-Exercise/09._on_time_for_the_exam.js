function solve(input) {
    let hourOfExam = Number(input.shift());
    let minutesOfExam = Number(input.shift());
    let hoursOfArriving = Number(input.shift());
    let minutesOfArriving = Number(input.shift());

    let totalMinutesOfExam = hourOfExam * 60 + minutesOfExam; // Изчисляваме минутите в които започва изпита
    let totalMinutesOfArriving = hoursOfArriving * 60 + minutesOfArriving; // Изчисляваме минутите в които пристига ученика

    // ако минутите на пристигане са повече от тези на изпита, следователно е закъснял
    if (totalMinutesOfArriving > totalMinutesOfExam) {
        console.log("Late"); // печатаме съобщението за закъснение
        let timeLate = totalMinutesOfArriving - totalMinutesOfExam; // изчисляваме с колко време е закъснял
        if (timeLate < 60) { // ако е закъснял с по-малко от 60 минути
            console.log(`${timeLate} minutes after the start`); // печатаме съобщението за закъснение с по-малко от час
        } else { // ако е закъснял с повече от 60 минути
            let hours = Math.floor(timeLate / 60); // намираме с колко часа е закъснял
            let minutes = timeLate % 60; // с колко минути е закъснял
            if (minutes < 10) { // проверяваме дали минутите са по-малко от 10
                console.log(`${hours}:0${minutes} hours after the start`); // печатаме съобщението с водеща нула
            } else {
                console.log(`${hours}:${minutes} hours after the start`); // ако са повече или равни от 10
            }
        }
    } else if (totalMinutesOfExam - totalMinutesOfArriving <= 30) { // ако е подранил с до 30 минути включително
        console.log("On time"); // печатаме съобщението за пристигане на време
        let early = totalMinutesOfExam - totalMinutesOfArriving; // изчисляваме с колко минути по-рано е дошъл
        if (early !== 0) { // ако е подранил с повече от една минута
            console.log(`${early} minutes before the start`); // печатаме съобщението с колко минути е закъснял
        }
    } else if (totalMinutesOfExam - totalMinutesOfArriving > 30) { // ако е подранил със повече от 30 минути
        console.log("Early"); // печатаме съобщението за по-ранното пристигане
        let earlyMinutes = totalMinutesOfExam - totalMinutesOfArriving; // излисяваме с общо колко минути е подранил
        let hours = Math.floor(earlyMinutes / 60); // намираме с колко часа е подранил
        let minutes = earlyMinutes % 60; // намираме с колко минути е подранил

        if (earlyMinutes < 60) { // ако е подранил с по-малко от час
            console.log(`${minutes} minutes before the start`); // принтираме съобщението за подраняване с минути
        } else { // ако е подранил със повече от час
            if (minutes < 10) { // ако минутите са по-малко от 10
                console.log(`${hours}:0${minutes} hours before the start`); // принтираме съобщението с водеща нула
            } else { // ако минутите са повече или равни на 10
                console.log(`${hours}:${minutes} hours before the start`); // принтираме нужното съобщение
            }
        }
    }
}