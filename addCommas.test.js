const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });
});


describe("convert num to string with correct format", () => {
  test("Should convert 1222 to 1,222", () => {
    expect(addCommas(1222)).toBe("1,222")
  })
})


describe("convert num to string with correct format", () => {
  test("Should convert 1222.22 to 1,222.22", () => {
    expect(addCommas(1222.22)).toBe("1,222.22")
  })
})

describe("convert num to string with correct format", () => {
  test("Should convert 12 to 12", () => {
    expect(addCommas(12)).toBe("12")
  })
})

