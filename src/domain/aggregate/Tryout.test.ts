import Tryout, { Tryouts } from "./Tryout";
import Subtest, { Subtests } from "./Subtest";
import Member, { Members } from "../entity/Member";
import Question, { Questions } from "./Question";
import Option, { Options } from "../valueobject/Option";
import Point from "../valueobject/Point";
import OptionID from "../enum/OptionID";
import Email from "../valueobject/Email";
import Name from "../valueobject/Name";
import Password from "../valueobject/Password";
import MemberPoint, { MemberPoints } from "../valueobject/MemberPoint";

describe("Tryout", () => {
  let tryout: Tryout;
  let subtests: Subtests;
  let members: Members;
  let question: Question;
  let options: Options;
  let point: Point;
  let email: Email;
  let name: Name;
  let password: Password;
  let memberpoints: MemberPoints;
  let optionID: OptionID;
  let questionID: Question;

  beforeEach(() => {
    email = new Email("test@example.com");
    point = new Point(10, 0, 0);
    name = new Name("John", "Doe");
    password = new Password("$2b$10$WCZ6j4PLICecyCYvBvL7We");
    memberpoints = [new MemberPoint(optionID, 10)];
    members = [new Member(email, name, password, memberpoints)];
    options = [
      new Option(OptionID.A, "Option A"),
      new Option(OptionID.B, "Option B"),
    ];
    question = new Question(
      "Question Title",
      "Question Description",
      options,
      OptionID.A,
      point
    );
    subtests = [new Subtest("Subtest Title", [question], 30)];
    tryout = new Tryout("Tryout 1", subtests, members);
  });

  it("should create a Tryout object with a unique ID, title, subtests and members", () => {
    const title = "Test Tryout";
    const tryout = new Tryout(title, subtests, members);

    expect(tryout.id).toEqual(expect.any(String));
    expect(tryout.title).toEqual(title);
    expect(tryout.subtests).toEqual(subtests);
    expect(tryout.members).toEqual(members);
    expect(tryout.isPublished).toBe(false);
  });

  it("should throw an error if title is an empty string", () => {
    expect(() => new Tryout("", [], [])).toThrowError("Title cannot be empty");
  });

  it("should add subtests to the tryout", () => {
    const tryout = new Tryout("Test Tryout", [], []);
    const subtest = new Subtest("Subtest Title", [question], 30);
    tryout.addSubtest(subtest);
    expect(tryout.subtests).toContain(subtest);
  });

  it("should add members to the tryout", () => {
    const tryout = new Tryout("Test Tryout", [], []);
    const member = new Member(email, name, password, memberpoints);
    tryout.addMember(member);
    expect(tryout.members).toContain(member);
  });

  it("should be able to publish and unpublish the tryout", () => {
    const tryout = new Tryout("Test Tryout", [], []);
    expect(tryout.isPublished).toBe(false);
    tryout.publish();
    expect(tryout.isPublished).toBe(true);
    tryout.unpublish();
    expect(tryout.isPublished).toBe(false);
  });
});
