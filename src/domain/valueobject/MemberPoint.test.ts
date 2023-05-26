import MemberPoint from "./MemberPoint";
import OptionID from "../enum/OptionID";

describe("MemberPoint", () => {
  it("should initialize with optionID, point and questionID", () => {
    const optionID = OptionID.A;
    const point = 10;
    const memberPoint = new MemberPoint(optionID, point);

    expect(memberPoint.optionID).toBe(optionID);
    expect(memberPoint.point).toBe(point);
    expect(memberPoint.questionID).toBeDefined();
  });

  it("should throw an error if optionID is not answered", () => {
    const optionID = OptionID.NotAnswer;
    const point = 10;
    expect(() => new MemberPoint(optionID, point)).toThrow();
  });
});
