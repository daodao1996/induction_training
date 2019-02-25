const calculateTaxiFare = require('../main/main');

describe('taxi fee', function () {
  it("when driving distance 1 km,parking time 0 minutes and should return 6", () => {
      let price = calculateTaxiFare(1,0);
      expect(price).toEqual(6);
    });

  it("when driving distance 1 km,parking time 3 minutes,should return 7", () => {
      let price = calculateTaxiFare(1,3);
      expect(price).toEqual(7);
    });

  it("when driving distance 4.7 km,parking time 0 minutes,should return 8", () => {
      let price = calculateTaxiFare(4.7,0);
      expect(price).toEqual(8);
    });

  it("when driving distance 6.8 km,parking time 6.5 minutes,should return 11", () => {
      let price = calculateTaxiFare(6.8,6.5);
      expect(price).toEqual(11);
    });

  it("when driving distance 12 km,parking time 0 minutes,should return 16", () => {
      let price = calculateTaxiFare(12,0);
      expect(price).toEqual(16);
    });

  it("when driving distance 15.7 km,parking time 8.5 minutes,should return 22", () => {
      let price = calculateTaxiFare(15.7,8.5);
      expect(price).toEqual(22);
    });

  it("when driving distance -5 km(system marked as 0),parking time 6 minutes,should return 0", () => {
      let price = calculateTaxiFare(-5,6);
      expect(price).toEqual(0);
    });

  it("when driving distance 8 km,parking time -6 minutes(system marked as 0),should return 10", () => {
      let price = calculateTaxiFare(7,-6);
      expect(price).toEqual(10);
    });
});
