// # 3
class Movie {
    constructor(movieName, ticketPrice) {
        this.movieName = movieName;
        this.ticketPrice = Number(ticketPrice);
        this.screenings = [];

        this.totalProfit = 0;
        this.totalSoldTickets = 0;
    }
    newScreening(date, hall, description) {
        if (this.screenings.hasOwnProperty(hall) && this.screenings[hall].hasOwnProperty(date)) {
            throw new Error(`Sorry, ${hall} hall is not available on ${date}`);
        }
        if (this.screenings.hasOwnProperty(hall)) {
            this.screenings[hall][date] = description;
        } else {
            this.screenings[hall] = {};
            this.screenings[hall][date] = description;
        }

        return `New screening of ${this.movieName} is added.`;
    }
    endScreening(date, hall, soldTickets) {
        if (!(this.screenings.hasOwnProperty(hall) && this.screenings[hall].hasOwnProperty(date))) {
            throw new Error(`Sorry, there is no such screening for ${this.movieName} movie.`);
        }
        let currProfit = soldTickets * this.ticketPrice;
        this.totalProfit += currProfit;
        this.totalSoldTickets += soldTickets;
        delete this.screenings[hall][date];      
        if (Object.keys(this.screenings[hall]).length === 0) {   
            delete this.screenings[hall];
        }
        return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${currProfit}`;
    }
    toString() {
        let result = `${this.movieName} full information:\nTotal profit: ${this.totalProfit.toFixed(0)}$\nSold Tickets: ${this.totalSoldTickets}`;
        if (Object.keys(this.screenings).length > 0) {
            result += '\nRemaining film screenings:';
            let sortedHalls = Object.keys(this.screenings).sort((a, b) => a.localeCompare(b));
            for (let hall of sortedHalls) {
                for (let date in this.screenings[hall]) {
                    result += `\n${hall} - ${date} - ${this.screenings[hall][date]}`;
                }
            }
        } else {
            result += '\nNo more screenings!';
        }
        return result;
    }
}

let m = new Movie('Wonder Woman 1984', '10.00');
console.log(m.newScreening('October 2, 2020', 'IMAX 3D', `3D`));
console.log(m.newScreening('October 3, 2020', 'Main', `regular`));
console.log(m.newScreening('October 4, 2020', 'IMAX 3D', `3D`));
console.log(m.endScreening('October 2, 2020', 'IMAX 3D', 150));
console.log(m.endScreening('October 4, 2020', 'Main', 78));
console.log(m.toString());

m.newScreening('October 4, 2020', '235', `regular`);
m.newScreening('October 5, 2020', 'Main', `regular`);
m.newScreening('October 3, 2020', '235', `regular`);
m.newScreening('October 4, 2020', 'Main', `regular`);
console.log(m.toString());
