function solve(input){
    let herBook = input.shift();
    let capacity = Number(input.shift());
    let book = input.shift();
    let counter = 0;
    let found = false;

    while (capacity > counter){
        if (book === herBook){
            found = true;
            console.log(`You checked ${counter} books and found it.`)
            break;
        }
        counter++;
        book = input.shift();
    }
    if(found == false){
        console.log(`The book you search is not here!`);
        console.log(`You checked ${capacity} books.`);
    }

}

solve([ 'Troy', '8', 'Stronger', 'Life Style', 'Troy', '' ]);