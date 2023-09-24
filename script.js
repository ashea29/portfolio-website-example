const container = document.querySelector('.container');
const themeToggle = document.querySelector('.theme-toggle');
const themeToggleMobile = document.querySelector('.theme-toggle--mobile');
const navbar = document.querySelector('.navbar');
const backToTop = document.querySelector('.back-to-top');
const heroCTA = document.querySelector('.hero-cta-buttons');
const githubLink = document.querySelector('.github-link');
const contactFormBtn = document.querySelector('.contact-me-form button');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileNavMenu = document.querySelector('.mobile-nav-menu');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');
const sections = document.querySelectorAll('.section:not(.hero)')


document.addEventListener('scroll', (e) => {
  if (window.scrollY === 0) {
    backToTop.style.animation = 'fade-out 300ms ease-in-out forwards';

    backToTop.addEventListener('animationend', (e) => {
      backToTop.style.display = 'none';
    }, { 
      once: true 
    });

  } else {
    backToTop.style.display = 'flex';
    backToTop.style.animation = 'fade-in 300ms ease-in-out forwards';
  }
});


themeToggle.addEventListener('click', (e) => {
  document.body.classList.toggle('dark-theme');

  themeToggle.querySelector('img').src = document.body.classList.contains('dark-theme') ? './images/moon.svg' : './images/sun.svg';

  themeToggleMobile.querySelector('img').src = document.body.classList.contains('dark-theme') ? './images/moon.svg' : './images/sun.svg';

  // mobileNavMenu.querySelector('img').src = document.body.classList.contains('dark-theme') ? './images/menu-btn-dark-theme.svg' : './images/menu-btn-light-theme.svg';
});


themeToggleMobile.addEventListener('click', (e) => {
  document.body.classList.toggle('dark-theme');

  themeToggle.querySelector('img').src = document.body.classList.contains('dark-theme') ? './images/moon.svg' : './images/sun.svg';

  themeToggleMobile.querySelector('img').src = document.body.classList.contains('dark-theme') ? './images/moon.svg' : './images/sun.svg';

  // mobileNavMenu.querySelector('img').src = document.body.classList.contains('dark-theme') ? './images/menu-btn-dark-theme.svg' : './images/menu-btn-light-theme.svg';

});


mobileMenuBtn.addEventListener('click', function () {
  mobileMenuBtn.classList.toggle('active');
  mobileNavMenu.classList.toggle('active');
  document.body.classList.toggle('active');
});


mobileMenuLinks.forEach(link => {
  link.addEventListener('click', function () {
    document.body.classList.remove('active');
    mobileMenuBtn.classList.remove('active');
    mobileNavMenu.classList.remove('active');
  });
});


backToTop.addEventListener('click', (e) => {
  window.scrollTo({
    top: 0,
    left: 0
  })
  
  history.replaceState([], "", window.location.href.split("#")[0])
})


const observerOptions = {
  threshold: 0.5
}

function addSlideIn(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-in');
    }
  });
}

const observer = new IntersectionObserver(addSlideIn, observerOptions)


sections.forEach(section => {
  observer.observe(section);
})