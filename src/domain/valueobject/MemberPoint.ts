import OptionID from "../enum/OptionID";
import { v4 as uuidv4 } from "uuid";
import Question from "../aggregate/Question";

export default class MemberPoint {
  private _optionID: OptionID;
  private _questionID: string;
  private _point: number;

  constructor(optionID: OptionID, point: number) {
    if (optionID === OptionID.NotAnswer) {
      throw new Error("option ID cannot be empty");
    }
    this._optionID = optionID;
    this._questionID = uuidv4();
    this._point = point;
  }

  public get optionID(): OptionID {
    return this._optionID;
  }

  public set optionID(optionID: OptionID) {
    this._optionID = optionID;
  }

  public get questionID(): string {
    return this._questionID;
  }

  public get point(): number {
    return this._point;
  }
}

export type MemberPoints = MemberPoint[];
