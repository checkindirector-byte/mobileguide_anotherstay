import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");

test("site includes core guest-guide routes", async () => {
  const js = await readFile(resolve(root, "assets/app.js"), "utf8");
  for (const route of ["checkin", "checkout", "wifi", "appliances", "laundry", "trash", "rules", "location", "nearby", "gallery"]) {
    assert.match(js, new RegExp(`\\b${route}\\b`));
  }
});

test("public navigation keeps the browser URL on the root domain", async () => {
  const html = await readFile(resolve(root, "index.html"), "utf8");
  const js = await readFile(resolve(root, "assets/app.js"), "utf8");
  assert.doesNotMatch(html, /http-equiv="refresh"/i);
  assert.doesNotMatch(html, /href="#/);
  assert.doesNotMatch(js, /location\.hash\s*=/);
  assert.match(js, /history\.replaceState/);
});

test("public files do not expose private access credentials", async () => {
  const html = await readFile(resolve(root, "index.html"), "utf8");
  const js = await readFile(resolve(root, "assets/app.js"), "utf8");
  assert.equal(html.includes("8282") || js.includes("8282"), false);
  assert.equal(html.includes("another1234") || js.includes("another1234"), false);
});

test("four guest languages are present", async () => {
  const js = await readFile(resolve(root, "assets/app.js"), "utf8");
  for (const lang of ["ko:", "en:", "ja:", "zh:"]) assert.match(js, new RegExp(lang));
});
