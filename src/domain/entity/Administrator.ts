import { v4 as uuidv4 } from "uuid";
import Question, { Questions } from "../aggregate/Question";
import Subtest, { Subtests } from "../aggregate/Subtest";
import Tryout from "../aggregate/Tryout";
import OptionID from "../enum/OptionID";
import Email from "../valueobject/Email";
import MemberPoint, { MemberPoints } from "../valueobject/MemberPoint";
import Name from "../valueobject/Name";
import Option, { Options } from "../valueobject/Option";
import Password from "../valueobject/Password";
import Point from "../valueobject/Point";
import Member, { Members } from "./Member";
import User from "./User";

export default class Administrator extends User {
  constructor(email: Email, name: Name, password: Password) {
    super(email, name, password);
  }

  public createTryout(
    title: string,
    subtests: Subtests,
    members: Members
  ): Tryout {
    if (title === "") {
      throw new Error("Title cannot be empty");
    }
    const id = uuidv4();
    const tryout = new Tryout(title, subtests, members);
    tryout.publish();
    return tryout;
  }

  public createSubtest(
    title: string,
    questions: Questions,
    durationInMinutes: number
  ): Subtest {
    if (title === "") {
      throw new Error("Title cannot be empty");
    }
    const id = uuidv4();
    const subtest = new Subtest(title, questions, durationInMinutes);
    return subtest;
  }

  public createQuestion(
    title: string,
    description: string,
    options: Options,
    answer: OptionID,
    point: Point
  ): Question {
    if (title === "") {
      throw new Error("title cannot be empty");
    }
    if (description === "") {
      throw new Error("description cannot be empty");
    }
    if (answer === OptionID.NotAnswer) {
      throw new Error("You should input the correct answer");
    }
    const id = uuidv4();
    const question = new Question(title, description, options, answer, point);
    return question;
  }

  public createOption(optionID: OptionID, description: string): Option {
    if (optionID === OptionID.NotAnswer) {
      throw new Error("option ID cannot be empty");
    }
    if (description === "") {
      throw new Error("description cannot be empty");
    }
    const option = new Option(optionID, description);
    return option;
  }

  public createMember(
    email: Email,
    name: Name,
    password: Password,
    memberPoints: MemberPoints
  ): Member {
    const member = new Member(email, name, password, memberPoints);
    return member;
  }
}
