module.exports = function main(distance,parkingTime) {
  if(distance<0){
    return 0;
  }else{
    return Math.round(calculateFreightRates(distance) + calculateParkingTimeRates(parkingTime));
  }
};

let calculateFreightRates = function (distance) {
  if(distance <= 2){
    return 6;
  }else if(distance <= 8){
    return 6 + (distance - 2) * 0.8;
  }else{
    return 10.8 + (distance-8) * 0.8 * 1.5;
  }
}

let calculateParkingTimeRates = function (parkingTime) {
  if(parkingTime<0){
    return 0;
  }else{
    return parkingTime*0.25;
  }
}
