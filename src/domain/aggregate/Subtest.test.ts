import Subtest from "./Subtest";
import Question from "./Question";
import Option from "../valueobject/Option";
import OptionID from "../enum/OptionID";
import Point from "../valueobject/Point";

describe("Subtest Class", () => {
  let subtest: Subtest;
  let question: Question;
  let options: Option[];
  let point: Point;

  beforeEach(() => {
    options = [
      new Option(OptionID.A, "Option A"),
      new Option(OptionID.B, "Option B"),
    ];
    point = new Point(10, 0, 0);
    question = new Question(
      "Question Title",
      "Question Description",
      options,
      OptionID.A,
      point
    );
    subtest = new Subtest("Subtest Title", [question], 30);
  });

  it("should be able to create a subtest object", () => {
    expect(subtest).toBeDefined();
    expect(subtest.id).toBeDefined();
    expect(subtest.title).toBe("Subtest Title");
    expect(subtest.questions).toEqual([question]);
    expect(subtest.durationInMinutes).toBe(30);
  });

  it("should throw an error if the subtest title is empty", () => {
    expect(() => new Subtest("", [question], 30)).toThrowError(
      "title cannot be empty"
    );
  });

  it("should throw an error if the duration is 0", () => {
    expect(() => new Subtest("Subtest Title", [question], 0)).toThrowError(
      "you must set the duration of the test!"
    );
  });

  it("should be able to add a question to the subtest", () => {
    const newQuestion = new Question(
      "Question Title 2",
      "Question Description 2",
      options,
      OptionID.B,
      point
    );
    subtest.addQuestion(newQuestion);

    expect(subtest.questions).toEqual([question, newQuestion]);
  });
});
