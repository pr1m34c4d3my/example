import MemberPoint, { MemberPoints } from "../valueobject/MemberPoint";
import User from "./User";
import Email from "../valueobject/Email";
import Password from "../valueobject/Password";
import Name from "../valueobject/Name";
import OptionID from "../enum/OptionID";

export default class Member extends User {
  private _memberPoints: MemberPoints;

  constructor(
    email: Email,
    name: Name,
    password: Password,
    memberPoints: MemberPoints
  ) {
    super(email, name, password);
    this._memberPoints = memberPoints;
  }

  public get memberPoints(): MemberPoints {
    return this._memberPoints;
  }

  public addPassword(password: Password) {
    super._password = password;
  }

  public chooseOption(optionID: OptionID, questionID: string): MemberPoint {
    let memberPoint = this._memberPoints.find(
      (memberPoint) => memberPoint.questionID === questionID
    );
    if (!memberPoint) {
      throw new Error("Question not found");
    }

    memberPoint.optionID = optionID;
    return memberPoint;
  }

  public totalPoint(tryoutID: string): number {
    let total = 0;
    this._memberPoints.forEach((memberPoint: MemberPoint) => {
      if (memberPoint.questionID === tryoutID) {
        total += memberPoint.point;
      }
    });
    return total;
  }
}

export type Members = Member[];
