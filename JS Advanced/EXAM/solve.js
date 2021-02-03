// # 2
function solveClasses() {
    class Developer {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.baseSalary = 1000;
            this.tasks = [];
            this.experience = 0;
        }
        addTask(id, taskName, priority) {
            let newObj = { id: id, taskName: taskName, priority: priority };   // new task
            if (priority === 'high') {
                this.tasks.unshift(newObj);
            } else {
                this.tasks.push(newObj);
            }
            return `Task id ${id}, with ${priority} priority, has been added.`;
        }
        doTask() {
            if (this.tasks.length > 0) {
                let newest = this.tasks.shift();
                return newest.taskName;
            }
            return `${this.firstName}, you have finished all your tasks. You can rest now.`;
        }
        getSalary() {
            return `${this.firstName} ${this.lastName} has a salary of: ${this.baseSalary}`;
        }
        reviewTasks() {
            let result = 'Tasks, that need to be completed:';
            for (let task of this.tasks) {
                result += `\n${task.id}: ${task.taskName} - ${task.priority}`;
            }
            return result;
        }
    }
    class Junior extends Developer {
        constructor(firstName, lastName, bonus, experience) {
            super(firstName, lastName);
            this.baseSalary = 1000 + bonus;
            this.tasks = [];
            this.experience = experience;
        }
        learn(years) {
            this.experience += Number(years);
        }
    }
    class Senior extends Developer {
        constructor(firstName, lastName, bonus, experience) {
            super(firstName, lastName);
            this.baseSalary = 1000 + bonus;
            this.tasks = [];
            this.experience = experience + 5;
        }
        changeTaskPriority(taskId) {
            let currTask = this.tasks.find(x => x.id === taskId);
            let index = this.tasks.findIndex(x => x.id === taskId);
            this.tasks.splice(index, 1);
            if (currTask.priority === 'low') {
                currTask.priority = 'high';
                this.tasks.unshift(currTask);
            } else {
                currTask.priority = 'low';
                this.tasks.push(currTask);
            }
            return currTask;
        }
    }
    return {
        Developer,
        Junior,
        Senior
    }
}


// # 3
class Parking {
    constructor(capacity) {
        this.capacity = Number(capacity);
        this.vehicles = [];
        // extra props ???

    }
    addCar(carModel, carNumber) {
        if (this.vehicles.length === this.capacity) {
            throw new Error('Not enough parking space.');
        }
        this.vehicles.push({ carModel, carNumber, payed: false });      // ! each car is an object
        return `The ${carModel}, with a registration number ${carNumber}, parked.`;
    }
    removeCar(carNumber) {
        let car = this.vehicles.find(x => x.carNumber === carNumber);
        if (!car) {
            throw new Error(`The car, you're looking for, is not found.`);
        }
        if (car.payed === false) {
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`);
        }
        let index = this.vehicles.findIndex(x => x.carNumber === carNumber);
        this.vehicles.splice(index, 1);
        return `${carNumber} left the parking lot.`;
    }
    pay(carNumber) {
        let car = this.vehicles.find(x => x.carNumber === carNumber);
        if (!car) {
            throw new Error(`${carNumber} is not in the parking lot.`);
        }
        if (car.payed === true) {
            throw new Error(`${carNumber}'s driver has already payed his ticket.`);
        }
        car.payed = true;
        return `${carNumber}'s driver successfully payed for his stay.`
    }
    getStatistics(carNumber) {
        let result = '';
        if (arguments.length === 0) {
            result += `The Parking Lot has ${this.capacity - this.vehicles.length} empty spots left.`;
            let sortedCars = this.vehicles.slice(0).sort((a, b) => a.carModel.localeCompare(b.carModel));
            for (let car of sortedCars) {
                result += `\n${car.carModel} == ${car.carNumber} - ${car.payed ? 'Has payed' : 'Not payed'}`;
            }
        } else {
            let car = this.vehicles.find(x => x.carNumber === carNumber);
            return `${car.carModel} == ${car.carNumber} - ${car.payed ? 'Has payed' : 'Not payed'}`;
        }
        return result;
    }
}
