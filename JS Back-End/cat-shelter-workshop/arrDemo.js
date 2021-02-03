const { filter } = require("./handlers/handlers");

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const id = 2;
let filtered = arr.filter(x => x !== id);
for (let i = id - 1; i < filtered.length; i++) {
    filtered[i] = i + 1;
}
console.log(filtered);