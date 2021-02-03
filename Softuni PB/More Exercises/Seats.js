function solve(input) {
    let n = Number(input.shift());

    for (let i = 1; i <= n; i++){
        let seatCode = input.shift();
        
        if (seatCode.length === 4 ){
            if(seatCode.charCodeAt(0) >= 65 && seatCode.charCodeAt(0) <= 90){
                let print = `${seatCode.charAt(0)}${seatCode.charAt(1)}${seatCode.charAt(2)}`;
                console.log(`Seat decoded: ${print}`);
            } else{
                let print = `${seatCode.charAt(3)}${seatCode.charAt(1)}${seatCode.charAt(2)}`;
                console.log(`Seat decoded: ${print}`);
            }

        } else {
            let print = `${seatCode.charAt(0)}${seatCode.charCodeAt(1)}`;
            console.log(`Seat decoded: ${print}`);
        }


    }


}

solve([ '3', '042W', 'W981', 'W24578' ]);