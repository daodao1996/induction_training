const main = require('../main/main');

describe('taxi fee', function () {
  it("when driving distance 1 km,parking time 0 minutes", () => {
      let price = main(1,0);
      expect(price).toEqual(6);
    });

  it("when driving distance 1 km,parking time 3 minutes", () => {
      let price = main(1,3);
      expect(price).toEqual(7);
    });

  it("when driving distance 4.7 km,parking time 0 minutes", () => {
      let price = main(4.7,0);
      expect(price).toEqual(8);
    });

  it("when driving distance 6.8 km,parking time 6.5 minutes", () => {
      let price = main(6.8,6.5);
      expect(price).toEqual(11);
    });

  it("when driving distance 12 km,parking time 0 minutes", () => {
      let price = main(12,0);
      expect(price).toEqual(16);
    });

  it("when driving distance 15.7 km,parking time 8.5 minutes", () => {
      let price = main(15.7,8.5);
      expect(price).toEqual(22);
    });

  it("when driving distance -5 km,parking time 6 minutes", () => {
      let price = main(-5,6);
      expect(price).toEqual(0);
    });

  it("when driving distance 8 km,parking time -6 minutes", () => {
      let price = main(7,-6);
      expect(price).toEqual(10);
    });
});
