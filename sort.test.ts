import { sort } from "./sort";

describe("sort", () => {
  it("should return STANDARD for normal package", () => {
    expect(sort(10, 10, 10, 5)).toBe("STANDARD");
  });

  it("should return SPECIAL for bulky package by volume", () => {
    expect(sort(100, 100, 100, 5)).toBe("SPECIAL");
  });

  it("should return SPECIAL for bulky package by dimension", () => {
    expect(sort(151, 10, 10, 5)).toBe("SPECIAL");
    expect(sort(10, 151, 10, 5)).toBe("SPECIAL");
    expect(sort(10, 10, 151, 5)).toBe("SPECIAL");
  });

  it("should return SPECIAL for heavy package", () => {
    expect(sort(10, 10, 10, 20)).toBe("SPECIAL");
    expect(sort(10, 10, 10, 25)).toBe("SPECIAL");
  });

  it("should return REJECTED for heavy and bulky package", () => {
    expect(sort(151, 10, 10, 20)).toBe("REJECTED");
    expect(sort(100, 100, 100, 20)).toBe("REJECTED");
  });

  it("should handle edge cases for exactly 150cm dimension", () => {
    expect(sort(150, 10, 10, 5)).toBe("SPECIAL");
    expect(sort(10, 150, 10, 5)).toBe("SPECIAL");
    expect(sort(10, 10, 150, 5)).toBe("SPECIAL");
  });

  it("should handle edge case for exactly 1,000,000cm³ volume", () => {
    expect(sort(100, 100, 100, 5)).toBe("SPECIAL");
    expect(sort(100, 100, 100, 20)).toBe("REJECTED");
  });

  it("should handle edge case for exactly 20kg mass", () => {
    expect(sort(10, 10, 10, 20)).toBe("SPECIAL");
    expect(sort(151, 10, 10, 20)).toBe("REJECTED");
  });
});
