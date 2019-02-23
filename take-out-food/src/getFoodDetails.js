var loadAllItems = require('./items');

let getFoodDetails = function (selectedItems) {
    let foodDetails = splitInput(selectedItems);
    foodDetails = getOtherDetails(foodDetails);
    return foodDetails;
}

let splitInput = function (selectedItems) {
  return selectedItems.map(item => {
    let itemInfo = item.split("x").map(info => info.trim());
    return {id : itemInfo[0],number : parseFloat(itemInfo[1])<0 ? 0 : parseFloat(itemInfo[1])};
  });
}

let getOtherDetails = function (foodDetails) {
  let allItems = loadAllItems();
  foodDetails.forEach(food => {
    let currentFoodDetail = allItems.find(item => item.id === food.id);
    food.name = currentFoodDetail.name;
    food.price = currentFoodDetail.price;
    food.totalPrice = food.number * food.price;
  });
  return foodDetails;
}

module.exports = {
  getFoodDetails,
  splitInput,
  getOtherDetails
}
