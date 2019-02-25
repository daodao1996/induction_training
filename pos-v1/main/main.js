const loadPromotions = require('./datbase').loadPromotions;
const group = require('./processInput').group;
const getInformation = require('./processInput').getInformation;

function printInventory(inputs) {
  if(inputs.length > 0){
    let groupedInputs = group(inputs);
    let groupedArray = getInformation(groupedInputs);

    let productPromotion = calculateGiftsNumber(groupedArray);
    let inventory = compoundInventory(productPromotion[0],productPromotion[1]);
    console.log(inventory);
    return inventory;
  }
};

let calculateGiftsNumber = function (productArray) {
  let promotions = loadPromotions();
  let gift=[];

  promotions.forEach(discount => {
    if(discount.type === "BUY_TWO_GET_ONE_FREE"){
      productArray.forEach(product => {
          if(discount.barcodes.find(item => item === product.barcode)){
            product.totalPrice = product.price * (product.count-Math.floor(product.count/3));
            gift.push({name:product.name,giftCount:Math.floor(product.count/3),unit:product.unit,price:product.price});
          }else{
            product.totalPrice = product.price * product.count;
          }
      });
    }
  });

  return [productArray,gift];
}

let compoundInventory = function (productArray,gift) {
  let allItemsPrice = 0.00;
  let products = productArray.map(item => {
    allItemsPrice += item.totalPrice;
    return `名称：${item.name}，数量：${item.count}${item.unit}，单价：${item.price.toFixed(2)}(元)，小计：${item.totalPrice.toFixed(2)}(元)`;
  });

  let gifts=[];
  let reducePrice=0.00;
  if(gift.length > 0){
    gifts = gift.map(item => {
      reducePrice += item.giftCount * item.price;
      return `名称：${item.name}，数量：${item.giftCount}${item.unit}`;
    });
  }else{
    gifts.push("无赠送商品");
  }

  return `***<没钱赚商店>购物清单***
${products.join("\n")}
----------------------
挥泪赠送商品：
${gifts.join("\n")}
----------------------
总计：${allItemsPrice.toFixed(2)}(元)
节省：${reducePrice.toFixed(2)}(元)
**********************`;
}

module.exports ={
  printInventory,
  calculateGiftsNumber
}
