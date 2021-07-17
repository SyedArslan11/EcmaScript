const FencingCost = (b,d, NumberOfWire, CostPerFeet) =>{
  const parimeter = b+b+d+d;

  const totalCost = parimeter*NumberOfWire*CostPerFeet;
  return totalCost;
} 

console.log(`Total Cost For Fencing Is Rs. ${FencingCost(40,70,7,12)}`);