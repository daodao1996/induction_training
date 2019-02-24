var getFoodDetails = require('./getFoodDetails').getFoodDetails;
var discount = require('./discount').discount;
var compoundInformation = require('./compoundInformation');

function bestCharge(selectedItems) {
  if(selectedItems.length > 0){
    let foodDetails = getFoodDetails(selectedItems);
    let promotionMethod = discount(foodDetails);

    return compoundInformation(foodDetails,promotionMethod);
  }
}

module.exports = {
  bestCharge
}
