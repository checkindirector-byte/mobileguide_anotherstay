(() => {
  'use strict';
  const D = window.ANOTHER_HOUSE_DATA;
  if (!D) return;
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const localeMap = { ko: 'ko-KR', en: 'en', ja: 'ja', zh: 'zh-CN' };
  const labels = {
    checkin: ['CHECK-IN','15:00'], checkout: ['CHECK-OUT','11:00'], transport: ['TRANSPORT','EXIT 6'], wifi: ['WI-FI','another'], appliances: ['APPLIANCES','4 GUIDE'], laundry: ['LAUNDRY','WASH · DRY'], trash: ['WASTE','SORT · RECYCLE'], nearby: ['NEARBY','FOOD · PLACES'], rules: ['HOUSE RULES','SAFE · QUIET'], guidebook: ['GUIDEBOOK','ALL IN ONE'], gallery: ['GALLERY','11 PHOTOS']
  };
  const menuRoutes = ['checkin','checkout','transport','wifi','appliances','laundry','trash','nearby','rules','guidebook','gallery'];
  let lang = localStorage.getItem('anotherhouse-lang') || 'ko';
  if (!localeMap[lang]) lang = 'ko';
  let currentRoute = 'home';
  let lightboxIndex = 0;
  let toastTimer;
  const local = value => value && typeof value === 'object' && !Array.isArray(value) && Object.prototype.hasOwnProperty.call(value, lang) ? value[lang] : value;
  const ui = key => local(D.ui[key]) || key;

  function setText(selector, value) { $$(selector).forEach(el => { el.textContent = value; }); }
  function applyLanguage() {
    document.documentElement.lang = localeMap[lang];
    $$('[data-ui]').forEach(el => { const value = ui(el.dataset.ui); if (value) el.textContent = value; });
    $$('[data-ui-placeholder]').forEach(el => { el.placeholder = ui(el.dataset.uiPlaceholder); });
    $$('[data-ui-aria]').forEach(el => { el.setAttribute('aria-label', ui(el.dataset.uiAria)); });
    setText('[data-field="address"]', local(D.address));
    setText('[data-field="station"]', local(D.station));
    setText('[data-contact]', local(D.contact));
    $('#langLabel').textContent = lang.toUpperCase();
    $$('[data-lang]').forEach(button => {
      const active = button.dataset.lang === lang;
      button.classList.toggle('active', active);
      button.setAttribute('aria-selected', String(active));
    });
    renderHomeData();
    renderMenu();
    if (currentRoute !== 'home') renderRoute(currentRoute, false);
    resetChat();
  }

  function renderHomeData() {
    $('[data-home="essentialsLead"]').textContent = lang === 'ko' ? '도착부터 출발까지 꼭 필요한 정보만 빠르게 확인하세요.' : lang === 'en' ? 'The essentials for arrival, stay, and departure.' : lang === 'ja' ? '到着から出発まで必要な情報をすぐ確認。' : '快速查看入住到退房所需信息。';
    $('#essentialGrid').innerHTML = D.essentials.map(item => '<button class="essential-card" type="button" data-route="' + item.route + '"><small>' + escapeHtml(local(item.label)) + '</small><strong>' + escapeHtml(local(item.value)) + '</strong><i>↗</i></button>').join('');
    $('#galleryPreview').innerHTML = D.gallery.slice(0,3).map((item,index) => '<button type="button" data-gallery-index="' + index + '"><img src="' + item[0] + '" alt="' + escapeHtml(local(item[1])) + '" loading="lazy"><span>' + escapeHtml(local(item[1])) + '</span></button>').join('');
  }

  function renderMenu() {
    $('#menuList').innerHTML = menuRoutes.map((route,index) => {
      const page = D.pages[route];
      return '<button type="button" data-route="' + route + '"><span>' + String(index + 1).padStart(2,'0') + '</span><b>' + escapeHtml(local(page.title)) + '</b><i>→</i></button>';
    }).join('');
  }

  function renderRoute(route, scroll = true) {
    currentRoute = route && (route === 'home' || D.pages[route] || route === 'gallery') ? route : 'home';
    const home = $('#homeScreen');
    const detail = $('#detailScreen');
    const isHome = currentRoute === 'home';
    document.body.classList.toggle('page-open', !isHome);
    if (isHome) {
      home.hidden = false; detail.hidden = true; detail.classList.remove('active'); $('#detailContent').innerHTML = '';
    } else {
      home.hidden = true; detail.hidden = false; detail.classList.add('active');
      $('#detailContent').innerHTML = renderDetail(currentRoute);
      bindDetail();
    }
    $$('[data-nav]').forEach(button => button.classList.toggle('active', button.dataset.nav === currentRoute));
    closeMenu();
    if (scroll) window.scrollTo({ top: 0, behavior: 'instant' });
    history.replaceState({ route: currentRoute }, '', '/' + location.search);
  }

  function detailHero(page) {
    return '<header class="detail-hero"><img src="' + page.hero + '" alt="" fetchpriority="high"><div class="detail-hero-copy"><p>' + escapeHtml(page.kicker) + '</p><h1>' + escapeHtml(local(page.title)) + '</h1><span>' + escapeHtml(local(page.summary)) + '</span></div></header>';
  }

  function renderDetail(route) {
    if (route === 'gallery') {
      const page = { hero: '/assets/images/hero.webp', kicker: 'THE HOUSE', title: D.ui.gallery, summary: {ko:'따뜻한 목재와 테라코타, 부드러운 빛으로 완성한 공간입니다.',en:'Warm wood, terracotta, and quiet light.',ja:'温かな木とテラコッタ、柔らかな光の空間です。',zh:'温暖木材、赤陶与柔和光线构成的空间。'} };
      return detailHero(page) + '<div class="gallery-page">' + D.gallery.map((item,index) => '<button type="button" data-gallery-index="' + index + '"><img src="' + item[0] + '" alt="' + escapeHtml(local(item[1])) + '" loading="lazy"><span>' + escapeHtml(local(item[1])) + '</span></button>').join('') + '</div>';
    }
    const page = D.pages[route];
    if (!page) return '';
    let body = '';
    if (page.devices) body = renderDevices(page.devices);
    else if (page.places) body = renderPlaces(page.places);
    else if (page.guidebook) body = renderGuidebook();
    else body = (page.sections || []).map((section,index) => renderSection(section,index)).join('');
    return detailHero(page) + '<div class="detail-body">' + body + '</div>';
  }

  function renderSection(section,index) {
    let html = '<section class="detail-section"><div class="detail-section-head"><span>' + String(index + 1).padStart(2,'0') + '</span><h2>' + escapeHtml(local(section.title)) + '</h2></div>';
    if (section.body) html += '<p>' + escapeHtml(local(section.body)) + '</p>';
    if (section.image) html += '<figure><img src="' + section.image + '" alt="" loading="lazy"></figure>';
    const steps = local(section.steps);
    if (Array.isArray(steps)) html += '<ol class="steps">' + steps.map(step => '<li>' + escapeHtml(step) + '</li>').join('') + '</ol>';
    if (section.value) html += '<div class="copy-card"><strong>' + escapeHtml(section.value) + '</strong><button type="button" data-copy="' + escapeHtml(section.copy || section.value) + '">' + escapeHtml(ui('copy')) + '</button></div>';
    else if (section.copy) html += '<div class="copy-card"><strong>' + escapeHtml(section.copy) + '</strong><button type="button" data-copy="' + escapeHtml(section.copy) + '">' + escapeHtml(ui('copy')) + '</button></div>';
    return html + '</section>';
  }

  function renderDevices(devices) {
    return '<div class="device-grid">' + devices.map((device,index) => '<details class="device-card"' + (index === 0 ? ' open' : '') + '><summary><img src="' + device.image + '" alt=""><span><b>' + escapeHtml(local(device.name)) + '</b><small>' + escapeHtml(device.model) + '</small></span><i>＋</i></summary><div class="device-content"><ol class="steps">' + local(device.steps).map(step => '<li>' + escapeHtml(step) + '</li>').join('') + '</ol></div></details>').join('') + '</div>';
  }

  function renderPlaces(places) {
    return '<div class="places-grid">' + places.map((place,index) => '<a class="place-card" href="' + place.url + '" target="_blank" rel="noopener"><small>' + String(index + 1).padStart(2,'0') + ' · MAP ↗</small><h3>' + escapeHtml(local(place.name)) + '</h3><p>' + escapeHtml(local(place.text)) + '</p></a>').join('') + '</div>';
  }

  function renderGuidebook() {
    const routes = ['checkin','checkout','transport','wifi','appliances','laundry','trash','rules'];
    return '<div class="guide-links">' + routes.map((route,index) => '<button type="button" data-route="' + route + '"><span>' + String(index + 1).padStart(2,'0') + '</span><div><b>' + escapeHtml(local(D.pages[route].title)) + '</b><small>' + escapeHtml(local(D.pages[route].summary)) + '</small></div><i>↗</i></button>').join('') + '</div><button type="button" class="print-button" id="printGuide">' + escapeHtml(ui('print')) + '</button>';
  }

  function bindDetail() {
    $$('[data-gallery-index]', $('#detailScreen')).forEach(button => button.addEventListener('click', () => openLightbox(Number(button.dataset.galleryIndex))));
    $$('[data-copy]', $('#detailScreen')).forEach(button => button.addEventListener('click', () => copyText(button.dataset.copy)));
    $('#printGuide')?.addEventListener('click', () => window.print());
  }

  function searchableText(page) {
    const pieces = [local(page.title), local(page.summary), page.kicker];
    (page.sections || []).forEach(section => { pieces.push(local(section.title), local(section.body)); const steps = local(section.steps); if (Array.isArray(steps)) pieces.push(...steps); if (section.value) pieces.push(section.value); });
    (page.devices || []).forEach(device => { pieces.push(local(device.name), device.model, ...local(device.steps)); });
    (page.places || []).forEach(place => pieces.push(local(place.name), local(place.text)));
    return pieces.filter(Boolean).join(' ');
  }

  function normalize(text) { return String(text || '').toLowerCase().normalize('NFKC').replace(/[^a-z0-9가-힣ぁ-んァ-ヶ一-龯\s]/g,' ').replace(/\s+/g,' ').trim(); }
  function searchGuide(query) {
    const q = normalize(query); if (!q) return [];
    const tokens = q.split(' ').filter(token => token.length > 1 || /[0-9]/.test(token));
    const aliases = {
      checkin: ['체크인','입실','도착','check in','arrival','チェックイン','入住','到达'], checkout: ['체크아웃','퇴실','출발','check out','departure','チェックアウト','退房'],
      transport: ['교통','공항','인천','김포','버스','택시','지하철','동대문','길','오는','arex','airport','transport','subway','アクセス','空港','交通','机场'],
      wifi: ['와이파이','인터넷','비밀번호','wifi','wi fi','password','パスワード','无线网','密码'], appliances: ['에어컨','냉난방','전자레인지','하이라이트','정수기','기기','appliance','microwave','cooktop','water','空調','電子レンジ','设备','微波炉'],
      laundry: ['세탁','건조','빨래','washer','dryer','laundry','洗濯','洗衣'], trash: ['쓰레기','분리','재활용','waste','trash','recycle','ごみ','垃圾'], nearby: ['맛집','식당','시장','주변','nearby','restaurant','food','グルメ','餐厅'], rules: ['규칙','금연','외부인','조용','rule','smoking','quiet','ルール','规则'], guidebook: ['가이드북','guidebook','案内','指南']
    };
    return Object.entries(D.pages).map(([route,page]) => {
      const hay = normalize(searchableText(page) + ' ' + (aliases[route] || []).join(' '));
      const words = new Set(hay.split(' '));
      let score = 0; tokens.forEach(token => {
        const cjk = /[가-힣ぁ-んァ-ヶ一-龯]/.test(token);
        const matched = cjk ? hay.includes(token) : words.has(token);
        if (matched) score += normalize(local(page.title)).includes(token) ? 6 : 2;
      });
      if (tokens.length && tokens.every(token => /[가-힣ぁ-んァ-ヶ一-龯]/.test(token) ? hay.includes(token) : words.has(token))) score += 5;
      return { route, page, score };
    }).filter(item => item.score > 0).sort((a,b) => b.score - a.score).slice(0,5);
  }

  function showSearchResults(query) {
    const results = searchGuide(query); const box = $('#searchResults');
    if (!query.trim()) { box.hidden = true; box.innerHTML = ''; return; }
    box.hidden = false;
    box.innerHTML = results.length ? results.map(item => '<button type="button" data-route="' + item.route + '"><b>' + escapeHtml(local(item.page.title)) + '</b><small>' + escapeHtml(local(item.page.summary)) + '</small></button>').join('') : '<button type="button"><b>' + escapeHtml(ui('noAnswer')) + '</b></button>';
  }

  function answerQuestion(question) {
    const result = searchGuide(question)[0];
    if (!result) return { text: ui('noAnswer') };
    return { text: local(result.page.summary), route: result.route, label: local(result.page.title) };
  }

  function resetChat() {
    $('#chatMessages').innerHTML = '<div class="message bot">' + escapeHtml(ui('askTitle')) + '<br><small>' + escapeHtml(ui('sourceNotice')) + '</small></div>';
  }
  function addMessage(text,type,route,label) {
    const el = document.createElement('div'); el.className = 'message ' + type; el.textContent = text;
    if (route) { const button = document.createElement('button'); button.type = 'button'; button.dataset.route = route; button.textContent = label + ' ↗'; el.appendChild(button); }
    $('#chatMessages').appendChild(el); $('#chatMessages').scrollTop = $('#chatMessages').scrollHeight;
  }
  function openChat() { $('#scrim').hidden = false; $('#chatPanel').classList.add('open'); $('#chatPanel').setAttribute('aria-hidden','false'); document.body.style.overflow = 'hidden'; setTimeout(() => $('#chatInput').focus(),350); }
  function closeChat() { $('#chatPanel').classList.remove('open'); $('#chatPanel').setAttribute('aria-hidden','true'); if (!$('#menuPanel').classList.contains('open')) $('#scrim').hidden = true; document.body.style.overflow = ''; }
  function openMenu() { closeChat(); $('#scrim').hidden = false; $('#menuPanel').classList.add('open'); $('#menuPanel').setAttribute('aria-hidden','false'); document.body.style.overflow = 'hidden'; }
  function closeMenu() { $('#menuPanel').classList.remove('open'); $('#menuPanel').setAttribute('aria-hidden','true'); if (!$('#chatPanel').classList.contains('open')) $('#scrim').hidden = true; document.body.style.overflow = ''; }

  function openLightbox(index) { lightboxIndex = (index + D.gallery.length) % D.gallery.length; const item = D.gallery[lightboxIndex]; $('#lightboxImage').src = item[0]; $('#lightboxImage').alt = local(item[1]); $('#lightboxCaption').textContent = local(item[1]); $('#lightboxCount').textContent = String(lightboxIndex + 1).padStart(2,'0') + ' / ' + String(D.gallery.length).padStart(2,'0'); $('#lightbox').hidden = false; document.body.style.overflow = 'hidden'; }
  function closeLightbox() { $('#lightbox').hidden = true; document.body.style.overflow = ''; }
  async function copyText(value) { try { await navigator.clipboard.writeText(value); } catch { const area = document.createElement('textarea'); area.value = value; document.body.appendChild(area); area.select(); document.execCommand('copy'); area.remove(); } showToast(ui('copied')); }
  function showToast(text) { clearTimeout(toastTimer); $('#toast').textContent = text; $('#toast').classList.add('show'); toastTimer = setTimeout(() => $('#toast').classList.remove('show'),1700); }

  function queueMotionReady() {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let queued = false;
    const start = () => requestAnimationFrame(() => requestAnimationFrame(() => setTimeout(() => document.body.classList.add('motion-ready'),120)));
    const ready = () => {
      if (queued) return; queued = true;
      if (document.hidden) document.addEventListener('visibilitychange', function visible(){ if (!document.hidden) { document.removeEventListener('visibilitychange',visible); start(); } }); else start();
    };
    const image = new Image(); image.src = '/assets/images/hero.webp';
    if (image.complete) {
      try { const decodeResult = image.decode ? image.decode() : null; if (decodeResult && decodeResult.then) decodeResult.then(ready,ready); else ready(); } catch { ready(); }
    } else { image.addEventListener('load',ready,{once:true}); image.addEventListener('error',ready,{once:true}); }
    setTimeout(() => { if (image.complete) { ready(); if (!document.hidden) document.body.classList.add('motion-ready'); } },700);
  }

  document.addEventListener('click', event => {
    const routeButton = event.target.closest('[data-route]'); if (routeButton) { event.preventDefault(); renderRoute(routeButton.dataset.route); closeChat(); }
    const scrollButton = event.target.closest('[data-scroll]'); if (scrollButton) { event.preventDefault(); document.getElementById(scrollButton.dataset.scroll)?.scrollIntoView({behavior:'smooth'}); }
    const galleryButton = event.target.closest('[data-gallery-index]'); if (galleryButton && !galleryButton.closest('#detailScreen')) openLightbox(Number(galleryButton.dataset.galleryIndex));
  });
  $$('.menu-trigger').forEach(button => button.addEventListener('click',openMenu));
  $('#closeMenu').addEventListener('click',closeMenu); $('#scrim').addEventListener('click',() => { closeMenu(); closeChat(); });
  $('#langTrigger').addEventListener('click',event => { event.stopPropagation(); const open = $('#langMenu').classList.toggle('open'); $('#langTrigger').setAttribute('aria-expanded',String(open)); });
  $$('[data-lang]').forEach(button => button.addEventListener('click',event => { event.stopPropagation(); lang = button.dataset.lang; localStorage.setItem('anotherhouse-lang',lang); $('#langMenu').classList.remove('open'); $('#langTrigger').setAttribute('aria-expanded','false'); applyLanguage(); }));
  document.addEventListener('click',() => { $('#langMenu').classList.remove('open'); $('#langTrigger').setAttribute('aria-expanded','false'); });
  $('#homeSearchInput').addEventListener('input',event => showSearchResults(event.target.value));
  $('#homeSearch').addEventListener('submit',event => { event.preventDefault(); const result = searchGuide($('#homeSearchInput').value)[0]; if (result) renderRoute(result.route); else openChat(); });
  $('#chatFab').addEventListener('click',openChat); $('#openChatFromHost').addEventListener('click',openChat); $('#closeChat').addEventListener('click',closeChat);
  $('#chatForm').addEventListener('submit',event => { event.preventDefault(); const question = $('#chatInput').value.trim(); if (!question) return; addMessage(question,'user'); $('#chatInput').value = ''; const answer = answerQuestion(question); setTimeout(() => addMessage(answer.text,'bot',answer.route,answer.label),180); });
  $('#lightboxClose').addEventListener('click',closeLightbox); $('#lightboxPrev').addEventListener('click',() => openLightbox(lightboxIndex - 1)); $('#lightboxNext').addEventListener('click',() => openLightbox(lightboxIndex + 1));
  document.addEventListener('keydown',event => { if (event.key === 'Escape') { closeMenu(); closeChat(); closeLightbox(); } if (!$('#lightbox').hidden && event.key === 'ArrowLeft') openLightbox(lightboxIndex - 1); if (!$('#lightbox').hidden && event.key === 'ArrowRight') openLightbox(lightboxIndex + 1); });
  window.addEventListener('scroll',() => $('#topbar').classList.toggle('scrolled',scrollY > 24),{passive:true});
  window.addEventListener('pageshow',event => { if (event.persisted && currentRoute === 'home' && !matchMedia('(prefers-reduced-motion: reduce)').matches) { document.body.classList.remove('motion-ready'); queueMotionReady(); } });
  if (location.pathname !== '/') history.replaceState(null,'','/' + location.search);
  window.addEventListener('load',() => { if (matchMedia('(prefers-reduced-motion: reduce)').matches) return; const mark = () => document.body.classList.add('motion-ready'); if (document.hidden) document.addEventListener('visibilitychange',function visible(){ if (!document.hidden) { document.removeEventListener('visibilitychange',visible); mark(); } }); else mark(); },{once:true});
  applyLanguage(); renderRoute('home',false); queueMotionReady();
  if ('serviceWorker' in navigator && location.protocol === 'https:') window.addEventListener('load',() => navigator.serviceWorker.register('/sw.js').catch(() => {}));
})();
