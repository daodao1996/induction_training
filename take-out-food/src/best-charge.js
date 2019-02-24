const getFoodDetails = require('./getFoodDetails').getFoodDetails;
const discount = require('./discount').discount;
const compoundInformation = require('./compoundInformation');

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
