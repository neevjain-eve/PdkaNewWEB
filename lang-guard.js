/* Keeps the language dropdown usable: while it is open (or hovered) no mega-menu panel may open or stay open.
   Delete this file and its <script> tags to undo. */
(function () {
  var root = document.documentElement;
  function closeMega() {
    var o = document.querySelectorAll('.has-mega.mega-open');
    for (var i = 0; i < o.length; i++) o[i].classList.remove('mega-open');
  }
  function sync() {
    var m = document.getElementById('langMenu');
    var open = !!m && (m.classList.contains('open') || getComputedStyle(m).display !== 'none');
    root.classList.toggle('lang-open', open);
    if (open) closeMega();
  }
  function init() {
    var dd = document.getElementById('langDropdown'), m = document.getElementById('langMenu');
    if (!dd || !m) return;
    if (window.MutationObserver) {
      var mo = new MutationObserver(sync);
      mo.observe(m, { attributes: true, attributeFilter: ['style', 'class'] });
      mo.observe(dd, { attributes: true, attributeFilter: ['class'] });
    }
    // Hovering the language button/menu always dismisses any open panel straight away
    dd.addEventListener('mouseenter', closeMega);
    dd.addEventListener('mousemove', function () { if (document.querySelector('.has-mega.mega-open')) closeMega(); });
    // Language option clicked: close the dropdown and any panel
    m.addEventListener('click', function () { setTimeout(function () { closeMega(); sync(); }, 0); });
    sync();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
