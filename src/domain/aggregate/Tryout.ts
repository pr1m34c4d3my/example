import { v4 as uuidv4 } from "uuid";

import Subtest, { Subtests } from "./Subtest";
import Member, { Members } from "../entity/Member";

export default class Tryout {
  private _id: string;
  private _title: string;
  private _isPublished: boolean;
  private _subtests: Subtests;
  private _members: Members;

  constructor(title: string, subtests: Subtests, members: Members) {
    if (title === "") {
      throw new Error("Title cannot be empty");
    }
    this._id = uuidv4();
    this._title = title;
    this._isPublished = false;
    this._subtests = subtests;
    this._members = members;
  }

  public get id(): string {
    return this._id;
  }

  public get title(): string {
    return this._title;
  }

  public get isPublished(): boolean {
    return this._isPublished;
  }

  public get subtests(): Subtests {
    return this._subtests;
  }

  public get members(): Members {
    return this._members;
  }

  public publish(): void {
    this._isPublished = true;
  }

  public unpublish(): void {
    this._isPublished = false;
  }

  public addSubtest(subtest: Subtest): void {
    this._subtests.push(subtest);
  }

  public addMember(member: Member): void {
    this._members.push(member);
  }
}

export type Tryouts = Tryout[];
