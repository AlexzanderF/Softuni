// # 1
function solve() {
    return {
        mage(name) {
            return {
                name,
                health: 100,
                mana: 100,
                cast(spell) {
                    this.mana--;
                    console.log(`${this.name} cast ${spell}`);
                }
            }
        },
        fighter(name) {
            return {
                name,
                health: 100,
                stamina: 100,
                fight() {
                    this.stamina--;
                    console.log(`${this.name} slashes at the foe!`);
                }
            }
        }
    };
}

// # 2
function constructionCrew(worker) {
    let { dizziness, levelOfHydrated: water } = worker;
    if (dizziness) {
        water += (0.1 * worker.weight * worker.experience);
        worker.levelOfHydrated = water;
        worker.dizziness = false;
    }
    return worker;
}

// # 3
function carFactory(car) {
    let newObj = {
        model: car.model,
        engine: {},
        carriage: {
            type: car.carriage,
            color: car.color
        },
        wheels: [0, 0, 0, 0].fill(car.wheelsize % 2 === 0 ? car.wheelsize - 1 : car.wheelsize)
    };
    if (car.power <= 90) {
        newObj['engine'] = {
            power: 90,
            volume: 1800
        }
    } else if (car.power <= 120) {
        newObj['engine'] = {
            power: 120,
            volume: 2400
        }
    } else {
        newObj['engine'] = {
            power: 200,
            volume: 3500
        }
    }
    return newObj;
}

// # 4
function solve() {
    return {
        extend: function (template) {
            for (let key in template) {
                if (template[key] instanceof Function) {
                    this.__proto__[key] = template[key];
                } else {
                    this[key] = template[key];
                }
            }
        }
    };
}

// # 5
(function solve() {
    String.prototype['ensureStart'] = function (str) {
        if ((this.split(' ')[0] + ' ') !== str) {
            return str + this;
        }
        return this.slice(0);
    }
    String.prototype['ensureEnd'] = function (str) {
        let arr = this.split(' ');
        if ((' ' + arr[arr.length - 1]) !== str) {
            return this + str;
        }
        return this.slice(0);
    }
    String.prototype['isEmpty'] = function () {
        return this.length > 0 ? false : true;
    }
    String.prototype['truncate'] = function (n) {
        if (this.length <= n) {
            return this.slice(0);
        } else {
            if (n < 4) {
                return '.'.repeat(n);
            }
            let str = this.split(' ');
            if (str.length === 1) {
                return this.substr(0, n - 3) + '...';
            } else {
                let result = '';
                for (let i = 0; i < str.length; i++) {
                    if ((result + str[i]).length <= n - 3) {
                        result += str[i] + ' ';
                    } else {
                        break;
                    }
                }
                result = result.split(' ').filter(x => x !== '').join(' ') + '...';
                return result;
            }
        }
    }
    String['format'] = function (str, ...paramas) {
        str = str.split(' ');
        for (let i = 0; i < str.length; i++) {
            if (/{\d+}/g.test(str[i]) && paramas.length !== 0) {
                str[i] = paramas.shift();
            }
        }
        return str.join(' ');
    }
});// add () for judge to work (IIFY)

// # 6
function solve() {
    let list = [];
    return {
        add(elem) {
            list.push(elem);
            list = list.sort((a, b) => a - b);
        },
        remove(index) {
            if (index >= 0 && index < list.length) {
                list.splice(index, 1);
            }
        },
        get(i) {
            if (i >= 0 && i < list.length) {
                return list[i];
            }
        },
        get size() {
            return list.length;
        }
    };
}

