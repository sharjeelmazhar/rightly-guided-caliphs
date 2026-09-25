/* Theme: follows the device setting unless the visitor chooses one.
   Cycle: Auto -> Light -> Dark -> Auto */
(function () {
  var root = document.documentElement;
  var KEY = 'rg-theme';
  function saved() { try { return localStorage.getItem(KEY) || 'auto'; } catch (e) { return 'auto'; } }
  function store(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }
  function apply(v) {
    if (v === 'auto') root.removeAttribute('data-theme'); else root.setAttribute('data-theme', v);
    var b = document.getElementById('themeBtn');
    if (b) b.textContent = v === 'auto' ? '◐ Auto' : (v === 'light' ? '☀ Light' : '☾ Dark');
  }
  apply(saved());
  document.addEventListener('DOMContentLoaded', function () {
    apply(saved());
    var b = document.getElementById('themeBtn');
    if (b) b.addEventListener('click', function () {
      var order = ['auto', 'light', 'dark'];
      var next = order[(order.indexOf(saved()) + 1) % 3];
      store(next); apply(next);
    });
    // Mobile menu
    var mb = document.getElementById('menuBtn'), nav = document.getElementById('nav');
    if (mb && nav) {
      mb.addEventListener('click', function () {
        var open = nav.classList.toggle('open');
        mb.setAttribute('aria-expanded', open);
        mb.textContent = open ? '✕' : '☰';
      });
      nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { nav.classList.remove('open'); mb.textContent = '☰'; }); });
    }
    // Sub-navigation scroll spy
    var links = Array.prototype.slice.call(document.querySelectorAll('.subnav a'));
    var secs = links.map(function (a) { return document.querySelector(a.getAttribute('href')); }).filter(Boolean);
    if ('IntersectionObserver' in window && secs.length) {
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (e) {
          if (e.isIntersecting) links.forEach(function (l) { l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id); });
        });
      }, { rootMargin: '-25% 0px -65% 0px' });
      secs.forEach(function (s) { io.observe(s); });
    }
  });
})();
