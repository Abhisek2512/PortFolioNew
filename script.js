
  const toggleSwitch = document.getElementById('darkModeToggle');

  // Load saved theme
  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark');
    toggleSwitch.checked = true;
  }

  toggleSwitch.addEventListener('change', function () {
    if (this.checked) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  });

