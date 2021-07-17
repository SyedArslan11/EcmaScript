const FencingCostForTri = (h,b,a,NumberOfWire,CostPerFeet) =>{
    const parimeter = h + b + a;
    const totalCost = parimeter * NumberOfWire * CostPerFeet;
    return totalCost;
}

console.log(`Total For Fencing is Rs. ${FencingCostForTri(10,12,18,5,10)}`)