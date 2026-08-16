/* ============================================================
   프로그램 타임테이블 데이터
   ------------------------------------------------------------
   TODO: 시각은 아직 잠정입니다. 확정 후 이 파일만 수정하면 화면에
         그대로 반영됩니다. HTML/CSS 는 건드릴 필요 없습니다.

   전달받은 시간 배분 (블록별 상한)
     환영사 ~ 기조강연 20-30분, 커피 · 사진까지 합쳐 60분 이내
       -> 환영사 10 + 기조 20 = 30, 커피 · 사진 30, 합계 60
     초청강연 각 15분, 토론 포함 90분 이내
       -> 5개 기관 x 15분 + 토론 15분 = 90
     회사소개 회사당 5-10분, 총 60분
     포스터 소개 각 1분, 커피 · 전시 포함 30분

   참여 기관과 회사 수가 확정되면 회사소개 · 포스터 시간을 그 안에서
   나누면 되고, 블록 전체 길이는 그대로 유지됩니다.

   연사 표기 원칙: ARRC 센터장을 제외한 귀빈은 초청 전이므로
   개인 이름을 쓰지 않고 직위/기관만 적습니다.

   kind: 'break' 를 주면 등록/휴식처럼 흐린 스타일로 표시됩니다.
   ============================================================ */

window.ARRC_PROGRAM = [
  {
    time: '12:30 - 13:00',
    kind: 'break',
    ko: { title: '등록', desc: '매트릭스홀 앞 접수 데스크에서 명찰을 수령해 주세요.' },
    en: { title: 'Registration', desc: 'Pick up your badge at the desk in front of Matrix Hall.' }
  },
  {
    time: '13:00 - 13:05',
    ko: { title: '개회사' },
    en: { title: 'Opening remarks' }
  },
  {
    time: '13:05 - 13:15',
    ko: { title: '환영사', desc: 'KAIST KI 원장, KI-ITAIC 소장' },
    en: { title: 'Welcome remarks', desc: 'Dean of KAIST KI, Director of KI-ITAIC' }
  },
  {
    time: '13:15 - 13:35',
    ko: { title: '기조강연', desc: 'ARRC 센터장 우운택' },
    en: { title: 'Keynote', desc: 'Woontack Woo, Director of ARRC' }
  },
  {
    time: '13:35 - 14:05',
    kind: 'break',
    ko: { title: '커피 브레이크 · 단체 사진', desc: '로비에서 다과와 함께 단체 사진을 촬영합니다.' },
    en: { title: 'Coffee break and group photo', desc: 'Refreshments in the lobby, followed by a group photo.' }
  },
  {
    time: '14:05 - 15:35',
    ko: {
      title: '초청강연',
      desc: 'KEA 등 5개 기관 내외, 기관당 15분. 토론이 포함됩니다. 참여 기관은 확정 후 안내드립니다.'
    },
    en: {
      title: 'Invited talks',
      desc: 'About five organizations including KEA, 15 minutes each, discussion included. Participants will be announced once confirmed.'
    }
  },
  {
    time: '15:35 - 16:35',
    ko: {
      title: '회사소개',
      desc: '참여 회사 수에 따라 회사당 5분에서 10분씩 진행합니다.'
    },
    en: {
      title: 'Company introductions',
      desc: 'Five to ten minutes per company, depending on how many take part.'
    }
  },
  {
    time: '16:35 - 17:05',
    ko: {
      title: '포스터 소개 · 커피 · 전시',
      desc: '포스터당 1분씩 소개한 뒤, 다과와 함께 전시를 둘러봅니다.'
    },
    en: {
      title: 'Poster lightning talks, coffee and exhibition',
      desc: 'One minute per poster, then refreshments and time to walk the exhibition.'
    }
  },
  {
    time: '17:05 - 17:20',
    ko: { title: '감사패 수여' },
    en: { title: 'Presentation of appreciation plaques' }
  },
  {
    time: '17:20 - 17:30',
    ko: { title: '폐회' },
    en: { title: 'Closing' }
  }
];
