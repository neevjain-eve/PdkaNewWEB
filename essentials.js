/* PDKA site essentials: skip link, ICAI disclaimer, cookie consent, cookie-settings link.
   Self-contained (injects its own CSS). Loaded with <script src="essentials.js" defer> on every page. */
(function () {
  'use strict';
  var LS = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  var TXT = {
    en: {
      skip: 'Skip to main content',
      dTitle: 'Disclaimer',
      dBody: 'As per the rules of the Institute of Chartered Accountants of India (ICAI), a Chartered Accountant firm is not permitted to solicit work or advertise. By clicking "I Agree" you acknowledge that: (1) you wish to gain more information about P. Dilip Kumar & Associates of your own accord; (2) there has been no advertisement, personal communication, solicitation, invitation or inducement of any sort from the firm or its members to solicit any work through this website; and (3) the information on this website is for general information only and does not constitute professional advice or create a client relationship.',
      dAgree: 'I Agree',
      cTitle: 'We value your privacy',
      cBody: 'We use essential cookies and local storage to make this site work (for example, your language and theme choice). With your permission we may also use optional cookies to understand how the site is used. See our',
      cLink: 'Privacy Policy',
      cAccept: 'Accept all',
      cReject: 'Essential only',
      cSettings: 'Cookie settings'
    },
    ja: {
      skip: 'メインコンテンツへスキップ',
      dTitle: '免責事項',
      dBody: 'インド勅許会計士協会(ICAI)の規則により、会計士事務所は業務の勧誘や広告を行うことができません。「同意する」をクリックすることにより、次の点を確認したものとみなされます。(1) P. Dilip Kumar & Associates についての情報を自らの意思で入手すること。(2) 当事務所およびその構成員から、本ウェブサイトを通じた勧誘・誘引等が一切なかったこと。(3) 本ウェブサイトの情報は一般的な情報提供のみを目的とし、専門的助言やクライアント関係を構成しないこと。',
      dAgree: '同意する',
      cTitle: 'プライバシーについて',
      cBody: '当サイトは、言語やテーマの設定など、サイトの動作に必要なクッキーとローカルストレージを使用します。ご同意いただいた場合、サイトの利用状況を把握するための任意のクッキーも使用することがあります。詳しくは',
      cLink: 'プライバシーポリシー',
      cAccept: 'すべて許可',
      cReject: '必須のみ',
      cSettings: 'クッキー設定'
    },
    hi: {
      skip: 'मुख्य सामग्री पर जाएँ',
      dTitle: 'अस्वीकरण',
      dBody: 'इंस्टीट्यूट ऑफ चार्टर्ड अकाउंटेंट्स ऑफ इंडिया (ICAI) के नियमों के अनुसार, चार्टर्ड अकाउंटेंट फर्म को कार्य के लिए आग्रह या विज्ञापन करने की अनुमति नहीं है। "मैं सहमत हूँ" पर क्लिक करके आप स्वीकार करते हैं कि: (1) आप P. Dilip Kumar & Associates के बारे में अपनी इच्छा से जानकारी प्राप्त करना चाहते हैं; (2) फर्म या उसके सदस्यों की ओर से इस वेबसाइट के माध्यम से किसी प्रकार का विज्ञापन, आग्रह या प्रलोभन नहीं दिया गया है; और (3) इस वेबसाइट की जानकारी केवल सामान्य जानकारी के लिए है, यह पेशेवर सलाह नहीं है और इससे क्लाइंट संबंध स्थापित नहीं होता।',
      dAgree: 'मैं सहमत हूँ',
      cTitle: 'हम आपकी गोपनीयता को महत्व देते हैं',
      cBody: 'यह साइट काम करने के लिए आवश्यक कुकीज़ और लोकल स्टोरेज का उपयोग करती है (जैसे आपकी भाषा और थीम का चयन)। आपकी अनुमति से हम साइट के उपयोग को समझने के लिए वैकल्पिक कुकीज़ भी उपयोग कर सकते हैं। देखें हमारी',
      cLink: 'गोपनीयता नीति',
      cAccept: 'सभी स्वीकार करें',
      cReject: 'केवल आवश्यक',
      cSettings: 'कुकी सेटिंग्स'
    }
  };
  function t() { var l = LS.get('pdka-lang') || 'en'; return TXT[l] || TXT.en; }

  var css = '' +
    '.pdka-skip{position:fixed;left:12px;top:-60px;z-index:100001;background:#e8600a;color:#fff;padding:10px 18px;border-radius:8px;font:600 14px Source Sans 3,sans-serif;text-decoration:none;transition:top .2s}' +
    '.pdka-skip:focus{top:12px;outline:3px solid #0d1b3e}' +
    '.pdka-overlay{position:fixed;inset:0;z-index:100000;background:rgba(8,14,32,.72);backdrop-filter:blur(4px);display:flex;align-items:center;justify-content:center;padding:20px}' +
    '.pdka-modal{background:#fff;color:#1e293b;max-width:620px;width:100%;border-radius:14px;padding:32px 34px;box-shadow:0 24px 60px rgba(0,0,0,.35);border-top:4px solid #e8600a;max-height:90vh;overflow:auto;font-family:Source Sans 3,sans-serif}' +
    '.pdka-modal h2{font-family:"Source Serif 4",Georgia,serif;font-size:24px;color:#0d1b3e;margin:0 0 12px}' +
    '.pdka-modal p{font-size:14px;line-height:1.7;margin:0 0 22px;color:#334155}' +
    '.pdka-btn{border:0;cursor:pointer;font:600 14px Source Sans 3,sans-serif;padding:11px 24px;border-radius:8px;transition:background .2s,transform .1s}' +
    '.pdka-btn:active{transform:scale(.98)}' +
    '.pdka-btn-primary{background:#e8600a;color:#fff}.pdka-btn-primary:hover{background:#c94f06}' +
    '.pdka-btn-ghost{background:transparent;color:#0d1b3e;border:1.5px solid #cbd5e1}.pdka-btn-ghost:hover{background:#f1f5f9}' +
    '.pdka-cookie{position:fixed;left:20px;right:20px;bottom:20px;z-index:99999;max-width:880px;margin:0 auto;background:#fff;color:#1e293b;border-radius:14px;padding:20px 24px;box-shadow:0 12px 40px rgba(13,27,62,.25);border:1px solid #e2e8f0;display:flex;gap:20px;align-items:center;flex-wrap:wrap;font-family:Source Sans 3,sans-serif;animation:pdkaUp .4s ease}' +
    '.pdka-cookie h3{margin:0 0 4px;font-size:15px;color:#0d1b3e}' +
    '.pdka-cookie p{margin:0;font-size:13px;line-height:1.6;color:#475569}' +
    '.pdka-cookie a{color:#e8600a;font-weight:600}' +
    '.pdka-cookie-text{flex:1 1 360px}.pdka-cookie-btns{display:flex;gap:10px;flex-wrap:wrap}' +
    '[data-theme="dark"] .pdka-modal,[data-theme="dark"] .pdka-cookie{background:#111c36;color:#e2e8f0;border-color:#26365c}' +
    '[data-theme="dark"] .pdka-modal h2,[data-theme="dark"] .pdka-cookie h3{color:#fff}' +
    '[data-theme="dark"] .pdka-modal p,[data-theme="dark"] .pdka-cookie p{color:#cbd5e1}' +
    '[data-theme="dark"] .pdka-btn-ghost{color:#e2e8f0;border-color:#3a4c78}[data-theme="dark"] .pdka-btn-ghost:hover{background:#1c2b4d}' +
    '.pdka-cookie-settings{background:none;border:0;padding:0;color:inherit;font:inherit;cursor:pointer;text-decoration:underline;opacity:.85}' +
    '@keyframes pdkaUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}' +
    '@media(max-width:600px){.pdka-modal{padding:24px 20px}.pdka-cookie{left:10px;right:10px;bottom:10px}.pdka-cookie-btns,.pdka-cookie-btns .pdka-btn{width:100%}}';

  function el(tag, attrs, html) {
    var e = document.createElement(tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (html) e.innerHTML = html;
    return e;
  }

  function addSkipLink() {
    var main = document.querySelector('main') || document.querySelector('[role="main"]');
    if (!main) { main = document.querySelector('section') || document.body.children[0]; }
    if (main && !main.id) main.id = 'main-content';
    var a = el('a', { 'class': 'pdka-skip', href: '#' + (main ? main.id : 'main-content') }, t().skip);
    a.addEventListener('click', function () { if (main) { main.setAttribute('tabindex', '-1'); main.focus(); } });
    document.body.insertBefore(a, document.body.firstChild); a.style.position = "absolute";
  }

  function showDisclaimer(done) {
    var s = t();
    var ov = el('div', { 'class': 'pdka-overlay', role: 'dialog', 'aria-modal': 'true', 'aria-labelledby': 'pdka-d-t' });
    ov.innerHTML = '<div class="pdka-modal"><h2 id="pdka-d-t">' + s.dTitle + '</h2><p>' + s.dBody +
      '</p><button class="pdka-btn pdka-btn-primary" type="button">' + s.dAgree + '</button></div>';
    document.documentElement.appendChild(ov);
    var btn = ov.querySelector('button');
    btn.focus({ preventScroll: true });
    document.documentElement.style.overflow = 'hidden';
    btn.addEventListener('click', function () {
      LS.set('pdka-disclaimer', 'accepted');
      document.documentElement.style.overflow = '';
      ov.remove();
      done();
    });
  }

  function showCookie() {
    var old = document.getElementById('pdka-cookie'); if (old) old.remove();
    var s = t();
    var b = el('div', { 'class': 'pdka-cookie', id: 'pdka-cookie', role: 'region', 'aria-label': s.cTitle });
    b.innerHTML = '<div class="pdka-cookie-text"><h3>' + s.cTitle + '</h3><p>' + s.cBody +
      ' <a href="privacy-policy.html#s9">' + s.cLink + '</a>.</p></div>' +
      '<div class="pdka-cookie-btns"><button type="button" class="pdka-btn pdka-btn-ghost" data-c="essential">' + s.cReject +
      '</button><button type="button" class="pdka-btn pdka-btn-primary" data-c="all">' + s.cAccept + '</button></div>';
    document.documentElement.appendChild(b);
    b.addEventListener('click', function (e) {
      var c = e.target && e.target.getAttribute && e.target.getAttribute('data-c');
      if (!c) return;
      LS.set('pdka-cookie-consent', c);
      try { document.cookie = 'pdka_consent=' + c + '; max-age=15552000; path=/; SameSite=Lax'; } catch (x) {}
      window.dispatchEvent(new CustomEvent('pdka-consent', { detail: c }));
      b.remove();
    });
  }
  window.pdkaCookieSettings = showCookie;

  function addFooterLink() {
    var f = document.querySelector('footer');
    if (!f || f.querySelector('.pdka-cookie-settings')) return;
    var bar = f.querySelector('.footer-bottom, .footer-copy, [class*="bottom"]') || f;
    var wrap = el('div', { style: 'text-align:center;font-size:13px;margin:10px 0 0;opacity:.85' });
    var btn = el('button', { type: 'button', 'class': 'pdka-cookie-settings' }, t().cSettings);
    btn.addEventListener('click', showCookie);
    wrap.appendChild(btn);
    bar.appendChild(wrap);
  }

  function init() {
    if (window.self !== window.top) return;
    document.head.appendChild(el('style', {}, css));
    addSkipLink();
    addFooterLink();
    var go = function () { if (!LS.get('pdka-cookie-consent')) showCookie(); };
    if (LS.get('pdka-disclaimer') !== 'accepted') showDisclaimer(go); else go();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
