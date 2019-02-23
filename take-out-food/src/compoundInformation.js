module.exports = function compoundInformation(foodDetails,promotionMethod) {

  let food = "";
  let total = 0;
  foodDetails.forEach(item => {
    food += `\n${item.name} x ${item.number} = ${item.totalPrice}元`;
    total += item.totalPrice;
  });

  let promotion = ``;
  if(promotionMethod.reducingAmount > 0){
      promotion = `\n-----------------------------------
使用优惠:
${promotionMethod.discountInformation}，省${promotionMethod.reducingAmount}元`;
  }

  return `============= 订餐明细 =============${food}${promotion}
-----------------------------------
总计：${total-promotionMethod.reducingAmount}元
===================================`;
}
