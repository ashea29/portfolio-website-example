const container = document.querySelector('.container');
const themeToggle = document.querySelector('.theme-toggle');
const themeToggleMobile = document.querySelector('.theme-toggle--mobile');
const navbar = document.querySelector('.navbar');
const backToTop = document.querySelector('.back-to-top');
const heroCTA = document.querySelector('.hero-cta-buttons');
const githubLink = document.querySelector('.github-link');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileNavMenu = document.querySelector('.mobile-nav-menu');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');
const sections = document.querySelectorAll('.section:not(.hero)')


// PROJECT 11 - DOM ELEMENTS - START
const form = document.getElementById('contact-form');
const submitButton = document.querySelector('.contact-submit');
const successMessage = document.getElementById('form-submitted-msg');
// PROJECT 11 - DOM ELEMENTS - END


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
});


themeToggleMobile.addEventListener('click', (e) => {
  document.body.classList.toggle('dark-theme');

  themeToggle.querySelector('img').src = document.body.classList.contains('dark-theme') ? './images/moon.svg' : './images/sun.svg';

  themeToggleMobile.querySelector('img').src = document.body.classList.contains('dark-theme') ? './images/moon.svg' : './images/sun.svg';
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


const options = {
  threshold: 0.4
}


function addSlideIn(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-in');
    }
  });
}

const observer = new IntersectionObserver(addSlideIn, options)


sections.forEach(item => {
  observer.observe(item);
})


// ROJECT 11 - VALIDATION LOGIC - START

const formElements = [ ...form.elements ];

function allInputsValid() {
  const valid = formElements.every((element) => {
    if (element.nodeName !== 'BUTTON') {
      return element.checkValidity();
    } else {
      return true;
    }
  });

  return valid;
}


function handleBlur(e) {
  const element = e.target;

  if (!element.checkValidity() && element.nodeName !== 'BUTTON') {
    element.style.border = '2px solid red';
  }

  if (element.checkValidity() && element.nodeName !== 'BUTTON') {
    element.style.border = '2px solid #CED4DA';
  }

  if (allInputsValid()) {
    submitButton.removeAttribute('disabled', '');
  } else {
    submitButton.setAttribute('disabled', '');
  }
}


function handleSubmit(e) {
  e.preventDefault();

  if (allInputsValid()) {
    successMessage.style.display = 'block';
    form.reset();
    submitButton.setAttribute('disabled', '');

    setTimeout(() => {
      successMessage.style.display = 'none';
    }, 3000);
  }

}


formElements.forEach((element) => {
  if (element.nodeName !== 'BUTTON') {
    element.addEventListener('blur', (e) => handleBlur(e));
  }
});

form.addEventListener('submit', (e) => handleSubmit(e));

// ROJECT 11 - VALIDATION LOGIC - END