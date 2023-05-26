import Member, { Members } from "../entity/Member";
import Tryout from "../aggregate/Tryout";
import Email from "../valueobject/Email";

export default interface MemberRepository {
  getMembers(tryoutID: Tryout): Promise<Members>;
  saveMember(member: Member): Promise<void>;
  getMember(email: Email): Promise<Member>;
  updateMember(member: Member): Promise<Member>;
}
