const BiggerNumOpt = (num1,num2,num3,num4) => {
    let BigNum=100;

    BigNum = (num1>num2) ? num1 : num2;

    BigNum = (BigNum>num3) ? BigNum : num3;

    BigNum = (BigNum>num4) ? BigNum : num4;

    return BigNum;


}


console.log(`Bigger Number is ${BiggerNumOpt(251, 562, 775, 921)}`);