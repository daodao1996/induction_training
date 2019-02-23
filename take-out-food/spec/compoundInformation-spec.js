let compoundInformation = require('../src/compoundInformation');

describe('compoundInformation', function () {
  it('Use a discount of 指定菜品半价', function() {
    let inputsFoodDetails = [
      {id:"ITEM0001",number:1,name:"黄焖鸡",price:18.00,totalPrice:18.00},
      {id:"ITEM0013",number:2,name:"肉夹馍",price:6.00,totalPrice:12.00},
      {id:"ITEM0022",number:1,name:"凉皮",price:8.00,totalPrice:8.00}
    ];
    let inputsPromotionMethod = {reducingAmount:13,discountInformation:"指定菜品半价(黄焖鸡，凉皮)"};
    let summary = compoundInformation(inputsFoodDetails,inputsPromotionMethod);
    let expected = `============= 订餐明细 =============
黄焖鸡 x 1 = 18元
肉夹馍 x 2 = 12元
凉皮 x 1 = 8元
-----------------------------------
使用优惠:
指定菜品半价(黄焖鸡，凉皮)，省13元
-----------------------------------
总计：25元
===================================`;
    expect(summary).toEqual(expected)
  });

  it('Use a discount of 满30减6元', function() {
    let inputsFoodDetails = [
      {id:"ITEM0013",number:4,name:"肉夹馍",price:6.00,totalPrice:24.00},
      {id:"ITEM0022",number:1,name:"凉皮",price:8.00,totalPrice:8.00}
    ];
    let inputsPromotionMethod = {reducingAmount:6,discountInformation:"满30减6元"};
    let summary = compoundInformation(inputsFoodDetails,inputsPromotionMethod);
    let expected = `============= 订餐明细 =============
肉夹馍 x 4 = 24元
凉皮 x 1 = 8元
-----------------------------------
使用优惠:
满30减6元，省6元
-----------------------------------
总计：26元
===================================`;
    expect(summary).toEqual(expected)
  });

  it('no promotion', function() {
    let inputsFoodDetails = [
      {id:"ITEM0013",number:4,name:"肉夹馍",price:6.00,totalPrice:24.00}
    ];
    let inputsPromotionMethod = {reducingAmount:0};
    let summary = compoundInformation(inputsFoodDetails,inputsPromotionMethod);
    let expected = `============= 订餐明细 =============
肉夹馍 x 4 = 24元
-----------------------------------
总计：24元
===================================`;
    expect(summary).toEqual(expected)
  });
});
