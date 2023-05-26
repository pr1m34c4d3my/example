import Tryout, { Tryouts } from "../aggregate/Tryout";

export interface TryoutRepository {
  getPublishedTryouts(): Promise<Tryouts>;
  saveTryout(tryout: Tryout): Promise<void>;
  getTryout(tryoutID: string): Promise<Tryout>;
  updateTryout(tryout: Tryout): Promise<void>;
}
