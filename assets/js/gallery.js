/* ============================================================
   "연구와 활동" 갤러리 데이터
   ------------------------------------------------------------
   6칸 그리드를 채우는 벤토 레이아웃입니다.
     col : 가로로 차지할 칸 수 (한 줄 합계가 6이 되어야 빈 칸이 없습니다)
     row : 세로로 차지할 줄 수

   지금 배치는 이렇습니다.
     1줄  transspace(4) + authoring(2)
     2줄  transspace 계속  + heritage(2)
     3줄  people(3)        + placeholder(3)

   TODO: placeholder-*.svg 로 표시된 자리는 실제 사진으로 교체해 주세요.
         파일만 같은 경로에 덮어써도 되고, src 를 바꿔도 됩니다.
   ============================================================ */

window.ARRC_GALLERY = [
  {
    src: 'assets/img/research-transspace.jpg',
    col: 4,
    row: 2,
    ko: { caption: 'HMD 기반 원격 협업 연구', alt: 'HMD를 착용한 연구자가 원격 협업 시스템을 시연하는 모습' },
    en: { caption: 'HMD-based remote collaboration', alt: 'A researcher wearing an HMD demonstrating a remote collaboration system' }
  },
  {
    src: 'assets/img/research-authoring.jpg',
    col: 2,
    row: 1,
    ko: { caption: '증강현실 저작 도구', alt: 'HMD를 쓴 사용자가 가상 캐릭터를 손으로 배치하는 모습' },
    en: { caption: 'Augmented reality authoring', alt: 'A user in an HMD placing a virtual character by hand' }
  },
  {
    src: 'assets/img/research-heritage.jpg',
    col: 2,
    row: 1,
    ko: { caption: '문화유산 증강현실 복원', alt: '사라진 전각을 증강현실로 복원해 보여 주는 화면' },
    en: { caption: 'Heritage reconstruction in AR', alt: 'A vanished palace hall reconstructed in augmented reality' }
  },
  {
    src: 'assets/img/people-2025.jpg',
    col: 3,
    row: 1,
    ko: { caption: '연구센터 구성원', alt: '봄날 캠퍼스에 모인 연구센터 구성원들' },
    en: { caption: 'The people of ARRC', alt: 'Center members gathered on campus in spring' }
  },
  {
    src: 'assets/img/placeholder-event.svg',
    col: 3,
    row: 1,
    placeholder: true,
    ko: { caption: '행사 스냅샷', alt: '사진 준비 중' },
    en: { caption: 'Event snapshots', alt: 'Photo coming soon' }
  }
];
