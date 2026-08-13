/* ============================================================
   ARRC 10주년 기념 심포지엄 - 동작 스크립트
   ------------------------------------------------------------
   담당자가 가장 자주 고칠 값은 바로 아래 CONFIG 두 줄입니다.
   ============================================================ */

(function () {
  'use strict';

  /* ── 설정 ─────────────────────────────────────────────── */

  var CONFIG = {
    // 구글폼 주소. 비워 두면 모든 신청 버튼이 '신청 준비 중'으로 바뀝니다.
    // TODO: 구글폼 생성 후 주소를 넣어 주세요.
    REGISTER_URL: '',

    // 행사 시작 시각 (KST 기준). 카운트다운이 이 값을 봅니다.
    EVENT_START: '2026-09-01T13:00:00+09:00'
  };

  var REGISTER_LABEL = {
    ko: { open: '참가 신청', closed: '신청 준비 중' },
    en: { open: 'Register',  closed: 'Registration opens soon' }
  };

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  /* ── 프로그램 렌더 ─────────────────────────────────────── */

  function renderProgram(lang) {
    var list = $('#agenda');
    var data = window.ARRC_PROGRAM;
    if (!list || !data) return;

    list.textContent = '';

    data.forEach(function (row) {
      var copy = row[lang] || row.ko;
      var item = el('li', 'agenda__item' + (row.kind === 'break' ? ' agenda__item--break' : ''));

      item.appendChild(el('span', 'agenda__time', row.time));

      var body = el('div');
      body.appendChild(el('h3', 'agenda__title', copy.title));
      if (copy.desc) body.appendChild(el('p', 'agenda__desc', copy.desc));
      item.appendChild(body);

      list.appendChild(item);
    });
  }

  /* ── 연혁 렌더 ─────────────────────────────────────────── */

  function renderTimeline(lang) {
    var list = $('#timeline');
    var data = window.ARRC_TIMELINE;
    if (!list || !data) return;

    list.textContent = '';

    data.forEach(function (row) {
      var copy = row[lang] || row.ko;
      var item = el('li', 'tl__item');

      item.appendChild(el('p', 'tl__year', row.year));

      var body = el('div', 'tl__body');
      body.appendChild(el('h3', 'tl__title', copy.title));
      if (copy.desc) body.appendChild(el('p', 'tl__desc', copy.desc));

      if (row.img) {
        var fig = el('figure', 'tl__figure');
        var img = el('img');
        img.src = row.img;
        img.alt = row.alt || '';
        img.loading = 'lazy';
        fig.appendChild(img);
        body.appendChild(fig);
      }

      item.appendChild(body);
      list.appendChild(item);
    });
  }

  /* ── 참가 신청 버튼 상태 ───────────────────────────────── */

  function syncRegisterButtons(lang) {
    var label = REGISTER_LABEL[lang] || REGISTER_LABEL.ko;
    var open = !!CONFIG.REGISTER_URL;

    $$('.js-register').forEach(function (a) {
      a.textContent = open ? label.open : label.closed;
      if (open) {
        a.href = CONFIG.REGISTER_URL;
        a.target = '_blank';
        a.rel = 'noopener';
        a.removeAttribute('aria-disabled');
      } else {
        a.removeAttribute('href');
        a.removeAttribute('target');
        a.setAttribute('aria-disabled', 'true');
        a.setAttribute('role', 'link');
      }
    });
  }

  /* ── 카운트다운 ────────────────────────────────────────── */

  function startCountdown() {
    var target = new Date(CONFIG.EVENT_START).getTime();
    var clock = $('#clock');
    var over = $('#cdOver');
    var out = { d: $('#cdD'), h: $('#cdH'), m: $('#cdM'), s: $('#cdS') };

    if (!clock || isNaN(target)) return;

    function pad(n) { return n < 10 ? '0' + n : String(n); }

    function tick() {
      var diff = target - Date.now();

      if (diff <= 0) {
        clock.hidden = true;
        if (over) over.hidden = false;
        clearInterval(timer);
        return;
      }

      var sec = Math.floor(diff / 1000);
      out.d.textContent = String(Math.floor(sec / 86400));
      out.h.textContent = pad(Math.floor(sec / 3600) % 24);
      out.m.textContent = pad(Math.floor(sec / 60) % 60);
      out.s.textContent = pad(sec % 60);
    }

    tick();
    var timer = setInterval(tick, 1000);
  }

  /* ── 스크롤 등장 효과 ──────────────────────────────────── */

  function setupReveal() {
    // JS 가 동작할 때만 숨겼다가 보여 준다. 스크립트가 실패하면 그냥 다 보인다.
    var targets = $$('.section__title, .section__note, .facts, .agenda, .timeline, .stats, .venue, .register__inner, .foot__cards');
    if (!targets.length || reduceMotion || !('IntersectionObserver' in window)) return;

    targets.forEach(function (t) { t.classList.add('reveal'); });

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    targets.forEach(function (t) { io.observe(t); });
  }

  /* ── 숫자 카운트업 ─────────────────────────────────────── */

  function setupStats() {
    var nums = $$('.stat__num');
    if (!nums.length) return;

    if (reduceMotion || !('IntersectionObserver' in window)) {
      nums.forEach(function (n) { n.textContent = n.dataset.count; });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        countUp(entry.target);
        io.unobserve(entry.target);
      });
    }, { threshold: 0.4 });

    nums.forEach(function (n) { io.observe(n); });
  }

  function countUp(node) {
    var end = parseInt(node.dataset.count, 10) || 0;
    var duration = 1100;
    var start = null;

    function frame(ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      node.textContent = String(Math.round(end * eased));
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  /* ── 네비게이션 ────────────────────────────────────────── */

  function setupNav() {
    var nav = $('#nav');
    var burger = $('#burger');
    var links = $('#navLinks');

    // scroll 이벤트 대신 최상단 감시용 sentinel 을 관찰한다.
    if (nav && 'IntersectionObserver' in window) {
      var sentinel = el('div');
      sentinel.setAttribute('aria-hidden', 'true');
      sentinel.style.cssText = 'position:absolute;top:0;left:0;width:1px;height:1px;';
      document.body.insertBefore(sentinel, document.body.firstChild);

      new IntersectionObserver(function (entries) {
        nav.classList.toggle('is-stuck', !entries[0].isIntersecting);
      }).observe(sentinel);
    }

    if (!burger || !links) return;

    function close() {
      links.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
      burger.setAttribute('aria-label', '메뉴 열기');
    }

    burger.addEventListener('click', function () {
      var open = links.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', String(open));
      burger.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
    });

    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') close();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
    });
  }

  /* ── 언어 전환 ─────────────────────────────────────────── */

  function setupLang() {
    var i18n = window.ARRC_I18N;
    if (!i18n) {
      // i18n 스크립트가 없어도 한국어 화면은 그려 준다.
      renderProgram('ko');
      renderTimeline('ko');
      syncRegisterButtons('ko');
      return;
    }

    i18n.onChange(function (lang) {
      renderProgram(lang);
      renderTimeline(lang);
      syncRegisterButtons(lang);
    });

    i18n.set(i18n.initial());

    var btn = $('#langToggle');
    if (btn) {
      btn.addEventListener('click', function () {
        i18n.set(i18n.current === 'en' ? 'ko' : 'en');
      });
    }
  }

  /* ── 시작 ──────────────────────────────────────────────── */

  function init() {
    setupLang();       // 프로그램/연혁 렌더와 버튼 상태를 함께 처리한다.
    startCountdown();
    setupNav();
    setupStats();
    setupReveal();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
