/* ============================================================
   프로그램 타임테이블 데이터
   ------------------------------------------------------------
   TODO: 시각은 아직 잠정입니다. 확정 후 이 파일만 수정하면 화면에
         그대로 반영됩니다. HTML/CSS 는 건드릴 필요 없습니다.

   현재 시간 구성
     환영사 10 + 기조 20 = 30분, 커피 · 단체사진 30분  (합계 60분)
     초청강연 5건 x 15분 = 75분
     패널 논의 30분  (초청강연 + 패널 = 105분)
     포스터 소개 · 전시 40분 (과제별 5분 발표 + 과제 · 논문 포스터)
     폐회 30분 -> 17:00 종료

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
    time: '13:35 - 14:05',
    kind: 'break',
    ko: { title: '커피 브레이크 · 단체 사진', desc: '로비에서 다과와 함께 단체 사진을 촬영합니다.' },
    en: { title: 'Coffee break and group photo', desc: 'Refreshments in the lobby, followed by a group photo.' }
  },
  {
    time: '14:05 - 15:20',
    ko: { title: '초청강연', desc: '강연당 15분, 이후 패널 논의가 이어집니다.' },
    en: { title: 'Invited talks', desc: 'Fifteen minutes per talk, followed by the panel discussion.' },
    // 주제나 연사가 비면 tbd: true 를 주세요. 흐린 글씨로 표시됩니다.
    talks: [
      {
        ko: { title: '인간과 공존하는 로봇을 위한 인간-로봇 협업 데이터/학습 플랫폼', who: '김민아 · KISTI' },
        // 영문 표기 근거: IEEE Access 2023, doi 10.1109/access.2023.3314793
        // "Development of a Digital Twin Pipeline for Interactive Scientific
        //  Simulation and Mixed Reality Visualization" 의 KISTI 소속 저자.
        en: { title: 'A human-robot collaboration data and learning platform for robots that live alongside people', who: 'Minah Kim · KISTI' }
      },
      {
        ko: { title: '가상융합(XR-Twin) 기반 건설 피지컬 AI 실증·검증 플랫폼', who: '박형진 · 한국건설기술연구원' },
        // 영문 표기 근거: KICT ICT융합연구소(ICT Convergence and Integration
        // Research Institute) 소속으로 실린 2017년 3D 객체 라이브러리 논문.
        en: { title: 'An XR-Twin platform for testing and validating physical AI in construction', who: 'Hyung-Jin Park · KICT' }
      },
      {
        tbd: true,
        ko: { title: '주제 미정', who: 'ETRI' },
        en: { title: 'Topic to be announced', who: 'ETRI' }
      },
      {
        tbd: true,
        ko: { title: '주제 미정', who: '한국전자정보통신산업진흥회' },
        en: { title: 'Topic to be announced', who: 'KEA' }
      },
      {
        tbd: true,
        ko: { title: '주제 미정', who: '하태진 · 버넥트' },
        en: { title: 'Topic to be announced', who: 'Taejin Ha · VIRNECT' }
      }
    ]
  },
  {
    time: '15:20 - 15:50',
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
    time: '15:50 - 16:30',
    ko: {
      title: 'ARRC 연구현황 및 결과 포스터 소개',
      desc: '과제별 5분 발표에 이어 과제 · 논문 포스터를 소개합니다. 다과와 함께 전시를 둘러보세요.'
    },
    en: {
      title: 'ARRC research status and results poster introduction',
      desc: 'Five-minute talks per project, followed by project and paper posters over refreshments.'
    }
  },
  {
    time: '16:30 - 17:00',
    ko: { title: '폐회' },
    en: { title: 'Closing' }
  }
];
