import MemberRepository from "../../domain/repository/MemberRepository";
import Email from "../../domain/valueobject/Email";
import Name from "../../domain/valueobject/Name";
import Password from "../../domain/valueobject/Password";
import Member from "../../domain/entity/Member";

export default class MemberService {
  private _memberRepository: MemberRepository;

  constructor(memberRepository: MemberRepository) {
    this._memberRepository = memberRepository;
  }

  public async addMember(email: Email, name: Name): Promise<void> {
    const member = new Member(email, name, new Password(), []);
    await this._memberRepository.saveMember(member);
  }

  public async addPasswordMember(
    password: Password,
    email: Email
  ): Promise<void> {
    const member = await this._memberRepository.getMember(email);
    if (!member) {
      throw new Error(`Member with email ${email} not found`);
    }

    member.addPassword(password);
    await this._memberRepository.updateMember(member);
  }
}
