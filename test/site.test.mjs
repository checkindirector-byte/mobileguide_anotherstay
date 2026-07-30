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
  assert.match(app,/appliancesContent'\)\.innerHTML=applianceNoticeMarkup\(\)\+p\.devices\.map/);
  assert.doesNotMatch(app,/\[\.\.\.p\.devices,washer\]/);
  assert.match(data,/nearby: \{[^\n]*hero: '\/assets\/images\/restaurants-hero\.jpg'/);
  assert.match(restaurantData,/hero: '\/assets\/images\/restaurants-hero\.jpg'/);
  assert.match(restaurantExpanded,/page\.hero = '\/assets\/images\/restaurants-hero\.jpg'/);
  const coffee=sources.images.find((item)=>item.file==="coffee.webp");
  assert.equal(coffee.sourceType,"Naver Place business upload");
  await access(resolve(root,"assets/images/restaurants-hero.jpg"));
});
test("mobile shell follows the master width contract",async()=>{
  const html=await read("index.html");
  const alias=await read("guide-anotherstay.html");
  const app=await read("assets/master-app.js");
  assert.match(html,/\.app\{max-width:480px;margin:0 auto;min-height:100dvh/);
  assert.match(html,/\.app\{max-width:480px;padding-bottom:0;background:#F7F1EA;overflow:hidden\}/);
  assert.doesNotMatch(html,/Keep the document locked|html,body\{width:100%|\.app\{width:100%;max-width:480px/);
  assert.doesNotMatch(app,/horizontalGestureSelector|touchmove[^\n]*preventDefault/);
  assert.match(html,/\.device-guide-carousel\{[^}]*overflow-x:auto[^}]*overscroll-behavior-inline:contain/);
  assert.match(html,/\.gallery-thumbs\{[^}]*overflow-x:auto[^}]*overscroll-behavior-x:contain/);
  assert.equal(html,alias);
});
test("check-in page matches the master overview and header rhythm",async()=>{
  const html=await read("index.html");
  const app=await read("assets/master-app.js");
  const data=await read("assets/site-data.js");
  assert.match(app,/hero:'체크인 • 체크아웃 안내'/);
  assert.match(app,/title:'입퇴실 안내'/);
  assert.match(app,/time:'체크인 15:00 · 체크아웃 11:00'/);
  assert.match(app,/row\('schedule'.*row\('location_on'.*row\('key'.*row\('hotel_class'.*row\('near_me'/);
  assert.match(app,/<section class="checkin-text-section checkin-overview"><h3>/);
  assert.doesNotMatch(data,/건물 찾기/);
  assert.match(data,/checkout: \{ title: I\('체크아웃 안내'/);
  assert.match(data,/rules: \{ title: I\('숙소 이용 안내'/);
  assert.match(app,/card\(t\(help\.title\),'support_agent'.*card\(t\(self\.title\),'login'.*card\(t\(o\.title\),'logout'.*card\(t\(r\.title\),'checklist'/);
  assert.match(html,/\.checkin-card-header\{[^}]*grid-template-columns:42px[^}]*height:76px[^}]*min-height:76px[^}]*padding:17px 18px/);
  assert.match(html,/\.guide-detail-screen \.device-card-stack \.device-header\{[^}]*grid-template-columns:42px[^}]*height:76px[^}]*padding:17px 18px/);
  assert.match(html,/\.restaurant-host-pick\{[^}]*height:76px[^}]*min-height:76px[^}]*padding:17px 18px/);
  assert.match(html,/<h2>체크인 • 체크아웃 안내<\/h2>/);
  assert.match(html,/>찾아오는 길<\/span><small>공항에서 숙소까지/);
});
test("home location and room-gallery signature styling use approved copy",async()=>{
  const html=await read("index.html");
  const data=await read("assets/site-data.js");
  assert.ok(data.includes("station: I('동대문역 6번 출구 · 도보 30초'"));
  assert.ok(data.includes("value: I('동대문역 6번 출구에서 도보 30초'"));
  assert.match(html,/\.previous-gallery-heading h2\{margin:0;color:var\(--signature\)/);
});
test("master motion system covers every page and adds visible media reveals",async()=>{
  const app=await read("assets/master-app.js");
  const html=await read("index.html");
  for(const token of ["checkin-hero","transport-hero","restaurants-hero","tours","wifi-hero","guidebook-hero","gallery-head","gallery-magazine-card","guide-detail-hero","device","trash"]){
    assert.ok(app.includes(token),"missing motion coverage: "+token);
  }
  assert.match(app,/new IntersectionObserver/);
  assert.match(app,/new MutationObserver/);
  assert.match(app,/function observeMotionTargets\(/);
  assert.match(app,/function queueMotionReady\(/);
  assert.match(app,/preloadHeroImage\('assets\/images\/main-01\.webp'\)/);
  assert.match(app,/preloadHeroImage\('assets\/images\/main-02\.webp'\)/);
  assert.match(app,/const carouselSelector='\.device-guide-carousel'/);
  assert.match(app,/gallery-magazine-card/);
  assert.match(html,/<body class="is-home">/);
  assert.doesNotMatch(html,/<body class="is-home motion-ready">/);
  assert.match(html,/\.motion-media\{[^}]*clip-path:inset\(12%/);
  assert.match(html,/@keyframes mediaSheen/);
  assert.match(html,/@media \(prefers-reduced-motion:reduce\).*?\.motion-carousel/s);
});test("room gallery uses selected magazine categories and fullscreen cards",async()=>{
  const app=await read("assets/master-app.js");
  const html=await read("index.html");
  const overrides=await read("assets/gallery-overrides.js");
  assert.match(app,/galleryCategory='exterior'/);
  assert.match(app,/galleryMagazine/);
  assert.match(app,/gallery-magazine-card/);
  assert.doesNotMatch(app,/gallerySwipeStartX|gallerySwipePointerId|selectGallery\(/);
  assert.match(html,/id="galleryMagazine"/);
  assert.doesNotMatch(html,/id="galleryThumbs"|id="galleryMainZoom"|zoom_in/);
  for(const category of ["exterior","lounge","bath","luggage","single","double"]) assert.ok(overrides.includes(`id:'${category}'`));
  assert.match(overrides,/removedCommon=new Set\(\[3,5,7,9,14,16,21,23,25,34\]\)/);
  assert.deepEqual([...overrides.matchAll(/\{id:'(exterior|lounge|bath|single|double|luggage)'/g)].map(match=>match[1]),["exterior","lounge","bath","single","double","luggage"]);
  assert.match(overrides,/doubleRooms=byNumber\(originalDouble,\[4,9,1,8\]\)/);
  assert.match(overrides,/D\.homeGallery=byNumber\(originalCommon,\[22,20\]\)\.concat\(byNumber\(originalDouble,\[9\]\)\)/);
  assert.match(app,/data-gallery-lightbox-index/);
  assert.match(app,/pointerdown[\s\S]*pointerup[\s\S]*moveLightbox/);
});test("hamburger menu places local recommendations below waste",async()=>{
  const html=await read("index.html");
  const app=await read("assets/master-app.js");
  const order=[...html.matchAll(/<button class="menu-link" data-go="([^"]+)"/g)].map(match=>match[1]);
  assert.deepEqual(order,["home","gallery","checkin","transport","wifi","appliances","laundry","trash","restaurants","tours","guidebook"]);
  for(const names of [["Trash","Restaurants","Nearby Tours"],["ごみ出し","周辺グルメ","近郊おすすめツアー"],["垃圾处理","周边美食","近郊推荐行程"]]){
    const positions=names.map(name=>app.indexOf("['"+name+"'"));
    assert.ok(positions[0]<positions[1]&&positions[1]<positions[2]);
  }
});

test("booking platform contact copy and logos replace Airbnb",async()=>{
  const html=await read("index.html");
  const data=await read("assets/site-data.js");
  const sw=await read("sw.js");
  const homeCopy="도움이 필요하신 경우, 예약 플랫폼(부킹닷컴, 아고다, 트립닷컴) 메시지로 호스트에게 연락해 주세요.";
  const checkinCopy="예약 플랫폼(부킹닷컴, 아고다, 트립닷컴) 메시지로 호스트에게 연락해 주세요.";
  assert.ok(data.includes(homeCopy));
  assert.ok(data.includes(checkinCopy));
  assert.match(html,/justify-items:center/);
  assert.match(html,/platform-contact-logos/);
  assert.doesNotMatch(html,/airbnb-mark|ff385c/i);
  for(const file of ["booking-com.svg","agoda-official.png","trip-com.svg"]){
    const asset=`assets/images/platforms/${file}`;
    await access(resolve(root,asset));
    assert.ok(html.includes(asset));
    assert.ok(sw.includes(`/${asset}`));
  }
});

test("source document additions include parking, editorial story, OTA links, and the designated washer photo",async()=>{
  const html=await read("index.html");
  const app=await read("assets/master-app.js");
  const content=await read("assets/content-updates.js");
  assert.match(html,/class="hotel-section stay-story"/);
  assert.match(html,/id="homeBookingHint"/);
  assert.match(html,/content-updates\.js\?v=20260730-50/);
  assert.match(html,/gallery-overrides\.js\?v=20260730-50/);
  assert.match(app,/parkingGuideMarkup/);
  assert.match(app,/renderBookingLinks/);
  assert.match(content,/동대문호텔 민영 주차장/);
  assert.match(content,/A QUIET HOUSE,/);
  assert.match(content,/laundry\.photo = '\/assets\/images\/laundry-machine-2\.jpg'/);
  assert.match(content,/www\.booking\.com\/hotel\/kr\/eonadeo-hauseu\.ko\.html/);
  assert.match(content,/www\.agoda\.com/);
  assert.match(content,/kr\.trip\.com/);
  await access(resolve(root,"assets/images/laundry-machine-2.jpg"));
});


test("refined intro, magazine gallery, luggage media, room lock, and home-native OTA panel",async()=>{
  const html=await read("index.html");
  const alias=await read("guide-anotherstay.html");
  const app=await read("assets/master-app.js");
  const overrides=await read("assets/gallery-overrides.js");
  assert.equal(html,alias);
  assert.match(html,/\.brand-intro img\{[^}]*width:min\(88vw,374px\)/);
  assert.match(html,/brandMarkSequence 3\.69s/);
  assert.match(html,/34\.15%[\s\S]*85\.64%/);
  assert.match(html,/heroPrimarySequence 6\.46s/);
  assert.match(app,/,3690\);\}\);\}/);
  assert.match(html,/29\.721%[\s\S]*57\.585%[\s\S]*77\.709%/);
  assert.doesNotMatch(html,/heroPanelSettle/);
  const homeSegment=html.slice(html.indexOf('<section class="screen active" data-screen="home">'),html.indexOf('<section class="screen" data-screen="checkin">'));
  const gallerySegment=html.slice(html.indexOf('<section class="screen gallery-screen"'),html.indexOf('<section class="screen wifi-screen"'));
  assert.doesNotMatch(homeSegment,/id="stayStory"/);
  assert.match(gallerySegment,/id="stayStory"[\s\S]*id="galleryCategoryTabs"[\s\S]*id="galleryMagazine"/);
  assert.match(html,/class="home-support-card"/);
  assert.match(html,/ota-link-list platform-contact-logos/);
  assert.match(app,/luggage-overview-photo/);
  assert.match(app,/roomDoorlockImage/);
  assert.match(overrides,/503호 앞 러기지 룸/);
  assert.match(overrides,/checkin-room-doorlock\.jpg/);
  await access(resolve(root,"assets/images/checkin-room-doorlock.jpg"));
});
