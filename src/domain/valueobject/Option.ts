import OptionID from "../enum/OptionID";

export default class Option {
  private _optionID: OptionID;
  public _description: string;

  constructor(optionID: OptionID, description: string) {
    if (optionID === OptionID.NotAnswer) {
      throw new Error("option ID cannot be empty");
    }
    if (description === "") {
      throw new Error("description cannot be empty");
    }

    this._optionID = optionID;
    this._description = description;
  }

  public get optionID(): OptionID {
    return this._optionID;
  }

  public get description(): string {
    return this._description;
  }
}

export type Options = Option[];
