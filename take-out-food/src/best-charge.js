var getFoodDetails = require('./getFoodDetails').getFoodDetails;
var discount = require('./discount').discount;
var compoundInformation = require('./compoundInformation');

function bestCharge(selectedItems) {
  let foodDetails = getFoodDetails(selectedItems);
  let promotionMethod = discount(foodDetails);

  return compoundInformation(foodDetails,promotionMethod);
}

module.exports = {
  bestCharge
}
