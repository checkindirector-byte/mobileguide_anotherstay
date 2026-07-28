import test from "node:test";
import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import { resolve } from "node:path";
const root = resolve(import.meta.dirname,"..");
const read = file => readFile(resolve(root,file),"utf8");

test("single lodging data source contains all guide routes and four languages",async()=>{
  const data = await read("assets/site-data.js");
  for(const route of ["checkin","checkout","transport","wifi","appliances","laundry","trash","rules","nearby","guidebook"]) assert.match(data,new RegExp("\\b"+route+"\\b"));
  assert.ok(data.includes("const I = (ko, en, ja, zh)"));
  assert.doesNotMatch(data,/FAQ|faq|EXTAY|guide-extay/);
});

test("navigation stays on the root URL and uses no hash routes",async()=>{
  const html = await read("index.html"); const app = await read("assets/app.js");
  assert.doesNotMatch(html,/http-equiv="refresh"|href="#/i);
  assert.doesNotMatch(app,/location\.hash\s*=/);
  assert.match(app,/history\.replaceState/);
});

test("public bundle excludes credentials and duplicate FAQ data",async()=>{
  const bundle = (await Promise.all(["index.html","assets/app.js","assets/site-data.js"].map(read))).join("\n");
  for(const forbidden of ["8282","another1234","faqData","faq-data"]) assert.equal(bundle.includes(forbidden),false);
});

test("hero motion matches the master timing contract",async()=>{
  const css = await read("assets/styles.css"); const app = await read("assets/app.js");
  assert.match(css,/scale\(1\.20\)/); assert.match(css,/heroZoomOut 3\.2s cubic-bezier\(\.22,1,\.36,1\)/); assert.match(css,/prefers-reduced-motion/);
  assert.match(app,/visibilitychange/); assert.match(app,/pageshow/); assert.match(app,/image\.decode/);
});

test("SEO and OG assets are complete",async()=>{
  const html = await read("index.html");
  for(const token of ["canonical","og:image","twitter:card","application/ld+json"]) assert.ok(html.includes(token));
  await access(resolve(root,"assets/images/another-house-og-20260727.jpg"));
  await access(resolve(root,"assets/fonts/oxanium-latin.woff2"));
});


test("multi-page appliance diagrams use the peek carousel contract",async()=>{
  const html = await read("index.html");
  const alias = await read("guide-anotherstay.html");
  const app = await read("assets/master-app.js");
  const data = await read("assets/site-data.js");
  assert.match(app,/device-guide-carousel/);
  assert.match(app,/device-guide-page/);
  assert.match(html,/flex:0 0 calc\(100% - 52px\)/);
  assert.equal(html,alias);
  assert.doesNotMatch(data,/official-haatz-hec1050-use-p13-ko/);
});
