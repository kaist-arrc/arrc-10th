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
assets/js/main.js          구글폼 주소, 영상 ID, 카운트다운, 네비게이션, 애니메이션
assets/js/program.js       프로그램 타임테이블 데이터
assets/js/timeline.js      10년 연혁 데이터
assets/js/gallery.js       "연구와 활동" 벤토 그리드 데이터
assets/js/i18n.js          영어 문자열 사전
assets/img/                사진, 로고, 플레이스홀더
.nojekyll                  GitHub Pages 의 Jekyll 처리 비활성화
```

## 이미지 목록

`assets/img/` 안의 파일입니다. `placeholder-` 로 시작하는 것만 가짜입니다.

| 파일 | 쓰이는 곳 | 출처 |
| --- | --- | --- |
| `hero-arrc.jpg` | 히어로 배경 | 2022년 구성원 단체사진 (uvrlab.org) |
| `research-transspace.jpg` | 갤러리, 2018 연혁 | TransSpace 원격 협업 (arrc.kaist.ac.kr) |
| `research-authoring.jpg` | 갤러리, 2019 연혁 | AR 저작 도구 (arrc.kaist.ac.kr) |
| `research-heritage.jpg` | 갤러리, 2017 연혁 | K-Culture Time Machine (arrc.kaist.ac.kr) |
| `people-2025.jpg` | 갤러리, 2026 연혁 | 2025년 봄 구성원 사진 (uvrlab.org) |
| `logo-arrc.png` `logo-kaist.png` `logo-uvr.png` | 주최 · 주관 | 각 기관 공식 로고 |
| `og.jpg` | 카카오톡/슬랙 공유 카드 | 히어로 사진으로 생성 |
| `favicon.svg` | 브라우저 탭 | 직접 제작 |
| `placeholder-event.svg` | 갤러리 5번 칸 | **교체 필요** |
| `placeholder-demo.svg` `placeholder-poster.svg` | 아직 미사용 | 필요할 때 쓰세요 |

사진을 교체할 때는 같은 파일명으로 덮어쓰는 게 가장 간단합니다. 다른 이름을
쓰려면 `gallery.js` / `timeline.js` 의 경로만 바꾸면 됩니다.

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

### 4. 비전 영상

`assets/js/main.js` 의 `VIDEO_ID` 한 줄만 바꾸면 썸네일까지 함께 교체됩니다.

```js
VIDEO_ID: '-6tqLN9YHNc',
```

유튜브 주소가 `youtube.com/watch?v=abcd1234` 라면 `abcd1234` 부분입니다.
영상 제목은 같은 파일의 `VIDEO_LABEL` 에서 고칩니다.

썸네일을 먼저 보여 주고 클릭할 때만 유튜브를 불러오는 방식이라, 재생하기
전까지는 유튜브 스크립트나 쿠키가 실행되지 않습니다.

### 5. 갤러리 (연구와 활동)

`assets/js/gallery.js` 의 배열을 고칩니다. `col` 은 가로 칸 수, `row` 는 세로
줄 수이고, **한 줄의 `col` 합계가 6이 되어야 빈 칸이 생기지 않습니다.**

```js
{ src: 'assets/img/사진.jpg', col: 3, row: 1,
  ko: { caption: '설명', alt: '대체 텍스트' },
  en: { caption: 'Caption', alt: 'Alt text' } }
```

### 6. 영어 문구

`assets/js/i18n.js` 의 `EN` 사전에서 고칩니다.
한국어는 `index.html` 에 그대로 들어 있으므로 두 곳에서 관리하지 않습니다.
새 문구를 추가할 때는 HTML 요소에 `data-i18n="키"` 를 붙이고 사전에 같은 키를 넣으세요.

### 7. 색상

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
- [ ] **비전 영상** - 지금은 KBS 대전 뉴스 클립입니다. 자체 제작 영상이 나오면
      `main.js` 의 `VIDEO_ID` 와 `VIDEO_LABEL` 교체
- [ ] **행사 스냅샷** - `assets/img/placeholder-event.svg` 자리에 실제 사진 필요
- [ ] **사진 사용 동의** - 구성원 단체사진 두 장에 얼굴이 식별됩니다.
      대외 공개 페이지에 쓰는 것이 맞는지 한 번 확인해 주세요

## 더 있으면 좋은 사진

없어도 사이트는 완성 상태로 동작합니다. 확보되면 바로 붙일 수 있습니다.

| 위치 | 용도 | 권장 크기 |
| --- | --- | --- |
| 갤러리 5번 칸 | 지난 행사 스냅샷 (현재 플레이스홀더) | 1600 x 900 |
| 연혁 2020~2025 | 연도별 대표 사진 (일부만 넣어도 됨) | 1120 x 630 |
| 데모 전시 | 데모 부스 사진 | 1600 x 900 |

## 브라우저 지원

Chrome, Edge, Safari, Firefox 최신 버전. JavaScript 가 실행되지 않는 환경에서도
한국어 페이지의 모든 내용은 정상적으로 표시됩니다(프로그램/연혁 목록 제외).
