const findSquare = (num) =>{
    let square = [];

    num.forEach((element) => {
        square.push(element**2);
        
    });

    return square;
}

console.log(findSquare([5,2,7,9,10]));

//-----------Easy method------------ 
const squareArray = (numbers, power) =>
 numbers.map((element) => element ** power);

console.log(squareArray([4,7,9,10,11,15], 2));
console.log(squareArray([4,7,9,10,11,15], 3));