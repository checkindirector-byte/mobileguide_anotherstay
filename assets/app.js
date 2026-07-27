(() => {
  "use strict";

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const I = (ko, en, ja, zh) => ({ ko, en, ja, zh });

  const translations = {
    ko: {
      heroEyebrow: "WOMEN ONLY · DONGDAEMUN", heroCopy: "서울의 하루를 조용히 마무리하는<br>여성 전용 프라이빗 스테이",
      book: "예약하기", guestGuide: "게스트 가이드", introTitle: "낯선 서울에서도<br>나답게 쉬어가는 작은 집",
      introBody: "화려함보다 온전한 휴식에 집중했습니다. 부드러운 빛과 따뜻한 목재, 잠글 수 있는 나만의 방이 여행의 긴장을 조용히 내려놓게 합니다.",
      factStation: "동대문역", factWomen: "여성 전용", factRooms: "프라이빗 객실",
      brandCaption: "머무는 동안만큼은<br>조금 다른 삶을 살아보세요.", roomsKicker: "PRIVATE ROOMS",
      roomsTitle: "혼자여도, 함께여도<br>나만의 문이 있는 방", swipe: "SWIPE →",
      singleWindowTitle: "창가 싱글룸", singleWindowCopy: "서울의 빛을 품은 1인실 · 최대 1인",
      singleCozyTitle: "코지 싱글룸", singleCozyCopy: "잠글 수 있는 온전한 휴식 · 최대 1인",
      doubleTitle: "벙커 더블룸", doubleCopy: "친구 또는 가족과 함께 · 최대 2인",
      spacesKicker: "SHARED, YET SERENE", spacesTitle: "함께 쓰는 공간도<br>조용하고 섬세하게",
      kitchenTitle: "공용 키친", kitchenCopy: "요리와 세탁, 잠시 머무는 창가 자리", powder: "파우더룸", entrance: "입구", viewGallery: "공간 전체 보기",
      guideCheckin: "체크인", guideDevices: "기기 사용법", guideCheckout: "체크아웃",
      locationTitle: "동대문에서 시작하는<br>가벼운 서울 여행", stationDistance: "동대문역 6번 출구 · 도보 30초",
      locationCopy: "1·4호선으로 종로, 명동, 서울역까지 빠르게 이동하세요.", googleMap: "Google 지도", naverMap: "Naver 지도",
      placeGate: "흥인지문", placeGateSub: "서울 성곽의 동쪽 문 · 산책", placeDdpSub: "디자인과 야경 · 전시",
      placeMarket: "광장시장", placeMarketSub: "서울의 오래된 맛 · 로컬 푸드", closingTitle: "서울에서 만나는<br>또 하나의 작은 집",
      navHome: "홈", navArrival: "도착", navStay: "공간", navGuide: "가이드", navMore: "더보기",
      allGuide: "모든 안내", checkinTitle: "체크인 안내", checkoutTitle: "체크아웃 안내", devicesTitle: "기기 사용법",
      laundryTitle: "세탁", trashTitle: "쓰레기", rulesTitle: "숙소 규칙", directionsTitle: "찾아오는 길", nearFood: "주변 맛집 가이드",
      bookingTitle: "예약 페이지를 준비하고 있어요", bookingCopy: "NEWT 예약 페이지 승인 후 이 버튼에 바로 연결됩니다. 현재는 이용하신 예약 플랫폼에서 어나더하우스를 검색해 주세요.",
      confirm: "확인", copied: "복사되었습니다", backHome: "홈으로", copy: "복사하기"
    },
    en: {
      heroEyebrow: "WOMEN ONLY · DONGDAEMUN", heroCopy: "A private women-only stay<br>for a quiet end to your Seoul day",
      book: "Book your stay", guestGuide: "Guest guide", introTitle: "A small home where<br>you can rest as yourself",
      introBody: "Designed for genuine rest rather than excess. Soft light, warm wood, and your own lockable room let the tension of travel gently fade.",
      factStation: "Dongdaemun Stn.", factWomen: "Women only", factRooms: "Private rooms",
      brandCaption: "For the time you stay,<br>live another life.", roomsKicker: "PRIVATE ROOMS",
      roomsTitle: "Alone or together,<br>a door of your own", swipe: "SWIPE →",
      singleWindowTitle: "Window Single", singleWindowCopy: "A bright private room · 1 guest",
      singleCozyTitle: "Cozy Single", singleCozyCopy: "A lockable place to rest · 1 guest",
      doubleTitle: "Bunk Double", doubleCopy: "For friends or family · 2 guests",
      spacesKicker: "SHARED, YET SERENE", spacesTitle: "Shared spaces,<br>quietly considered",
      kitchenTitle: "Shared kitchen", kitchenCopy: "Cook, wash, or pause by the window", powder: "Powder room", entrance: "Entrance", viewGallery: "View all spaces",
      guideCheckin: "Check-in", guideDevices: "Appliances", guideCheckout: "Check-out",
      locationTitle: "A lighter Seoul trip,<br>starting in Dongdaemun", stationDistance: "Dongdaemun Exit 6 · 30 sec walk",
      locationCopy: "Lines 1 and 4 take you quickly to Jongno, Myeongdong and Seoul Station.", googleMap: "Google Maps", naverMap: "Naver Map",
      placeGate: "Heunginjimun Gate", placeGateSub: "Seoul city wall · Walk", placeDdpSub: "Design, exhibitions · Night view",
      placeMarket: "Gwangjang Market", placeMarketSub: "Historic Seoul flavors · Local food", closingTitle: "Another small home<br>waiting in Seoul",
      navHome: "Home", navArrival: "Arrival", navStay: "Stay", navGuide: "Guide", navMore: "More",
      allGuide: "All guides", checkinTitle: "Check-in", checkoutTitle: "Check-out", devicesTitle: "Appliances",
      laundryTitle: "Laundry", trashTitle: "Waste", rulesTitle: "House rules", directionsTitle: "Directions", nearFood: "Nearby food guide",
      bookingTitle: "Our booking page is almost ready", bookingCopy: "This button will connect to NEWT once approval is complete. For now, search Another House on the platform you used.",
      confirm: "Got it", copied: "Copied", backHome: "Home", copy: "Copy"
    },
    ja: {
      heroEyebrow: "WOMEN ONLY · DONGDAEMUN", heroCopy: "ソウルの一日を静かに終える<br>女性専用プライベートステイ",
      book: "予約する", guestGuide: "ゲストガイド", introTitle: "慣れないソウルでも<br>自分らしく休める小さな家",
      introBody: "華やかさより、心から休めることを大切にしました。柔らかな光と温かい木、鍵のかかる自分だけの部屋が旅の緊張をほどきます。",
      factStation: "東大門駅", factWomen: "女性専用", factRooms: "個室",
      brandCaption: "滞在する間だけは<br>少し違う人生を。", roomsKicker: "PRIVATE ROOMS",
      roomsTitle: "一人でも、二人でも<br>自分だけの扉がある部屋", swipe: "SWIPE →",
      singleWindowTitle: "窓側シングル", singleWindowCopy: "ソウルの光を感じる個室 · 1名",
      singleCozyTitle: "コージーシングル", singleCozyCopy: "鍵付きの静かな個室 · 1名",
      doubleTitle: "バンクダブル", doubleCopy: "友人や家族と一緒に · 2名",
      spacesKicker: "SHARED, YET SERENE", spacesTitle: "共有空間も<br>静かで細やかに",
      kitchenTitle: "共有キッチン", kitchenCopy: "料理・洗濯・窓辺のひと休み", powder: "パウダールーム", entrance: "エントランス", viewGallery: "すべての空間を見る",
      guideCheckin: "チェックイン", guideDevices: "家電ガイド", guideCheckout: "チェックアウト",
      locationTitle: "東大門から始まる<br>身軽なソウル旅", stationDistance: "東大門駅6番出口 · 徒歩30秒",
      locationCopy: "1・4号線で鐘路、明洞、ソウル駅へスムーズに移動できます。", googleMap: "Google マップ", naverMap: "Naver マップ",
      placeGate: "興仁之門", placeGateSub: "ソウル城郭の東門 · 散歩", placeDdpSub: "デザインと夜景 · 展示",
      placeMarket: "広蔵市場", placeMarketSub: "ソウルの老舗の味 · ローカルフード", closingTitle: "ソウルで出会う<br>もう一つの小さな家",
      navHome: "ホーム", navArrival: "到着", navStay: "空間", navGuide: "ガイド", navMore: "もっと",
      allGuide: "すべての案内", checkinTitle: "チェックイン", checkoutTitle: "チェックアウト", devicesTitle: "家電の使い方",
      laundryTitle: "洗濯", trashTitle: "ゴミ", rulesTitle: "ハウスルール", directionsTitle: "アクセス", nearFood: "周辺グルメガイド",
      bookingTitle: "予約ページを準備中です", bookingCopy: "NEWTの承認後、このボタンから直接予約できます。現在はご利用の予約サイトでAnother Houseを検索してください。",
      confirm: "確認", copied: "コピーしました", backHome: "ホーム", copy: "コピー"
    },
    zh: {
      heroEyebrow: "WOMEN ONLY · DONGDAEMUN", heroCopy: "在首尔安静结束一天的<br>女性专属私享住宿",
      book: "立即预订", guestGuide: "住客指南", introTitle: "即使身在陌生首尔<br>也能自在休息的小屋",
      introBody: "我们不追求浮华，只专注真正的休息。柔和的光、温暖的木材，以及可上锁的私人房间，让旅途紧张慢慢消散。",
      factStation: "东大门站", factWomen: "仅限女性", factRooms: "独立客房",
      brandCaption: "在停留的时光里<br>体验另一种生活。", roomsKicker: "PRIVATE ROOMS",
      roomsTitle: "无论独行或同行<br>都有一扇属于自己的门", swipe: "SWIPE →",
      singleWindowTitle: "窗景单人房", singleWindowCopy: "拥抱首尔光线的单人房 · 1人",
      singleCozyTitle: "舒适单人房", singleCozyCopy: "可上锁的安静空间 · 1人",
      doubleTitle: "双层双人房", doubleCopy: "与朋友或家人同住 · 2人",
      spacesKicker: "SHARED, YET SERENE", spacesTitle: "共享空间也<br>安静而细致",
      kitchenTitle: "共享厨房", kitchenCopy: "烹饪、洗衣，在窗边稍作停留", powder: "梳妆间", entrance: "入口", viewGallery: "查看全部空间",
      guideCheckin: "入住", guideDevices: "设备指南", guideCheckout: "退房",
      locationTitle: "从东大门开始的<br>轻松首尔旅行", stationDistance: "东大门站6号出口 · 步行30秒",
      locationCopy: "乘坐1号线与4号线，可快速前往钟路、明洞和首尔站。", googleMap: "Google 地图", naverMap: "Naver 地图",
      placeGate: "兴仁之门", placeGateSub: "首尔城郭东门 · 散步", placeDdpSub: "设计、展览 · 夜景",
      placeMarket: "广藏市场", placeMarketSub: "老首尔风味 · 本地美食", closingTitle: "在首尔遇见的<br>另一间小屋",
      navHome: "首页", navArrival: "到达", navStay: "空间", navGuide: "指南", navMore: "更多",
      allGuide: "全部指南", checkinTitle: "入住指南", checkoutTitle: "退房指南", devicesTitle: "设备使用",
      laundryTitle: "洗衣", trashTitle: "垃圾分类", rulesTitle: "住宿规则", directionsTitle: "交通指南", nearFood: "周边美食指南",
      bookingTitle: "预订页面正在准备中", bookingCopy: "NEWT审核完成后，此按钮将直接连接预订。目前请在您使用的平台搜索Another House。",
      confirm: "知道了", copied: "已复制", backHome: "首页", copy: "复制"
    }
  };

  const gallery = [
    { src: "/assets/images/hero.webp", cap: I("브랜드 입구", "Brand entrance", "ブランド入口", "品牌入口") },
    { src: "/assets/images/brand.webp", cap: I("Stay Another Life", "Stay Another Life", "Stay Another Life", "Stay Another Life") },
    { src: "/assets/images/single-window.webp", cap: I("창가 싱글룸", "Window single", "窓側シングル", "窗景单人房") },
    { src: "/assets/images/single-room.webp", cap: I("코지 싱글룸", "Cozy single", "コージーシングル", "舒适单人房") },
    { src: "/assets/images/double-bed.webp", cap: I("벙커 더블룸", "Bunk double", "バンクダブル", "双层双人房") },
    { src: "/assets/images/kitchen.webp", cap: I("공용 키친", "Shared kitchen", "共有キッチン", "共享厨房") },
    { src: "/assets/images/kitchen-bar.webp", cap: I("창가 바", "Window bar", "窓辺のバー", "窗边吧台") },
    { src: "/assets/images/powder-room.webp", cap: I("파우더룸", "Powder room", "パウダールーム", "梳妆间") },
    { src: "/assets/images/entrance-brand.webp", cap: I("어나더하우스 입구", "Another House entrance", "Another House入口", "Another House入口") },
    { src: "/assets/images/double-window.webp", cap: I("더블룸 창가", "Double room window", "ダブルルーム窓辺", "双人房窗边") }
  ];

  const pages = {
    checkin: {
      hero: "/assets/images/arrival.webp",
      kicker: "ARRIVAL · SELF CHECK-IN",
      title: I("체크인 안내", "Check-in guide", "チェックイン", "入住指南"),
      sub: I("키오스크를 이용한 비대면 체크인입니다.", "Self check-in is completed at the kiosk.", "キオスクでセルフチェックインします。", "请在自助终端完成入住。"),
      info: [[I("체크인", "Check-in", "チェックイン", "入住"), "15:00"], [I("짐 보관", "Luggage", "荷物預かり", "行李寄存"), I("503호 앞", "By room 503", "503号室前", "503号房前")]],
      sections: [
        {
          title: I("동대문역에서 건물까지", "From the station to the building", "駅から建物まで", "从车站前往大楼"),
          text: I("동대문역 6번 출구를 이용하면 가장 빠릅니다.", "Exit 6 is the quickest route.", "東大門駅6番出口が最短です。", "从东大门站6号出口前往最快。"),
          image: "/assets/images/building-entrance.webp",
          steps: [
            I("6번 출구 계단을 올라와 왼쪽으로 꺾어 주세요.", "Come up Exit 6 and turn left.", "6番出口を出て左へ曲がります。", "从6号出口出来后左转。"),
            I("화장품 가게들을 지나 교촌치킨 간판을 찾으세요.", "Pass the cosmetics stores and look for the Kyochon Chicken sign.", "化粧品店を通り、Kyochon Chickenの看板を探します。", "经过化妆品店，寻找校村炸鸡招牌。"),
            I("간판 아래 유리문으로 들어갑니다. 유리문에는 Another House 5F 사이니지가 있습니다.", "Enter through the glass door below the sign. Look for the Another House 5F sign.", "看板下のガラス扉から入り、Another House 5Fの表示を確認します。", "从招牌下方玻璃门进入，门上有Another House 5F标识。")
          ]
        },
        {
          title: I("5층 도착 후", "After reaching the 5th floor", "5階に着いたら", "到达5楼后"),
          text: I("엘리베이터에서 내려 계단을 반 층 내려오면 키오스크와 숙소 입구가 보입니다.", "Get off the elevator and walk down half a flight to the kiosk and entrance.", "エレベーターを降り、階段を半階下りるとキオスクと入口があります。", "出电梯后下半层楼梯，即可看到自助终端和入口。"),
          image: "/assets/images/arrival.webp",
          steps: [
            I("키오스크에서 Check-in을 선택합니다.", "Select Check-in on the kiosk.", "キオスクでCheck-inを選びます。", "在自助终端选择Check-in。"),
            I("예약 바우처와 동일한 예약자 이름 또는 예약번호 뒤 4자리를 입력합니다.", "Enter the guest name exactly as on the voucher, or the last 4 digits of the OTA booking number.", "予約確認書と同じ氏名、または予約番号の末尾4桁を入力します。", "输入与确认单一致的姓名，或平台预订号后4位。"),
            I("발급된 카드키로 입구 옆 기기에 태그해 문을 열어 주세요.", "Tap the issued key card on the reader beside the entrance.", "発行されたカードキーを入口横の読み取り機にかざします。", "将领取的房卡贴近入口旁读卡器开门。")
          ],
          note: I("출입번호처럼 민감한 정보는 이 공개 가이드에 저장하지 않습니다. 체크인 전 짐 보관이 필요하면 예약처 메시지를 확인해 주세요.", "Access codes are not stored in this public guide. Check your booking message if you need pre-check-in luggage access.", "暗証番号は公開ガイドに保存していません。チェックイン前の荷物預かりは予約メッセージをご確認ください。", "公共指南不会保存门禁密码。如需入住前寄存行李，请查看预订消息。")
        }
      ]
    },
    checkout: {
      hero: "/assets/images/single-window.webp", kicker: "DEPARTURE · 11:00",
      title: I("체크아웃 안내", "Check-out guide", "チェックアウト", "退房指南"),
      sub: I("마지막까지 편안하게, 다음 게스트를 위한 작은 배려를 부탁드립니다.", "A few simple steps before you leave.", "ご出発前に簡単なご協力をお願いします。", "离开前请完成以下简单步骤。"),
      info: [[I("체크아웃", "Check-out", "チェックアウト", "退房"), "11:00"], [I("짐 보관", "Luggage", "荷物預かり", "行李寄存"), I("당일 무료", "Free same day", "当日無料", "当日免费")]],
      sections: [{
        title: I("나가기 전 체크리스트", "Before you leave", "出発前チェック", "离开前检查"),
        steps: [
          I("두고 가는 물건이 없는지 확인해 주세요.", "Check that you have all belongings.", "忘れ物がないか確認します。", "请确认没有遗留物品。"),
          I("사용한 식기는 설거지 후 원위치해 주세요.", "Wash and return any used dishes.", "使用した食器は洗って元の場所へ戻します。", "用过的餐具清洗后放回原处。"),
          I("사용한 수건은 파우더룸 타월 바구니에 넣어 주세요.", "Place used towels in the basket in the powder room.", "使用済みタオルはパウダールームのバスケットへ。", "用过的毛巾请放入梳妆间毛巾篮。"),
          I("쓰레기는 공용 주방에서 분리배출해 주세요.", "Sort waste in the shared kitchen.", "ゴミは共有キッチンで分別します。", "垃圾请在共享厨房分类投放。"),
          I("카드키를 뽑고 키오스크에서 Check-out 후 반납해 주세요.", "Remove the key card, select Check-out at the kiosk, and return it.", "カードキーを抜き、キオスクでCheck-out後に返却します。", "拔出房卡，在自助终端退房后归还。"),
          I("마지막으로 출입구 문이 완전히 닫혔는지 확인해 주세요.", "Make sure the entrance door closes completely.", "最後に入口の扉が完全に閉まったか確認します。", "最后请确认入口门已完全关闭。")
        ],
        note: I("레이트 체크아웃은 어렵습니다. 체크아웃 후 짐은 당일에 한해 무료 보관할 수 있습니다.", "Late check-out is unavailable. Luggage can be stored free of charge for the rest of the day.", "レイトチェックアウトはできません。荷物は当日に限り無料で預けられます。", "不提供延迟退房。退房后当天可免费寄存行李。")
      }]
    },
    wifi: {
      hero: "/assets/images/kitchen-bar.webp", kicker: "STAY CONNECTED",
      title: I("Wi-Fi", "Wi-Fi", "Wi-Fi", "Wi-Fi"),
      sub: I("복도 천장과 라운지에 공유기가 설치되어 있습니다.", "Routers are installed in the corridor and lounge.", "ルーターは廊下天井とラウンジにあります。", "路由器安装在走廊天花板和休息区。"),
      sections: [{
        title: I("네트워크 연결", "Connect to the network", "ネットワーク接続", "连接网络"),
        text: I("비밀번호는 보안을 위해 예약 안내 메시지에서 확인해 주세요.", "For security, find the password in your booking message.", "安全のため、パスワードは予約メッセージでご確認ください。", "为安全起见，请在预订消息中查看密码。"),
        value: { label: "WI-FI NAME", value: "another", copy: "another" },
        steps: [
          I("휴대폰 설정에서 Wi-Fi를 켜 주세요.", "Turn on Wi-Fi in your device settings.", "端末の設定でWi-Fiをオンにします。", "在设备设置中打开Wi-Fi。"),
          I("네트워크 목록에서 another를 선택합니다.", "Select “another” from the network list.", "ネットワーク一覧から「another」を選びます。", "在网络列表中选择“another”。"),
          I("예약 안내 메시지의 비밀번호를 입력합니다.", "Enter the password from your booking message.", "予約メッセージのパスワードを入力します。", "输入预订消息中的密码。")
        ]
      }]
    },
    laundry: {
      hero: "/assets/images/laundry.webp", kicker: "LG WASHER · DRYER",
      title: I("세탁 안내", "Laundry guide", "洗濯ガイド", "洗衣指南"),
      sub: I("세탁과 건조가 가능한 LG 일체형 세탁기입니다.", "An LG all-in-one washer and dryer.", "LGの洗濯乾燥一体型です。", "LG洗烘一体机。"),
      info: [[I("이용 시간", "Hours", "利用時間", "使用时间"), I("22시 이전", "Before 22:00", "22時まで", "22:00前")], [I("추천 코스", "Suggested", "おすすめ", "推荐程序"), I("세탁 → 건조", "Wash → Dry", "洗濯→乾燥", "洗涤→烘干")]],
      sections: [{
        title: I("세탁기 사용 순서", "How to use the washer", "洗濯機の使い方", "洗衣机使用方法"),
        image: "/assets/images/laundry.webp",
        steps: [
          I("세탁물을 넣고 문을 완전히 닫아 주세요.", "Load laundry and close the door completely.", "洗濯物を入れ、扉を完全に閉めます。", "放入衣物并完全关闭机门。"),
          I("세제는 세탁기 옆 윗 선반 안에서 확인합니다.", "Find detergent inside the upper shelf beside the washer.", "洗剤は洗濯機横の上部棚にあります。", "洗涤剂位于洗衣机旁上层柜内。"),
          I("전원을 켜고 일반 세탁-건조 또는 빠른 세탁-건조를 선택합니다.", "Power on and choose Normal Wash-Dry or Quick Wash-Dry.", "電源を入れ、標準洗濯-乾燥または快速洗濯-乾燥を選びます。", "开机后选择标准洗烘或快速洗烘。"),
          I("시작 버튼을 눌러 주세요.", "Press Start.", "スタートボタンを押します。", "按下开始按钮。")
        ],
        note: I("건조 종료 직후 문과 내부가 매우 뜨거울 수 있습니다. 화상에 주의해 주세요.", "The door and drum may be very hot after drying. Take care to avoid burns.", "乾燥終了直後は扉と内部が非常に熱くなります。やけどにご注意ください。", "烘干结束后机门和内筒可能很热，请小心烫伤。")
      }]
    },
    trash: {
      hero: "/assets/images/trash.webp", kicker: "SORT IT RIGHT",
      title: I("쓰레기 분리배출", "Waste sorting", "ゴミの分別", "垃圾分类"),
      sub: I("모든 쓰레기통은 공용 주방에 있습니다.", "All bins are located in the shared kitchen.", "ゴミ箱はすべて共有キッチンにあります。", "所有垃圾桶都在共享厨房。"),
      sections: [{
        title: I("어디에 버리나요?", "Where does it go?", "どこに捨てますか？", "应该丢在哪里？"),
        image: "/assets/images/trash.webp",
        steps: [
          I("전자레인지 왼쪽: 일반 쓰레기와 비닐", "Left of the microwave: general waste and plastic bags.", "電子レンジ左：一般ゴミ・ビニール", "微波炉左侧：一般垃圾和塑料袋。"),
          I("전자레인지 오른쪽: 캔·플라스틱·종이", "Right of the microwave: cans, plastic, and paper.", "電子レンジ右：缶・プラスチック・紙", "微波炉右侧：罐、塑料和纸类。"),
          I("음식물 쓰레기: 하이라이트 인근 구석의 전용 통", "Food waste: the dedicated bin near the cooktop.", "生ゴミ：クッキングヒーター付近の専用容器", "厨余垃圾：炉灶附近的专用垃圾桶。")
        ],
        note: I("내용물을 비우고, 가능한 한 깨끗하게 분리해 주세요.", "Empty containers and sort them as cleanly as possible.", "容器の中身を空にしてから分別してください。", "请倒空容器内容物后再分类。")
      }]
    },
    rules: {
      hero: "/assets/images/entrance-brand.webp", kicker: "A QUIET HOUSE",
      title: I("숙소 규칙", "House rules", "ハウスルール", "住宿规则"),
      sub: I("모두가 편안한 밤을 보낼 수 있도록 지켜 주세요.", "Help everyone enjoy a calm and comfortable stay.", "すべての方が快適に過ごせるようご協力ください。", "请共同维护安静舒适的住宿环境。"),
      sections: [{
        title: I("기본 규칙", "Essential rules", "基本ルール", "基本规则"),
        steps: [
          I("어나더하우스는 여성 전용 숙소입니다. 예약 인원 외 방문객은 출입할 수 없습니다.", "Another House is women-only. Unregistered visitors are not permitted.", "Another Houseは女性専用です。予約者以外は入館できません。", "Another House仅限女性，未登记访客不得进入。"),
          I("실내는 전 구역 금연이며 반려동물과 파티는 허용되지 않습니다.", "No smoking, pets, or parties anywhere indoors.", "館内禁煙。ペット・パーティーは禁止です。", "室内全面禁烟，禁止宠物与派对。"),
          I("매너타임은 22:00~05:00입니다.", "Quiet hours are 22:00–05:00.", "静粛時間は22:00〜05:00です。", "安静时段为22:00–05:00。"),
          I("고기·생선처럼 연기나 냄새가 강한 음식은 조리할 수 없습니다.", "Do not cook smoky or strong-smelling foods such as meat or fish.", "肉・魚など煙や匂いの強い調理はできません。", "请勿烹饪肉类、鱼类等烟味或气味强烈的食物。"),
          I("냉장고 음식에는 이름과 보관일 또는 퇴실일을 적어 주세요.", "Label refrigerated food with your name and storage or departure date.", "冷蔵庫の食品には名前と保管日または退室日を記入します。", "冰箱食物请标注姓名及存放或退房日期。")
        ]
      }]
    },
    location: {
      hero: "/assets/images/building-entrance.webp", kicker: "DONGDAEMUN EXIT 6",
      title: I("찾아오는 길", "Directions", "アクセス", "交通指南"),
      sub: I("교촌치킨 동대문 1호점 간판이 가장 쉬운 기준점입니다.", "The Kyochon Chicken Dongdaemun 1 sign is the easiest landmark.", "Kyochon Chicken東大門1号店の看板が目印です。", "校村炸鸡东大门1号店招牌是最明显的地标。"),
      info: [[I("주소", "Address", "住所", "地址"), I("종로 294", "294 Jong-ro", "鐘路294", "钟路294")], [I("층", "Floor", "階", "楼层"), I("5층", "5F", "5階", "5楼")]],
      sections: [{
        title: I("주소와 지도", "Address and maps", "住所と地図", "地址与地图"),
        text: I("서울시 종로구 종로 294 선일빌딩 5층", "5F, Sunil Building, 294 Jong-ro, Jongno-gu, Seoul", "ソウル特別市鐘路区鐘路294 ソニルビル5階", "首尔特别市钟路区钟路294 仙一大楼5层"),
        links: [
          ["Google Maps", "https://maps.app.goo.gl/iAPWD2MCEwrLBeon9"],
          ["Naver Map", "https://naver.me/5neUlzsA"]
        ],
        note: I("택시는 ‘교촌치킨 동대문 1호점’ 또는 ‘하동 우렁 추어탕 동대문점’을 목적지로 설정하면 편합니다. 건물 내 주차는 불가합니다.", "For taxis, use Kyochon Chicken Dongdaemun 1 or Hadong Loach Soup Dongdaemun as the destination. No on-site parking.", "タクシーは「Kyochon Chicken東大門1号店」または「Hadong Loach Soup東大門店」を目的地にすると便利です。館内駐車場はありません。", "打车可将“校村炸鸡东大门1号店”或“河东泥鳅汤东大门店”设为目的地。大楼不可停车。")
      }]
    },
    nearby: {
      hero: "/assets/images/kitchen.webp", kicker: "EAT LIKE A LOCAL",
      title: I("주변 맛집", "Nearby food", "周辺グルメ", "周边美食"),
      sub: I("숙소 가까이에서 만나는 동대문과 종로의 오래된 맛.", "Long-loved flavors around Dongdaemun and Jongno.", "東大門と鐘路で長く愛される味。", "东大门与钟路一带长久受欢迎的味道。"),
      sections: [
        {
          title: I("초원순대국", "Chowon Sundaeguk", "チョウォン・スンデグク", "草原米肠汤"),
          text: I("숙소와 같은 주소에 있는 로컬 순대국·감자탕집입니다. 멀리 이동하기 어려운 날 편하게 들르기 좋습니다.", "A local sundae soup and gamjatang spot at the same street address as the stay—easy for a nearby meal.", "宿と同じ住所にある、スンデグクとカムジャタンのローカル食堂です。", "与住宿同一地址的本地米肠汤、脊骨土豆汤餐厅，适合就近用餐。"),
          links: [["Google Maps", "https://www.google.com/maps/search/?api=1&query=초원순대국+종로294"]]
        },
        {
          title: I("진옥화할매원조닭한마리", "Jin Ok-hwa Original Dakhanmari", "陳玉華ハルメ元祖タッカンマリ", "陈玉华奶奶元祖一只鸡"),
          text: I("동대문 닭한마리 골목을 대표하는 노포입니다. 닭 육수에 떡과 칼국수를 더해 먹는 서울식 한 끼를 경험해 보세요.", "A landmark in Dongdaemun’s dakhanmari alley. Enjoy chicken broth with rice cake and noodles.", "東大門タッカンマリ横丁を代表する老舗。鶏スープに餅や麺を加えて楽しみます。", "东大门一只鸡胡同的代表老店，可在鸡汤中加入年糕和刀切面。"),
          links: [["Google Maps", "https://www.google.com/maps/search/?api=1&query=진옥화할매원조닭한마리"]]
        },
        {
          title: I("광장시장 먹거리", "Gwangjang Market food", "広蔵市場グルメ", "广藏市场美食"),
          text: I("빈대떡, 마약김밥, 육회 등 여러 서울 음식을 한곳에서 둘러볼 수 있습니다. 붐비는 시간에는 소지품을 잘 챙겨 주세요.", "Explore bindaetteok, mayak gimbap, yukhoe, and more in one historic market. Keep belongings close when crowded.", "ピンデトック、麻薬キンパ、ユッケなど多彩なソウルの味が集まります。混雑時は所持品にご注意ください。", "绿豆煎饼、迷你紫菜包饭、生拌牛肉等首尔美食汇聚一处。人多时请保管好随身物品。"),
          links: [["Google Maps", "https://www.google.com/maps/search/?api=1&query=광장시장"]]
        }
      ]
    }
  };

  const devices = [
    {
      title: I("객실 냉난방", "Room climate control", "客室空調", "房间空调"),
      model: "Samsung AM016BN1PBH2",
      image: "/assets/images/climate.webp",
      steps: [
        I("월패드 왼쪽 아래 전원 버튼을 누릅니다.", "Press the power button at the lower left.", "左下の電源ボタンを押します。", "按左下角电源键。"),
        I("화면에서 냉방 또는 원하는 모드를 선택합니다.", "Choose cooling or the desired mode on screen.", "画面で冷房または希望のモードを選びます。", "在屏幕上选择制冷或所需模式。"),
        I("위·아래 버튼으로 온도를 조절합니다.", "Use the up/down buttons to set the temperature.", "上下ボタンで温度を調節します。", "使用上下键调节温度。"),
        I("외출 시 카드키를 뽑으면 전원이 자동 차단됩니다.", "Removing the key card cuts power automatically.", "外出時にカードキーを抜くと電源が自動で切れます。", "外出时拔出房卡，电源会自动断开。")
      ]
    },
    {
      title: I("전자레인지", "Microwave", "電子レンジ", "微波炉"), model: "Cooing MM-E20RBKC", image: "/assets/images/microwave.webp",
      steps: [
        I("금속 용기와 포일은 넣지 마세요.", "Do not place metal or foil inside.", "金属容器やアルミホイルは入れないでください。", "请勿放入金属容器或锡纸。"),
        I("음식을 넣고 문을 완전히 닫습니다.", "Place food inside and close the door.", "食品を入れて扉を閉めます。", "放入食物并关好门。"),
        I("시간을 설정한 뒤 시작합니다.", "Set the time and press Start.", "時間を設定してスタートします。", "设定时间后启动。")
      ]
    },
    {
      title: I("하이라이트", "Ceramic cooktop", "クッキングヒーター", "电陶炉"), model: "Haatz HEC-1015S", image: "/assets/images/cooktop.webp",
      steps: [
        I("평평한 바닥의 조리 용기를 올립니다.", "Use flat-bottom cookware.", "底の平らな調理器具を使います。", "请使用平底锅具。"),
        I("전원을 켜고 화력을 조절합니다.", "Power on and adjust the heat.", "電源を入れ、火力を調節します。", "开机并调节火力。"),
        I("사용 후 전원을 끄고 잔열 표시가 사라질 때까지 만지지 마세요.", "Switch off after use and do not touch until the residual-heat indicator clears.", "使用後は電源を切り、余熱表示が消えるまで触れないでください。", "使用后关机，余热指示消失前请勿触摸。")
      ]
    },
    {
      title: I("정수기", "Water purifier", "浄水器", "净水器"), model: "Chungho WP-30C9460BN", image: "/assets/images/purifier.webp",
      steps: [
        I("컵을 출수구 아래에 놓습니다.", "Place a cup under the spout.", "コップを注水口の下に置きます。", "将杯子放在出水口下方。"),
        I("원하는 물 온도를 선택하고 출수 버튼을 누릅니다.", "Choose the water temperature and press dispense.", "水温を選び、出水ボタンを押します。", "选择水温后按出水键。"),
        I("온수 사용 시 화상에 주의하세요.", "Take care when dispensing hot water.", "温水使用時はやけどにご注意ください。", "使用热水时谨防烫伤。")
      ]
    }
  ];

  pages.appliances = {
    hero: "/assets/images/kitchen.webp", kicker: "HOW EVERYTHING WORKS",
    title: I("기기 사용법", "Appliance guide", "家電の使い方", "设备使用"),
    sub: I("자주 사용하는 기기만 짧고 정확하게 정리했습니다.", "Clear steps for the appliances you will use most.", "よく使う設備を簡潔にまとめました。", "常用设备的简明使用步骤。"),
    devices
  };
  pages.gallery = {
    hero: "/assets/images/hero.webp", kicker: "THE HOUSE",
    title: I("공간 둘러보기", "Explore the house", "館内を見る", "浏览空间"),
    sub: I("따뜻한 목재와 테라코타, 부드러운 빛으로 완성한 작은 스테이.", "Warm wood, terracotta, and soft light.", "温かな木、テラコッタ、柔らかな光。", "温暖木材、赤陶与柔和光线。"),
    gallery: true
  };

  let lang = localStorage.getItem("anotherhouse-lang") || "ko";
  if (!translations[lang]) lang = "ko";
  let lightboxIndex = 0;
  let toastTimer;

  const t = key => translations[lang][key] || translations.ko[key] || key;
  const local = value => typeof value === "object" && value !== null ? (value[lang] || value.ko) : value;
  const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));

  function applyTranslations() {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : lang;
    $$("[data-i18n]").forEach(el => {
      const value = t(el.dataset.i18n);
      if (value) el.innerHTML = value;
    });
    $("#languageLabel").textContent = lang.toUpperCase();
    $$("[data-lang]").forEach(button => {
      button.classList.toggle("active", button.dataset.lang === lang);
      button.setAttribute("aria-selected", button.dataset.lang === lang ? "true" : "false");
    });
    renderRoute(false);
    updateSmartGuide();
  }

  let currentRoute = location.hash.replace("#", "") || "home";
  if (location.hash || location.pathname !== "/") {
    history.replaceState(null, "", `/${location.search}`);
  }

  function renderRoute(scroll = true) {
    const route = currentRoute;
    const page = pages[route];
    const homeView = $("#homeView");
    const pageView = $("#pageView");
    document.body.classList.toggle("page-open", route !== "home");

    if (!page) {
      currentRoute = "home";
      return renderRoute(scroll);
    }
    if (route === "home") {
      homeView.hidden = false;
      pageView.hidden = true;
      $("#pageContent").innerHTML = "";
    } else {
      homeView.hidden = true;
      pageView.hidden = false;
      $("#pageContent").innerHTML = renderPage(page);
      bindDynamicContent();
    }
    $$("[data-nav]").forEach(link => link.classList.toggle("active", link.dataset.nav === route));
    if (!["home", "checkin", "gallery", "appliances"].includes(route)) {
      $("#moreButton").classList.add("active");
    } else {
      $("#moreButton").classList.remove("active");
    }
    closeMenu();
    if (scroll) window.scrollTo({ top: 0, behavior: "instant" });
  }

  function renderPage(page) {
    const title = escapeHtml(local(page.title));
    const sub = escapeHtml(local(page.sub));
    let html = `
      <header class="page-hero">
        <img src="${page.hero}" alt="" fetchpriority="high">
        <div class="page-hero-copy">
          <p>${escapeHtml(page.kicker)}</p>
          <h1>${title}</h1>
          <span>${sub}</span>
        </div>
      </header>`;

    if (page.gallery) {
      html += `<div class="gallery-page">${gallery.map((item, index) => `
        <button type="button" data-gallery-index="${index}">
          <img src="${item.src}" alt="${escapeHtml(local(item.cap))}" loading="lazy">
          <span>${escapeHtml(local(item.cap))}</span>
        </button>`).join("")}</div>`;
      return html;
    }

    html += `<div class="page-body">`;
    if (page.info) {
      html += `<div class="info-band">${page.info.map(item => `<div><small>${escapeHtml(local(item[0]))}</small><strong>${escapeHtml(local(item[1]))}</strong></div>`).join("")}</div>`;
    }
    if (page.devices) {
      html += `<section class="guide-section"><span>01</span><h2>${escapeHtml(local(page.title))}</h2>
        <div class="device-list">${page.devices.map((device, index) => `
          <details class="device-card"${index === 0 ? " open" : ""}>
            <summary><img src="${device.image}" alt=""><span><b>${escapeHtml(local(device.title))}</b><small>${escapeHtml(device.model)}</small></span><i>＋</i></summary>
            <div class="device-body"><img src="${device.image}" alt="${escapeHtml(local(device.title))}" loading="lazy"><ol>${device.steps.map(step => `<li>${escapeHtml(local(step))}</li>`).join("")}</ol></div>
          </details>`).join("")}</div></section>`;
    } else {
      html += (page.sections || []).map((section, index) => renderSection(section, index)).join("");
    }
    html += `</div>`;
    return html;
  }

  function renderSection(section, index) {
    let html = `<section class="guide-section"><span>${String(index + 1).padStart(2, "0")}</span><h2>${escapeHtml(local(section.title))}</h2>`;
    if (section.text) html += `<p>${escapeHtml(local(section.text))}</p>`;
    if (section.image) html += `<figure class="guide-figure"><img src="${section.image}" alt="" loading="lazy"></figure>`;
    if (section.value) html += `<div class="value-card"><small>${escapeHtml(section.value.label)}</small><strong>${escapeHtml(section.value.value)}</strong><button type="button" data-copy="${escapeHtml(section.value.copy)}">${escapeHtml(t("copy"))}</button></div>`;
    if (section.steps) html += `<ol class="steps">${section.steps.map(step => `<li>${escapeHtml(local(step))}</li>`).join("")}</ol>`;
    if (section.links) html += `<div class="location-actions">${section.links.map(link => `<a href="${link[1]}" target="_blank" rel="noopener"><span>↗</span><b>${escapeHtml(link[0])}</b></a>`).join("")}</div>`;
    if (section.note) html += `<aside class="notice">${escapeHtml(local(section.note))}</aside>`;
    return html + `</section>`;
  }

  function bindDynamicContent() {
    $$("[data-gallery-index]", $("#pageView")).forEach(button => button.addEventListener("click", () => openLightbox(Number(button.dataset.galleryIndex))));
    $$("[data-copy]", $("#pageView")).forEach(button => button.addEventListener("click", () => copyText(button.dataset.copy)));
  }

  function updateSmartGuide() {
    const hour = new Date().getHours();
    const minute = String(new Date().getMinutes()).padStart(2, "0");
    $("#smartTime").textContent = `${String(hour).padStart(2, "0")}:${minute}`;
    const messages = {
      ko: [
        [5, 11, "좋은 아침이에요", "체크아웃은 오전 11시입니다. 나가기 전 체크리스트를 확인해 보세요.", "checkout", "체크아웃 안내"],
        [11, 15, "곧 만나요", "체크인은 오후 3시부터입니다. 짐 보관 위치와 오는 길을 미리 확인하세요.", "checkin", "도착 안내 보기"],
        [15, 22, "도착하셨나요?", "키오스크 체크인 순서와 입구 사진을 먼저 확인해 보세요.", "checkin", "체크인 안내 보기"],
        [22, 24, "조용한 밤이에요", "매너타임은 오전 5시까지입니다. 필요한 기기 사용법을 확인해 보세요.", "appliances", "기기 안내 보기"],
        [0, 5, "편안한 밤 보내세요", "지금은 매너타임입니다. 소리를 낮추고 편안히 쉬어 주세요.", "rules", "숙소 규칙 보기"]
      ],
      en: [
        [5, 11, "Good morning", "Check-out is at 11:00. Review the quick checklist before leaving.", "checkout", "Check-out guide"],
        [11, 15, "See you soon", "Check-in begins at 15:00. Preview arrival and luggage information.", "checkin", "Arrival guide"],
        [15, 22, "Have you arrived?", "Start with the kiosk steps and entrance photos.", "checkin", "Check-in guide"],
        [22, 24, "A quiet night", "Quiet hours continue until 05:00. Find appliance help here.", "appliances", "Appliance guide"],
        [0, 5, "Rest well", "Quiet hours are in effect. Please keep sound low.", "rules", "House rules"]
      ],
      ja: [
        [5, 11, "おはようございます", "チェックアウトは11時です。出発前の手順をご確認ください。", "checkout", "チェックアウト"],
        [11, 15, "もうすぐお会いしましょう", "チェックインは15時からです。アクセスと荷物情報をご確認ください。", "checkin", "到着ガイド"],
        [15, 22, "到着しましたか？", "キオスクの手順と入口写真をご確認ください。", "checkin", "チェックイン"],
        [22, 24, "静かな夜です", "静粛時間は5時までです。設備ガイドはこちら。", "appliances", "家電ガイド"],
        [0, 5, "ゆっくりお休みください", "現在は静粛時間です。音を控えてお過ごしください。", "rules", "ハウスルール"]
      ],
      zh: [
        [5, 11, "早上好", "退房时间为11:00，离开前请查看清单。", "checkout", "退房指南"],
        [11, 15, "很快见面", "15:00开始入住，请提前查看路线和行李信息。", "checkin", "到达指南"],
        [15, 22, "已经到达了吗？", "请先查看自助入住步骤和入口照片。", "checkin", "入住指南"],
        [22, 24, "安静的夜晚", "安静时段持续至05:00，可在此查看设备指南。", "appliances", "设备指南"],
        [0, 5, "祝您安睡", "目前为安静时段，请降低音量。", "rules", "住宿规则"]
      ]
    };
    const choice = messages[lang].find(item => hour >= item[0] && hour < item[1]) || messages[lang][2];
    $("#smartTitle").textContent = choice[2];
    $("#smartCopy").textContent = choice[3];
    $("#smartAction").dataset.route = choice[4];
    $("#smartAction").textContent = choice[5];
  }

  function openMenu() {
    $("#sheetBackdrop").hidden = false;
    requestAnimationFrame(() => $("#menuSheet").classList.add("open"));
    $("#menuSheet").setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
  function closeMenu() {
    $("#menuSheet").classList.remove("open");
    $("#menuSheet").setAttribute("aria-hidden", "true");
    setTimeout(() => { $("#sheetBackdrop").hidden = true; }, 280);
    document.body.style.overflow = "";
  }
  function openBooking() {
    $("#bookingModal").hidden = false;
    document.body.style.overflow = "hidden";
  }
  function closeBooking() {
    $("#bookingModal").hidden = true;
    document.body.style.overflow = "";
  }
  function openLightbox(index) {
    lightboxIndex = (index + gallery.length) % gallery.length;
    const item = gallery[lightboxIndex];
    $("#lightboxImage").src = item.src;
    $("#lightboxImage").alt = local(item.cap);
    $("#lightboxCaption").textContent = local(item.cap);
    $("#lightboxCount").textContent = `${String(lightboxIndex + 1).padStart(2, "0")} / ${String(gallery.length).padStart(2, "0")}`;
    $("#lightbox").hidden = false;
    document.body.style.overflow = "hidden";
  }
  function closeLightbox() {
    $("#lightbox").hidden = true;
    document.body.style.overflow = "";
  }
  async function copyText(value) {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = value;
      document.body.append(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    }
    showToast(t("copied"));
  }
  function showToast(message) {
    clearTimeout(toastTimer);
    $("#toast").textContent = message;
    $("#toast").classList.add("show");
    toastTimer = setTimeout(() => $("#toast").classList.remove("show"), 1800);
  }
  function setupReveal() {
    if (!("IntersectionObserver" in window)) {
      $$(".reveal").forEach(el => el.classList.add("visible"));
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .08 });
    $$(".reveal").forEach(el => observer.observe(el));
  }

  $("#menuButton").addEventListener("click", openMenu);
  $("#moreButton").addEventListener("click", openMenu);
  $("#closeMenu").addEventListener("click", closeMenu);
  $("#sheetBackdrop").addEventListener("click", closeMenu);
  $("#languageButton").addEventListener("click", event => {
    event.stopPropagation();
    const open = $("#languageMenu").classList.toggle("open");
    $("#languageButton").setAttribute("aria-expanded", String(open));
  });
  document.addEventListener("click", () => {
    $("#languageMenu").classList.remove("open");
    $("#languageButton").setAttribute("aria-expanded", "false");
  });
  $$("[data-lang]").forEach(button => button.addEventListener("click", () => {
    lang = button.dataset.lang;
    localStorage.setItem("anotherhouse-lang", lang);
    applyTranslations();
  }));
  document.addEventListener("click", event => {
    const routeButton = event.target.closest("[data-route]");
    if (routeButton) {
      event.preventDefault();
      currentRoute = routeButton.dataset.route;
      history.replaceState(null, "", `/${location.search}`);
      renderRoute();
    }
    const scrollButton = event.target.closest("[data-scroll]");
    if (scrollButton) {
      event.preventDefault();
      document.getElementById(scrollButton.dataset.scroll)?.scrollIntoView({ behavior: "smooth" });
    }
    if (event.target.closest("[data-open-booking]")) openBooking();
    if (event.target.closest("[data-close-booking]")) closeBooking();
    const galleryButton = event.target.closest("[data-gallery-index]");
    if (galleryButton && !galleryButton.closest("#pageView")) openLightbox(Number(galleryButton.dataset.galleryIndex));
  });
  $("#bookingModal").addEventListener("click", event => {
    if (event.target === $("#bookingModal")) closeBooking();
  });
  $("#lightboxClose").addEventListener("click", closeLightbox);
  $("#lightboxPrev").addEventListener("click", () => openLightbox(lightboxIndex - 1));
  $("#lightboxNext").addEventListener("click", () => openLightbox(lightboxIndex + 1));
  $("#lightbox").addEventListener("click", event => { if (event.target === $("#lightbox")) closeLightbox(); });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") { closeMenu(); closeBooking(); closeLightbox(); }
    if (!$("#lightbox").hidden && event.key === "ArrowLeft") openLightbox(lightboxIndex - 1);
    if (!$("#lightbox").hidden && event.key === "ArrowRight") openLightbox(lightboxIndex + 1);
  });
  window.addEventListener("scroll", () => $("#siteHeader").classList.toggle("scrolled", scrollY > 28), { passive: true });

  applyTranslations();
  setupReveal();
  if ("serviceWorker" in navigator && location.protocol === "https:") {
    window.addEventListener("load", () => navigator.serviceWorker.register("/sw.js").catch(() => {}));
  }
})();
