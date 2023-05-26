import { v4 as uuidv4 } from "uuid";

import Question, { Questions } from "./Question";

export default class Subtest {
  private _id: string;
  private _title: string;
  private _questions: Questions;
  private _durationInMinutes: number;

  constructor(title: string, questions: Questions, durationInMinutes: number) {
    if (title === "") {
      throw new Error("title cannot be empty");
    }
    if (durationInMinutes === 0) {
      throw new Error("you must set the duration of the test!");
    }
    this._id = uuidv4();
    this._title = title;
    this._questions = questions;
    this._durationInMinutes = durationInMinutes;
  }

  public get id(): string {
    return this._id;
  }

  public get title(): string {
    return this._title;
  }

  public get questions(): Questions {
    return this._questions;
  }

  public get durationInMinutes(): number {
    return this._durationInMinutes;
  }

  public addQuestion(question: Question): void {
    this._questions.push(question);
  }
}

export type Subtests = Subtest[];
