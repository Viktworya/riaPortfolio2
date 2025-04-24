// Hamburger menu toggle
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('theme-toggle');
  const body = document.body;

  // Function to update the toggle icon based on theme
  function updateIcon(theme) {
    if (theme === 'dark') {
      toggleBtn.innerHTML = `
        <img width="40" height="40" src="https://img.icons8.com/external-flat-papa-vector/40/external-Light-Mode-interface-flat-papa-vector.png" alt="Switch to Light Mode" />
      `;
    } else {
      toggleBtn.innerHTML = `
        <img width="40" height="40" src="https://img.icons8.com/ios-glyphs/40/do-not-disturb-2.png" alt="Switch to Dark Mode" />
      `;
    }
  }

  // Function to load particles based on theme
  function loadParticles(theme) {
    let particleColor = theme === 'dark' ? '#ffffff' : '#000000';

    // Destroy existing particles (if any)
    if (window.pJSDom && window.pJSDom.length > 0) {
      window.pJSDom[0].pJS.fn.vendors.destroypJS();
      window.pJSDom = [];
    }

    particlesJS('particles-js', {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": particleColor
        },
        "shape": {
          "type": "circle"
        },
        "opacity": {
          "value": 0.5
        },
        "size": {
          "value": 3,
          "random": true
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": particleColor,
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6
        }
      },
      "interactivity": {
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          }
        }
      },
      "retina_detect": true
    });
  }

  // Load saved theme from localStorage
  const savedTheme = localStorage.getItem('theme') || 'light';
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
  }
  updateIcon(savedTheme);
  loadParticles(savedTheme);

  // Toggle theme on button click
  toggleBtn.addEventListener('click', () => {
    const isDark = body.classList.toggle('dark-mode');
    const newTheme = isDark ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    updateIcon(newTheme);
    loadParticles(newTheme);
  });
});

// Back to Top Button Logic
const backToTopBtn = document.getElementById("backToTop");

window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

backToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
