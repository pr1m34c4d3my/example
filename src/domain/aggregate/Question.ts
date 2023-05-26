import { v4 as uuidv4 } from "uuid";

import Option, { Options } from "../valueobject/Option";
import OptionID from "../enum/OptionID";
import Point from "../valueobject/Point";

export default class Question {
  private _id: string;
  private _title: string;
  private _description: string;
  private _options: Options;
  private _answer: OptionID;
  private _point: Point;

  constructor(
    title: string,
    description: string,
    options: Options,
    answer: OptionID,
    point: Point
  ) {
    if (title === "") {
      throw new Error("title cannot be empty");
    }
    if (description === "") {
      throw new Error("description cannot be empty");
    }
    if (answer === OptionID.NotAnswer) {
      throw new Error("You should input the correct answer");
    }
    this._id = uuidv4();
    this._title = title;
    this._description = description;
    this._options = options;
    this._answer = answer;
    this._point = point;
  }

  public get id(): string {
    return this._id;
  }

  public get title(): string {
    return this._title;
  }

  public get description(): string {
    return this._description;
  }

  public get options(): Options {
    return this._options;
  }

  public get answer(): OptionID {
    return this._answer;
  }

  public get point(): Point {
    return this._point;
  }

  public addOption(option: Option): void {
    this._options.push(option);
  }

  public chooseAnswer(optionID: OptionID): boolean {
    return optionID === this._answer;
  }
}

export type Questions = Question[];
