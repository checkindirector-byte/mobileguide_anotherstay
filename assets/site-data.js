(() => {
  const I = (ko, en, ja, zh) => ({ ko, en, ja, zh });
  window.ANOTHER_HOUSE_DATA = {
    brand: 'ANOTHER HOUSE',
    tagline: 'STAY ANOTHER LIFE',
    address: I('서울시 종로구 종로 294 선일빌딩 5층', '5F, Sunil Building, 294 Jong-ro, Jongno-gu, Seoul', 'ソウル特別市鍾路区鍾路294 ソニルビル5階', '首尔特别市钟路区钟路294，Sunil大厦5层'),
    station: I('동대문역 6번 출구 · 도보 30초', 'Dongdaemun Station Exit 6 · 30 sec walk', '東大門駅6番出口 · 徒歩30秒', '东大门站6号出口 · 步行30秒'),
    contact: I('호스트에게 연락이 필요하시면 에어비앤비 메시지로 보내주세요.', 'If you need to contact the host, please send a message through Airbnb.', 'ホストへの連絡が必要な場合は、Airbnbメッセージをお送りください。', '如需联系房东，请通过 Airbnb 发送消息。'),
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
      sourceNotice: I('이 답변은 어나더하우스 안내 내용만 사용합니다.', 'Answers use only the Another House guide.', 'アナザーハウスの案内のみを使用します。', '回答仅使用 Another House 指南。'),
      backHome: I('홈으로', 'Back home', 'ホームへ', '返回首页'),
      print: I('가이드북 인쇄·저장', 'Print or save guidebook', 'ガイドブックを印刷・保存', '打印或保存指南')
    },
    gallery: [
      ['/assets/images/hero.webp', I('어나더하우스 입구와 복도', 'Entrance and corridor', 'エントランスと廊下', '入口与走廊')],
      ['/assets/images/powder-room.webp', I('파우더룸', 'Powder room', 'パウダールーム', '梳妆区')],
      ['/assets/images/shower.webp', I('깨끗한 공용 샤워실', 'Clean shared shower room', '清潔な共用シャワールーム', '洁净公共淋浴间')],
      ['/assets/images/kitchen.webp', I('공용 키친', 'Shared kitchen', '共用キッチン', '公共厨房')],
      ['/assets/images/kitchen-bar.webp', I('키친 바', 'Kitchen bar', 'キッチンバー', '厨房吧台')],
      ['/assets/images/entrance-brand.webp', I('브랜드 월', 'Brand wall', 'ブランドウォール', '品牌墙')],
      ['/assets/images/arrival.webp', I('선일빌딩 입구', 'Sunil Building entrance', 'ソニルビル入口', 'Sunil大厦入口')],
      ['/assets/images/single-window.webp', I('창가 싱글룸', 'Window single room', '窓側シングルルーム', '窗边单人房')],
      ['/assets/images/single-room.webp', I('코지 싱글룸', 'Cozy single room', 'コージーシングルルーム', '舒适单人房')],
      ['/assets/images/double-bed.webp', I('벙커 더블룸', 'Bunk double room', 'バンクダブルルーム', '双人上下铺房')],
      ['/assets/images/double-window.webp', I('창이 있는 더블룸', 'Window double room', '窓のあるダブルルーム', '带窗双人房')]
    ],
    essentials: [
      { label: I('체크인', 'Check-in', 'チェックイン', '入住'), value: '15:00', route: 'checkin' },
      { label: I('체크아웃', 'Check-out', 'チェックアウト', '退房'), value: '11:00', route: 'checkout' },
      { label: I('입실', 'Entry', '入室', '入室'), value: I('셀프 체크인', 'Self check-in', 'セルフチェックイン', '自助入住'), route: 'checkin' },
      { label: I('위치', 'Location', '場所', '位置'), value: I('동대문역 6번 출구', 'Dongdaemun Exit 6', '東大門駅6番出口', '东大门站6号出口'), route: 'transport' }
    ],
    pages: {
      checkin: { title: I('체크인', 'Check-in', 'チェックイン', '入住'), kicker: 'ARRIVAL', hero: '/assets/images/arrival.webp', summary: I('체크인은 오후 3시부터입니다. 선일빌딩 5층으로 올라와 현장 안내에 따라 셀프 체크인을 진행해 주세요.', 'Check-in begins at 15:00. Go to the 5th floor of Sunil Building and follow the on-site self check-in instructions.', 'チェックインは15時からです。ソニルビル5階へ上がり、現地案内に従ってセルフチェックインしてください。', '15:00起可入住。请前往Sunil大厦5层，按照现场说明自助办理入住。'), sections: [
        { title: I('건물 찾기', 'Find the building', '建物を探す', '找到大厦'), image: '/assets/images/arrival.webp', body: I('동대문역 6번 출구에서 나와 선일빌딩 입구를 찾으세요. 숙소는 5층입니다.', 'From Dongdaemun Station Exit 6, find the Sunil Building entrance. The stay is on the 5th floor.', '東大門駅6番出口からソニルビル入口を探してください。宿は5階です。', '从东大门站6号出口出来，找到Sunil大厦入口。住宿位于5层。') },
        { title: I('셀프 체크인', 'Self check-in', 'セルフチェックイン', '自助入住'), steps: I(['15:00 이후 5층으로 올라옵니다.','예약자 정보로 현장 체크인 절차를 진행합니다.','객실 번호와 이용 안내를 확인합니다.','출입 정보는 다른 사람에게 공유하지 마세요.'],['Come to the 5th floor after 15:00.','Complete the on-site process using the booking name.','Confirm your room number and stay instructions.','Never share access information with others.'],['15時以降に5階へお越しください。','予約者情報で現地チェックインを進めます。','客室番号と利用案内を確認します。','入館情報を他人に共有しないでください。'],['15:00后前往5层。','使用预订人信息完成现场入住。','确认房号和住宿说明。','请勿向他人分享门禁信息。']) },
        { title: I('도움이 필요할 때', 'If you need help', 'サポートが必要な場合', '需要帮助时'), body: I('예약 플랫폼 메시지로 호스트에게 연락해 주세요. 비밀번호나 출입 코드는 이 웹사이트에 표시하지 않습니다.', 'Message the host through your booking platform. Passwords and access codes are never displayed on this website.', '予約プラットフォームからホストへご連絡ください。パスワードや入館コードはサイトに表示しません。', '请通过预订平台消息联系房东。本网站不会显示密码或门禁码。') }
      ]},
      checkout: { title: I('체크아웃 안내', 'Check-out guide', 'チェックアウト案内', '退房指南'), kicker: 'DEPARTURE', hero: '/assets/images/double-window.webp', summary: I('체크아웃은 오전 11시까지입니다.', 'Check-out is by 11:00.', 'チェックアウトは11時までです。', '请于11:00前退房。'), sections: [
        { title: I('나가기 전', 'Before leaving', '出発前', '离开前'), steps: I(['개인 물품과 충전기를 확인해 주세요.','사용한 공간을 가볍게 정돈해 주세요.','분리배출 안내에 따라 쓰레기를 정리해 주세요.','객실 문이 닫혔는지 확인해 주세요.'],['Check personal items and chargers.','Leave used spaces tidy.','Sort waste according to the guide.','Make sure your room door is closed.'],['忘れ物と充電器をご確認ください。','利用した空間を軽く整えてください。','案内に従ってごみを分別してください。','客室のドアが閉まったことをご確認ください。'],['检查随身物品和充电器。','简单整理使用过的空间。','按照指南分类垃圾。','确认房门已关闭。']) }
      ]},
      transport: { title: I('찾아오는 길', 'Getting here', 'アクセス', '交通路线'), kicker: 'TRANSPORT', hero: '/assets/images/arrival.webp', summary: I('동대문역 6번 출구에서 도보 약 30초, 선일빌딩 5층입니다.', 'We are on the 5th floor of Sunil Building, about 30 seconds from Dongdaemun Station Exit 6.', '東大門駅6番出口から徒歩約30秒、ソニルビル5階です。', '从东大门站6号出口步行约30秒，位于Sunil大厦5层。'),
        destination: {
          name: I('어나더하우스', 'Another House', 'アナザーハウス', 'Another House'),
          landmark: I('동대문역 6번 출구 앞 선일빌딩', 'Sunil Building by Dongdaemun Exit 6', '東大門駅6番出口前 ソニルビル', '东大门站6号出口前 Sunil大厦'),
          station: I('동대문역 6번 출구', 'Dongdaemun Station Exit 6', '東大門駅6番出口', '东大门站6号出口'),
          lastMile: I('도보 약 30초 · 엘리베이터로 5층', 'About 30 sec on foot · Elevator to 5F', '徒歩約30秒 · エレベーターで5階', '步行约30秒 · 乘电梯至5层')
        },
        sections: [
          {
            title: I('인천공항 → 어나더하우스', 'Incheon Airport → Another House', '仁川空港 → アナザーハウス', '仁川机场 → Another House'),
            summary: I('공항철도·리무진·택시 경로 보기', 'See AREX, limousine, and taxi routes', '空港鉄道・リムジン・タクシー', '查看机场铁路、巴士和出租车路线'),
            sourceUrl: 'https://www.airport.kr/ap_en/1512/subview.do',
            sourceLabel: I('인천공항 공식 교통정보 확인', 'Check Incheon Airport official transport info', '仁川空港の公式交通情報', '查看仁川机场官方交通信息'),
            routes: [
              {
                title: I('AREX + 지하철 4호선', 'AREX + Subway Line 4', 'AREX + 地下鉄4号線', 'AREX + 地铁4号线'),
                badge: I('추천', 'RECOMMENDED', 'おすすめ', '推荐'),
                tags: I(['약 75–90분','환승 1회','교통체증 없음'],['About 75–90 min','1 transfer','Traffic-free'],['約75〜90分','乗換1回','渋滞なし'],['约75–90分钟','换乘1次','不受堵车影响']),
                path: I('인천공항 → 서울역 → 동대문역', 'Incheon Airport → Seoul Station → Dongdaemun', '仁川空港 → ソウル駅 → 東大門駅', '仁川机场 → 首尔站 → 东大门站'),
                note: I('짐이 가벼울 때 가장 안정적인 추천 경로입니다.', 'The most predictable route when traveling light.', '荷物が軽い場合に最も安定したルートです。', '行李较轻时最稳定的推荐路线。'),
                color: '#B65C3D', soft: '#F0DED4',
                steps: [
                  { icon:'flight_land', label:I('START','START','START','START'), title:I('인천공항 제1·2터미널', 'Incheon Airport T1 or T2', '仁川空港 第1・第2ターミナル', '仁川机场T1或T2'), body:I('공항철도 AREX 표지판을 따라갑니다.', 'Follow signs for Airport Railroad AREX.', '空港鉄道AREXの表示に従います。', '跟随机场铁路AREX标识。') },
                  { icon:'train', label:I('AREX','AREX','AREX','AREX'), title:I('서울역까지 이동', 'Ride to Seoul Station', 'ソウル駅まで移動', '前往首尔站'), body:I('일반열차 또는 직통열차를 이용합니다.', 'Take an all-stop or express train.', '一般列車または直通列車を利用します。', '乘普通列车或直达列车。') },
                  { icon:'subway', label:I('LINE 4','LINE 4','LINE 4','LINE 4'), title:I('4호선 진접 방면 환승', 'Transfer to Line 4 toward Jinjeop', '4号線・榛接方面へ乗換', '换乘4号线榛接方向'), body:I('서울역에서 동대문역까지 이동합니다.', 'Ride from Seoul Station to Dongdaemun.', 'ソウル駅から東大門駅へ移動します。', '从首尔站前往东大门站。') },
                  { icon:'directions_walk', label:I('EXIT 6','EXIT 6','EXIT 6','EXIT 6'), title:I('동대문역 6번 출구', 'Dongdaemun Station Exit 6', '東大門駅6番出口', '东大门站6号出口'), body:I('출구 앞 선일빌딩으로 들어가 5층으로 올라옵니다.', 'Enter Sunil Building by the exit and take the elevator to 5F.', '出口前のソニルビルに入り、5階へ上がります。', '进入出口前的Sunil大厦，乘电梯到5层。') }
                ]
              },
              {
                title: I('공항리무진 6002', 'Airport Limousine 6002', '空港リムジン6002', '机场大巴6002'),
                badge: I('짐이 많을 때', 'LUGGAGE', '荷物が多い方', '行李较多'),
                tags: I(['약 90–120분','환승 적음','교통상황 영향'],['About 90–120 min','Fewer transfers','Traffic dependent'],['約90〜120分','乗換少なめ','交通状況による'],['约90–120分钟','少换乘','受路况影响']),
                path: I('인천공항 → 6002번 → 동대문 권역', 'Incheon Airport → Bus 6002 → Dongdaemun area', '仁川空港 → 6002番 → 東大門エリア', '仁川机场 → 6002路 → 东大门区域'),
                note: I('탑승 전 전광판에서 당일 정류장과 운행시간을 확인하세요.', 'Confirm the operating stop and time on the airport display before boarding.', '乗車前に当日の停留所と運行時刻をご確認ください。', '上车前请在机场屏幕确认当天停靠站和班次。'),
                color: '#7D5D49', soft: '#E9DED4',
                steps: [
                  { icon:'confirmation_number', label:I('TICKET','TICKET','TICKET','TICKET'), title:I('6002번 승차권 확인', 'Check Bus 6002 ticket', '6002番の乗車券を確認', '确认6002路车票'), body:I('공항 버스 매표소·무인발권기에서 안내를 확인합니다.', 'Check the airport bus counter or ticket machine.', '空港バス案内所または券売機で確認します。', '在机场巴士售票处或售票机确认。') },
                  { icon:'airport_shuttle', label:I('BUS 6002','BUS 6002','BUS 6002','BUS 6002'), title:I('청량리·동대문·종로 방면', 'Toward Cheongnyangni, Dongdaemun, Jongno', '清凉里・東大門・鍾路方面', '清凉里·东大门·钟路方向'), body:I('공식 노선의 동대문 권역 정류장으로 이동합니다.', 'Ride to the official Dongdaemun-area stop.', '公式ルートの東大門エリア停留所まで乗車します。', '前往官方路线的东大门区域站点。') },
                  { icon:'directions_walk', label:I('LAST MILE','LAST MILE','LAST MILE','LAST MILE'), title:I('동대문역 6번 출구 방향', 'Head toward Dongdaemun Exit 6', '東大門駅6番出口方面へ', '前往东大门站6号出口'), body:I('실시간 하차 정류장을 확인한 뒤 선일빌딩 5층으로 이동합니다.', 'Check your live stop, then continue to Sunil Building 5F.', '当日の降車停留所を確認し、ソニルビル5階へ移動します。', '确认实时下车站后前往Sunil大厦5层。') }
                ]
              },
              {
                title: I('공항 택시', 'Airport taxi', '空港タクシー', '机场出租车'),
                badge: I('가장 편리', 'EASIEST', '最も便利', '最方便'),
                tags: I(['약 70–100분','환승 없음','심야 추천'],['About 70–100 min','Direct','Good late at night'],['約70〜100分','乗換なし','深夜に便利'],['约70–100分钟','直达','适合深夜']),
                path: I('인천공항 → 선일빌딩', 'Incheon Airport → Sunil Building', '仁川空港 → ソニルビル', '仁川机场 → Sunil大厦'),
                note: I('소요시간과 요금은 교통상황에 따라 달라집니다.', 'Time and fare vary with traffic.', '所要時間と料金は交通状況により変わります。', '时间和费用视路况而定。'),
                color: '#2A211D', soft: '#E5DED9',
                steps: [
                  { icon:'local_taxi', label:I('TAXI','TAXI','TAXI','TAXI'), title:I('공식 택시 승강장 탑승', 'Use the official taxi stand', '公式タクシー乗り場を利用', '使用官方出租车乘车点'), body:I('호객 차량 대신 지정 승강장을 이용합니다.', 'Use a designated stand rather than solicited vehicles.', '客引き車両ではなく指定乗り場をご利用ください。', '请使用指定乘车点，勿乘揽客车辆。') },
                  { icon:'content_paste_search', label:I('ADDRESS','ADDRESS','ADDRESS','ADDRESS'), title:I('서울시 종로구 종로 294', '294 Jong-ro, Jongno-gu, Seoul', 'ソウル市鍾路区鍾路294', '首尔市钟路区钟路294'), body:I('기사님께 “동대문역 6번 출구 선일빌딩”을 함께 보여 주세요.', 'Also show “Sunil Building by Dongdaemun Exit 6.”', '「東大門駅6番出口前 ソニルビル」もお見せください。', '同时向司机出示“东大门站6号出口 Sunil大厦”。') }
                ]
              }
            ]
          },
          {
            title: I('김포공항 → 어나더하우스', 'Gimpo Airport → Another House', '金浦空港 → アナザーハウス', '金浦机场 → Another House'),
            summary: I('공항철도·지하철·택시 경로 보기', 'See AREX, subway, and taxi routes', '空港鉄道・地下鉄・タクシー', '查看机场铁路、地铁和出租车路线'),
            sourceUrl: 'https://www.airport.co.kr/gimpo/cms/frCon/index.do?CONTENTS_NO=5&MENU_ID=1290',
            sourceLabel: I('김포공항 공식 교통정보 확인', 'Check Gimpo Airport official transport info', '金浦空港の公式交通情報', '查看金浦机场官方交通信息'),
            routes: [
              {
                title: I('AREX + 지하철 4호선', 'AREX + Subway Line 4', 'AREX + 地下鉄4号線', 'AREX + 地铁4号线'),
                badge: I('추천', 'RECOMMENDED', 'おすすめ', '推荐'),
                tags: I(['약 45–60분','환승 1회','빠른 경로'],['About 45–60 min','1 transfer','Fast route'],['約45〜60分','乗換1回','速いルート'],['约45–60分钟','换乘1次','快捷路线']),
                path: I('김포공항 → 서울역 → 동대문역', 'Gimpo Airport → Seoul Station → Dongdaemun', '金浦空港 → ソウル駅 → 東大門駅', '金浦机场 → 首尔站 → 东大门站'),
                note: I('이동 동선이 단순한 추천 경로입니다.', 'A straightforward recommended route.', '移動動線がシンプルなおすすめルートです。', '换乘动线简单的推荐路线。'),
                color: '#B65C3D', soft: '#F0DED4',
                steps: [
                  { icon:'flight_land', label:I('START','START','START','START'), title:I('김포공항', 'Gimpo Airport', '金浦空港', '金浦机场'), body:I('공항철도 AREX 표지판을 따라갑니다.', 'Follow signs for Airport Railroad AREX.', '空港鉄道AREXの表示に従います。', '跟随机场铁路AREX标识。') },
                  { icon:'train', label:I('AREX','AREX','AREX','AREX'), title:I('서울역까지 이동', 'Ride to Seoul Station', 'ソウル駅まで移動', '前往首尔站'), body:I('공항철도 일반열차를 이용합니다.', 'Take the AREX all-stop train.', '空港鉄道の一般列車を利用します。', '乘AREX普通列车。') },
                  { icon:'subway', label:I('LINE 4','LINE 4','LINE 4','LINE 4'), title:I('4호선 진접 방면 환승', 'Transfer to Line 4 toward Jinjeop', '4号線・榛接方面へ乗換', '换乘4号线榛接方向'), body:I('동대문역에서 내려 6번 출구로 나옵니다.', 'Get off at Dongdaemun and use Exit 6.', '東大門駅で下車し、6番出口へ。', '在东大门站下车，从6号出口出站。') },
                  { icon:'directions_walk', label:I('30 SEC','30 SEC','30 SEC','30 SEC'), title:I('선일빌딩 5층', 'Sunil Building 5F', 'ソニルビル5階', 'Sunil大厦5层'), body:I('6번 출구 앞 건물, 엘리베이터로 5층입니다.', 'The building is by Exit 6; take the elevator to 5F.', '6番出口前の建物、エレベーターで5階です。', '大厦在6号出口前，乘电梯到5层。') }
                ]
              },
              {
                title: I('지하철 5호선 + 4호선', 'Subway Line 5 + Line 4', '地下鉄5号線 + 4号線', '地铁5号线 + 4号线'),
                badge: I('대안 경로', 'ALTERNATIVE', '別ルート', '备选路线'),
                tags: I(['약 55–70분','환승 1회','일반 지하철'],['About 55–70 min','1 transfer','Regular subway'],['約55〜70分','乗換1回','一般地下鉄'],['约55–70分钟','换乘1次','普通地铁']),
                path: I('김포공항 → 동대문역사문화공원 → 동대문역', 'Gimpo Airport → DDP Station → Dongdaemun', '金浦空港 → 東大門歴史文化公園 → 東大門', '金浦机场 → 东大门历史文化公园 → 东大门'),
                note: I('서울역을 거치지 않는 지하철 대안입니다.', 'A subway alternative that bypasses Seoul Station.', 'ソウル駅を経由しない地下鉄ルートです。', '不经过首尔站的地铁备选路线。'),
                color: '#7D5D49', soft: '#E9DED4',
                steps: [
                  { icon:'subway', label:I('LINE 5','LINE 5','LINE 5','LINE 5'), title:I('5호선 방화역 방향 반대편', 'Line 5 away from Banghwa', '5号線・傍花方面の反対方向', '5号线往傍花反方向'), body:I('동대문역사문화공원역까지 이동합니다.', 'Ride to Dongdaemun History & Culture Park.', '東大門歴史文化公園駅まで移動します。', '前往东大门历史文化公园站。') },
                  { icon:'sync_alt', label:I('TRANSFER','TRANSFER','TRANSFER','TRANSFER'), title:I('4호선 진접 방면 환승', 'Transfer to Line 4 toward Jinjeop', '4号線・榛接方面へ乗換', '换乘4号线榛接方向'), body:I('한 정거장 뒤 동대문역에서 내립니다.', 'Ride one stop to Dongdaemun.', '1駅先の東大門駅で下車します。', '乘一站到东大门站下车。') },
                  { icon:'directions_walk', label:I('EXIT 6','EXIT 6','EXIT 6','EXIT 6'), title:I('동대문역 6번 출구', 'Dongdaemun Station Exit 6', '東大門駅6番出口', '东大门站6号出口'), body:I('출구 앞 선일빌딩 5층으로 올라옵니다.', 'Go to Sunil Building 5F by the exit.', '出口前のソニルビル5階へ上がります。', '前往出口前Sunil大厦5层。') }
                ]
              },
              {
                title: I('공항 택시', 'Airport taxi', '空港タクシー', '机场出租车'),
                badge: I('직행', 'DIRECT', '直行', '直达'),
                tags: I(['약 60–70분','환승 없음','교통상황 영향'],['About 60–70 min','Direct','Traffic dependent'],['約60〜70分','乗換なし','交通状況による'],['约60–70分钟','直达','受路况影响']),
                path: I('김포공항 → 선일빌딩', 'Gimpo Airport → Sunil Building', '金浦空港 → ソニルビル', '金浦机场 → Sunil大厦'),
                note: I('교통상황에 따라 소요시간과 요금이 달라집니다.', 'Time and fare vary with traffic.', '所要時間と料金は交通状況により変わります。', '时间和费用视路况而定。'),
                color: '#2A211D', soft: '#E5DED9',
                steps: [
                  { icon:'local_taxi', label:I('TAXI','TAXI','TAXI','TAXI'), title:I('공식 택시 승강장 탑승', 'Use the official taxi stand', '公式タクシー乗り場を利用', '使用官方出租车乘车点'), body:I('국제선·국내선 청사 밖 지정 승강장을 이용합니다.', 'Use the designated stand outside your terminal.', '国際線・国内線ターミナル外の指定乗り場をご利用ください。', '使用航站楼外指定乘车点。') },
                  { icon:'content_paste_search', label:I('ADDRESS','ADDRESS','ADDRESS','ADDRESS'), title:I('서울시 종로구 종로 294', '294 Jong-ro, Jongno-gu, Seoul', 'ソウル市鍾路区鍾路294', '首尔市钟路区钟路294'), body:I('“동대문역 6번 출구 선일빌딩”을 함께 보여 주세요.', 'Also show “Sunil Building by Dongdaemun Exit 6.”', '「東大門駅6番出口前 ソニルビル」もお見せください。', '同时出示“东大门站6号出口 Sunil大厦”。') }
                ]
              }
            ]
          }
        ]
      },
      wifi: { title: I('Wi-Fi', 'Wi-Fi', 'Wi-Fi', 'Wi-Fi'), kicker: 'CONNECTION', hero: '/assets/images/kitchen-bar.webp', summary: I('공용 Wi-Fi 이름은 another입니다. 비밀번호는 체크인 안내 또는 예약 메시지에서 확인해 주세요.', 'The Wi-Fi network is “another”. Find the password in your check-in information or booking message.', 'Wi-Fi名は「another」です。パスワードはチェックイン案内または予約メッセージでご確認ください。', 'Wi-Fi名称为“another”。密码请查看入住说明或预订消息。'), sections: [
        { title: I('네트워크', 'Network', 'ネットワーク', '网络'), value: 'another', copy: 'another' },
        { title: I('비밀번호', 'Password', 'パスワード', '密码'), body: I('보안을 위해 웹사이트에는 표시하지 않습니다. 예약 메시지를 확인해 주세요.', 'For security, it is not shown on this website. Check your booking message.', '安全のためサイトには表示しません。予約メッセージをご確認ください。', '出于安全考虑，本网站不显示密码。请查看预订消息。') }
      ]},
      appliances: { title: I('기기 사용법', 'Appliance guide', '設備ガイド', '设备指南'), kicker: 'APPLIANCES', hero: '/assets/images/kitchen.webp', summary: I('사진에서 확인한 모델명과 제조사 공식 자료를 대조해, 숙소에서 자주 쓰는 조작만 정리했습니다.', 'We matched the photographed models with manufacturer documentation and summarized the controls guests use most.', '写真の型番をメーカー公式資料と照合し、滞在中によく使う操作をまとめました。', '已将照片中的型号与制造商官方资料核对，并整理住客常用操作。'), devices: [
        { name: I('객실 냉난방', 'Room climate control', '客室空調', '房间空调'), model: 'Samsung AM016BN1PBH2 · MWR-WG00 series controller', image: '/assets/images/climate.webp', manualUrl: 'https://www.samsung.com/au/support/model/MWR-WG00JN/', manualLabel: I('삼성 공식 설명서', 'Samsung official manual', 'Samsung公式説明書', '三星官方说明书'), guideSourceUrl: 'https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_UK&OriginYN=N&ModelType=N&ModelName=MWR-WG00JN&CttFileID=11569165&CDCttType=UM&VPath=UM%2F202607%2F20260723130050154%2FDB68-08383A-09_IB_SOL_LCD_Wired_Remote1_EU_Wing_EN_260623-D01.pdf', guideSourceLabel: I('Samsung 조작부 공식 도해', 'Samsung official controller overview', 'Samsung公式操作部図', 'Samsung官方控制器图解'), guideImage: '/assets/images/guides/official-samsung.webp', guideLabel: I('\uacf5\uc2dd \uc124\uba85\uc11c \uc870\uc791 \ub3c4\ud574', 'Official manual operation diagram', '\u516c\u5f0f\u8aac\u660e\u66f8\u306e\u64cd\u4f5c\u56f3', '\u5b98\u65b9\u8bf4\u660e\u4e66\u64cd\u4f5c\u56fe'), guideNote: I('\uc81c\uc870\uc0ac \uacf5\uc2dd \uc0ac\uc6a9\uc124\uba85\uc11c\uc5d0\uc11c \uc219\uc18c \uc774\uc6a9\uc5d0 \ud544\uc694\ud55c \ud575\uc2ec \uc870\uc791\ubd80\ub97c \ubc1c\ucdcc\ud588\uc2b5\ub2c8\ub2e4.', 'Key controls used at the property, excerpted from the manufacturer\'s official manual.', '\u30e1\u30fc\u30ab\u30fc\u516c\u5f0f\u8aac\u660e\u66f8\u304b\u3089\u3001\u5bbf\u6cca\u4e2d\u306b\u5fc5\u8981\u306a\u4e3b\u8981\u64cd\u4f5c\u90e8\u3092\u629c\u7c8b\u3057\u307e\u3057\u305f\u3002', '\u6458\u5f55\u81ea\u5236\u9020\u5546\u5b98\u65b9\u8bf4\u660e\u4e66\uff0c\u5c55\u793a\u4f4f\u5bbf\u671f\u95f4\u5e38\u7528\u7684\u6838\u5fc3\u64cd\u4f5c\u3002'), steps: I(['왼쪽 아래 전원 버튼을 눌러 켭니다.','화면에서 운전 모드를 선택한 뒤 냉방 또는 난방을 고릅니다.','위·아래 버튼으로 희망 온도를 맞춥니다.','필요하면 풍량 메뉴에서 바람 세기를 조절합니다.','외출할 때는 전원을 꺼 주세요. 중앙 제어 중에는 일부 모드가 제한될 수 있습니다.'],['Press the lower-left power button.','Open Operation Mode and choose Cool or Heat.','Use up/down to set the target temperature.','Adjust fan speed from the fan menu if needed.','Turn it off when leaving. Some modes may be restricted by central control.'],['左下の電源を押します。','運転モードから冷房または暖房を選びます。','上下で設定温度を調節します。','必要に応じて風量を調節します。','外出時は電源を切ってください。集中制御中は一部モードが制限されます。'],['按左下角电源键。','在运行模式中选择制冷或制热。','用上下键设定温度。','需要时调节风量。','离开时请关闭。中央控制时部分模式可能受限。']) },
        { name: I('전자레인지', 'Microwave', '電子レンジ', '微波炉'), model: 'Cooing MM-E20RBKC · 20 L / 700 W', image: '/assets/images/microwave.webp', manualUrl: 'https://www.rra.go.kr/ko/license/A_b_popup_keyno.do?key_no=R-R-mdk-AM720C2AD-PM0B', manualLabel: I('제품 공식 인증 정보', 'Official product certification', '製品公式認証情報', '产品官方认证信息'), guideSourceUrl: 'https://www.midea.com/content/dam/midea-aem/kz/manual/UM-K%D0%90Z-RUS-AM720C2MV-B-S-W-1-.pdf', guideSourceLabel: I('Midea AM720 공식 모델군 설명서', 'Midea AM720 official family manual', 'Midea AM720公式モデル群説明書', 'Midea AM720官方系列说明书'), guideImage: '/assets/images/guides/official-microwave.webp', guideLabel: I('\uacf5\uc2dd \uc124\uba85\uc11c \uc870\uc791 \ub3c4\ud574', 'Official manual operation diagram', '\u516c\u5f0f\u8aac\u660e\u66f8\u306e\u64cd\u4f5c\u56f3', '\u5b98\u65b9\u8bf4\u660e\u4e66\u64cd\u4f5c\u56fe'), guideNote: I('\uacf5\uc2dd \uc778\uc99d\uc758 \uae30\ubc18 \ubaa8\ub378\uc778 Midea AM720 \uacc4\uc5f4 \uc124\uba85\uc11c\uc5d0\uc11c \uc870\uc791\ubd80\u00b7\ucd9c\ub825\u00b7\ube60\ub978\uac00\uc5f4 \ub3c4\ud574\ub97c \ubc1c\ucdcc\ud588\uc2b5\ub2c8\ub2e4.', 'Control panel, power, and quick-cook diagrams from the official Midea AM720-family manual underlying the certified model.', '\u8a8d\u8a3c\u30d9\u30fc\u30b9\u30e2\u30c7\u30eb\u306eMidea AM720\u7cfb\u516c\u5f0f\u8aac\u660e\u66f8\u304b\u3089\u64cd\u4f5c\u90e8\u30fb\u51fa\u529b\u30fb\u30af\u30a4\u30c3\u30af\u52a0\u71b1\u56f3\u3092\u629c\u7c8b\u3057\u307e\u3057\u305f\u3002', '\u6458\u5f55\u81ea\u8ba4\u8bc1\u57fa\u7840\u578b\u53f7Midea AM720\u7cfb\u5217\u5b98\u65b9\u8bf4\u660e\u4e66\u7684\u63a7\u5236\u9762\u677f\u3001\u529f\u7387\u53ca\u5feb\u901f\u52a0\u70ed\u56fe\u3002'), steps: I(['금속·포일은 넣지 말고 전자레인지용 용기를 사용합니다.','음식을 넣고 문을 완전히 닫습니다.','빠른 가열은 시작/+30초 버튼을 누르며 시간을 늘립니다.','세부 설정은 전자레인지/출력 또는 무게해동·시간해동을 선택하고 다이얼로 맞춘 뒤 시작합니다.','정지/취소로 멈추고, 가열 중에는 자리를 비우지 마세요.'],['Use microwave-safe containers; never use metal or foil.','Place food inside and close the door fully.','For quick heating, press Start/+30 sec repeatedly.','For detailed settings, choose Power, Weight Defrost, or Time Defrost, set with the dial, then press Start.','Press Stop/Cancel to stop, and never leave heating unattended.'],['金属やアルミホイルは使わず、電子レンジ対応容器を使います。','食品を入れ、扉を完全に閉めます。','すぐに温める場合は「スタート/+30秒」を押します。','出力・重量解凍・時間解凍を選び、ダイヤルで設定してスタートします。','停止/取消で止め、加熱中は離れないでください。'],['请使用微波炉专用容器，勿放入金属或锡纸。','放入食物并关好门。','快速加热时反复按“启动/+30秒”。','选择功率、重量解冻或时间解冻，用旋钮设定后启动。','按停止/取消结束，加热时请勿离开。']) },
        { name: I('하이라이트 전기쿡탑', 'Ceramic cooktop', '電気クッキングヒーター', '电陶炉'), model: 'Haatz HEC-1050S(H)-01', image: '/assets/images/cooktop.webp', manualUrl: 'https://www.haatz.com/upload/manual/202601/1767614190_m0137482_20260105205630.pdf', manualLabel: I('하츠 공식 설명서', 'Haatz official manual', 'Haatz公式説明書', 'Haatz官方说明书'), guideImage: '/assets/images/guides/official-haatz.webp', guideLabel: I('\uacf5\uc2dd \uc124\uba85\uc11c \uc870\uc791 \ub3c4\ud574', 'Official manual operation diagram', '\u516c\u5f0f\u8aac\u660e\u66f8\u306e\u64cd\u4f5c\u56f3', '\u5b98\u65b9\u8bf4\u660e\u4e66\u64cd\u4f5c\u56fe'), guideNote: I('\uc81c\uc870\uc0ac \uacf5\uc2dd \uc0ac\uc6a9\uc124\uba85\uc11c\uc5d0\uc11c \uc219\uc18c \uc774\uc6a9\uc5d0 \ud544\uc694\ud55c \ud575\uc2ec \uc870\uc791\ubd80\ub97c \ubc1c\ucdcc\ud588\uc2b5\ub2c8\ub2e4.', 'Key controls used at the property, excerpted from the manufacturer\'s official manual.', '\u30e1\u30fc\u30ab\u30fc\u516c\u5f0f\u8aac\u660e\u66f8\u304b\u3089\u3001\u5bbf\u6cca\u4e2d\u306b\u5fc5\u8981\u306a\u4e3b\u8981\u64cd\u4f5c\u90e8\u3092\u629c\u7c8b\u3057\u307e\u3057\u305f\u3002', '\u6458\u5f55\u81ea\u5236\u9020\u5546\u5b98\u65b9\u8bf4\u660e\u4e66\uff0c\u5c55\u793a\u4f4f\u5bbf\u671f\u95f4\u5e38\u7528\u7684\u6838\u5fc3\u64cd\u4f5c\u3002'), steps: I(['평평한 바닥의 조리 용기를 올립니다.','전원 버튼을 1초간 눌러 대기 상태로 켭니다.','하이라이트 + 버튼을 누르면 1단으로 시작하며, + / −로 1–9단 화력을 조절합니다.','사용 후 전원 버튼을 1초간 눌러 끕니다.','잔열 표시 H가 사라질 때까지 상판을 만지지 마세요. 잠금 해제는 잠금 버튼을 2초간 누릅니다.'],['Use flat-bottom cookware.','Hold Power for 1 second to enter standby.','Press the Highlight + button to start at level 1, then use + / − for levels 1–9.','Hold Power for 1 second after use.','Do not touch while H is shown. To unlock, hold Lock for 2 seconds.'],['底が平らな調理器具を置きます。','電源を1秒長押しして待機状態にします。','ハイライトの＋で1段から開始し、＋／−で1〜9段を調節します。','使用後は電源を1秒長押しします。','余熱表示Hが消えるまで触れないでください。ロック解除は2秒長押しです。'],['使用平底锅具。','长按电源1秒进入待机。','按加热区＋从1档启动，再用＋／−调节1至9档。','使用后长按电源1秒关闭。','显示H时请勿触摸。长按锁定键2秒可解锁。']) },
        { name: I('정수기', 'Water purifier', '浄水器', '净水器'), model: 'Chungho WP-30C9460BN', image: '/assets/images/purifier.webp', manualUrl: 'https://www.chungho.co.kr/newch/admin/manual/202405290953002979.pdf', manualLabel: I('청호 공식 설명서', 'Chungho official manual', 'Chungho公式説明書', 'Chungho官方说明书'), guideImage: '/assets/images/guides/official-chungho.webp', guideLabel: I('\uacf5\uc2dd \uc124\uba85\uc11c \uc870\uc791 \ub3c4\ud574', 'Official manual operation diagram', '\u516c\u5f0f\u8aac\u660e\u66f8\u306e\u64cd\u4f5c\u56f3', '\u5b98\u65b9\u8bf4\u660e\u4e66\u64cd\u4f5c\u56fe'), guideNote: I('\uc0ac\uc9c4 \uc18d \uc870\uc791\ubd80\uc640 \ub3d9\uc77c\ud55c \ubc84\ud2bc \uad6c\uc131\uc744 \uac00\uc9c4 \uccad\ud638 \uacf5\uc2dd \ubaa8\ub378\uad70 \uc124\uba85\uc11c \ub3c4\ud574\ub97c \ucc38\uace0\uc6a9\uc73c\ub85c \ubc1c\ucdcc\ud588\uc2b5\ub2c8\ub2e4.', 'Reference diagram excerpted from a Chungho official manual for the same control-button layout shown in the property photo.', '\u5bbf\u306e\u5199\u771f\u3068\u540c\u3058\u30dc\u30bf\u30f3\u69cb\u6210\u306eChungho\u516c\u5f0f\u30e2\u30c7\u30eb\u7fa4\u8aac\u660e\u66f8\u304b\u3089\u53c2\u8003\u56f3\u3092\u629c\u7c8b\u3057\u307e\u3057\u305f\u3002', '\u53c2\u8003\u56fe\u6458\u5f55\u81ea\u4e0e\u4f4f\u5bbf\u7167\u7247\u4e2d\u6309\u952e\u5e03\u5c40\u76f8\u540c\u7684Chungho\u5b98\u65b9\u578b\u53f7\u7cfb\u5217\u8bf4\u660e\u4e66\u3002'), steps: I(['컵을 출수구 아래에 놓습니다.','정수·냉수·온수 버튼 중 원하는 물을 선택합니다.','용량 버튼으로 120 mL, 500 mL 또는 연속을 선택합니다.','출수 버튼을 눌러 물을 받습니다.','온수 사용 시 잠금 버튼을 약 5초 눌러 해제하고, 빨간 출수 버튼이 켜진 상태에서 화상에 주의하세요.'],['Place a cup under the spout.','Choose ambient, cold, or hot water.','Select 120 mL, 500 mL, or Continuous.','Press Dispense.','For hot water, hold Lock for about 5 seconds to unlock; take care when the dispense button turns red.'],['コップを注水口の下に置きます。','常温水・冷水・温水を選びます。','120 mL・500 mL・連続を選びます。','出水ボタンを押します。','温水はロックを約5秒長押しして解除し、赤い出水ボタン点灯中はやけどに注意してください。'],['将杯子放在出水口下。','选择常温、冷水或热水。','选择120 mL、500 mL或连续出水。','按出水键。','热水需长按锁定键约5秒解锁；出水键亮红色时谨防烫伤。']) }
      ]},
      laundry: { title: I('세탁 안내', 'Laundry guide', '洗濯案内', '洗衣指南'), kicker: 'LAUNDRY', hero: '/assets/images/laundry.webp', model: 'LG FR9WPB · wash 9 kg / dry 4.5 kg', manualUrl: 'https://www.lge.co.kr/support/product-F9WPB', manualLabel: I('LG 공식 설명서', 'LG official manual', 'LG公式説明書', 'LG官方说明书'), guideImage: '/assets/images/guides/official-lg.webp', guideLabel: I('\uacf5\uc2dd \uc124\uba85\uc11c \uc870\uc791 \ub3c4\ud574', 'Official manual operation diagram', '\u516c\u5f0f\u8aac\u660e\u66f8\u306e\u64cd\u4f5c\u56f3', '\u5b98\u65b9\u8bf4\u660e\u4e66\u64cd\u4f5c\u56fe'), guideNote: I('\uc0ac\uc9c4 \uc18d \uc870\uc791\ubd80\uc640 \ub3d9\uc77c\ud55c LG \uacf5\uc2dd \ubaa8\ub378\uad70 \uc124\uba85\uc11c\uc5d0\uc11c \ucf54\uc2a4 \ub2e4\uc774\uc5bc\uacfc \ud575\uc2ec \ubc84\ud2bc \ub3c4\ud574\ub97c \ubc1c\ucdcc\ud588\uc2b5\ub2c8\ub2e4.', 'The cycle dial and key controls are excerpted from an LG official manual for the same control-panel family shown in the property photo.', '\u5bbf\u306e\u5199\u771f\u3068\u540c\u3058\u64cd\u4f5c\u90e8\u7cfb\u5217\u306eLG\u516c\u5f0f\u8aac\u660e\u66f8\u304b\u3089\u3001\u30b3\u30fc\u30b9\u30c0\u30a4\u30e4\u30eb\u3068\u4e3b\u8981\u30dc\u30bf\u30f3\u56f3\u3092\u629c\u7c8b\u3057\u307e\u3057\u305f\u3002', '\u6458\u5f55\u81ea\u4e0e\u4f4f\u5bbf\u7167\u7247\u4e2d\u63a7\u5236\u9762\u677f\u540c\u7cfb\u5217\u7684LG\u5b98\u65b9\u8bf4\u660e\u4e66\uff0c\u5c55\u793a\u7a0b\u5e8f\u65cb\u94ae\u548c\u6838\u5fc3\u6309\u952e\u3002'), summary: I('사진 속 LG FR9WPB 세탁·건조 겸용 모델의 기본 코스를 제조사 공식 자료와 조작부를 기준으로 정리했습니다.', 'These basic cycles for the photographed LG FR9WPB washer-dryer are based on LG documentation and the control panel.', '写真のLG FR9WPB洗濯乾燥機について、公式資料と操作部を基に基本コースをまとめました。', '根据LG官方资料和照片中的控制面板，整理了FR9WPB洗烘一体机的基本程序。'), sections: [{ title: I('기본 사용', 'Basic use', '基本操作', '基本使用'), steps: I(['세탁물을 넣고 문을 완전히 닫은 뒤 세제를 적정량 넣습니다.','전원 버튼을 누릅니다.','다이얼로 세탁은 표준, 건조는 표준건조 등 원하는 코스를 선택합니다.','시작/일시정지 버튼을 누릅니다.','울·섬세 의류와 열에 약한 옷은 건조하지 말고, 완료 후 바로 꺼내 문을 살짝 열어 둡니다.'],['Load laundry, close the door fully, and add the correct amount of detergent.','Press Power.','Use the dial to choose a cycle, such as Standard for washing or Standard Dry for drying.','Press Start/Pause.','Do not tumble-dry wool, delicate, or heat-sensitive items. Remove items promptly and leave the door slightly open.'],['洗濯物を入れ、扉を閉めて洗剤を適量入れます。','電源を押します。','ダイヤルで洗濯は標準、乾燥は標準乾燥などを選びます。','スタート／一時停止を押します。','ウール・デリケート・熱に弱い衣類は乾燥せず、終了後はすぐ取り出して扉を少し開けます。'],['放入衣物、关好门并加入适量洗涤剂。','按电源键。','旋钮选择程序，例如洗涤用标准、烘干用标准烘干。','按开始/暂停。','羊毛、精细或不耐热衣物请勿烘干；结束后及时取出并微开机门。']) }]},
      trash: { title: I('쓰레기 배출', 'Trash guide', 'ごみ出し案内', '垃圾投放指南'), kicker: 'WASTE', hero: '/assets/images/trash.webp', summary: I('공용 분리수거함의 표시에 맞춰 일반 쓰레기와 재활용품을 나눠 주세요.', 'Sort general waste and recyclables according to the labels on the shared bins.', '共用ごみ箱の表示に従い、一般ごみと資源ごみを分けてください。', '请按照公共垃圾桶标识分类一般垃圾和可回收物。'), sections: [{ title: I('분리배출', 'How to sort', '分別方法', '分类方法'), steps: I(['내용물을 비우고 가볍게 헹굽니다.','플라스틱·캔·병은 표시된 칸에 넣습니다.','음식물과 일반 쓰레기를 섞지 마세요.','큰 쓰레기는 임의로 버리지 말고 호스트에게 문의하세요.'],['Empty and rinse containers.','Use the labeled sections for plastic, cans, and bottles.','Do not mix food waste with general waste.','Ask the host before discarding bulky items.'],['容器を空にして軽くすすぎます。','プラスチック・缶・びんを表示の箱へ。','生ごみと一般ごみを混ぜないでください。','大型ごみはホストに確認してください。'],['倒空并简单冲洗容器。','塑料、罐和瓶放入对应分类桶。','请勿混合厨余和一般垃圾。','大件垃圾请先咨询房东。']) }]},
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
