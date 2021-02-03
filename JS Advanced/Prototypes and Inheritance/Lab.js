// # 1
function personAndTeacher() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
    }
    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }
    }
    return {
        Person,
        Teacher
    }
}
// # 2
function toStringExtension() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
        // toString() {
        //     return `${this.constructor.name} (${Object.getOwnPropertyNames(this).map(x => x + ': ' + this[x]).join(', ')})`;
        // }
    }
    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }
    }
    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }
    }
    return {
        Person,
        Teacher,
        Student
    }
}

// # 3
function extendProrotype(classToExtend) {
    classToExtend.prototype.species = 'Human';
    classToExtend.prototype['toSpeciesString'] = function () {
        return `I am a ${this.species}. ${this.toString()}`;
    };
}

// # 4
function classHierarchy() {
    class Figure {
        constructor(unit = 'cm') {
            this.unit = unit;
        }
        changeUnits(value) {
            this.unit = value;
        }
        convertUnits(value) {
            let currUnit = this.unit;
            switch (currUnit) {
                case 'mm':
                    value = value * 10;
                    break;
                case 'm':
                    value = value * 0.01;
                    break;
            }
            return value;
        }
    }
    class Circle extends Figure {
        constructor(radius, unit) {
            super(unit);
            this.radius = radius;
        }
        get area() {
            return Math.PI * this.convertUnits(this.radius) ** 2;
        }
        toString() {
            return `Figures units: ${this.unit} Area: ${this.area} - radius: ${this.convertUnits(this.radius)}`;
        }
    }
    class Rectangle extends Figure {
        constructor(width, height, unit) {
            super(unit);
            this.width = width;
            this.height = height;
        }
        get area() {
            return this.convertUnits(this.width) * this.convertUnits(this.height);
        }
        toString() {
            return `Figures units: ${this.unit} Area: ${this.area} - width: ${this.convertUnits(this.width)}, height: ${this.convertUnits(this.height)}`;
        }
    }

    return {
        Figure,
        Circle,
        Rectangle
    };
}

classHierarchy();