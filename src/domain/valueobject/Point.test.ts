import Point from "./Point";

describe("Point class", () => {
  describe("constructor", () => {
    it("should create an instance of Point with correct values", () => {
      const right = 10;
      const wrong = 2;
      const notAnswer = 1;
      const point = new Point(right, wrong, notAnswer);

      expect(point.right).toBe(right);
      expect(point.wrong).toBe(wrong);
      expect(point.notAnswer).toBe(notAnswer);
    });

    it("should throw error if right answer is lower than 0 or empty", () => {
      expect(() => new Point(-1, 2, 3)).toThrow(
        "right answer cannot be lower than 0 or empty"
      );
      expect(() => new Point(0, 2, 3)).toThrow(
        "right answer cannot be lower than 0 or empty"
      );
    });
  });
});
