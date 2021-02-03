// # 2
function solve() {
    class Pet {
        constructor(owner, name) {
            this.owner = owner;
            this.name = name;
            this.comments = [];
        }
        addComment(str) {
            if (this.comments.includes(str)) {
                throw new Error('This comment is already added!');
            } else {
                this.comments.push(str);
                return 'Comment is added.';
            }
        }
        feed() {
            return `${this.name} is fed`;
        }
        toString() {
            let result = `Here is ${this.owner}'s pet ${this.name}.`;
            if (this.comments.length > 0) {
                result += `\nSpecial requirements: ${this.comments.join(', ')}`;
            }
            return result;
        }
    }
    class Cat extends Pet {
        constructor(owner, name, insideHabits, scratching) {
            super(owner, name);
            this.insideHabits = insideHabits;
            this.scratching = scratching;
        }
        feed() {
            return super.feed() + ", happy and purring.";
        }
        toString() {
            let result = super.toString() + `\nMain information:\n${this.name} is a cat with ${this.insideHabits}`;
            if (this.scratching) {
                result += ", but beware of scratches.";
            }
            return result;
        }
    }
    class Dog extends Pet {
        constructor(owner, name, runningNeeds, trainability) {
            super(owner, name);
            this.runningNeeds = runningNeeds;
            this.trainability = trainability;
        }
        feed() {
            return super.feed() + ", happy and wagging tail.";
        }
        toString() {
            let result = super.toString() + `\nMain information:\n${this.name} is a dog with need of ${this.runningNeeds}km running every day and ${this.trainability} trainability.`;
            return result;
        }
    }

    return {
        Pet,
        Cat,
        Dog
    };
}

// # 3
class VeterinaryClinic {
    constructor(clinicName, capacity) {
        this.clinicName = clinicName;
        this.capacity = capacity;
        this.clients = [];

        this.totalProfit = 0;
        this.currentWorkload = 0;;
    }
    newCustomer(ownerName, petName, kind, procedures) {
        kind = kind.toLowerCase();
        if (Object.keys(this.clients).length === this.capacity) {
            throw new Error("Sorry, we are not able to accept more patients!");
        }
        if (this.clients.hasOwnProperty(ownerName)) {
            if (this.clients[ownerName].hasOwnProperty(petName) && this.clients[ownerName][petName].procedures.length > 0) {
                throw new Error(`This pet is already registered under ${ownerName} name! ${petName} is on our lists, waiting for ${this.clients[ownerName][petName].procedures.join(', ')}.`);
            }
            this.clients[ownerName][petName] = {
                kind: kind,
                procedures: procedures
            };
        } else {
            this.clients[ownerName] = {};
            this.clients[ownerName][petName] = {
                kind: kind,
                procedures: procedures
            };
        }



        this.currentWorkload++;

        return `Welcome ${petName}!`;
    }
    onLeaving(ownerName, petName) {
        if (!this.clients.hasOwnProperty(ownerName)) {
            throw new Error("Sorry, there is no such client!");
        }
        if (!this.clients[ownerName].hasOwnProperty(petName) || this.clients[ownerName][petName].procedures.length === 0) {
            throw new Error(`Sorry, there are no procedures for ${petName}!`);
        }
        for (let elem of this.clients[ownerName][petName].procedures) {
            this.totalProfit += 500;
        }
        this.clients[ownerName][petName].procedures = [];
        this.currentWorkload--;

        return `Goodbye ${petName}. Stay safe!`;
    }
    toString() {
        let percentage = this.currentWorkload / this.capacity * 100;
        let fullInformation = `${this.clinicName} is ${percentage}% busy today!\nTotal profit: ${this.totalProfit.toFixed(2)}$`;
        let sortedNames = Object.keys(this.clients).sort((a, b) => a.localeCompare(b));
        for (let name of sortedNames) {
            fullInformation += `\n${name} with:`;
            let sortedPets = Object.keys(this.clients[name]).sort((a, b) => a.localeCompare(b));
            for (let pet of sortedPets) {
                fullInformation += `\n---${pet} - a ${this.clients[name][pet].kind} that needs: ${this.clients[name][pet].procedures.join(', ')}`;
            }
        }
        return fullInformation;
    }
}
let clinic = new VeterinaryClinic('SoftCare', 10);
clinic.newCustomer('Jim Jones', 'Tom', 'Cat', ['A154B', '2C32B', '12CDB']);
clinic.newCustomer('Anna Morgan', 'Max', 'Dog', ['SK456', 'DFG45', 'KS456'])
clinic.newCustomer('Jim Jones', 'Tiny', 'Cat', ['A154B'])
clinic.onLeaving('Jim Jones', 'Tiny');
console.log(clinic.toString());
