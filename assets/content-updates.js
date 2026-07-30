(() => {
  const D = window.ANOTHER_HOUSE_DATA;
  if (!D) return;

  const I = (ko, en, ja, zh) => ({ ko, en, ja, zh });

  D.about = {
    kicker: 'STAY STORY',
    title: 'A QUIET HOUSE,\nFOR ANOTHER LIFE.',
    body: I(
      '서울 여행의 하루를 조용히 마무리할 수 있는 작은 공간. 어나더하우스는 동대문역 인근에 위치한 여성 전용 스테이로, 개인 여행객을 위한 싱글룸과 친구 혹은 가족과 머물 수 있는 2인실을 운영하고 있습니다. 화려한 시설보다는 편안한 휴식과 실용적인 숙박에 집중했으며, 혼자 또는 함께 서울을 여행하는 여성 여행객에게 아늑한 쉼터가 되어드립니다.',
      'A small, quiet place to close out a day of exploring Seoul. Another House is a women-only stay near Dongdaemun Station, with single rooms for solo travelers and a double room for friends or family. Rather than elaborate facilities, it focuses on comfortable rest and practical hospitality—a warm retreat for women traveling through Seoul alone or together.',
      'ソウルの旅の一日を静かに締めくくるための、小さな場所。Another Houseは東大門駅近くの女性専用ステイです。一人旅のためのシングルルームと、友人や家族と滞在できる2人部屋をご用意しています。華やかさよりも心地よい休息と実用的な滞在に目を向け、ひとりでも一緒でも、ソウルを旅する女性のための温かな居場所を目指しています。',
      '一个可以安静结束首尔旅行一天的小空间。Another House位于东大门站附近，是女性专用住宿，设有适合独自旅行者的单人房，以及可供朋友或家人入住的双人房。这里不追求华丽设施，而专注于舒适休息与实用住宿，为独自或结伴游览首尔的女性旅客提供温暖的落脚处。'
    ),
    facts: [
      I('싱글룸 11실 · 더블룸 1실', '11 single rooms · 1 double room', 'シングル11室 · 2人部屋1室', '11间单人房 · 1间双人房'),
      I('공용 샤워실 3칸 · 화장실 2칸', '3 shared showers · 2 toilets', '共用シャワー3室 · トイレ2室', '3间公共淋浴间 · 2间卫生间'),
      I('동대문역 6번 출구 도보 30초', '30 sec from Dongdaemun Exit 6', '東大門駅6番出口から30秒', '距东大门站6号出口30秒')
    ]
  };

  D.ota = {
    hint: I(
      '예약 플랫폼을 클릭하면 예약 페이지로 이동합니다.',
      'Click a booking platform to open its reservation page.',
      '予約プラットフォームをクリックすると予約ページに移動します。',
      '点击预订平台即可前往预订页面。'
    ),
    links: [
      {
        id: 'booking',
        name: 'Booking.com',
        url: 'https://www.booking.com/hotel/kr/eonadeo-hauseu.ko.html',
        logo: '/assets/images/platforms/booking-com.svg'
      },
      {
        id: 'agoda',
        name: 'Agoda',
        url: 'https://www.agoda.com/ko-kr/ko-kr/h91252591/hotel/seoul-kr.html?ds=nu6enISOegngXE2o',
        logo: '/assets/images/platforms/agoda.svg'
      },
      {
        id: 'trip',
        name: 'Trip.com',
        url: 'https://kr.trip.com/hotels/cityname-hotel-detail-134961520/hotelname/',
        logo: '/assets/images/platforms/trip-com.svg'
      }
    ]
  };

  D.parking = {
    title: I('주차 안내', 'Parking guide', '駐車案内', '停车指南'),
    kicker: 'PARKING GUIDE',
    onSite: I('건물 내 주차 불가', 'No on-site parking', '建物内駐車不可', '楼内不可停车'),
    intro: I(
      '차량 이용 시 아래 주변 유료 주차장을 이용해 주세요. 현장 운영 및 요금은 변경될 수 있으므로 입차 전 다시 확인해 주세요.',
      'Please use the nearby paid parking lot below. Operations and rates may change, so confirm them before entering.',
      'お車の場合は下記の周辺有料駐車場をご利用ください。運営状況・料金は変更される場合があるため、入庫前に再度ご確認ください。',
      '驾车时请使用下方附近的收费停车场。营业情况及费用可能变更，请在入场前再次确认。'
    ),
    places: [
      {
        name: I('동대문호텔 민영 주차장', 'Dongdaemun Hotel private parking', '東大門ホテル民営駐車場', '东大门酒店私人停车场'),
        address: I('서울 종로구 창신동 444-1', '444-1 Changsin-dong, Jongno-gu, Seoul', 'ソウル特別市 鍾路区 昌信洞 444-1', '首尔特别市钟路区昌信洞444-1'),
        note: I('1시간 4,000원 · 하루 최대 20,000원', '₩4,000 per hour · up to ₩20,000 per day', '1時間4,000ウォン · 1日最大20,000ウォン', '每小时4,000韩元 · 每天最高20,000韩元')
      }
    ]
  };

  D.applianceNotice = {
    title: I('TV · OTT 안내', 'TV · OTT notice', 'TV・OTT案内', '电视与OTT说明'),
    body: I(
      '객실과 공용공간에 TV는 설치되어 있지 않습니다. 개인 모바일 기기에서 콘텐츠를 이용해 주세요.',
      'There is no TV in the rooms or shared areas. Please use your personal mobile device for streaming.',
      '客室および共用スペースにテレビはありません。動画視聴はご自身のモバイル端末をご利用ください。',
      '客房和公共区域均未安装电视。观看内容时请使用个人移动设备。'
    )
  };

  D.pages.checkin.summary = I(
    '체크인은 15:00부터입니다. 선일빌딩 5층 키오스크에서 예약자 정보로 셀프 체크인을 진행해 주세요.',
    'Check-in begins at 15:00. Use the kiosk on the 5th floor of Sunil Building with the booking guest’s details.',
    'チェックインは15:00からです。ソニルビル5階のキオスクで予約者情報を使ってセルフチェックインしてください。',
    '15:00起可办理入住。请在Sunil大厦5层使用预订人信息通过自助机办理入住。'
  );
  D.pages.checkin.sections = [
    {
      title: I('셀프 체크인', 'Self check-in', 'セルフチェックイン', '自助入住'),
      steps: I(
        [
          '체크인 하루 전부터 당일 오전 9시 사이에 예약 플랫폼 메시지로 발송된 체크인 안내를 확인합니다.',
          '15:00 이후 5층 키오스크에서 예약 바우처에 적힌 예약자 이름 또는 OTA 예약번호 뒤 4자리로 예약을 조회합니다.',
          '화면 안내에 따라 셀프 체크인을 완료하고 객실 번호와 카드키를 확인합니다.',
          '체크인 후에는 카드키를 출입구 옆 기기에 태그하여 문을 엽니다. 체크인 전 짐 보관을 위한 출입정보는 예약 메시지에서 확인해 주세요.',
          '짐은 503호 앞 러기지룸에 보관할 수 있습니다. 얼리 체크인은 원칙적으로 불가하며, 청소 상황에 따라 가능한 경우에만 호스트 확인 후 이용해 주세요.'
        ],
        [
          'Check the arrival instructions sent through your booking platform between the day before check-in and 09:00 on arrival day.',
          'After 15:00, use the kiosk on the 5th floor and search with the name shown on the booking voucher or the last four digits of the OTA reservation number.',
          'Complete self check-in on screen and confirm your room number and key card.',
          'After check-in, tap the key card on the reader beside the entrance. For luggage access before check-in, use the access information in your booking message.',
          'Luggage can be stored in the luggage room in front of Room 503. Early check-in is generally unavailable and requires host confirmation when cleaning permits.'
        ],
        [
          'チェックイン前日から当日9:00までに予約プラットフォームのメッセージで届く案内をご確認ください。',
          '15:00以降、5階のキオスクで予約バウチャー記載の予約者名、またはOTA予約番号の下4桁で予約を検索します。',
          '画面案内に従ってセルフチェックインを完了し、客室番号とカードキーをご確認ください。',
          'チェックイン後は入口横の端末にカードキーをかざして入館します。チェックイン前の荷物預かり用入館情報は予約メッセージでご確認ください。',
          '荷物は503号室前のラゲッジルームに保管できます。アーリーチェックインは原則不可で、清掃状況により可能な場合のみホスト確認後にご利用ください。'
        ],
        [
          '请查看入住前一天至入住当日上午9:00之间通过预订平台消息发送的入住说明。',
          '15:00后，在5层自助机上使用预订凭证中的姓名，或OTA订单号后四位查询订单。',
          '按照屏幕提示完成自助入住，并确认房号和房卡。',
          '入住后请将房卡贴近入口旁的读卡器开门。入住前寄存行李所需的门禁信息请查看预订消息。',
          '行李可寄存在503号房前的行李室。原则上不提供提前入住；仅在清洁情况允许并经房东确认后方可使用。'
        ]
      )
    },
    {
      title: I('도움이 필요할 때', 'If you need help', 'サポートが必要な場合', '需要帮助时'),
      body: I(
        '예약 플랫폼(부킹닷컴, 아고다, 트립닷컴) 메시지로 호스트에게 연락해 주세요.',
        'Please contact the host through Booking.com, Agoda, or Trip.com messages.',
        'Booking.com、Agoda、Trip.comのメッセージでホストへご連絡ください。',
        '请通过Booking.com、Agoda或Trip.com消息联系房东。'
      )
    }
  ];

  D.pages.checkout.summary = I(
    '체크아웃은 11:00까지입니다. 카드키 반납과 공용공간 정리를 마친 뒤 출입구 문이 완전히 닫혔는지 확인해 주세요.',
    'Check out by 11:00. Return the key card, restore shared items, and make sure the entrance door is fully closed.',
    'チェックアウトは11:00までです。カードキーを返却し、共用品を元に戻して入口の扉が完全に閉まったことをご確認ください。',
    '请于11:00前退房。归还房卡、整理公共用品，并确认入口门已完全关闭。'
  );
  D.pages.checkout.sections = [
    {
      title: I('퇴실 순서', 'Departure steps', '退室手順', '退房步骤'),
      steps: I(
        [
          '객실에 두고 가는 물건이 없는지 확인하고, 사용한 공용 물품은 원위치해 주세요.',
          '사용한 식기는 설거지 후 원위치하고, 쓰레기는 공용 주방에서 종류별로 분리해 주세요.',
          '사용한 수건은 샤워실 앞 파우더룸의 타월 바구니에 넣어 주세요.',
          '에너지 절약을 위해 객실 카드키를 뽑아 전원을 차단해 주세요.',
          '키오스크에서 체크아웃을 선택한 뒤 카드키를 반납해 주세요.',
          '나오실 때 다른 투숙객의 안전을 위해 출입구 문이 완전히 닫혔는지 확인해 주세요.'
        ],
        [
          'Check for personal belongings and return shared items to their original places.',
          'Wash and return used dishes, then sort waste in the shared kitchen.',
          'Place used towels in the towel basket in the powder room outside the showers.',
          'Remove the room key card to switch off the room power.',
          'Select checkout at the kiosk and return the key card.',
          'For everyone’s safety, make sure the entrance door is fully closed when you leave.'
        ],
        [
          '忘れ物がないか確認し、使用した共用品は元の場所へ戻してください。',
          '使用した食器は洗って元に戻し、ごみは共用キッチンで分別してください。',
          '使用済みタオルはシャワー室前パウダールームのタオルかごに入れてください。',
          '省エネのため客室のカードキーを抜いて電源を切ってください。',
          'キオスクでチェックアウトを選び、カードキーを返却してください。',
          '他のゲストの安全のため、退出時に入口の扉が完全に閉まったことをご確認ください。'
        ],
        [
          '确认没有遗留个人物品，并将使用过的公共用品放回原位。',
          '使用过的餐具请清洗后放回原位，垃圾请在公共厨房分类投放。',
          '使用过的毛巾请放入淋浴间前化妆区的毛巾篮。',
          '为节约能源，请拔出客房房卡以切断电源。',
          '在自助机上选择退房后归还房卡。',
          '为保障其他住客安全，离开时请确认入口门已完全关闭。'
        ]
      )
    },
    {
      title: I('체크아웃 후 짐 보관', 'Luggage after checkout', 'チェックアウト後の荷物', '退房后寄存行李'),
      steps: I(
        ['체크아웃 당일에 한해 러기지룸에 무료로 보관할 수 있습니다.', '레이트 체크아웃은 불가합니다.'],
        ['Free luggage storage is available in the luggage room until later on the day of checkout.', 'Late checkout is not available.'],
        ['チェックアウト当日に限り、ラゲッジルームで無料保管できます。', 'レイトチェックアウトはできません。'],
        ['仅限退房当天可在行李室免费寄存。', '不提供延迟退房。']
      )
    }
  ];

  D.pages.rules.sections = [
    {
      title: I('숙소 이용 규칙', 'House rules', 'ハウスルール', '住宿规则'),
      steps: I(
        [
          '어나더하우스는 여성 전용 숙소이며, 예약 인원을 초과한 방문객의 출입은 불가합니다.',
          '숙소 전 구역은 금연이며 반려동물, 파티, 상업 촬영은 허용되지 않습니다.',
          '매너타임은 22:00부터 05:00까지입니다. 늦은 시간에는 소음에 특히 유의해 주세요.',
          '취사는 가능하지만 연기나 냄새가 강한 고기·생선류 조리는 삼가 주세요.',
          '냉장고에 음식물을 보관할 때는 포스트잇에 이름과 보관일 또는 퇴실일을 적어 붙여 주세요.',
          '게스트 박스의 공용 물품은 사용 후 원위치해 주세요. 일회용 소모품은 필요한 만큼만 이용해 주세요.',
          '기물이 파손된 경우 예약 플랫폼 메시지로 즉시 호스트에게 알려 주세요.'
        ],
        [
          'Another House is women-only. Visitors beyond the booked guest count are not allowed.',
          'Smoking, pets, parties, and commercial filming are not permitted anywhere in the property.',
          'Quiet hours are 22:00–05:00. Please keep noise especially low late at night.',
          'Cooking is allowed, but avoid meat, fish, or other foods that create strong smoke or odors.',
          'Label refrigerator items with your name and the storage date or checkout date.',
          'Return shared Guest Box items after use and take only the disposable supplies you need.',
          'Report any damaged item to the host immediately through your booking platform message.'
        ],
        [
          'Another Houseは女性専用です。予約人数を超える訪問者の入館はできません。',
          '館内は全面禁煙で、ペット、パーティー、商業撮影は不可です。',
          'マナータイムは22:00〜05:00です。深夜は特に静かにお過ごしください。',
          '調理は可能ですが、煙やにおいの強い肉・魚料理はお控えください。',
          '冷蔵庫に食品を保管する際は、付箋に名前と保管日または退室日を書いて貼ってください。',
          'ゲストボックスの共用品は使用後に元へ戻し、消耗品は必要な分だけご利用ください。',
          '備品を破損した場合は予約プラットフォームのメッセージで直ちにホストへお知らせください。'
        ],
        [
          'Another House为女性专用住宿，禁止超过预订人数的访客进入。',
          '全区域禁烟，禁止携带宠物、举办派对及商业拍摄。',
          '安静时段为22:00至05:00，夜间请特别注意控制噪音。',
          '可使用厨房，但请勿烹饪会产生大量油烟或强烈气味的肉类、鱼类食物。',
          '在冰箱存放食物时，请用便签标注姓名及存放日期或退房日期。',
          '使用Guest Box公共用品后请放回原位，一次性用品请按需取用。',
          '如有物品损坏，请立即通过预订平台消息联系房东。'
        ]
      )
    }
  ];

  D.pages.trash.summary = I(
    '일반 쓰레기와 재활용은 공용 주방 테이블 맞은편, 음식물 쓰레기는 인덕션 옆 전용 쓰레기통에 버려 주세요.',
    'General waste and recycling are opposite the shared-kitchen table. Food waste goes in the dedicated bin beside the cooktop.',
    '一般ごみと資源ごみは共用キッチンのテーブル向かい、食品ごみはクックトップ横の専用ごみ箱へ捨ててください。',
    '一般垃圾和可回收物请投放在公共厨房餐桌对面；厨余垃圾请放入灶台旁的专用垃圾桶。'
  );
  D.pages.trash.sections[0].steps = I(
    [
      '일반 쓰레기는 공용 주방 테이블 맞은편의 일반 쓰레기통에 버립니다.',
      '캔·병·플라스틱 등 재활용품은 같은 공간의 표시에 맞춰 분리합니다.',
      '음식물 쓰레기는 인덕션 근처 구석에 마련된 음식물 전용 쓰레기통에 버립니다.',
      '용기의 내용물을 비우고 가볍게 헹군 뒤 분리배출해 주세요.',
      '대형 쓰레기나 처리 방법이 불분명한 물건은 임의로 버리지 말고 호스트에게 문의해 주세요.'
    ],
    [
      'Put general waste in the general-waste bin opposite the shared-kitchen table.',
      'Sort cans, bottles, plastics, and other recycling according to the labels in the same area.',
      'Put food waste in the dedicated bin in the corner beside the cooktop.',
      'Empty and lightly rinse containers before recycling.',
      'Ask the host before discarding bulky or unclear items.'
    ],
    [
      '一般ごみは共用キッチンのテーブル向かいにある一般ごみ箱へ捨てます。',
      '缶・瓶・プラスチックなどは同じ場所の表示に従って分別します。',
      '食品ごみはクックトップ横の隅にある専用ごみ箱へ捨てます。',
      '容器は中身を空にして軽くすすいでから分別してください。',
      '粗大ごみや処分方法が不明な物は、勝手に捨てずホストへお問い合わせください。'
    ],
    [
      '一般垃圾请投入公共厨房餐桌对面的普通垃圾桶。',
      '罐、瓶、塑料等可回收物请按照同一区域的标识分类。',
      '厨余垃圾请投入灶台旁角落的专用垃圾桶。',
      '容器请倒空并简单冲洗后再分类投放。',
      '大型垃圾或不确定如何处理的物品，请先咨询房东。'
    ]
  );

  D.pages.laundry.photo = '/assets/images/laundry-machine-2.jpg';
})();
