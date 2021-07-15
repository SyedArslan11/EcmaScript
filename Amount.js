const AvgCost = (distance, Mileage, FuelPrice) =>
    (distance/Mileage)* FuelPrice;

    console.log(`Amount need to fill fuel is Rs. ${AvgCost(303,37,110.08)}`);