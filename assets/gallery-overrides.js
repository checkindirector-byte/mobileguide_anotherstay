(()=>{
  const D=window.ANOTHER_HOUSE_DATA;
  if(!D?.galleryCategories)return;
  const originalCommon=D.galleryCategories.find(category=>category.id==='common')?.items||[];
  const originalSingle=D.galleryCategories.find(category=>category.id==='single')?.items||[];
  const originalDouble=D.galleryCategories.find(category=>category.id==='double')?.items||[];
  const removedCommon=new Set([3,5,7,9,14,16,21,23,25,34]);
  const removedDouble=new Set([2,3,6,7,10,11]);
  const range=(start,end)=>originalCommon.filter((_,index)=>index+1>=start&&index+1<=end&&!removedCommon.has(index+1));

  D.galleryCategories=[
    {id:'exterior',label:{ko:'전경',en:'Exterior',ja:'外観',zh:'外景'},items:range(1,16)},
    {id:'lounge',label:{ko:'라운지',en:'Lounge',ja:'ラウンジ',zh:'休息区'},items:range(17,26)},
    {id:'bath',label:{ko:'샤워실 & 파우더룸',en:'Shower & powder',ja:'シャワー＆パウダー',zh:'淋浴间与梳妆区'},items:range(27,36)},
    {id:'luggage',label:{ko:'러기지룸',en:'Luggage room',ja:'荷物保管室',zh:'行李房'},items:range(37,37)},
    {id:'single',label:{ko:'1인실',en:'Single rooms',ja:'1名室',zh:'单人房'},items:originalSingle},
    {id:'double',label:{ko:'2인실',en:'Double rooms',ja:'2名室',zh:'双人房'},items:originalDouble.filter((_,index)=>!removedDouble.has(index+1))}
  ];
  D.gallery=D.galleryCategories[0].items;

  D.pages.checkin.roomDoorlockImage='/assets/images/checkin-room-doorlock.jpg';
  D.pages.checkin.roomDoorlockLabel={ko:'객실 도어락',en:'Room door lock',ja:'客室ドアロック',zh:'客房门锁'};
  D.luggage.value={ko:'503호 앞 러기지 룸',en:'Luggage room in front of Room 503',ja:'503号室前の荷物保管室',zh:'503号房前行李房'};
  D.luggage.image='/assets/images/gallery/another-house/common-37-luggage.webp';
})();
