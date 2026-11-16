/* PDKA small browser-side safeguards. Runs first in <head>. Delete this file and its <script> tags to undo.
   1) Only en / ja / hi are accepted as a language, from the URL (?lang=) and from storage. Anything else is dropped,
      because an unexpected value used to throw errors in the page scripts and leave the page half-translated.
   2) Refuse to be shown inside another website's frame (clickjacking). Our own pages framing each other are fine. */
(function () {
  var OK = { en: 1, ja: 1, hi: 1 };
  try {
    var v = localStorage.getItem('pdka-lang');
    if (v !== null && !OK.hasOwnProperty(v)) localStorage.removeItem('pdka-lang');
  } catch (e) {}
  try {
    var u = new URL(location.href), q = u.searchParams.get('lang');
    if (q !== null && !OK.hasOwnProperty(q)) {
      u.searchParams.delete('lang');
      history.replaceState(history.state, '', u.pathname + u.search + u.hash);
    }
  } catch (e) {}
  try {
    if (window.top !== window.self) { void window.top.location.hostname; }   // throws if the parent is another origin
  } catch (e) {
    document.documentElement.style.display = 'none';          // never show our page under someone else's frame
    try { window.top.location = window.self.location; } catch (e2) {}
  }
})();
