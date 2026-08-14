/* ============================================================
   프로그램 타임테이블 데이터
   ------------------------------------------------------------
   TODO: 시각은 아직 잠정입니다. 확정 후 이 파일만 수정하면 화면에
         그대로 반영됩니다. HTML/CSS 는 건드릴 필요 없습니다.

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
    time: '13:00 - 13:10',
    ko: { title: '개회사' },
    en: { title: 'Opening remarks' }
  },
  {
    time: '13:10 - 13:30',
    ko: { title: '환영사', desc: 'KAIST KI 원장, KI-ITAIC 소장' },
    en: { title: 'Welcome remarks', desc: 'Dean of KAIST KI, Director of KI-ITAIC' }
  },
  {
    time: '13:30 - 14:10',
    ko: { title: '기조강연', desc: 'ARRC 센터장 우운택' },
    en: { title: 'Keynote', desc: 'Woontack Woo, Director of ARRC' }
  },
  {
    time: '14:10 - 15:05',
    ko: {
      title: '초청강연',
      desc: 'KEA 등 5개 기관 내외, 기관당 10분. 참여 기관은 확정 후 안내드립니다.'
    },
    en: {
      title: 'Invited talks',
      desc: 'About five organizations including KEA, 10 minutes each. Participants will be announced once confirmed.'
    }
  },
  {
    time: '15:05 - 15:20',
    ko: { title: '감사패 수여' },
    en: { title: 'Presentation of appreciation plaques' }
  },
  {
    time: '15:20 - 15:30',
    ko: { title: '폐회' },
    en: { title: 'Closing' }
  }
];
