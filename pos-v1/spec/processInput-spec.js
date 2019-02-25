const group = require('../main/processInput').group;
const getInformation = require('../main/processInput').getInformation;

describe('group', function () {
  it('group the input array', function() {
    let inputs = [
    'ITEM000001',
    'ITEM000001',
    'ITEM000001',
    'ITEM000001',
    'ITEM000001',
    'ITEM000003-2',
    'ITEM000005',
    'ITEM000005',
    'ITEM000005'
    ];
    let summary = group(inputs);
    let expected =[
      {barcode:'ITEM000001',count:5},
      {barcode:'ITEM000003',count:2},
      {barcode:'ITEM000005',count:3},
    ];
    expect(summary).toEqual(expected)
  });
});

describe('getInformation', function () {
  it('Completing product information', function() {
    let inputs = [
      {barcode:'ITEM000001',count:5},
      {barcode:'ITEM000003',count:2},
      {barcode:'ITEM000005',count:3},
    ];
    let summary = getInformation(inputs);
    let expected =[
      {barcode:'ITEM000001',count:5,name: '雪碧',unit: '瓶',price: 3.00},
      {barcode:'ITEM000003',count:2,name: '荔枝',unit: '斤',price: 15.00},
      {barcode:'ITEM000005',count:3,name: '方便面',unit: '袋',price: 4.50}
    ];
    expect(summary).toEqual(expected)
  });
});
