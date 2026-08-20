/* ============================================================
   프로그램 타임테이블 데이터
   ------------------------------------------------------------
   TODO: 시각은 아직 잠정입니다. 확정 후 이 파일만 수정하면 화면에
         그대로 반영됩니다. HTML/CSS 는 건드릴 필요 없습니다.

   현재 시간 구성 (17:00 종료 유지)
     기조 20분 -> ARRC 수행 프로젝트 발표 10분(각 1분) -> 커피 30분
     초청강연 5개 기관 x 15분 = 75분 (한국한의학연구원 포함)
     패널 논의 30분 / 자유 네트워킹(포스터 전시) 40분 / 폐회 20분

   회사소개는 참여 회사가 확정되면 넣습니다(회사당 5분 또는 10분).
   그 경우 폐회를 줄이거나 종료를 늦춰야 하므로 일정 재배정이 필요합니다.

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
    ko: { title: '환영사' },
    en: { title: 'Welcome remarks' }
  },
  {
    time: '13:15 - 13:35',
    ko: { title: '기조강연: AIR4BTS: 초시공간 경험공유와 전이', desc: 'ARRC 센터장 우운택' },
    en: { title: 'Keynote: AIR4BTS: sharing and transferring experience across time and space', desc: 'Woontack Woo, Director of ARRC' }
  },
  {
    time: '13:35 - 13:45',
    ko: { title: 'ARRC 수행 프로젝트 발표', desc: '프로젝트당 1분씩 대표 성과를 소개합니다.' },
    en: { title: 'ARRC project highlights', desc: 'One-minute introductions of each project.' }
  },
  {
    time: '13:45 - 14:15',
    kind: 'break',
    ko: { title: '커피 브레이크 · 단체 사진', desc: '로비에서 다과와 함께 단체 사진을 촬영합니다.' },
    en: { title: 'Coffee break and group photo', desc: 'Refreshments in the lobby, followed by a group photo.' }
  },
  {
    time: '14:15 - 15:30',
    ko: { title: '초청강연', desc: '강연당 15분, 이후 패널 논의가 이어집니다.' },
    en: { title: 'Invited talks', desc: 'Fifteen minutes per talk, followed by the panel discussion.' },
    // 주제나 연사가 비면 tbd: true 를 주세요. 흐린 글씨로 표시됩니다.
    talks: [
      {
        ko: { title: '인간과 공존하는 로봇을 위한 인간-로봇 협업 데이터/학습 플랫폼', who: '김민아 · KISTI' },
        // 영문 표기 근거: IEEE Access 2023, doi 10.1109/access.2023.3314793
        en: { title: 'A human-robot collaboration data and learning platform for robots that live alongside people', who: 'Minah Kim · KISTI' }
      },
      {
        ko: { title: '가상융합(XR-Twin) 기반 건설 피지컬 AI 실증·검증 플랫폼', who: '박형진 · 한국건설기술연구원' },
        // 영문 표기 근거: KICT ICT융합연구소 소속 2017년 3D 객체 라이브러리 논문
        en: { title: 'An XR-Twin platform for testing and validating physical AI in construction', who: 'Hyung-Jin Park · KICT' }
      },
      {
        ko: { title: 'Symbiotic AIR와 한의학이 만나는 미래 헬스케어', who: '도준형 · 한국한의학연구원' },
        // 영문 표기 근거: OpenAlex 저자 Jun-Hyeong Do (한국한의학연구원 소속, 72편)
        en: { title: 'Future healthcare where Symbiotic AIR meets Korean medicine', who: 'Jun-Hyeong Do · KIOM' }
      },
      {
        ko: { title: '실가상 융합 공간에서의 공감 상호작용 기술', who: '길연희 · ETRI' },
        // 영문 표기 근거: OpenAlex 저자 Youn-Hee Gil (ETRI 소속 48편, VR · 촉각 상호작용)
        en: { title: 'Empathetic interaction technology in blended real-virtual spaces', who: 'Youn-Hee Gil · ETRI' }
      },
      {
        ko: { title: '산업용 XR과 피지컬 AI의 융합과 확장', who: '하태진 · 버넥트' },
        // 영문 표기 근거: VIRNECT 공식 영문 보도자료
        en: { title: 'Convergence and expansion of industrial XR and physical AI', who: 'Taejin Ha · VIRNECT' }
      }
    ],
    // 목록 아래에 붙는 안내 문구
    talksNote: {
      ko: '초청강연은 사정에 따라 추가되거나 변경될 수 있습니다.',
      en: 'Invited talks may be added or changed.'
    }
  },
  {
    time: '15:30 - 16:00',
    ko: {
      title: '패널 논의: ARRC의 차기 10년 과제',
      desc: 'ARRC의 차기 10년 과제 패널 논의를 진행합니다.'
    },
    en: {
      title: 'Panel discussion',
      desc: 'A panel discussion on the next 10-year ARRC research projects.'
    }
  },
  {
    time: '16:00 - 16:40',
    ko: {
      title: '자유 네트워킹',
      desc: '다과와 함께 포스터 전시를 둘러보며 자유롭게 교류합니다. 데모 · 포스터 참여를 원하는 기관은 별도로 연락해 주세요.'
    },
    en: {
      title: 'Open networking',
      desc: 'Posters stay on display over refreshments. Organizations interested in presenting a demo or poster should contact us separately.'
    }
  },
  {
    time: '16:40 - 17:00',
    ko: { title: '폐회' },
    en: { title: 'Closing' }
  }
];
