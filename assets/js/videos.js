/* ============================================================
   "연구센터가 그리는 방향" 영상 목록
   ------------------------------------------------------------
   가로로 스크롤되는 카드 목록입니다. 위에서부터 순서대로 나옵니다.
   항목을 추가하려면 아래 형식으로 배열에 넣기만 하면 됩니다.

     id : 유튜브 주소 youtube.com/watch?v=XXXX 의 XXXX 부분
          썸네일은 이 값으로 자동으로 가져옵니다.

   카드를 누르면 그 자리에서 재생됩니다. 누르기 전까지는 유튜브
   스크립트나 쿠키가 실행되지 않습니다.

   TODO: 자체 제작 영상이 나오면 맨 앞에 추가하고, 아래 항목 중
         필요 없는 것을 지워 주세요.
   ============================================================ */

window.ARRC_VIDEOS = [
  {
    id: 'sO562A7u0eQ',
    ko: { title: '메타-대전 컨셉영상',  channel: 'KAIST 메타버스대학원' },
    en: { title: 'Meta-Daejeon concept film', channel: 'KAIST Metaverse Graduate School' }
  },
  {
    id: 'FMn-idxyj4I',
    ko: { title: '메타뮤지엄: 시공간을 넘는 미술관 경험', channel: 'KAIST 메타버스대학원' },
    en: { title: 'Meta-Museum: museum experience across space and time', channel: 'KAIST Metaverse Graduate School' }
  },
  {
    id: '-6tqLN9YHNc',
    ko: { title: '메타버스 기술로 그리는 대전', channel: 'KBS 대전' },
    en: { title: 'Reimagining Daejeon with metaverse technology', channel: 'KBS Daejeon' }
  },
  {
    id: 'qOyrkhkW5Ps',
    ko: { title: 'UVR Lab 소개: 우운택 교수', channel: 'KAIST CT' },
    en: { title: 'Introducing UVR Lab: Prof. Woontack Woo', channel: 'KAIST CT' }
  },
  {
    id: 'CrqixM1-QUs',
    ko: { title: '메타버스와 인공지능 그리고 가상증강현실', channel: '대전MBC' },
    en: { title: 'Metaverse, AI and virtual augmented reality', channel: 'Daejeon MBC' }
  }
];
