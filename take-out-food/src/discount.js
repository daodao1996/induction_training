var loadPromotions = require('./promotions');

let discount = function (foodDetails) {
  let promotionMethod;
  loadPromotions().forEach(promotion => {
    if(promotion.type === "满30减6元"){
      promotionMethod = discount30Minus6(foodDetails);
    }else if(promotion.type === "指定菜品半价"){
      let promotionHalfPrice = discountHalfPrice(foodDetails,promotion.items);
      if(promotionHalfPrice.reducingAmount > promotionMethod.reducingAmount){
        promotionMethod = promotionHalfPrice;
      }
    }
  });

  return promotionMethod;
}

let discount30Minus6 = function (foodDetails) {
  let allItemsTotalPrice = foodDetails.reduce((totalPrice,food) => {
    return totalPrice + food.totalPrice
  },0);
  if(allItemsTotalPrice >= 30){
    return {reducingAmount:6,discountInformation:"满30减6元"};
  }else{
    return {reducingAmount:0};
  }
}

let discountHalfPrice = function (foodDetails,discountedFood) {
  let reducingAmount=0;
  let discountFood = [];
  foodDetails.forEach(food => {
    if(discountedFood.find(item => food.id === item)){
      reducingAmount += food.totalPrice/2;
      discountFood.push(food.name);
    }
  });
  return {reducingAmount:reducingAmount,
    discountInformation:`指定菜品半价(${discountFood.join("，")})`}
}

module.exports={
  discount,
  discount30Minus6,
  discountHalfPrice
}
