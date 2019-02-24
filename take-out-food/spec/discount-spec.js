const discount = require('../src/discount').discount;
const discount30Minus6 = require('../src/discount').discount30Minus6;
const discountHalfPrice = require('../src/discount').discountHalfPrice;

describe('discount', function () {
  it('The food selected by the customer meets both two discount,the final discount is 满30减6元', function() {
    let inputs = [
      {id:"ITEM0013",number:4,name:"肉夹馍",price:6.00,totalPrice:24.00},
      {id:"ITEM0022",number:1,name:"凉皮",price:8.00,totalPrice:8.00}
    ];
    let summary = discount(inputs);
    let expected ={reducingAmount:6,discountInformation:"满30减6元"};
    expect(summary).toEqual(expected)
  });

  it('The food selected by the customer meets both two discount,the final discount is 指定菜品半价', function() {
    let inputs = [
      {id:"ITEM0001",number:1,name:"黄焖鸡",price:18.00,totalPrice:18.00},
      {id:"ITEM0013",number:2,name:"肉夹馍",price:6.00,totalPrice:12.00},
      {id:"ITEM0022",number:1,name:"凉皮",price:8.00,totalPrice:8.00}
    ];
    let summary = discount(inputs);
    let expected = {reducingAmount:13,discountInformation:"指定菜品半价(黄焖鸡，凉皮)"};
    expect(summary).toEqual(expected)
  });

  it('Does not satisfy any offers', function() {
    let inputs = [
      {id:"ITEM0013",number:1,name:"肉夹馍",price:6.00,totalPrice:6.00},
      {id:"ITEM0030",number:1,name:"冰峰",price:2.00,totalPrice:2.00}
    ];
    let summary = discount(inputs);
    let expected = {reducingAmount:0};
    expect(summary).toEqual(expected)
  });
});

describe('discount30Minus6', function () {
  it('The food selected by the customer meets the discount of 满30减6元', function() {
    let inputs = [
      {id:"ITEM0001",number:1,name:"黄焖鸡",price:18.00,totalPrice:18.00},
      {id:"ITEM0013",number:2,name:"肉夹馍",price:6.00,totalPrice:12.00},
var loadPromotions = require('../src/promotions');

      {id:"ITEM0022",number:1,name:"凉皮",price:8.00,totalPrice:8.00}
    ];
    let summary = discount30Minus6(inputs);
    let expected ={reducingAmount:6,discountInformation:"满30减6元"};
    expect(summary).toEqual(expected)
  });

  it('The food selected by the customer does not satisfy the discount of 满30减6元', function() {
    let inputs = [
      {id:"ITEM0001",number:1,name:"黄焖鸡",price:18.00,totalPrice:18.00},
      {id:"ITEM0013",number:1,name:"肉夹馍",price:6.00,totalPrice:6.00},
      {id:"ITEM0030",number:1,name:"冰峰",price:2.00,totalPrice:2.00}
    ];
    let summary = discount30Minus6(inputs);
    let expected = {reducingAmount:0};
    expect(summary).toEqual(expected)
  });
});

describe('discountHalfPrice', function () {
  let discountedFood = loadPromotions()[1].items;
  it('The food selected by the customer meets the discount of 指定菜品半价(黄焖鸡和凉皮)', function() {
    let inputs = [
      {id:"ITEM0001",number:1,name:"黄焖鸡",price:18.00,totalPrice:18.00},
      {id:"ITEM0013",number:2,name:"肉夹馍",price:6.00,totalPrice:12.00},
      {id:"ITEM0022",number:1,name:"凉皮",price:8.00,totalPrice:8.00}
    ];
    let summary = discountHalfPrice(inputs,discountedFood);
    let expected ={reducingAmount:13,discountInformation:"指定菜品半价(黄焖鸡，凉皮)"};
    expect(summary).toEqual(expected)
  });

  it('The food selected by the customer meets the discount of 指定菜品半价(凉皮)', function() {
    let inputs = [
      {id:"ITEM0030",number:2,name:"冰峰",price:2.00,totalPrice:4.00},
      {id:"ITEM0022",number:1,name:"凉皮",price:8.00,totalPrice:8.00}
    ];
    let summary = discountHalfPrice(inputs,discountedFood);
    let expected ={reducingAmount:4,discountInformation:"指定菜品半价(凉皮)"};
    expect(summary).toEqual(expected)
  });

  it('The food selected by the customer does not satisfy the discount of 指定菜品半价', function() {
    let inputs = [
      {id:"ITEM0013",number:1,name:"肉夹馍",price:6.00,totalPrice:6.00},
      {id:"ITEM0030",number:1,name:"冰峰",price:2.00,totalPrice:2.00}
    ];
    let summary = discountHalfPrice(inputs,discountedFood);
    let expected = {reducingAmount:0,discountInformation:`指定菜品半价()`};
    expect(summary).toEqual(expected)
  });
});
