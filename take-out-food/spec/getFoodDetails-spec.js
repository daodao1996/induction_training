const splitInput = require('../src/getFoodDetails').splitInput;
const getOtherDetails = require('../src/getFoodDetails').getOtherDetails;
const getFoodDetails = require('../src/getFoodDetails').getFoodDetails;

describe('getFoodDetails', function () {
  it('getFoodDetails', function() {
    let inputs = ["ITEM0001 x 1", "ITEM0013 x 2", "ITEM0022 x 1"];
    let summary = getFoodDetails(inputs);
    let expected =[
      {id:"ITEM0001",number:1,name:"黄焖鸡",price:18.00,totalPrice:18.00},
      {id:"ITEM0013",number:2,name:"肉夹馍",price:6.00,totalPrice:12.00},
      {id:"ITEM0022",number:1,name:"凉皮",price:8.00,totalPrice:8.00},
    ];
    expect(summary).toEqual(expected)
  });
});

describe('splitInput', function () {
  it('split the input and return an array', function() {
    let inputs = ["ITEM0001 x 1", "ITEM0013 x 2", "ITEM0022 x 1"];
    let summary = splitInput(inputs);
    let expected =[
      {id:"ITEM0001",number:1},
      {id:"ITEM0013",number:2},
      {id:"ITEM0022",number:1}
    ];
    expect(summary).toEqual(expected)
  });

  it('if the number is less than 0,display 0', function() {
    let inputs = ["ITEM0001 x 10", "ITEM0030 x 2", "ITEM0022 x -3"];
    let summary = splitInput(inputs);
    let expected =[
      {id:"ITEM0001",number:10},
      {id:"ITEM0030",number:2},
      {id:"ITEM0022",number:0}
    ];
    expect(summary).toEqual(expected)
  });
});

describe('getOtherDetails', function () {
  it('complete the food information according to the input array', function() {
    let inputs = [
      {id:"ITEM0001",number:1},
      {id:"ITEM0013",number:2},
      {id:"ITEM0022",number:1}
    ];
    let summary = getOtherDetails(inputs);
    let expected =[
      {id:"ITEM0001",number:1,name:"黄焖鸡",price:18.00,totalPrice:18.00},
      {id:"ITEM0013",number:2,name:"肉夹馍",price:6.00,totalPrice:12.00},
      {id:"ITEM0022",number:1,name:"凉皮",price:8.00,totalPrice:8.00}
    ];
    expect(summary).toEqual(expected)
  });

  it('the number is 0', function() {
    let inputs = [
      {id:"ITEM0001",number:10},
      {id:"ITEM0030",number:2},
      {id:"ITEM0022",number:0}
    ];;
    let summary = getOtherDetails(inputs);
    let expected =[
      {id:"ITEM0001",number:10,name:"黄焖鸡",price:18.00,totalPrice:180.00},
      {id:"ITEM0030",number:2,name:"冰峰",price:2.00,totalPrice:4.00},
      {id:"ITEM0022",number:0,name:"凉皮",price:8.00,totalPrice:0}
    ];
    expect(summary).toEqual(expected)
  });
});
