/**
 * YuzuHub - Main Application Script
 * Theme toggle and clipboard functionality
 */

(function () {
  'use strict';

  // ============================================
  // Theme Toggle
  // ============================================
  const themeToggle = document.querySelector('.theme-toggle');
  const html = document.documentElement;

  // Check for saved theme preference or default to dark
  const savedTheme = localStorage.getItem('theme') || 'dark';
  html.setAttribute('data-theme', savedTheme);

  themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    // Update theme-color meta tag
    const themeColor = newTheme === 'dark' ? '#050b08' : '#aebcb0';
    document
      .querySelector('meta[name="theme-color"]')
      .setAttribute('content', themeColor);
  });

  // ============================================
  // Clipboard Functionality
  // ============================================
  function initCopyButtons() {
    const copyCards = document.querySelectorAll('[data-copy]');

    copyCards.forEach((card) => {
      card.addEventListener('click', async () => {
        const textToCopy = card.dataset.copy;
        const subtitleEl = card.querySelector('.link-card-subtitle');
        const originalText = subtitleEl.textContent;

        try {
          await navigator.clipboard.writeText(textToCopy);
          subtitleEl.textContent = 'Copié !';
          setTimeout(() => {
            subtitleEl.textContent = originalText;
          }, 2000);
        } catch (err) {
          console.error('Failed to copy:', err);
        }
      });

      // Keyboard accessibility
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          card.click();
        }
      });
    });
  }

  initCopyButtons();
})();
