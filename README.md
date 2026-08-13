# ARRC 10주년 기념 심포지엄 홈페이지

KAIST 증강현실연구센터(ARRC) 개소 10주년 기념 행사 안내 사이트입니다.
빌드 도구 없이 동작하는 정적 사이트라, 파일을 그대로 올리면 바로 서비스됩니다.

- 공개 주소: <https://kaist-arrc.github.io/arrc-10th/>
- 행사일: 2026년 9월 1일 (화) 13:00 - 17:30
- 장소: KAIST KI빌딩(E4) 퓨전홀

> 현재는 확정 전 초안이라 상단에 안내 배너가 떠 있고 검색 색인을 막아 둔 상태입니다.
> 해제 방법은 아래 "공개 전 반드시 확인할 것" 첫 항목을 참고하세요.

## 로컬에서 열기

`index.html` 을 브라우저로 열어도 대부분 동작하지만, 간단한 서버로 여는 쪽이 정확합니다.

```bash
python -m http.server 8000
# http://localhost:8000
```

## 파일 구조

```
index.html                 페이지 전체 마크업 (한국어가 원문)
assets/css/style.css       스타일. 색상은 파일 맨 위 :root 토큰에서만 관리
assets/js/main.js          구글폼 주소, 카운트다운, 네비게이션, 애니메이션
assets/js/program.js       프로그램 타임테이블 데이터
assets/js/timeline.js      10년 연혁 데이터
assets/js/i18n.js          영어 문자열 사전
assets/img/                사진 (현재 비어 있음)
.nojekyll                  GitHub Pages 의 Jekyll 처리 비활성화
```

## 자주 고치게 되는 것

### 1. 참가 신청 구글폼 연결

`assets/js/main.js` 맨 위:

```js
REGISTER_URL: 'https://forms.gle/xxxxxxxx',
```

비워 두면 페이지의 모든 신청 버튼이 자동으로 "신청 준비 중" 비활성 상태가 됩니다.
주소를 넣는 순간 4곳(상단 네비, 히어로, 카운트다운 바, 하단 CTA)이 한꺼번에 살아납니다.

### 2. 프로그램 일정

`assets/js/program.js` 배열만 고치면 됩니다. HTML 은 건드리지 않습니다.

```js
{
  time: '13:15 - 13:50',
  ko: { title: '기조강연', desc: '연사명' },
  en: { title: 'Keynote',  desc: 'Speaker name' }
}
```

`kind: 'break'` 를 넣으면 등록/휴식처럼 흐린 스타일로 표시됩니다.

### 3. 연혁

`assets/js/timeline.js` 배열을 고칩니다. 사진을 넣으려면 `img` 를 추가하세요.

```js
{
  year: '2016',
  ko: { title: '증강현실연구센터 개소', desc: '...' },
  en: { title: 'ARRC opens', desc: '...' },
  img: 'assets/img/history-2016.jpg',
  alt: '개소식 현장'
}
```

### 4. 영어 문구

`assets/js/i18n.js` 의 `EN` 사전에서 고칩니다.
한국어는 `index.html` 에 그대로 들어 있으므로 두 곳에서 관리하지 않습니다.
새 문구를 추가할 때는 HTML 요소에 `data-i18n="키"` 를 붙이고 사전에 같은 키를 넣으세요.

### 5. 색상

`assets/css/style.css` 맨 위 `:root` 블록의 토큰만 바꾸면 전체에 반영됩니다.
`--accent` 하나가 버튼, 링크, 연도 표시, 타임라인 점을 모두 담당합니다.

## 배포 (GitHub Pages)

1. 이 저장소를 GitHub 에 올립니다.
2. Settings → Pages → Source 를 `Deploy from a branch`, 브랜치는 `main` / `/ (root)` 로 지정합니다.
3. 몇 분 뒤 `https://<계정>.github.io/<저장소>/` 에서 확인할 수 있습니다.

커스텀 도메인(예: `arrc10.kaist.ac.kr`)을 쓰려면 저장소 루트에 도메인만 한 줄 적은
`CNAME` 파일을 두고, DNS 에 CNAME 레코드를 추가하면 됩니다.

## 공개 전 반드시 확인할 것

아래 항목은 확정 정보가 없어 임시로 채워 둔 부분입니다.

- [ ] **초안 표시 제거** - 내용이 확정되면 세 곳을 함께 지웁니다.
  `index.html` 상단의 `<aside class="draft">`, head 의 `robots` meta,
  그리고 `robots.txt` 의 `Disallow: /`
- [ ] **문의 이메일** - `index.html` 의 `arrc@kaist.ac.kr` 을 실제 행사 담당 주소로 교체
- [ ] **프로그램** - `program.js` 전체가 잠정안입니다. 확정 일정과 연사로 교체
- [ ] **연혁** - `timeline.js` 는 ARRC 공개 자료를 바탕으로 재구성한 예시입니다.
      센터 공식 연혁으로 검수 후 교체
- [ ] **신청 마감일** - `index.html` 의 `reg.deadline`, `i18n.js` 의 동일 키
- [ ] **퓨전홀 층수** - 현재 표기하지 않았습니다. 확인 후 장소 표기에 추가
- [ ] **지도 핀 위치** - 주소 검색 결과 기준입니다. 실제 건물 위치와 맞는지 확인
- [ ] **주차 안내** - 현재 "추후 공지"로 되어 있습니다
- [ ] **OG 이미지** - `assets/img/og.jpg` (1200x630) 제작 후 `index.html` head 의
      주석 처리된 두 줄을 해제

## 필요한 사진

현재 사이트에는 사진이 한 장도 들어가 있지 않습니다. 아래를 확보하면 바로 붙일 수 있습니다.

| 위치 | 용도 | 권장 크기 |
| --- | --- | --- |
| 연혁 카드 | 연도별 대표 사진 (일부만 넣어도 됨) | 1120 x 630 |
| OG 카드 | 카카오톡/슬랙 공유 미리보기 | 1200 x 630 |
| 히어로 | 배경 사진을 쓰려면 (현재는 CSS 그리드) | 2400 x 1400 |

## 브라우저 지원

Chrome, Edge, Safari, Firefox 최신 버전. JavaScript 가 실행되지 않는 환경에서도
한국어 페이지의 모든 내용은 정상적으로 표시됩니다(프로그램/연혁 목록 제외).
