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

  // Toggle Dark Mode (light/dark)
const themeToggle = document.getElementById("theme-toggle");
const themeToggleMobile = document.getElementById("theme-toggle-mobile");

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

themeToggle.addEventListener("click", toggleDarkMode);
themeToggleMobile.addEventListener("click", toggleDarkMode);

// Dark Mode Toggle Function
document.getElementById("theme-toggle").addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});


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




//Skill Level Bars

document.addEventListener('DOMContentLoaded', () => {
  const skillLevels = {
    "FRONTEND DEVELOPMENT": 70,
    "BACK-END DEVELOPMENT": 65,
    "GRAPHIC DESIGN | UX/UI": 75,
    "MOBILE DEVELOPMENT": 40,
    "MICROSOFT OFFICE": 90,
  };

  document.querySelectorAll('.details-container').forEach(container => {
    const heading = container.querySelector('h3')?.innerText.trim();
    if (skillLevels[heading]) {
      const level = skillLevels[heading];
      const barWrapper = document.createElement('div');
      barWrapper.className = 'skill-bar-wrapper';

      const bar = document.createElement('div');
      bar.className = 'skill-bar';
      bar.style.width = '0%';
      barWrapper.appendChild(bar);
      container.appendChild(barWrapper);

      // Animate width
      setTimeout(() => {
        bar.style.width = `${level}%`;
      }, 300);
    }
  });
});


document.querySelectorAll(".details-container").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * -10;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0)";
  });

  card.addEventListener("mouseenter", () => {
    card.style.transition = "transform 0.1s ease";
  });
});