/* ============================================================
   다국어 처리
   ------------------------------------------------------------
   HTML 에는 한국어가 그대로 들어 있고, 이 파일은 영어 문자열만 갖습니다.
   EN 으로 바꾸면 data-i18n 키에 맞는 영어로 치환하고,
   KO 로 돌아오면 처음 저장해 둔 한국어 원문을 복원합니다.

   즉 한국어를 두 곳에서 관리하지 않으며, 이 스크립트가 실패해도
   한국어 페이지는 정상적으로 표시됩니다.

   문구를 추가할 때는 HTML 요소에 data-i18n="키" 를 붙이고
   아래 EN 사전에 같은 키를 넣어 주세요.
   ============================================================ */

(function () {
  'use strict';

  var EN = {
    'draft.notice': 'Internal preview. The program and speakers are not final and may change.',

    'nav.about':   'Overview',
    'nav.program': 'Program',
    'nav.history': 'Ten years',
    'nav.gallery': 'Our work',
    'nav.venue':   'Getting here',

    'cta.register': 'Register',
    'cta.program':  'See the program',

    'hero.title': 'Ten years of AR.<br>Opening the next ten.',
    'hero.sub':   'The KAIST Augmented Reality Research Center looks back on a decade of work and sets the direction for the next one.',

    'meta.dateLabel':  'Date',
    'meta.date':       'Tue 1 Sep 2026, 13:00',
    'meta.venueLabel': 'Venue',
    'meta.venue':      'Matrix Hall, 2F, KI Building (E4), KAIST',

    'cd.head':  'Time remaining',
    'cd.days':  'days',
    'cd.hours': 'hrs',
    'cd.mins':  'min',
    'cd.secs':  'sec',
    'cd.over':  'This event has ended. Thank you for joining us.',

    'about.title':   'Event overview',
    'about.k.name':  'Event',
    'about.v.name':  'ARRC 10th Anniversary Symposium',
    'about.k.theme': 'Theme',
    'about.v.theme': 'Ten years of AR, opening the next ten',
    'about.k.when':  'Date',
    'about.v.when':  'Tuesday 1 September 2026, 13:00 - 15:30',
    'about.k.where': 'Venue',
    'about.v.where': 'Matrix Hall, 2F, KI Building (E4), KAIST · 291 Daehak-ro, Yuseong-gu, Daejeon',
    'about.k.who':   'Who should come',
    'about.v.who':   'XR researchers, industry practitioners, graduate students and anyone curious about the field',
    'about.k.host':  'Host',
    'about.v.host':  'KAIST Augmented Reality Research Center (ARRC) · KAIST KI-ITAIC',
    'about.k.fee':   'Fee',
    'about.v.fee':   'Free, advance registration required',
    'about.k.ask':   'Contact',

    'program.title': 'Program',
    'program.note':  'The schedule below is provisional and may change. Speakers will be announced as they are confirmed.',

    'vision.title': 'Where the center is heading',
    'vision.note':  'A look at how augmented reality and metaverse technology reshape a city and everyday life.',

    'history.title': 'Ten years of ARRC',
    'history.note':  'The path the center has taken since it opened in 2016.',

    'gallery.title': 'Our work',
    'gallery.note':  'Scenes from a decade of research at the center.',

    'orgs.host':     'HOSTED BY',
    'orgs.support':  'SUPPORTED BY',
    'orgs.partners': 'PARTNERS',

    'stats.title':    'ARRC in numbers',
    'stats.members':  'researchers',
    'stats.projects': 'active projects',
    'stats.pubs':     'publications',

    'venue.title':       'Getting here',
    'venue.addrHead':    'Address',
    'venue.addr':        '291 Daehak-ro, Yuseong-gu, Daejeon<br>Matrix Hall, 2F, KI Building (E4), KAIST',
    'venue.naver':       'Open in Naver Map',
    'venue.transitHead': 'Transport',
    'venue.t1.k': 'Daejeon Station (KTX)',
    'venue.t1.v': 'about 25 minutes by taxi (12 km)',
    'venue.t2.k': 'Yuseong Oncheon Station (Metro Line 1)',
    'venue.t2.v': 'about 8 minutes by taxi',
    'venue.t3.k': 'Yuseong Intercity Bus Terminal',
    'venue.t3.v': 'about 10 minutes by taxi',
    'venue.t4.k': 'By car',
    'venue.t4.v': 'Parking is available on campus. Details will be announced later.',

    'reg.title':    'Join us',
    'reg.body':     'Seating is limited, so please register in advance. Confirmation emails go out on a rolling basis.',
    'reg.deadline': 'Registration closes Monday 25 August 2026, 18:00',

    'foot.c1.k': 'Research center',
    'foot.c2.k': 'KAIST UVR Lab',
    'foot.c3.k': 'Metaverse Graduate School',
    'foot.org':  'KAIST Augmented Reality Research Center (ARRC)<br>KI Building (E4), 291 Daehak-ro, Yuseong-gu, Daejeon, Republic of Korea'
  };

  var TITLE = {
    ko: 'ARRC 10주년 기념 심포지엄 | KAIST 증강현실연구센터',
    en: 'ARRC 10th Anniversary Symposium | KAIST Augmented Reality Research Center'
  };

  var STORE_KEY = 'arrc10.lang';
  var listeners = [];

  function nodes() {
    return document.querySelectorAll('[data-i18n]');
  }

  function apply(lang) {
    nodes().forEach(function (el) {
      // 최초 1회만 한국어 원문을 보관해 둔다.
      if (typeof el.dataset.koHtml === 'undefined') {
        el.dataset.koHtml = el.innerHTML;
      }
      if (lang === 'en') {
        var val = EN[el.dataset.i18n];
        if (typeof val === 'string') el.innerHTML = val;
      } else {
        el.innerHTML = el.dataset.koHtml;
      }
    });

    document.documentElement.lang = lang;
    document.title = TITLE[lang] || TITLE.ko;

    var btn = document.getElementById('langToggle');
    if (btn) {
      btn.textContent = lang === 'en' ? 'KO' : 'EN';
      btn.setAttribute('aria-label', lang === 'en' ? '한국어로 보기' : 'Switch to English');
    }

    window.ARRC_I18N.current = lang;
    listeners.forEach(function (fn) { fn(lang); });
  }

  function initial() {
    var q = new URLSearchParams(window.location.search).get('lang');
    if (q === 'en' || q === 'ko') return q;
    try {
      var saved = window.localStorage.getItem(STORE_KEY);
      if (saved === 'en' || saved === 'ko') return saved;
    } catch (e) { /* localStorage 차단 환경 */ }
    return 'ko';
  }

  window.ARRC_I18N = {
    current: 'ko',
    t: function (key, lang) {
      var l = lang || window.ARRC_I18N.current;
      return l === 'en' && EN[key] ? EN[key] : null;
    },
    set: function (lang) {
      apply(lang);
      try { window.localStorage.setItem(STORE_KEY, lang); } catch (e) { /* noop */ }
    },
    onChange: function (fn) { listeners.push(fn); },
    initial: initial
  };
})();
