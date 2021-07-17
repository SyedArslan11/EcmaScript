const SumOfArray = (numbers) => {
    let sumEven=0;
    let sumOdd=0;
    numbers.forEach((element) => {
        element % 2 == 0
        ? (sumEven = sumEven + element)
        : (sumOdd = sumOdd + element);
    });
    return `Sum of Even Numbers=${sumEven} and 
    Sum of Odd Number= ${sumOdd}
    TOtal Sum=${sumEven + sumOdd}`;
};
    

console.log(SumOfArray([5,2,7,9,10,8,17,115,10]));
