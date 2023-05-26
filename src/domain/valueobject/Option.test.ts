import Option from "./Option";
import OptionID from "../enum/OptionID";

describe("Option", () => {
  it("should create an option with a given optionID and description", () => {
    const optionID = OptionID.A;
    const description = "Option A description";
    const option = new Option(optionID, description);

    expect(option.optionID).toEqual(optionID);
    expect(option.description).toEqual(description);
  });

  it("should throw an error if the optionID is not provided", () => {
    const description = "Option A description";
    const createOption = () => new Option(OptionID.NotAnswer, description);

    expect(createOption).toThrowError("option ID cannot be empty");
  });

  it("should throw an error if the description is not provided", () => {
    const optionID = OptionID.A;
    const createOption = () => new Option(optionID, "");

    expect(createOption).toThrowError("description cannot be empty");
  });
});
