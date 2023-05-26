export default class Point {
  private _right: number;
  private _wrong: number;
  private _notAnswer: number;

  constructor(right: number, wrong: number, notAnswer: number) {
    if (right <= 0) {
      throw new Error("right answer cannot be lower than 0 or empty");
    }

    this._right = right;
    this._wrong = wrong;
    this._notAnswer = notAnswer;
  }

  public get right(): number {
    return this._right;
  }

  public get wrong(): number {
    return this._wrong;
  }

  public get notAnswer(): number {
    return this._notAnswer;
  }
}
