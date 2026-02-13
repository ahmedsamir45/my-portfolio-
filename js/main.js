// Theme Toggle Logic
// Theme Toggle Logic
console.log("DEBUG: main.js v2.0 loaded");
function setupThemeToggle() {
  const toggles = [
    document.getElementById('theme-toggle-desktop'),
    document.getElementById('mobile-theme-toggle')
  ];

  const body = document.body;

  // Check for saved theme
  const savedTheme = localStorage.getItem('theme') || 'light';
  body.setAttribute('data-theme', savedTheme);

  // Update all toggle icons
  toggles.forEach(toggle => {
    if (toggle) updateIcon(toggle, savedTheme);
  });

  toggles.forEach(toggle => {
    if (!toggle) return;

    toggle.addEventListener('click', () => {
      const currentTheme = body.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';

      body.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);

      // Update all icons
      toggles.forEach(t => {
        if (t) updateIcon(t, newTheme);
      });
    });
  });
}

function updateIcon(btn, theme) {
  const icon = btn.querySelector('i');
  if (theme === 'dark') {
    icon.classList.replace('fa-moon', 'fa-sun');
  } else {
    icon.classList.replace('fa-sun', 'fa-moon');
  }
}

// Initialize Theme Toggles
setupThemeToggle();


// Global Animation Function for dynamic content
// Global Animation Function for dynamic content
window.animateDynamicContent = function (selector) {
  // Use a small timeout to ensure DOM is ready
  setTimeout(() => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((el, index) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, index * 100);
    });
  }, 100);
};

// Initial triggers


