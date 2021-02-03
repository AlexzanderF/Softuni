function solve(input) {
    let income = Number(input.shift())
    let avgGrade = Number(input.shift())
    let minSalary = Number(input.shift())

    let isExcellent = false;
    let isSocial = false;

    let socialSch = 0
    let excellentSch = 0

    if (avgGrade >= 5.5) {
        isExcellent = true;
        excellentSch = Math.floor(avgGrade * 25)
    }

    if (income <= minSalary && avgGrade >= 4.50) {
        isSocial = true;
        socialSch = Math.floor(minSalary * 0.35)
    }

    if (socialSch <= excellentSch) {
        console.log(`You get a scholarship for excellent results ${excellentSch} BGN`)
    }
    else if (excellentSch < socialSch) {
        console.log(`You get a Social scholarship ${socialSch} BGN`)
    }
    else {
        console.log("You cannot get a scholarship!")
    }

}