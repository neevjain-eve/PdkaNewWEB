/* Translates the shared mega-menu (labels, titles, descriptions) into JA / HI.
   Works on every page: reacts to any language switch because every switcher saves 'pdka-lang'. */
(function () {
  'use strict';
  var D = {
    'The Firm': ['事務所について', 'फर्म'],
    'Credentials': ['資格・認定', 'प्रमाणपत्र'],
    'About PDKA': ['PDKAについて', 'PDKA के बारे में'],
    'Founder': ['創業者', 'संस्थापक'],
    'Our Team': ['チーム紹介', 'हमारी टीम'],
    'ICAI Registered': ['ICAI登録', 'ICAI पंजीकृत'],
    'CISA Certified': ['CISA認定', 'CISA प्रमाणित'],
    '9 Countries': ['9か国', '9 देश'],
    '28 years · Bangalore · Global reach': ['28年の実績 · バンガロール · グローバル対応', '28 वर्ष · बेंगलुरु · वैश्विक पहुँच'],
    'Dilip Kumar Parasmal · FCA · CISA · DISA': ['ディリップ・クマール・パラスマル · FCA · CISA · DISA', 'दिलीप कुमार पारसमल · FCA · CISA · DISA'],
    'Department heads & professionals': ['部門責任者と専門スタッフ', 'विभाग प्रमुख और पेशेवर'],
    'Fellow Chartered Accountant': ['フェロー勅許会計士', 'फेलो चार्टर्ड अकाउंटेंट'],
    'Information Systems Auditor': ['情報システム監査人', 'सूचना प्रणाली अंकेक्षक'],
    'India · USA · UK · Dubai & more': ['インド · 米国 · 英国 · ドバイほか', 'भारत · अमेरिका · यूके · दुबई व अन्य'],
    'Assurance & Tax': ['監査・保証と税務', 'अश्योरेंस और कर'],
    'Advisory & CFO': ['アドバイザリー・CFO', 'सलाहकार और CFO'],
    'Audit & Assurance': ['監査・保証業務', 'ऑडिट और अश्योरेंस'],
    'Tax Advisory': ['税務アドバイザリー', 'कर सलाह'],
    'GST Compliance': ['GSTコンプライアンス', 'GST अनुपालन'],
    'Virtual CFO': ['バーチャルCFO', 'वर्चुअल CFO'],
    'FEMA & International': ['FEMA・国際業務', 'FEMA और अंतरराष्ट्रीय'],
    'Risk Management': ['リスク管理', 'जोखिम प्रबंधन'],
    'Statutory, internal & IS audit': ['法定監査・内部監査・ISアドバイザリー', 'सांविधिक, आंतरिक और IS ऑडिट'],
    'Direct tax, ITR, TDS, advance tax': ['直接税、ITR、TDS、予定納税', 'प्रत्यक्ष कर, ITR, TDS, अग्रिम कर'],
    'Registration, returns, reconciliation': ['登録、申告、照合', 'पंजीकरण, रिटर्न, मिलान'],
    'MIS, financial reporting, advisory': ['MIS、財務報告、助言', 'MIS, वित्तीय रिपोर्टिंग, सलाह'],
    'ODI, LRS, foreign remittances': ['ODI、LRS、海外送金', 'ODI, LRS, विदेशी प्रेषण'],
    'Controls, governance, compliance': ['内部統制、ガバナンス、コンプライアンス', 'नियंत्रण, शासन, अनुपालन'],
    'Latest Articles': ['最新記事', 'नवीनतम लेख'],
    'By Topic': ['トピック別', 'विषय के अनुसार'],
    'Union Budget FY2026-27': ['2026-27年度 連邦予算', 'केंद्रीय बजट 2026-27'],
    'ITR Filing FY 2025-26': ['2025-26年度 ITR申告', 'ITR फाइलिंग 2025-26'],
    'ICAI Code of Ethics 2026': ['ICAI倫理規程 2026', 'ICAI आचार संहिता 2026'],
    'GST Updates': ['GST最新情報', 'GST अपडेट'],
    'DPDPA 2025': ['DPDPA 2025', 'DPDPA 2025'],
    'Key tax changes for businesses': ['企業向け主要な税制改正', 'व्यवसायों के लिए प्रमुख कर बदलाव'],
    'Compliance checklist': ['コンプライアンス・チェックリスト', 'अनुपालन चेकलिस्ट'],
    'What changed for CA firms': ['会計士事務所への影響', 'CA फर्मों के लिए क्या बदला'],
    'ITC reconciliation, e-invoicing': ['ITC照合、電子インボイス', 'ITC मिलान, ई-इनवॉइसिंग'],
    'Foreign remittance guide': ['海外送金ガイド', 'विदेशी प्रेषण गाइड'],
    'Data protection compliance': ['データ保護コンプライアンス', 'डेटा संरक्षण अनुपालन'],
    'Open Positions': ['募集中のポジション', 'खुले पद'],
    'Why PDKA': ['PDKAを選ぶ理由', 'PDKA क्यों'],
    'Article Assistant': ['アーティクル・アシスタント', 'आर्टिकल असिस्टेंट'],
    'Senior CA / Asst. Manager': ['シニアCA / アシスタントマネージャー', 'सीनियर CA / असिस्टेंट मैनेजर'],
    'Open Application': ['随時応募', 'ओपन आवेदन'],
    '28+ Years of Practice': ['28年以上の実績', '28+ वर्षों का अनुभव'],
    'International Exposure': ['国際経験', 'अंतरराष्ट्रीय अनुभव'],
    'ICAI Registered Firm': ['ICAI登録事務所', 'ICAI पंजीकृत फर्म'],
    'CA Foundation / Inter · Articleship': ['CAファウンデーション / インター · アーティクルシップ', 'CA फाउंडेशन / इंटर · आर्टिकलशिप'],
    'FCA/ACA · IT/ITES experience': ['FCA/ACA · IT/ITES分野の経験', 'FCA/ACA · IT/ITES अनुभव'],
    'Send your CV anytime': ['履歴書はいつでもお送りください', 'अपना CV कभी भी भेजें'],
    'Learn from experienced professionals': ['経験豊富な専門家から学べます', 'अनुभवी पेशेवरों से सीखें'],
    'Work across 9 countries': ['9か国にまたがる業務', '9 देशों में काम करें'],
    'Structured articleship training': ['体系的なアーティクルシップ研修', 'संरचित आर्टिकलशिप प्रशिक्षण']
  };
  var NAV = {
    'nav-home': ['Home', 'ホーム', 'होम'],
    'nav-about': ['About', '会社概要', 'हमारे बारे में'],
    'nav-services': ['Services', 'サービス', 'सेवाएं'],
    'nav-team': ['Team', 'チーム', 'टीम'],
    'nav-insights': ['Insights', 'インサイト', 'अंतर्दृष्टि'],
    'nav-careers': ['Careers', '採用情報', 'करियर'],
    'nav-contact': ['Contact', 'お問い合わせ', 'संपर्क']
  };
  var IDX = { en: -1, ja: 0, hi: 1 };

  function applyNav(lang) {
    var i = IDX[lang]; if (i === undefined) i = -1;
    var list = document.querySelectorAll('nav [data-i18n], #mobileMenu [data-i18n]');
    for (var k = 0; k < list.length; k++) {
      var key = list[k].getAttribute('data-i18n'), t = NAV[key];
      if (!t) continue;
      var txt = i >= 0 ? t[i + 1] : t[0];
      var node = null, ch = list[k].childNodes;
      for (var m = 0; m < ch.length; m++) if (ch[m].nodeType === 3 && ch[m].nodeValue.trim()) { node = ch[m]; break; }
      var want = txt + (list[k].querySelector('i') ? ' ' : '');
      if (node && node.nodeValue !== want) node.nodeValue = want;
    }
  }

  function nodes() {
    return document.querySelectorAll('.mega-menu .mega-label, .mega-menu a:not([data-dyn]) b, .mega-menu a:not([data-dyn]) small');
  }
  function apply(lang) {
    applyNav(lang);
    var i = IDX[lang]; if (i === undefined) i = -1;
    var list = nodes();
    for (var k = 0; k < list.length; k++) {
      var n = list[k];
      if (!n.hasAttribute('data-en')) n.setAttribute('data-en', n.textContent.trim());
      var en = n.getAttribute('data-en');
      var tr = (i >= 0 && D[en]) ? D[en][i] : en;
      if (n.textContent !== tr) n.textContent = tr;
    }
  }
  function saved() { try { return localStorage.getItem('pdka-lang') || 'en'; } catch (e) { return 'en'; } }

  // Every language switcher on the site stores 'pdka-lang', so hook that write.
  try {
    var orig = Storage.prototype.setItem;
    Storage.prototype.setItem = function (k, v) {
      var r = orig.apply(this, arguments);
      if (k === 'pdka-lang') apply(v);
      return r;
    };
  } catch (e) {}

  function init() { apply(saved()); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
  window.addEventListener('load', init);
  window.addEventListener('pageshow', init);
})();
