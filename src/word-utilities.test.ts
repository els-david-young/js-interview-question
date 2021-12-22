import { isAnagram } from "../src/word-utilities";

describe("test isAnagram function", () => {
  it("should return true when words are equal", () => {
    expect(isAnagram("wibble", "wobble")).toBeTruthy();
  });
});
