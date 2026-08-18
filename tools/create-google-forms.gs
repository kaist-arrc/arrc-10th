/* ============================================================
   ARRC 10주년 심포지엄 - 구글폼 자동 생성 스크립트
   ------------------------------------------------------------
   사용법 (1회만 실행하면 됩니다)
     1. https://script.google.com 접속 (kaist.gsmv@gmail.com 로그인)
     2. 새 프로젝트 → 이 파일 내용 전체를 붙여넣기
     3. 상단 함수 선택을 createBothForms 로 두고 실행(▶)
     4. 처음 실행 시 권한 승인 (Google Forms 접근)
     5. 실행 로그에 두 폼의 응답용 URL / 편집용 URL 이 출력됩니다

   생성 후 할 일
     - 참석 등록 폼의 응답용 URL 을 assets/js/main.js 의
       REGISTER_URL 에 넣으면 사이트 버튼 4곳이 활성화됩니다.
     - 발표 등록 폼 URL 은 홈페이지 프로그램 섹션 안내문 등에 연결.
   ============================================================ */

var EVENT = {
  name: 'KAIST ARRC 10주년 기념 심포지엄',
  date: '2026년 9월 1일(화) 13:00 - 17:00',
  venue: 'KAIST KI빌딩(E4) 2층 매트릭스홀',
  contact: 'kkr82@kaist.ac.kr',
  deadline: '2026년 8월 25일(월) 18:00'  // TODO: 마감일 확정 시 교체
};

var PRIVACY_TEXT =
  '수집 항목: 성명, 소속, 직위/신분, 이메일, 연락처, (차량 이용 시) 차량번호\n' +
  '수집 목적: 행사 참가 등록 확인, 행사 안내 및 변경사항 공지, 출입·주차 지원\n' +
  '보유 기간: 행사 종료 후 3개월 이내 파기\n' +
  '동의를 거부할 수 있으나, 거부 시 참가 등록이 제한됩니다.';

function createBothForms() {
  var a = createAttendanceForm();
  var p = createPresentationForm();
  Logger.log('==========================================');
  Logger.log('[참석 등록] 응답용: %s', a.getPublishedUrl());
  Logger.log('[참석 등록] 편집용: %s', a.getEditUrl());
  Logger.log('[발표 등록] 응답용: %s', p.getPublishedUrl());
  Logger.log('[발표 등록] 편집용: %s', p.getEditUrl());
  Logger.log('==========================================');
  Logger.log('참석 등록 응답용 URL 을 사이트 assets/js/main.js 의 REGISTER_URL 에 넣어 주세요.');
}

/* ── 1. 참석 등록 ─────────────────────────────────────────── */

function createAttendanceForm() {
  var form = FormApp.create('[참석 등록] ' + EVENT.name);

  form.setDescription(
    EVENT.name + '\n' +
    '일시: ' + EVENT.date + '\n' +
    '장소: ' + EVENT.venue + '\n\n' +
    '참가비는 무료이며, 좌석이 한정되어 있어 사전 등록을 받습니다.\n' +
    '등록 마감: ' + EVENT.deadline + '\n' +
    '문의: ' + EVENT.contact
  );
  form.setConfirmationMessage(
    '등록이 접수되었습니다. 확인 메일은 순차적으로 발송됩니다.\n' +
    '행사 관련 문의: ' + EVENT.contact
  );
  form.setLimitOneResponsePerUser(false); // 로그인 강제하지 않기 위해 false
  form.setAllowResponseEdits(true);

  form.addTextItem().setTitle('성명').setRequired(true);
  form.addTextItem().setTitle('소속 (기관/회사/학교)').setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('신분')
    .setHelpText('참가자 구성 파악용입니다.')
    .setChoiceValues([
      '정부 · 공공기관',
      '출연연 · 연구기관 연구자',
      '대학 교원',
      '대학원생',
      '학부생',
      '산업체',
      '기타'
    ])
    .setRequired(true);

  var email = form.addTextItem().setTitle('이메일').setRequired(true);
  email.setHelpText('등록 확인과 행사 안내를 이 주소로 보내드립니다.');
  email.setValidation(
    FormApp.createTextValidation().requireTextIsEmail()
      .setHelpText('이메일 형식으로 입력해 주세요.').build()
  );

  form.addTextItem()
    .setTitle('휴대전화 (선택)')
    .setHelpText('행사 당일 긴급 공지가 있을 때만 사용합니다.');

  form.addMultipleChoiceItem()
    .setTitle('차량 이용 여부')
    .setHelpText('교내 주차 지원을 위해 확인합니다.')
    .setChoiceValues(['차량 이용 (아래에 차량번호 기재)', '대중교통 · 도보'])
    .setRequired(true);

  form.addTextItem()
    .setTitle('차량번호 (차량 이용 시)')
    .setHelpText('예: 12가3456. 교내 주차 등록에 사용 후 파기합니다.');

  form.addCheckboxItem()
    .setTitle('행사를 알게 된 경로 (선택)')
    .setChoiceValues(['소속 기관 공지', '지인 소개', 'ARRC/UVR Lab 홈페이지', 'SNS', '언론 기사', '기타']);

  addPrivacyConsent(form);
  return form;
}

/* ── 2. 발표 등록 (포스터 · 데모 · 회사소개) ──────────────── */

function createPresentationForm() {
  var form = FormApp.create('[발표 등록] ' + EVENT.name);

  form.setDescription(
    EVENT.name + ' 발표 등록\n' +
    '일시: ' + EVENT.date + ' / 장소: ' + EVENT.venue + '\n\n' +
    '아래 세 가지 발표를 접수합니다.\n' +
    ' - 포스터: 현장 게시 + 1분 소개 발표 (규격은 확정 후 개별 안내)\n' +
    ' - 데모 전시: 로비 전시 (테이블 · 전원 등 요구사항을 아래에 기재)\n' +
    ' - 회사소개: 5-10분 발표 (참여 회사 수에 따라 시간 확정)\n\n' +
    '발표 자료 파일은 등록 후 이메일로 별도 제출을 안내드립니다.\n' +
    '등록 마감: ' + EVENT.deadline + '\n' +
    '문의: ' + EVENT.contact
  );
  form.setConfirmationMessage(
    '발표 등록이 접수되었습니다. 발표 확정 여부와 상세 안내를 이메일로 보내드립니다.\n' +
    '문의: ' + EVENT.contact
  );
  form.setAllowResponseEdits(true);

  form.addMultipleChoiceItem()
    .setTitle('발표 유형')
    .setChoiceValues(['포스터', '데모 전시', '회사소개'])
    .setRequired(true);

  form.addTextItem().setTitle('발표 제목').setRequired(true);

  form.addTextItem().setTitle('대표 발표자 성명').setRequired(true);
  form.addTextItem().setTitle('소속 및 직위').setRequired(true);

  var email = form.addTextItem().setTitle('이메일').setRequired(true);
  email.setValidation(
    FormApp.createTextValidation().requireTextIsEmail()
      .setHelpText('이메일 형식으로 입력해 주세요.').build()
  );

  form.addTextItem()
    .setTitle('휴대전화')
    .setHelpText('발표 준비 및 행사 당일 연락용입니다.')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('공동 저자 / 참여자 (선택)')
    .setHelpText('이름 · 소속을 쉼표로 구분해 적어 주세요.');

  form.addParagraphTextItem()
    .setTitle('발표 요약 (300자 내외)')
    .setHelpText('프로그램북과 홈페이지 소개에 사용될 수 있습니다.')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('데모 전시 요구사항 (데모 선택 시)')
    .setHelpText('필요한 테이블 수, 전원 콘센트, 네트워크, 요구 공간 등을 적어 주세요.');

  form.addMultipleChoiceItem()
    .setTitle('회사소개 희망 발표 시간 (회사소개 선택 시)')
    .setChoiceValues(['5분', '10분', '주최 측 배정에 따름']);

  addPrivacyConsent(form);
  return form;
}

/* ── 공통: 개인정보 수집 · 이용 동의 ─────────────────────── */

function addPrivacyConsent(form) {
  form.addSectionHeaderItem()
    .setTitle('개인정보 수집 · 이용 동의')
    .setHelpText(PRIVACY_TEXT);

  form.addCheckboxItem()
    .setTitle('개인정보 수집 및 이용에 동의합니다.')
    .setChoiceValues(['동의합니다'])
    .setRequired(true);
}
