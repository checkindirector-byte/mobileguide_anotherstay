(() => {
  const I = (ko, en, ja, zh) => ({ ko, en, ja, zh });
  window.ANOTHER_HOUSE_DATA = {
    brand: 'ANOTHER HOUSE',
    tagline: 'STAY ANOTHER LIFE',
    address: I('서울시 종로구 종로 294 선일빌딩 5층', '5F, Sunil Building, 294 Jong-ro, Jongno-gu, Seoul', 'ソウル特別市鍾路区鍾路294 ソニルビル5階', '首尔特别市钟路区钟路294，Sunil大厦5层'),
    station: I('동대문역 6번 출구 · 도보 30초', 'Dongdaemun Station Exit 6 · 30 sec walk', '東大門駅6番出口 · 徒歩30秒', '东大门站6号出口 · 步行30秒'),
    contact: I('예약하신 플랫폼의 메시지로 호스트에게 연락해 주세요.', 'Please contact the host through your booking platform message.', '予約プラットフォームのメッセージからホストへご連絡ください。', '请通过预订平台消息联系房东。'),
    ui: {
      menu: I('메뉴', 'Menu', 'メニュー', '菜单'), close: I('닫기', 'Close', '閉じる', '关闭'),
      home: I('홈', 'Home', 'ホーム', '首页'), arrival: I('도착', 'Arrival', '到着', '到达'), gallery: I('공간', 'Gallery', '空間', '空间'), guide: I('가이드', 'Guide', 'ガイド', '指南'), more: I('더보기', 'More', 'その他', '更多'),
      askTitle: I('무엇을 도와드릴까요?', 'How can we help?', '何をお手伝いしましょうか？', '需要什么帮助？'),
      askPlaceholder: I('체크인, 교통, Wi-Fi를 검색해 보세요', 'Search check-in, transport, or Wi-Fi', 'チェックイン・交通・Wi-Fiを検索', '搜索入住、交通或 Wi-Fi'),
      search: I('검색', 'Search', '検索', '搜索'), send: I('보내기', 'Send', '送信', '发送'),
      concierge: I('AI 컨시어지', 'AI concierge', 'AIコンシェルジュ', 'AI礼宾'),
      copy: I('복사', 'Copy', 'コピー', '复制'), copied: I('복사했어요', 'Copied', 'コピーしました', '已复制'),
      openMap: I('지도 열기', 'Open map', '地図を開く', '打开地图'),
      allGuide: I('모든 안내', 'All guides', 'すべての案内', '全部指南'),
      noAnswer: I('홈페이지에서 확인되지 않는 내용입니다. 예약 플랫폼 메시지로 호스트에게 확인해 주세요.', 'That information is not available on this site. Please ask the host through your booking platform.', 'このサイトでは確認できません。予約プラットフォームのメッセージでホストへご確認ください。', '本网站没有该信息。请通过预订平台消息向房东确认。'),
      sourceNotice: I('이 답변은 어나더하우스 공식 안내 내용만 사용합니다.', 'Answers use only the official Another House guide.', 'アナザーハウスの公式案内のみを使用します。', '回答仅使用 Another House 官方指南。'),
      backHome: I('홈으로', 'Back home', 'ホームへ', '返回首页'),
      print: I('가이드북 인쇄·저장', 'Print or save guidebook', 'ガイドブックを印刷・保存', '打印或保存指南')
    },
    gallery: [
      ['/assets/images/hero.webp', I('어나더하우스 입구와 복도', 'Entrance and corridor', 'エントランスと廊下', '入口与走廊')],
      ['/assets/images/single-window.webp', I('창가 싱글룸', 'Window single room', '窓側シングルルーム', '窗边单人房')],
      ['/assets/images/single-room.webp', I('코지 싱글룸', 'Cozy single room', 'コージーシングルルーム', '舒适单人房')],
      ['/assets/images/double-bed.webp', I('벙커 더블룸', 'Bunk double room', 'バンクダブルルーム', '双人上下铺房')],
      ['/assets/images/double-window.webp', I('창이 있는 더블룸', 'Window double room', '窓のあるダブルルーム', '带窗双人房')],
      ['/assets/images/kitchen.webp', I('공용 키친', 'Shared kitchen', '共用キッチン', '公共厨房')],
      ['/assets/images/kitchen-bar.webp', I('키친 바', 'Kitchen bar', 'キッチンバー', '厨房吧台')],
      ['/assets/images/powder-room.webp', I('파우더룸', 'Powder room', 'パウダールーム', '梳妆区')],
      ['/assets/images/shower.webp', I('샤워실', 'Shower room', 'シャワールーム', '淋浴间')],
      ['/assets/images/entrance-brand.webp', I('브랜드 월', 'Brand wall', 'ブランドウォール', '品牌墙')],
      ['/assets/images/building-entrance.webp', I('선일빌딩 입구', 'Sunil Building entrance', 'ソニルビル入口', 'Sunil大厦入口')]
    ],
    essentials: [
      { label: I('체크인', 'Check-in', 'チェックイン', '入住'), value: '15:00', route: 'checkin' },
      { label: I('체크아웃', 'Check-out', 'チェックアウト', '退房'), value: '11:00', route: 'checkout' },
      { label: I('입실', 'Entry', '入室', '入室'), value: I('셀프 체크인', 'Self check-in', 'セルフチェックイン', '自助入住'), route: 'checkin' },
      { label: I('위치', 'Location', '場所', '位置'), value: I('동대문역 6번 출구', 'Dongdaemun Exit 6', '東大門駅6番出口', '东大门站6号出口'), route: 'transport' }
    ],
    pages: {
      checkin: { title: I('체크인 안내', 'Check-in guide', 'チェックイン案内', '入住指南'), kicker: 'ARRIVAL', hero: '/assets/images/arrival.webp', summary: I('체크인은 오후 3시부터입니다. 선일빌딩 5층으로 올라와 현장 안내에 따라 셀프 체크인을 진행해 주세요.', 'Check-in begins at 15:00. Go to the 5th floor of Sunil Building and follow the on-site self check-in instructions.', 'チェックインは15時からです。ソニルビル5階へ上がり、現地案内に従ってセルフチェックインしてください。', '15:00起可入住。请前往Sunil大厦5层，按照现场说明自助办理入住。'), sections: [
        { title: I('건물 찾기', 'Find the building', '建物を探す', '找到大厦'), image: '/assets/images/building-entrance.webp', body: I('동대문역 6번 출구에서 나와 선일빌딩 입구를 찾으세요. 숙소는 5층입니다.', 'From Dongdaemun Station Exit 6, find the Sunil Building entrance. The stay is on the 5th floor.', '東大門駅6番出口からソニルビル入口を探してください。宿は5階です。', '从东大门站6号出口出来，找到Sunil大厦入口。住宿位于5层。') },
        { title: I('셀프 체크인', 'Self check-in', 'セルフチェックイン', '自助入住'), steps: I(['15:00 이후 5층으로 올라옵니다.','예약자 정보로 현장 체크인 절차를 진행합니다.','객실 번호와 이용 안내를 확인합니다.','출입 정보는 다른 사람에게 공유하지 마세요.'],['Come to the 5th floor after 15:00.','Complete the on-site process using the booking name.','Confirm your room number and stay instructions.','Never share access information with others.'],['15時以降に5階へお越しください。','予約者情報で現地チェックインを進めます。','客室番号と利用案内を確認します。','入館情報を他人に共有しないでください。'],['15:00后前往5层。','使用预订人信息完成现场入住。','确认房号和住宿说明。','请勿向他人分享门禁信息。']) },
        { title: I('도움이 필요할 때', 'If you need help', 'サポートが必要な場合', '需要帮助时'), body: I('예약 플랫폼 메시지로 호스트에게 연락해 주세요. 비밀번호나 출입 코드는 이 웹사이트에 표시하지 않습니다.', 'Message the host through your booking platform. Passwords and access codes are never displayed on this website.', '予約プラットフォームからホストへご連絡ください。パスワードや入館コードはサイトに表示しません。', '请通过预订平台消息联系房东。本网站不会显示密码或门禁码。') }
      ]},
      checkout: { title: I('체크아웃 안내', 'Check-out guide', 'チェックアウト案内', '退房指南'), kicker: 'DEPARTURE', hero: '/assets/images/double-window.webp', summary: I('체크아웃은 오전 11시까지입니다.', 'Check-out is by 11:00.', 'チェックアウトは11時までです。', '请于11:00前退房。'), sections: [
        { title: I('나가기 전', 'Before leaving', '出発前', '离开前'), steps: I(['개인 물품과 충전기를 확인해 주세요.','사용한 공간을 가볍게 정돈해 주세요.','분리배출 안내에 따라 쓰레기를 정리해 주세요.','객실 문이 닫혔는지 확인해 주세요.'],['Check personal items and chargers.','Leave used spaces tidy.','Sort waste according to the guide.','Make sure your room door is closed.'],['忘れ物と充電器をご確認ください。','利用した空間を軽く整えてください。','案内に従ってごみを分別してください。','客室のドアが閉まったことをご確認ください。'],['检查随身物品和充电器。','简单整理使用过的空间。','按照指南分类垃圾。','确认房门已关闭。']) }
      ]},
      transport: { title: I('찾아오는 길', 'Getting here', 'アクセス', '交通路线'), kicker: 'TRANSPORT', hero: '/assets/images/building-entrance.webp', summary: I('동대문역 6번 출구에서 도보 약 30초, 선일빌딩 5층입니다.', 'We are on the 5th floor of Sunil Building, about 30 seconds from Dongdaemun Station Exit 6.', '東大門駅6番出口から徒歩約30秒、ソニルビル5階です。', '从东大门站6号出口步行约30秒，位于Sunil大厦5层。'), sections: [
        { title: I('인천공항에서', 'From Incheon Airport', '仁川空港から', '从仁川机场'), steps: I(['AREX 공항철도로 서울역까지 이동합니다.','서울역에서 지하철 4호선으로 환승합니다.','동대문역에서 내려 6번 출구로 나옵니다.','선일빌딩 5층으로 올라옵니다.'],['Take AREX to Seoul Station.','Transfer to Subway Line 4.','Get off at Dongdaemun and use Exit 6.','Go to the 5th floor of Sunil Building.'],['AREXでソウル駅へ移動します。','地下鉄4号線へ乗り換えます。','東大門駅で降り、6番出口へ。','ソニルビル5階へ上がります。'],['乘AREX机场铁路前往首尔站。','换乘地铁4号线。','在东大门站下车，从6号出口出站。','前往Sunil大厦5层。']) },
        { title: I('김포공항에서', 'From Gimpo Airport', '金浦空港から', '从金浦机场'), steps: I(['AREX 공항철도로 서울역까지 이동합니다.','서울역에서 4호선으로 환승해 동대문역으로 이동합니다.','6번 출구에서 선일빌딩까지 걸어옵니다.'],['Take AREX to Seoul Station.','Transfer to Line 4 for Dongdaemun.','Walk from Exit 6 to Sunil Building.'],['AREXでソウル駅へ移動します。','4号線へ乗り換え東大門駅へ。','6番出口からソニルビルへ歩きます。'],['乘AREX前往首尔站。','换乘4号线到东大门站。','从6号出口步行至Sunil大厦。']) },
        { title: I('버스·택시', 'Bus & taxi', 'バス・タクシー', '公交与出租车'), body: I('가까운 버스 정류장은 동대문(흥인지문) 정류장(01-037 / 01-233)입니다. 택시에는 아래 주소를 보여 주세요.', 'The nearby bus stops are Dongdaemun (Heunginjimun), stop IDs 01-037 and 01-233. Show the address below to your taxi driver.', '最寄りは東大門（興仁之門）停留所（01-037 / 01-233）です。タクシーでは下記住所をお見せください。', '附近公交站为东大门（兴仁之门）站（01-037 / 01-233）。乘出租车时请出示以下地址。'), copy: '서울시 종로구 종로 294 선일빌딩 5층' }
      ]},
      wifi: { title: I('Wi-Fi', 'Wi-Fi', 'Wi-Fi', 'Wi-Fi'), kicker: 'CONNECTION', hero: '/assets/images/kitchen-bar.webp', summary: I('공용 Wi-Fi 이름은 another입니다. 비밀번호는 체크인 안내 또는 예약 메시지에서 확인해 주세요.', 'The Wi-Fi network is “another”. Find the password in your check-in information or booking message.', 'Wi-Fi名は「another」です。パスワードはチェックイン案内または予約メッセージでご確認ください。', 'Wi-Fi名称为“another”。密码请查看入住说明或预订消息。'), sections: [
        { title: I('네트워크', 'Network', 'ネットワーク', '网络'), value: 'another', copy: 'another' },
        { title: I('비밀번호', 'Password', 'パスワード', '密码'), body: I('보안을 위해 웹사이트에는 표시하지 않습니다. 예약 메시지를 확인해 주세요.', 'For security, it is not shown on this website. Check your booking message.', '安全のためサイトには表示しません。予約メッセージをご確認ください。', '出于安全考虑，本网站不显示密码。请查看预订消息。') }
      ]},
      appliances: { title: I('기기 사용법', 'Appliance guide', '設備ガイド', '设备指南'), kicker: 'APPLIANCES', hero: '/assets/images/kitchen.webp', summary: I('사진 속 조작부를 기준으로 자주 쓰는 기능만 정리했습니다.', 'Essential steps based on the controls shown in the property photos.', '宿の写真に写る操作部を基準に、必要な手順だけをまとめました。', '根据住宿照片中的控制面板整理了常用步骤。'), devices: [
        { name: I('객실 냉난방', 'Room climate control', '客室空調', '房间空调'), model: 'Samsung AM016BN1PBH2 · controller model not confirmed', image: '/assets/images/climate.webp', steps: I(['왼쪽 아래 전원 버튼을 누릅니다.','운전 모드에서 냉방 또는 난방을 선택합니다.','위·아래 버튼으로 희망 온도를 조절합니다.','외출할 때는 전원을 꺼 주세요.'],['Press the lower-left power button.','Choose cooling or heating mode.','Use up/down to set the temperature.','Turn it off when leaving.'],['左下の電源を押します。','冷房または暖房を選びます。','上下で温度を設定します。','外出時は電源を切ってください。'],['按左下角电源键。','选择制冷或制热模式。','用上下键设定温度。','离开时请关闭。']) },
        { name: I('전자레인지', 'Microwave', '電子レンジ', '微波炉'), model: 'Cooing MM-E20RBKC', image: '/assets/images/microwave.webp', steps: I(['금속·포일을 넣지 마세요.','음식을 넣고 문을 완전히 닫습니다.','시간을 설정하고 시작 버튼을 누릅니다.','가열 중에는 자리를 비우지 마세요.'],['Never use metal or foil.','Place food inside and close the door fully.','Set time and press Start.','Do not leave it unattended.'],['金属やアルミホイルは使わないでください。','食品を入れ、扉を閉めます。','時間を設定してスタートを押します。','加熱中はその場を離れないでください。'],['请勿放入金属或锡纸。','放入食物并关好门。','设定时间并按启动键。','加热时请勿离开。']) },
        { name: I('하이라이트 전기쿡탑', 'Ceramic cooktop', '電気クッキングヒーター', '电陶炉'), model: 'Haatz HEC-1050S(H) family · exact suffix to confirm', image: '/assets/images/cooktop.webp', steps: I(['평평한 바닥의 조리 용기를 올립니다.','전원을 켠 뒤 + / −로 화력을 조절합니다.','사용 후 전원을 끕니다.','잔열 표시가 사라질 때까지 상판을 만지지 마세요.'],['Use flat-bottom cookware.','Power on and adjust heat with + / −.','Switch off after use.','Do not touch until the residual-heat indicator clears.'],['底が平らな調理器具を置きます。','電源を入れ、＋／−で火力を調節します。','使用後は電源を切ります。','余熱表示が消えるまで触れないでください。'],['使用平底锅具。','开机后用＋／−调节火力。','使用后关机。','余热指示消失前请勿触摸。']) },
        { name: I('정수기', 'Water purifier', '浄水器', '净水器'), model: 'Chungho WP-30C9460BN', image: '/assets/images/purifier.webp', steps: I(['컵을 출수구 아래에 놓습니다.','정수·냉수·온수 중 원하는 온도를 선택합니다.','120 mL 또는 500 mL를 선택하거나 연속 출수를 사용합니다.','온수는 잠금 해제 후 사용하며 화상에 주의하세요.'],['Place a cup under the spout.','Choose ambient, cold, or hot water.','Select 120 mL, 500 mL, or continuous dispense.','Unlock hot water first and beware of burns.'],['コップを注水口の下に置きます。','常温・冷水・温水を選びます。','120 mL・500 mL・連続を選びます。','温水はロック解除後、やけどに注意してください。'],['将杯子放在出水口下。','选择常温、冷水或热水。','选择120 mL、500 mL或连续出水。','热水需先解锁，谨防烫伤。']) }
      ]},
      laundry: { title: I('세탁·건조', 'Laundry & drying', '洗濯・乾燥', '洗衣与烘干'), kicker: 'LAUNDRY', hero: '/assets/images/laundry.webp', summary: I('공용 LG 세탁·건조기를 사용한 뒤 문과 주변을 깨끗이 정리해 주세요. 정확한 모델명은 현장 라벨 확인이 필요합니다.', 'Please leave the shared LG washer/dryer and area clean. The exact model still needs confirmation from the label.', '共用LG洗濯乾燥機の使用後は周辺を整えてください。正確な型番は現地ラベル確認が必要です。', '使用公共LG洗烘一体机后请保持整洁。准确型号需查看现场标签。'), sections: [{ title: I('기본 사용', 'Basic use', '基本操作', '基本使用'), steps: I(['세탁물을 넣고 문을 완전히 닫습니다.','세제를 적정량 넣습니다.','다이얼로 원하는 코스를 선택합니다.','시작/일시정지 버튼을 누릅니다.','완료 후 세탁물을 바로 꺼내 주세요.'],['Load laundry and close the door.','Add the correct amount of detergent.','Choose a cycle with the dial.','Press Start/Pause.','Remove laundry promptly when finished.'],['洗濯物を入れドアを閉めます。','洗剤を適量入れます。','ダイヤルでコースを選びます。','スタート／一時停止を押します。','終了後すぐに取り出してください。'],['放入衣物并关好门。','加入适量洗涤剂。','旋钮选择程序。','按开始/暂停。','结束后及时取出衣物。']) }]},
      trash: { title: I('쓰레기 분리배출', 'Waste & recycling', 'ごみ分別', '垃圾分类'), kicker: 'WASTE', hero: '/assets/images/trash.webp', summary: I('공용 분리수거함의 표시에 맞춰 일반 쓰레기와 재활용품을 나눠 주세요.', 'Sort general waste and recyclables according to the labels on the shared bins.', '共用ごみ箱の表示に従い、一般ごみと資源ごみを分けてください。', '请按照公共垃圾桶标识分类一般垃圾和可回收物。'), sections: [{ title: I('분리배출', 'How to sort', '分別方法', '分类方法'), steps: I(['내용물을 비우고 가볍게 헹굽니다.','플라스틱·캔·병은 표시된 칸에 넣습니다.','음식물과 일반 쓰레기를 섞지 마세요.','큰 쓰레기는 임의로 버리지 말고 호스트에게 문의하세요.'],['Empty and rinse containers.','Use the labeled sections for plastic, cans, and bottles.','Do not mix food waste with general waste.','Ask the host before discarding bulky items.'],['容器を空にして軽くすすぎます。','プラスチック・缶・びんを表示の箱へ。','生ごみと一般ごみを混ぜないでください。','大型ごみはホストに確認してください。'],['倒空并简单冲洗容器。','塑料、罐和瓶放入对应分类桶。','请勿混合厨余和一般垃圾。','大件垃圾请先咨询房东。']) }]},
      nearby: { title: I('주변 추천', 'Nearby places', '周辺おすすめ', '附近推荐'), kicker: 'NEIGHBORHOOD', hero: '/assets/images/brand.webp', summary: I('동대문과 광장시장 사이, 걸어서 만나는 서울의 오래된 맛과 풍경입니다.', 'Old Seoul flavors and sights within walking distance between Dongdaemun and Gwangjang Market.', '東大門と広蔵市場の間、歩いて出会う昔ながらのソウルです。', '在东大门与广藏市场之间，步行即可体验老首尔风味。'), places: [
        { name: I('초원순대국', 'Chowon Sundaeguk', 'チョウォンスンデクッ', '草原米肠汤'), text: I('현지인이 찾는 따뜻한 순댓국 한 그릇.', 'A warming local-style sundae soup.', '地元で親しまれる温かなスンデクッ。', '当地人喜爱的暖胃米肠汤。'), url: 'https://www.google.com/maps/search/?api=1&query=초원순대국' },
        { name: I('진옥화할매원조닭한마리', 'Jin Ok-hwa Original Chicken', '陳玉華ハルメ元祖タッカンマリ', '陈玉华奶奶元祖一只鸡'), text: I('동대문 닭한마리 골목의 대표 노포.', 'A landmark in Dongdaemun’s chicken alley.', '東大門タッカンマリ横丁の老舗。', '东大门一只鸡胡同的代表老店。'), url: 'https://www.google.com/maps/search/?api=1&query=진옥화할매원조닭한마리' },
        { name: I('광장시장', 'Gwangjang Market', '広蔵市場', '广藏市场'), text: I('빈대떡, 김밥, 육회 등 서울의 오래된 시장 음식.', 'Historic market food including bindaetteok, gimbap, and yukhoe.', 'ピンデトックやキンパ、ユッケが集まる歴史ある市場。', '汇集绿豆煎饼、紫菜包饭、生拌牛肉的历史市场。'), url: 'https://www.google.com/maps/search/?api=1&query=광장시장' }
      ]},
      rules: { title: I('숙소 이용 규칙', 'House rules', 'ハウスルール', '住宿规则'), kicker: 'HOUSE RULES', hero: '/assets/images/entrance-brand.webp', summary: I('모두의 안전과 편안한 휴식을 위해 지켜 주세요.', 'Please follow these rules for everyone’s safety and comfort.', '皆さまの安全と快適な滞在のためにご協力ください。', '为了所有人的安全与舒适，请遵守以下规则。'), sections: [{ title: I('기본 규칙', 'Essentials', '基本ルール', '基本规则'), steps: I(['어나더하우스는 여성 전용 숙소입니다.','객실과 공용공간은 금연입니다.','외부인 출입과 파티는 허용되지 않습니다.','늦은 밤과 이른 아침에는 소리를 낮춰 주세요.','출입 정보와 객실 정보는 타인과 공유하지 마세요.'],['Another House is for women guests only.','No smoking anywhere inside.','Visitors and parties are not permitted.','Keep noise low late at night and early morning.','Do not share access or room information.'],['女性専用の宿です。','館内は全面禁煙です。','外部の方の入館・パーティーは禁止です。','深夜・早朝は静かにお過ごしください。','入館・客室情報を共有しないでください。'],['本住宿仅限女性住客。','室内全面禁烟。','禁止访客和聚会。','深夜及清晨请保持安静。','请勿分享门禁或房间信息。']) }]},
      guidebook: { title: I('게스트 가이드북', 'Guest guidebook', 'ゲストガイドブック', '住客指南'), kicker: 'GUIDEBOOK', hero: '/assets/images/hero.webp', summary: I('체크인부터 체크아웃까지 필요한 안내를 한 번에 확인하고 인쇄할 수 있습니다.', 'View and print everything you need from arrival to departure.', '到着から出発まで必要な案内をまとめて確認・印刷できます。', '集中查看并打印从入住到退房所需的全部信息。'), guidebook: true }
    }
  };
})();
