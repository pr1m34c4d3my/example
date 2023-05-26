import Member, { Members } from "./Member";
import Email from "../valueobject/Email";
import Name from "../valueobject/Name";
import Password from "../valueobject/Password";
import MemberPoint, { MemberPoints } from "../valueobject/MemberPoint";
import OptionID from "../enum/OptionID";

describe("Member", () => {
  let member: Member;
  const email = new Email("test@example.com");
  const name = new Name("John Doe");
  const password = new Password("password");
  const memberPoints: MemberPoint[] = [
    new MemberPoint(OptionID.A, 10),
    new MemberPoint(OptionID.B, 5),
    new MemberPoint(OptionID.C, 2),
  ];

  beforeEach(() => {
    member = new Member(email, name, password, memberPoints);
  });

  describe("constructor", () => {
    it("should create a member with the correct properties", () => {
      expect(member.email).toEqual(email);
      expect(member.name).toEqual(name);
      expect(member.password).toEqual(password);
      expect(member.memberPoints).toEqual(memberPoints);
    });
  });

  describe("chooseOption", () => {
    it("should update the member's memberPoints with the selected optionID", () => {
      const newOptionID = OptionID.A;
      const questionID = member.memberPoints[0].questionID;
      const updatedMemberPoint = member.chooseOption(newOptionID, questionID);

      expect(updatedMemberPoint.optionID).toEqual(newOptionID);
    });

    it("should throw an error if the questionID is not found", () => {
      const newOptionID = OptionID.A;
      const questionID = "invalid_question_id";

      expect(() => {
        member.chooseOption(newOptionID, questionID);
      }).toThrowError("Question not found");
    });
  });

  describe("totalPoint", () => {
    it("should calculate the total point of the member for the specified tryoutID", () => {
      const tryoutID = member.memberPoints[0].questionID;
      const expectedTotalPoint = member.memberPoints[0].point;

      expect(member.totalPoint(tryoutID)).toEqual(expectedTotalPoint);
    });

    it("should return 0 if the tryoutID is not found", () => {
      const tryoutID = "invalid_tryout_id";

      expect(member.totalPoint(tryoutID)).toEqual(0);
    });
  });

  describe("addPassword", () => {
    it("should update the member's password", () => {
      const newPassword = new Password("newpassword");
      member.addPassword(newPassword);

      expect(member.password).toEqual(newPassword);
    });
  });
});
