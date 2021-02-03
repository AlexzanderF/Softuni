// # 1
(function solve() {
    Array.prototype.last = function () {
        return this[this.length - 1];
    };
    Array.prototype.skip = function (n) {
        return this.slice(n);
    };
    Array.prototype.take = function (n) {
        return this.slice(0, n);
    };
    Array.prototype.sum = function () {
        return this.reduce((acc, curr) => {
            return acc + curr;
        });
    }
    Array.prototype.average = function () {
        return this.reduce((acc, curr) => {
            return acc + curr;
        }) / this.length;
    }
}); // () IIFE

// # 2
function solve1() {
    class Balloon {
        constructor(color, gasWeight) {
            this.color = color;
            this.gasWeight = gasWeight;
        }
    }
    class PartyBalloon extends Balloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength) {
            super(color, gasWeight);
            this._ribbon = {
                ribbonColor: ribbonColor,
                ribbonLength: ribbonLength
            };
        }
        get ribbon() {
            return this._ribbon;
        }
    }
    class BirthdayBalloon extends PartyBalloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength, text) {
            super(color, gasWeight, ribbonColor, ribbonLength);
            this._text = text;
        }
        get text() {
            return this._text;
        }
    }
    return {
        Balloon,
        PartyBalloon,
        BirthdayBalloon
    };
}

// # 3
function solve2() {
    class Employee {
        constructor(name, age) {
            if (new.target === Employee) {
                throw new Error('Cannot instantiate directly.');
            }
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
        }
        work() {
            let currTask = this.tasks.shift();
            console.log(this.name + currTask);
            this.tasks.push(currTask);
        }
        collectSalary() {
            if (this.constructor.name === 'Manager') {
                console.log(`${this.name} received ${this.salary + this.dividend} this month.`);
            } else {
                console.log(`${this.name} received ${this.salary} this month.`);
            }
        }
    }
    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks.push(' is working on a simple task.');
        }
    }
    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks.push(' is working on a complicated task.');
            this.tasks.push(' is taking time off work.');
            this.tasks.push(' is supervising junior workers.');
        }
    }
    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);
            this.dividend = 0;
            this.tasks.push(' scheduled a meeting.');
            this.tasks.push(' is preparing a quarterly report.');
        }
    }

    return { Employee, Manager, Senior, Junior };
}
// 4
function solve3() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }
        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }
    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }
        addComment(value) {
            this.comments.push(value);
        }
        toString() {
            let result = super.toString() + `\nRating: ${this.likes - this.dislikes}`;
            if (this.comments.length > 0) {
                result += `\nComments:\n * ${this.comments.join('\n * ')}`;
            }
            return result;
        }
    }
    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }
        view() {
            this.views++;
            return this;
        }
        toString() {
            let result = super.toString() + `\nViews: ${this.views}`;
            return result;
        }
    }

    return { Post, SocialMediaPost, BlogPost };
}

// # 5
function createComputerHierarchy() {
    class Product {
        constructor(manufacturer) {
            if (new.target === Product) {
                throw new Error('Cannot instantiate directly.');
            }
            this.manufacturer = manufacturer;
        }
    }
    class Keyboard extends Product {
        constructor(manufacturer, responseTime) {
            super(manufacturer);
            this.responseTime = responseTime;
        }
    }
    class Monitor extends Product {
        constructor(manufacturer, width, height) {
            super(manufacturer);
            this.width = width;
            this.height = height;
        }
    }
    class Battery extends Product {
        constructor(manufacturer, expectedLife) {
            super(manufacturer);
            this.expectedLife = expectedLife;
        }
    }
    class Computer extends Product {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            if (new.target === Computer) {
                throw new Error('Cannot instantiate directly.');
            }
            super(manufacturer);
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    }
    class Laptop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = weight;
            this.color = color;
            if (battery instanceof Battery === false) {
                throw new TypeError('Unexpected instance.');
            }
            this._battery = battery;
        }
        set battery(value) {
            if (value instanceof Battery === false) {
                throw new TypeError('Unexpected instance.');
            }
            this._battery = value;
        }
        get battery() {
            return this._battery;
        }
    }
    class Desktop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            if ((keyboard instanceof Keyboard) === false || (monitor instanceof Monitor) === false) {
                throw new TypeError('Unexpected instance.');
            }
            this._keyboard = keyboard;
            this._monitor = monitor;
        }
        set keyboard(value) {
            if (value instanceof Keyboard === false) {
                throw new TypeError('Unexpected instance.');
            }
            this._keyboard = value;
        }
        get keyboard() {
            return this._keyboard;
        }
        set monitor(value) {
            if (value instanceof Monitor === false) {
                throw new TypeError('Unexpected instance.');
            }
            this._monitor = value;
        }
        get monitor() {
            return this._monitor;
        }
    }

    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}

// # 6
function createMixins() {
    function computerQualityMixin(classToExtend) {
        classToExtend.prototype.getQuality = function () {
            let quality = (this.processorSpeed + this.ram + this.hardDiskSpace) / 3;
            return quality;
        };
        classToExtend.prototype.isFast = function () {
            if (this.processorSpeed > (this.ram / 4)) {
                return true;
            }
            return false;
        };
        classToExtend.prototype.isRoomy = function () {
            if (this.hardDiskSpace > Math.floor(this.ram * this.processorSpeed)) {
                return true;
            }
            return false;
        };
    }
    function styleMixin(classToExtend) {
        classToExtend.prototype.isFullSet = function () {
            let compMan = this.manufacturer;
            let keyMan = this._keyboard.manufacturer;
            let monMan = this._monitor.manufacturer;
            if (compMan === keyMan && compMan === monMan) {
                return true;
            }
            return false;
        };
        classToExtend.prototype.isClassy = function () {
            if (this._battery.expectedLife >= 3 && (this.color === 'Silver' || this.color === 'Black') && this.weight < 3) {
                return true;
            }
            return false;
        };
    }

    return {
        computerQualityMixin,
        styleMixin
    }
}

