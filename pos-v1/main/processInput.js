const loadAllItems = require('./datbase').loadAllItems;

let group = function (inputs) {
  let productArray = [];
  inputs.forEach(product => {
    let productCodeNumber = product.split("-");
    let targetProduct = productArray.find(item => item.barcode === productCodeNumber[0]);
    if(targetProduct){
      productCodeNumber[1]?targetProduct.count+=productCodeNumber[1]:targetProduct.count++;
    }else{
      productArray.push({barcode:productCodeNumber[0],count:productCodeNumber[1]?parseFloat(productCodeNumber[1]):1});
    }
  });
  return productArray;
}

let getInformation = function (productArray) {
  let allItems = loadAllItems();
  productArray.map(product => {
    let info = allItems.find(p => p.barcode === product.barcode);
    product.name = info.name;
    product.unit = info.unit;
    product.price = info.price;
  });

  return productArray;
}

module.exports={
  group,
  getInformation
}
