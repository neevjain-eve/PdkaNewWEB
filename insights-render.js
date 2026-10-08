/* PDKA Insights renderer.
   Reads window.PDKA_INSIGHTS (insights-data.js) and builds:
   - the article grid and filter bar on insights.html
   - the 4 cards in the Insights section on the home page
   - the "Latest Articles" column of the Insights mega menu (every page)
   Article bodies are loaded on demand from insights/<id>.html. */
(function () {
  'use strict';
  var ALL = window.PDKA_INSIGHTS || [];
  var CAT = window.PDKA_CATEGORIES || {};
  var PUB = ALL.filter(function (e) { return e.status === 'published'; })
               .sort(function (a, b) { return b.date < a.date ? -1 : b.date > a.date ? 1 : 0; });

  var MONTHS = {
    en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    hi: ['जनवरी', 'फ़रवरी', 'मार्च', 'अप्रैल', 'मई', 'जून', 'जुलाई', 'अगस्त', 'सितंबर', 'अक्टूबर', 'नवंबर', 'दिसंबर']
  };
  var FULLM = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var UI = {
    en: { more: 'Read More', sources: 'Sources', note: 'This article is for general information only. It is not professional advice and does not create a professional relationship.', loading: 'Loading…', fail: 'This article could not be loaded. Please try again later.', all: 'All' },
    ja: { more: '続きを読む', sources: '出典', note: '本記事は一般的な情報提供のみを目的としており、専門的助言ではなく、専門的な関係を成立させるものではありません。', loading: '読み込み中…', fail: '記事を読み込めませんでした。後でもう一度お試しください。', all: 'すべて' },
    hi: { more: 'और पढ़ें', sources: 'स्रोत', note: 'यह लेख केवल सामान्य जानकारी के लिए है। यह पेशेवर सलाह नहीं है और इससे कोई पेशेवर संबंध स्थापित नहीं होता।', loading: 'लोड हो रहा है…', fail: 'यह लेख लोड नहीं हो सका। कृपया बाद में पुनः प्रयास करें।', all: 'सभी' }
  };

  function lang() { try { return localStorage.getItem('pdka-lang') || 'en'; } catch (e) { return 'en'; } }
  function ui(l) { return UI[l] || UI.en; }
  function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function parts(e) { var p = e.date.split('-'); return { y: +p[0], m: +p[1], d: +p[2] }; }
  function monthYear(e, l) {
    var p = parts(e);
    if (l === 'ja') return p.y + '年' + p.m + '月';
    if (l === 'hi') return MONTHS.hi[p.m - 1] + ' ' + p.y;
    return MONTHS.en[p.m - 1] + ' ' + p.y;
  }
  function fullDate(e, l) {
    var p = parts(e);
    if (l === 'ja') return p.y + '年' + p.m + '月' + p.d + '日';
    if (l === 'hi') return p.d + ' ' + MONTHS.hi[p.m - 1] + ' ' + p.y;
    return MONTHS.en[p.m - 1] + ' ' + p.d + ', ' + p.y;
  }
  function tr(e, l) { return (e.i18n && e.i18n[l]) || e; }
  function topicOf(e) { return e.topic || CAT[e.category] || ''; }
  function tagOf(e, l) { return topicOf(e) + ' · ' + monthYear(e, l); }
  function metaOf(e, l) {
    var p = parts(e);
    if (l === 'ja') return fullDate(e, l) + ' 公開 · 読了' + e.readMins + '分';
    if (l === 'hi') return fullDate(e, l) + ' को प्रकाशित · ' + e.readMins + ' मिनट पढ़ने का समय';
    return 'Published ' + FULLM[p.m - 1] + ' ' + p.d + ', ' + p.y + ' · ' + e.readMins + ' min read';
  }
  function byId(id) { for (var i = 0; i < ALL.length; i++) if (ALL[i].id === id && ALL[i].status === 'published') return ALL[i]; return null; }

  var cache = {};
  function body(id) {
    var e = byId(id), l = lang(), u = ui(l);
    if (!e) return Promise.reject(new Error('unknown'));
    var p = cache[id] || (cache[id] = fetch('insights/' + encodeURIComponent(id) + '.html', { cache: 'no-cache' })
      .then(function (r) { if (!r.ok) throw new Error(r.status); return r.text(); }));
    return p.then(function (html) {
      var src = '';
      if (e.sources && e.sources.length) {
        src = '<h3>' + u.sources + '</h3><ul>' + e.sources.map(function (s) {
          return '<li><a href="' + esc(s.url) + '" target="_blank" rel="noopener">' + esc(s.label) + '</a></li>';
        }).join('') + '</ul>';
      }
      return html + src + '<p style="margin-top:28px;font-size:12px;opacity:.7;"><em>' + esc(u.note) + '</em></p>';
    }).catch(function () { delete cache[id]; return '<p>' + esc(u.fail) + '</p>'; });
  }

  window.PDKA_ARTICLE = {
    get: byId,
    body: body,
    tag: function (e) { return tagOf(e, lang()); },
    title: function (e) { return tr(e, lang()).title; },
    meta: function (e) { return metaOf(e, lang()); },
    loadingText: function () { return ui(lang()).loading; }
  };

  /* ---------- Home page cards ---------- */
  function homePicks() {
    var feat = PUB.filter(function (e) { return e.featured; });
    var rest = PUB.filter(function (e) { return !e.featured; });
    return feat.concat(rest).slice(0, 4).sort(function (a, b) { return b.date < a.date ? -1 : 1; });
  }
  function renderHome() {
    var grid = document.querySelector('#insights .insights-grid');
    if (!grid || grid.children.length) return;
    var l = lang(), u = ui(l);
    grid.innerHTML = homePicks().map(function (e) {
      var t = tr(e, l);
      return '<div class="insight-card"><div class="insight-header"></div><div class="insight-body">' +
        '<span class="insight-tag">' + esc(tagOf(e, l)) + '</span><h3>' + esc(t.title) + '</h3><p>' + esc(t.summary) + '</p></div>' +
        '<div class="insight-footer"><span class="insight-date">' + esc(fullDate(e, l)) + '</span>' +
        '<a href="javascript:void(0)" class="insight-link" onclick="openArticle(\'' + e.id + '\')">' + u.more + ' <i class="fas fa-arrow-right"></i></a></div></div>';
    }).join('');
  }

  /* ---------- Mega menu: Latest Articles ---------- */
  var ICONS = ['fa-file-alt', 'fa-balance-scale', 'fa-landmark'];
  function renderMega() {
    var labels = document.querySelectorAll('.mega-menu .mega-label');
    var l = lang();
    for (var i = 0; i < labels.length; i++) {
      var lab = labels[i];
      var en = lab.getAttribute('data-en') || lab.textContent.trim();
      if (en !== 'Latest Articles') continue;
      var col = lab.parentNode;
      var old = col.querySelectorAll('.mega-item');
      for (var k = 0; k < old.length; k++) old[k].parentNode.removeChild(old[k]);
      PUB.slice(0, 3).forEach(function (e, idx) {
        var a = document.createElement('a');
        a.className = 'mega-item';
        a.setAttribute('data-dyn', '1');
        a.setAttribute('href', 'javascript:void(0)');
        a.setAttribute('onclick', "openPdkaPage('insights.html','Insights')");
        a.innerHTML = '<i class="fas ' + ICONS[idx % 3] + ' mega-icon"></i><span><b>' + esc(tr(e, l).title) + '</b><small>' + esc(tagOf(e, l)) + '</small></span>';
        col.appendChild(a);
      });
    }
  }

  /* ---------- insights.html: grid and filter bar ---------- */
  function renderInsightsPage() {
    var grid = document.getElementById('articlesGrid');
    if (!grid) return;
    var l = lang(), u = ui(l);
    grid.innerHTML = PUB.map(function (e) {
      var t = tr(e, l);
      return '<div class="article-card" data-category="' + esc(e.category) + '">' +
        '<div class="article-card-header" style="background:linear-gradient(135deg,#0d1b3e,#1a2f5e);"></div>' +
        '<div class="article-card-body"><span class="article-tag">' + esc(tagOf(e, l)) + '</span><h3>' + esc(t.title) + '</h3><p>' + esc(t.summary) + '</p></div>' +
        '<div class="article-card-footer"><span class="article-date">' + esc(fullDate(e, l)) + '</span>' +
        '<button class="article-read-btn" onclick="openArticle(\'' + e.id + '\')">' + u.more + ' <i class="fas fa-arrow-right"></i></button></div></div>';
    }).join('');
    var bar = document.querySelector('.filter-bar');
    if (bar && !bar.getAttribute('data-built')) {
      var present = {}; PUB.forEach(function (e) { present[e.category] = 1; });
      var h = '<button class="filter-btn active" onclick="filterArticles(\'all\', this)">' + esc(u.all) + '</button>';
      Object.keys(CAT).forEach(function (c) {
        if (present[c]) h += '<button class="filter-btn" onclick="filterArticles(\'' + c + '\', this)">' + esc(CAT[c]) + '</button>';
      });
      bar.innerHTML = h; bar.setAttribute('data-built', '1');
    }
    var m = (location.hash || '').match(/^#(?:article=)?([A-Za-z0-9_-]+)$/);
    if (m && byId(m[1]) && typeof window.openArticle === 'function') window.openArticle(m[1]);
  }

  function renderAll() { renderHome(); renderMega(); renderInsightsPage(); }

  // Language changes: every switcher stores 'pdka-lang'
  try {
    var orig = Storage.prototype.setItem;
    Storage.prototype.setItem = function (k, v) {
      var r = orig.apply(this, arguments);
      if (k === 'pdka-lang') setTimeout(function () { renderMega(); renderInsightsPage(); }, 0);
      return r;
    };
  } catch (e) {}

  function init() {
    renderAll();
    // The home page replaces whole sections on language change; refill the (empty) grid afterwards.
    var sec = document.getElementById('insights');
    if (sec && window.MutationObserver) new MutationObserver(renderHome).observe(sec, { childList: true });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
  window.addEventListener('pageshow', function () { renderMega(); });
})();
