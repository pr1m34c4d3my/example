import Question from "../../domain/aggregate/Question";
import Tryout from "../../domain/aggregate/Tryout";
import Member from "../../domain/entity/Member";
import OptionID from "../../domain/enum/OptionID";
import MemberRepository from "../../domain/repository/MemberRepository";
import { TryoutRepository } from "../../domain/repository/TryoutRepository";

export default class MemberService {
  private _tryoutRepository: TryoutRepository;
  private _memberRepository: MemberRepository;

  constructor(
    tryoutRepository: TryoutRepository,
    memberRepository: MemberRepository
  ) {
    this._tryoutRepository = tryoutRepository;
    this._memberRepository = memberRepository;
  }

  public get memberRepository(): MemberRepository {
    return this._memberRepository;
  }

  public get tryoutRepository(): TryoutRepository {
    return this._tryoutRepository;
  }

  public async joinTryout(tryout: Tryout, member: Member): Promise<void> {
    const assignMember = await this.memberRepository.getMember(member.email);
    tryout.addMember(assignMember);
    await this.tryoutRepository.updateTryout(tryout);
  }

  public async chooseOption(
    optionID: OptionID,
    questionID: Question,
    member: Member
  ): Promise<void> {
    await this.tryoutRepository.getTryout(questionID.id);
    const member0 = await this.memberRepository.getMember(member.email);
    const answer = member0.chooseOption(optionID, questionID.id);

    if (!answer) {
      throw new Error(
        `Member ${member.email} has not answered question ${questionID}`
      );
    }

    await this.memberRepository.updateMember(member0);
  }

  public async totalPoint(tryout: Tryout, member: Member): Promise<number> {
    const member0 = await this.memberRepository.getMember(member.email);
    let totalPoint = 0;

    tryout.subtests.forEach((subtest) => {
      subtest.questions.forEach((question) => {
        const answer = member0.memberPoints;
        if (answer && answer) {
          totalPoint += Number(question.point);
        }
      });
    });

    member0.memberPoints;
    await this.memberRepository.updateMember(member0);

    return totalPoint;
  }
}
