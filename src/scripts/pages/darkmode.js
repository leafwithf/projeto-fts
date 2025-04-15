function updateLogosForTheme(theme) {
  const logoClasses = ['.footer-logo img', '.header-logo img'];

  // Atualiza os logos
  logoClasses.forEach(selector => {
    const logos = document.querySelectorAll(selector);
    logos.forEach(logo => {
      logo.src = theme === 'dark'
      ? '../../../public/assets/images/logo/logo-white.png'
      : '../../../public/assets/images/logo/logo-black.png';
    });
  });

  const favicon = document.querySelector("link[rel~='icon']");
  if (favicon) {
    favicon.href = theme === 'dark'
      ? '../../../public/assets/images/logo/logoic-white.ico' 
      : '../../../public/assets/images/logo/logoic-black.ico'; 
  }
}

function applySystemThemePreference() {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = prefersDark ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', theme);
  updateLogosForTheme(theme);
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  const newTheme = e.matches ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', newTheme);
  updateLogosForTheme(newTheme);
});

document.addEventListener('DOMContentLoaded', applySystemThemePreference);
