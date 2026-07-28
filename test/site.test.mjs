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

test("home typography and approved hero subtitle follow the contract",async()=>{
  const html = await read("index.html");
  const app = await read("assets/master-app.js");
  const data = await read("assets/site-data.js");
  assert.match(html,/body \.top h1,body \.brand-home\{[^}]*font-size:18px!important[^}]*font-weight:400!important[^}]*letter-spacing:-\.015em!important/);
  assert.match(html,/\.hero-title,\.landing-hero \.hero-title\{[^}]*font-weight:300!important[^}]*letter-spacing:-\.02em!important/);
  assert.match(html,/\.landing-hero \.eyebrow\{[^}]*font-family:'Oxanium'/);
  assert.ok(data.includes("heroSubtitle: 'STAY ANOTHER LIFE'"));
  assert.match(app,/heroEyebrow\.textContent=t\(D\.heroSubtitle\)/);
});


test("home gallery copy, compact rhythm, and restaurant imagery are upgraded",async()=>{
  const html=await read("index.html");
  const app=await read("assets/master-app.js");
  const expanded=await read("assets/restaurant-expanded.js");
  assert.doesNotMatch(html,/previous-gallery-label|>03<|>THE HOUSE</);
  assert.match(html,/previous-gallery-kicker">ROOM PHOTOS/);
  assert.match(html,/previous-gallery-subtitle/);
  assert.ok(html.includes("객실 둘러보기"));
  assert.match(html,/previous-gallery-preview\{padding:36px[^}]*12px/);
  assert.match(html,/previous-gallery-subtitle\{[^}]*font-size:26px[^}]*font-weight:800/);
  assert.match(app,/homePickIds=\['duck','coffee'\]/);
  for(const id of ["blt-steak","tavolo24","pizzeria-o","the-place","onion-anguk","london-bagel","mil-toast","layered-bukchon","eggdrop","cheongsudang","fritz-wonseo","nuldam","donut-jungsu","taegeukdang"]) {
    assert.ok(expanded.includes(`add('${id}', '${id}', {`));
    await access(resolve(root,`assets/images/restaurants/${id}.webp`));
  }
});

test("guide page polish removes duplicates and matches the master media",async()=>{
  const html=await read("index.html");
  const app=await read("assets/master-app.js");
  const data=await read("assets/site-data.js");
  const restaurantData=await read("assets/restaurant-data.js");
  const restaurantExpanded=await read("assets/restaurant-expanded.js");
  const sources=JSON.parse(await read("assets/images/restaurants/photo-sources.json"));
  assert.doesNotMatch(html,/tour-hero-credit/);
  assert.match(html,/checkin-locker-card \.airport-card-body>\.figure\{[^}]*border-radius:8px[^}]*background:transparent/);
  assert.match(html,/trash-guide-card \.device-body>p\{[^}]*padding:22px 24px/);
  assert.match(html,/trash-guide-card \.device-body>\.steps\{padding:0 24px/);
  assert.match(app,/icons=\['climate','microwave','cooktop','purifier','fridge','guestbox'\]/);
  assert.match(app,/appliancesContent'\)\.innerHTML=p\.devices\.map/);
  assert.doesNotMatch(app,/\[\.\.\.p\.devices,washer\]/);
  assert.match(data,/nearby: \{[^\n]*hero: '\/assets\/images\/restaurants-hero\.jpg'/);
  assert.match(restaurantData,/hero: '\/assets\/images\/restaurants-hero\.jpg'/);
  assert.match(restaurantExpanded,/page\.hero = '\/assets\/images\/restaurants-hero\.jpg'/);
  const coffee=sources.images.find((item)=>item.file==="coffee.webp");
  assert.equal(coffee.sourceType,"Naver Place business upload");
  await access(resolve(root,"assets/images/restaurants-hero.jpg"));
});
