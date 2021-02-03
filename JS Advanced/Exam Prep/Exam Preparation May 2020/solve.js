// # 2
function pressHouse() {
    class Article {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }
        toString() {
            return `Title: ${this.title}\nContent: ${this.content}`;
        }
    }
    class ShortReports extends Article {
        constructor(title, content, originalResearch) {
            super(title, content);
            if (content.length >= 150) {   // this.content
                throw new Error('Short reports content should be less then 150 symbols.');
            }
            if (!(originalResearch.hasOwnProperty('title') && originalResearch.hasOwnProperty('author'))) {
                throw new Error('The original research should have author and title.');
            }
            this.originalResearch = originalResearch;
            this.comments = [];
        }
        addComment(str) {
            this.comments.push(str);
            return "The comment is added.";
        }
        toString() {
            let result = super.toString();
            result += `\nOriginal Research: ${this.originalResearch.title} by ${this.originalResearch.author}`;
            if (this.comments.length > 0) {
                result += `\nComments:\n${this.comments.join('\n')}`;
            }
            return result;
        }
    }
    class BookReview extends Article {
        constructor(title, content, book) {
            super(title, content);
            this.book = book;
            this.clients = [];
        }
        addClient(name, description) {
            if (this.clients.some(x => x.clientName === name && x.orderDescription === description)) {
                throw new Error('This client has already ordered this review.');
            }
            this.clients.push({ clientName: name, orderDescription: description });
            return `${name} has ordered a review for ${this.book.name}`;
        }
        toString() {
            let result = super.toString();
            result += `\nBook: ${this.book.name}`;
            if (this.clients.length > 0) {
                result += `\nOrders:\n${this.clients.map(x => `${x.clientName} - ${x.orderDescription}`).join('\n')}`;
            }
            return result;
        }
    }

    return {
        Article,
        ShortReports,
        BookReview
    };
}

// # 3
class Bank {
    constructor(name) {
        this._bankName = name;
        this.allCustomers = [];
    }
    newCustomer(customer) {
        if (this.allCustomers.some(x => JSON.stringify(x) === JSON.stringify(customer))) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
        }
        this.allCustomers.push(customer);
        return customer;
    }
    depositMoney(id, amount) {
        if (!this.allCustomers.some(x => x.personalId === id)) {
            throw new Error('We have no customer with this ID!');
        }
        for (let obj of this.allCustomers) {
            if (obj.personalId === id) {
                if (obj.hasOwnProperty('totalMoney')) {
                    obj['totalMoney'] += amount;
                } else {
                    obj['totalMoney'] = amount;
                }
                if (!obj.hasOwnProperty('transactions')) {
                    obj['transactions'] = [];
                }
                obj['transactions'].unshift(`${obj.firstName} ${obj.lastName} made deposit of ${amount}$!`);
                return obj['totalMoney'] + '$';
            }
        }
    }
    withdrawMoney(id, amount) {
        if (!this.allCustomers.some(x => x.personalId === id)) {
            throw new Error('We have no customer with this ID!');
        }
        for (let obj of this.allCustomers) {
            if (obj.personalId === id) {
                if (obj.totalMoney >= amount && obj.hasOwnProperty('totalMoney')) {
                    obj['totalMoney'] -= amount;
                    obj['transactions'].unshift(`${obj.firstName} ${obj.lastName} withdrew ${amount}$!`);
                    return obj['totalMoney'] + '$';
                } else {
                    throw new Error(`${obj.firstName} ${obj.lastName} does not have enough money to withdraw that amount!`);
                }
            }
        }
    }
    customerInfo(id) {
        if (!this.allCustomers.some(x => x.personalId === id)) {
            throw new Error('We have no customer with this ID!');
        }
        let currCustomer = this.allCustomers.find(x => x.personalId === id);
        let result = `Bank name: ${this._bankName}\nCustomer name: ${currCustomer.firstName} ${currCustomer.lastName}\nCustomer ID: ${currCustomer.personalId}\nTotal Money: ${currCustomer.totalMoney}$\nTransactions:`;
        let transactionsList = ``;
        currCustomer.transactions.forEach((x, i) => {
            transactionsList += `\n${currCustomer.transactions.length - i}. ${x}`;
        });
        return result + transactionsList;
    }
}
