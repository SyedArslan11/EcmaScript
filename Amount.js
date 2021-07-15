const AvgCost = (distance, Mileage, FuelPrice) =>
   Math.round((distance/Mileage)* FuelPrice);

    console.log(`Amount need to fill fuel is Rs. ${AvgCost(303,37,110.08)}`);


    console.log(Math.ceil(12.44));