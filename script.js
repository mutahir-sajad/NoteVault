document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const toggleBtn = document.getElementById('toggleDarkMode');
  const body = document.body;
  const darkModeIcon = document.querySelector('.dark-mode-icon');
  
  // Check for saved user preference or system preference
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  const savedTheme = localStorage.getItem('theme');
  
  // Set initial theme
  if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme.matches)) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
  
  // Toggle functionality
  toggleBtn.addEventListener('click', toggleTheme);
  
  // Watch for system theme changes
  prefersDarkScheme.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      e.matches ? enableDarkMode() : disableDarkMode();
    }
  });
  
  function toggleTheme() {
    body.classList.contains('dark') ? disableDarkMode() : enableDarkMode();
  }
  
  function enableDarkMode() {
    body.classList.add('dark');
    document.documentElement.setAttribute('data-theme', 'dark');
    toggleBtn.textContent = 'Light Mode';
    darkModeIcon.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  }
  
  function disableDarkMode() {
    body.classList.remove('dark');
    document.documentElement.setAttribute('data-theme', 'light');
    toggleBtn.textContent = 'Dark Mode';
    darkModeIcon.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }
});