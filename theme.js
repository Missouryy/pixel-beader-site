(function () {
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  function setTheme(theme) {
    root.classList.toggle('dark-theme', theme === 'dark');
    root.classList.toggle('light-theme', theme === 'light');
    if (toggle) {
      toggle.setAttribute('aria-pressed', String(theme === 'dark'));
      toggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    }
  }

  setTheme(stored === 'dark' || (!stored && prefersDark) ? 'dark' : 'light');
  toggle?.addEventListener('click', function () {
    const next = root.classList.contains('dark-theme') ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
  });
}());
