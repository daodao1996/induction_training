const TAXI_BASIC_FEE = 6;
const TAXI_BASIC_DISTANCE = 2;
const PRICE_INCREASE_KILOMETERS = 8;
const FARE_WITHIN_PRICE_INCREASE_KM = 0.8;
const FARE_RATIO_OVER_PRICE_INCREASE_KM = 0.5;
const PARKING_WAITING_FEE = 0.25;

module.exports = function calculateTaxiFare(distance,parkingTime) {
  if(distance<0){
    return 0;
  }else{
    return Math.round(calculateFreightRates(distance) + calculateParkingTimeRates(parkingTime));
  }
};

const calculateFreightRates = function (distance) {
  if(distance <= TAXI_BASIC_DISTANCE){
    return TAXI_BASIC_FEE;
  }else if(distance <= PRICE_INCREASE_KILOMETERS){
    return TAXI_BASIC_FEE + (distance - TAXI_BASIC_DISTANCE) * FARE_WITHIN_PRICE_INCREASE_KM;
  }else{
    return (TAXI_BASIC_FEE + (PRICE_INCREASE_KILOMETERS-TAXI_BASIC_DISTANCE) * FARE_WITHIN_PRICE_INCREASE_KM)
     + (distance-PRICE_INCREASE_KILOMETERS) * FARE_WITHIN_PRICE_INCREASE_KM * (1+FARE_RATIO_OVER_PRICE_INCREASE_KM);
  }
}

const calculateParkingTimeRates = function (parkingTime) {
  if(parkingTime<0){
    return 0;
  }else{
    return parkingTime * PARKING_WAITING_FEE;
  }
}
