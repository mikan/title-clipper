import test from "node:test";
import assert from "node:assert";
import * as content from "../src/content.js";

test("any patterns", () => {
  [
    // [["title","url"],["expected"]
    [["title", "https://example.com/1"], "title\nhttps://example.com/1"],
    [[undefined, "https://example.com/2"], "https://example.com/2"],
  ].forEach((sample) => {
    assert.strictEqual(content.makeText(sample[0][0], sample[0][1]), sample[1]);
  });
});
