import { v4 as uuidv4 } from "uuid";

import Question from "./Question";
import Option from "../valueobject/Option";
import OptionID from "../enum/OptionID";
import Point from "../valueobject/Point";

describe("Question", () => {
  it("should create an instance of Question", () => {
    const title = "What is your name?";
    const description = "Please tell me your name";
    const options = [
      new Option(OptionID.A, "John"),
      new Option(OptionID.B, "Jane"),
    ];
    const answer = OptionID.A;
    const point = new Point(10, 0, 0);

    const question = new Question(title, description, options, answer, point);

    expect(question).toBeInstanceOf(Question);
    expect(question.title).toEqual(title);
    expect(question.description).toEqual(description);
    expect(question.options).toEqual(options);
    expect(question.answer).toEqual(answer);
    expect(question.point).toEqual(point);
  });

  it("should throw an error if title is empty", () => {
    const title = "";
    const description = "Please tell me your name";
    const options = [
      new Option(OptionID.A, "John"),
      new Option(OptionID.B, "Jane"),
    ];
    const answer = OptionID.A;
    const point = new Point(10, 0, 0);

    expect(
      () => new Question(title, description, options, answer, point)
    ).toThrowError("title cannot be empty");
  });

  it("should throw an error if description is empty", () => {
    const title = "What is your name?";
    const description = "";
    const options = [
      new Option(OptionID.A, "John"),
      new Option(OptionID.B, "Jane"),
    ];
    const answer = OptionID.A;
    const point = new Point(10, 0, 0);

    expect(
      () => new Question(title, description, options, answer, point)
    ).toThrowError("description cannot be empty");
  });

  it("should throw an error if answer is not specified", () => {
    const title = "What is your name?";
    const description = "Please tell me your name";
    const options = [
      new Option(OptionID.A, "John"),
      new Option(OptionID.B, "Jane"),
    ];
    const answer = OptionID.NotAnswer;
    const point = new Point(10, 0, 0);

    expect(
      () => new Question(title, description, options, answer, point)
    ).toThrowError("You should input the correct answer");
  });

  it("should have an id property", () => {
    const question = new Question(
      "What is your name?",
      "Please tell me your name",
      [new Option(OptionID.A, "John"), new Option(OptionID.B, "Jane")],
      OptionID.A,
      new Point(10, 0, 0)
    );

    expect(question.id).toBeDefined();
    expect(question.id).toEqual(expect.any(String));
  });

  it("addOption should add an option to the question's options", () => {
    const title = "What is your name?";
    const description = "Please tell me your name";
    const options = [
      new Option(OptionID.A, "John"),
      new Option(OptionID.B, "Jane"),
    ];
    const answer = OptionID.A;
    const point = new Point(10, 0, 0);
    const question = new Question(title, description, options, answer, point);
    const newOption = new Option(OptionID.C, "Wisnu");

    question.addOption(newOption);

    expect(question.options).toContain(newOption);
  });

  it("should choose answer correctly", () => {
    const title = "What is your name?";
    const description = "Please tell me your name";
    const options = [
      new Option(OptionID.A, "John"),
      new Option(OptionID.B, "Jane"),
    ];
    const answer = OptionID.A;
    const point = new Point(10, 0, 0);

    const question = new Question(title, description, options, answer, point);
    expect(question.chooseAnswer(OptionID.A)).toBeTruthy();
    expect(question.chooseAnswer(OptionID.B)).toBeFalsy();
  });
});
