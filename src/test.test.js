const method = () => 2 + 5;

describe("Test CI", () => {
  it("Run Travis CI, good scenario", () => {
    expect(method()).toEqual(7);
  });
});
