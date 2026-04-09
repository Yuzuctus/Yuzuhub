/*
  Yuzuhub script
  Theme toggle + scroll reveal + nav scroll + copy actions.
*/

(function () {
  var STORAGE_KEY = 'yuzuctus-theme';
  var HTML = document.documentElement;

  function getSystemPreference() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day';
  }

  function updateThemeMeta(theme) {
    var meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) return;
    meta.setAttribute('content', theme === 'night' ? '#0d1716' : '#fff8f0');
  }

  function updateToggleLabels(isNight) {
    var toggles = document.querySelectorAll('.theme-toggle');
    toggles.forEach(function (toggle) {
      toggle.setAttribute('aria-label', isNight ? 'Switch to day mode' : 'Switch to night mode');
    });
  }

  function applyTheme(theme) {
    if (theme === 'night') {
      HTML.setAttribute('data-theme', 'night');
    } else {
      HTML.removeAttribute('data-theme');
    }

    updateToggleLabels(theme === 'night');
    updateThemeMeta(theme);
  }

  function getStoredTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function setStoredTheme(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {
    }
  }

  function cycleTheme() {
    var current = HTML.getAttribute('data-theme') === 'night' ? 'night' : 'day';
    var next = current === 'night' ? 'day' : 'night';
    setStoredTheme(next);
    applyTheme(next);
  }

  function initTheme() {
    var stored = getStoredTheme();
    if (stored) {
      applyTheme(stored);
    } else {
      applyTheme(getSystemPreference());
    }
  }

  function initScrollReveal() {
    var reveals = document.querySelectorAll('.reveal');
    if (!reveals.length || !('IntersectionObserver' in window)) {
      reveals.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    reveals.forEach(function (el) {
      observer.observe(el);
    });
  }

  function initNavScroll() {
    var nav = document.querySelector('.desert-nav');
    if (!nav) return;

    var scrolled = false;
    window.addEventListener('scroll', function () {
      var now = window.scrollY > 20;
      if (now !== scrolled) {
        scrolled = now;
        nav.classList.toggle('scrolled', scrolled);
      }
    }, { passive: true });
  }

  function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }

    return new Promise(function (resolve, reject) {
      try {
        var temp = document.createElement('textarea');
        temp.value = text;
        temp.setAttribute('readonly', '');
        temp.style.position = 'absolute';
        temp.style.left = '-9999px';
        document.body.appendChild(temp);
        temp.select();
        var ok = document.execCommand('copy');
        document.body.removeChild(temp);
        if (ok) resolve();
        else reject(new Error('copy failed'));
      } catch (err) {
        reject(err);
      }
    });
  }

  function initCopyButtons() {
    var copyCards = document.querySelectorAll('[data-copy]');
    copyCards.forEach(function (card) {
      card.addEventListener('click', function () {
        var textToCopy = card.getAttribute('data-copy');
        var subtitleEl = card.querySelector('.link-tile-subtitle');
        if (!textToCopy || !subtitleEl) return;

        var originalText = subtitleEl.textContent;
        copyToClipboard(textToCopy).then(function () {
          subtitleEl.textContent = 'Copied!';
          card.classList.add('is-copied');
          window.setTimeout(function () {
            subtitleEl.textContent = originalText;
            card.classList.remove('is-copied');
          }, 1800);
        }).catch(function () {
          subtitleEl.textContent = 'Copy error';
          window.setTimeout(function () {
            subtitleEl.textContent = originalText;
          }, 1800);
        });
      });

      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          card.click();
        }
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initTheme();
    initScrollReveal();
    initNavScroll();
    initCopyButtons();

    var toggles = document.querySelectorAll('.theme-toggle');
    toggles.forEach(function (toggle) {
      toggle.addEventListener('click', cycleTheme);
    });
  });
})();
