import OptionID from "./OptionID";

describe("OptionID", () => {
  it("should have options", () => {
    expect(OptionID.NotAnswer).toBe(0)
    expect(OptionID.A).toBe(1)
    expect(OptionID.B).toBe(2)
    expect(OptionID.C).toBe(3)
    expect(OptionID.D).toBe(4)
    expect(OptionID.E).toBe(5)
  })
});
