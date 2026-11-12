/* PDKA accessibility helpers for index.html: translated accessible names for icon-only controls
   and aria state kept in sync. Language comes from localStorage 'pdka-lang' (en / ja / hi). */
(function () {
  'use strict';
  var D = {
    menuOpen:    { en: 'Open menu',  ja: 'メニューを開く',  hi: 'मेन्यू खोलें' },
    menuClose:   { en: 'Close menu', ja: 'メニューを閉じる', hi: 'मेन्यू बंद करें' },
    themeToDark: { en: 'Switch to dark theme',  ja: 'ダークテーマに切り替え', hi: 'डार्क थीम पर जाएँ' },
    themeToLight:{ en: 'Switch to light theme', ja: 'ライトテーマに切り替え', hi: 'लाइट थीम पर जाएँ' },
    language:    { en: 'Language', ja: '言語', hi: 'भाषा' },
    slide:       { en: 'Go to slide {n} of {t}', ja: 'スライド {n} / {t} へ移動', hi: 'स्लाइड {n} / {t} पर जाएँ' }
  };
  function lang() { try { return localStorage.getItem('pdka-lang') || 'en'; } catch (e) { return 'en'; } }
  function tr(key, vars) {
    var l = lang(), s = (D[key] && (D[key][l] || D[key].en)) || '';
    if (vars) for (var k in vars) s = s.replace('{' + k + '}', vars[k]);
    return s;
  }
  function $(sel) { return document.querySelector(sel); }
  function setAttr(el, a, v) { if (el && el.getAttribute(a) !== v) el.setAttribute(a, v); }

  function menuIsOpen() { var m = document.getElementById('mobileMenu'); return !!m && m.style.display === 'flex'; }
  function menuState(open) {
    if (open === undefined) open = menuIsOpen();
    var b = document.getElementById('navToggle');
    setAttr(b, 'aria-expanded', open ? 'true' : 'false');
    setAttr(b, 'aria-label', tr(open ? 'menuClose' : 'menuOpen'));
  }
  function themeState() {
    var dark = document.documentElement.getAttribute('data-theme') === 'dark';
    setAttr(document.getElementById('themeToggle'), 'aria-label', tr(dark ? 'themeToLight' : 'themeToDark'));
  }
  function slides() {
    var dots = document.querySelectorAll('.hero-dot'), t = dots.length;
    for (var i = 0; i < t; i++) {
      setAttr(dots[i], 'aria-label', tr('slide', { n: i + 1, t: t }));
      if (dots[i].classList.contains('active')) setAttr(dots[i], 'aria-current', 'true');
      else dots[i].removeAttribute('aria-current');
    }
  }
  function apply() {
    menuState(); themeState(); slides();
    setAttr($('.lang-btn'), 'aria-label', tr('language'));
  }

  /* ---------- Contact form: inline validation + status message ---------- */
  var F = {
    nameReq:   { en: 'Please enter your name.', ja: 'お名前を入力してください。', hi: 'कृपया अपना नाम दर्ज करें।' },
    emailReq:  { en: 'Please enter your email address.', ja: 'メールアドレスを入力してください。', hi: 'कृपया अपना ईमेल पता दर्ज करें।' },
    emailBad:  { en: 'Please enter a valid email address, for example name@company.com.', ja: '有効なメールアドレスを入力してください(例: name@company.com)。', hi: 'कृपया मान्य ईमेल पता दर्ज करें, जैसे name@company.com।' },
    success:   { en: "Message sent! We'll get back to you within one business day.", ja: 'メッセージを送信しました。1営業日以内にご連絡いたします。', hi: 'संदेश भेज दिया गया है। हम एक कार्यदिवस के भीतर आपसे संपर्क करेंगे।' }
  };
  function ft(key) { var l = lang(); return (F[key][l] || F[key].en); }
  function showError(ctl, msg) {
    var id = ctl.id + '-err', err = document.getElementById(id);
    if (!err) {
      err = document.createElement('p');
      err.className = 'field-error'; err.id = id;
      err.innerHTML = '<i class="fas fa-exclamation-circle" aria-hidden="true"></i><span></span>';
      ctl.parentNode.insertBefore(err, ctl.nextSibling);
    }
    err.lastChild.textContent = msg;
    ctl.setAttribute('aria-invalid', 'true');
    ctl.setAttribute('aria-describedby', id);
    if (!ctl._pdkaClear) {
      ctl._pdkaClear = true;
      ctl.addEventListener('input', function () { clearError(ctl); });
    }
  }
  function clearError(ctl) {
    var err = document.getElementById(ctl.id + '-err');
    if (err && err.parentNode) err.parentNode.removeChild(err);
    ctl.removeAttribute('aria-invalid');
    ctl.removeAttribute('aria-describedby');
  }
  window.pdkaForm = {
    validate: function (form) {
      var name = form.querySelector('#cf-name'), email = form.querySelector('#cf-email'), first = null;
      [name, email].forEach(function (c) { if (c) clearError(c); });
      if (name && !name.value.trim()) { showError(name, ft('nameReq')); first = first || name; }
      if (email) {
        var v = email.value.trim();
        if (!v) { showError(email, ft('emailReq')); first = first || email; }
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) { showError(email, ft('emailBad')); first = first || email; }
      }
      if (first) { first.focus(); return false; }
      return true;
    },
    announce: function (el) {
      if (!el) return;
      var html = '<i class="fas fa-check-circle" aria-hidden="true"></i> ' + ft('success');
      el.textContent = '';
      el.style.display = 'block';
      setTimeout(function () { el.innerHTML = html; }, 60);   // content change inside a live region is what gets announced
    }
  };

  window.pdkaA11y = { menuState: menuState, slides: slides, tr: tr, apply: apply };

  try {
    var orig = Storage.prototype.setItem;
    Storage.prototype.setItem = function (k, v) {
      var r = orig.apply(this, arguments);
      if (k === 'pdka-lang') apply();
      return r;
    };
  } catch (e) {}

  function init() {
    apply();
    if (window.MutationObserver) {
      new MutationObserver(themeState).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
  window.addEventListener('pageshow', apply);
})();
