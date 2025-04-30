// Theme toggle logic
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateGithubCards();
  }
  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    setTheme(current === 'dark' ? 'light' : 'dark');
    updateThemeIcon();
  }
  window.addEventListener('DOMContentLoaded', () => {
    // Always default to dark mode
    setTheme('dark');
    updateThemeIcon();
    updateGithubCards();
    // If user has a preference, override after a tick
    setTimeout(() => {
      const saved = localStorage.getItem('theme');
      if (saved) {
        setTheme(saved);
        updateThemeIcon();
        updateGithubCards();
      }
    }, 0);
    // Scroll to top when logo is clicked
    const logo = document.querySelector('.nav-logo');
    if (logo) {
      logo.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  });
  function updateThemeIcon() {
    const theme = document.documentElement.getAttribute('data-theme') || 'dark';
    const sun = document.querySelector('#theme-icon .sun');
    const moon = document.querySelector('#theme-icon .moon');
    if (!sun || !moon) return;
    if (theme === 'dark') {
      sun.style.display = 'none';
      moon.style.display = '';
    } else {
      sun.style.display = '';
      moon.style.display = 'none';
    }
  }
  // Dynamically update GitHub cards based on theme
  function updateGithubCards() {
    const theme = document.documentElement.getAttribute('data-theme') || 'dark';
    // Profile Details
    const profileDetails = document.getElementById('github-profile-details');
    // Stats
    const stats = document.getElementById('github-stats');
    // Repos per language
    const reposLang = document.getElementById('github-repos-lang');
    if (!profileDetails || !stats || !reposLang) return;
    if (theme === 'dark') {
      profileDetails.src = "http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=ChristianDeoManlangit&theme=react";
      stats.src = "http://github-profile-summary-cards.vercel.app/api/cards/stats?username=ChristianDeoManlangit&theme=react";
      reposLang.src = "http://github-profile-summary-cards-ktcudck4p.vercel.app/api/cards/repos-per-language?username=ChristianDeoManlangit&theme=react";
    } else {
      profileDetails.src = "http://github-profile-summary-cards-ktcudck4p.vercel.app/api/cards/profile-details?username=ChristianDeoManlangit&theme=transparent";
      stats.src = "http://github-profile-summary-cards-ktcudck4p.vercel.app/api/cards/stats?username=ChristianDeoManlangit&theme=transparent";
      reposLang.src = "http://github-profile-summary-cards-ktcudck4p.vercel.app/api/cards/repos-per-language?username=ChristianDeoManlangit&theme=transparent";
    }
  }