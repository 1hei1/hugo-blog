(function () {
  const THEME_KEY = 'theme';

  function getPreferred() {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function apply(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
    const btn = document.querySelector('.theme-toggle');
    if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
  }

  apply(getPreferred());

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.querySelector('.theme-toggle');
    if (btn) {
      btn.addEventListener('click', function () {
        var current = document.documentElement.getAttribute('data-theme');
        apply(current === 'dark' ? 'light' : 'dark');
      });
    }

    // Mobile menu
    var menuBtn = document.querySelector('.mobile-menu-btn');
    var navLinks = document.querySelector('.nav-links');
    if (menuBtn && navLinks) {
      menuBtn.addEventListener('click', function () {
        navLinks.classList.toggle('open');
      });
    }

    // TOC active highlighting
    var tocLinks = document.querySelectorAll('.toc-list a');
    if (tocLinks.length > 0) {
      var headings = [];
      tocLinks.forEach(function (link) {
        var id = link.getAttribute('href').slice(1);
        var el = document.getElementById(id);
        if (el) headings.push({ el: el, link: link });
      });

      function updateToc() {
        var scrollPos = window.scrollY + 100;
        var active = null;
        for (var i = headings.length - 1; i >= 0; i--) {
          if (headings[i].el.offsetTop <= scrollPos) {
            active = headings[i];
            break;
          }
        }
        tocLinks.forEach(function (l) { l.classList.remove('active'); });
        if (active) active.link.classList.add('active');
      }

      window.addEventListener('scroll', updateToc, { passive: true });
      updateToc();
    }
  });
})();
