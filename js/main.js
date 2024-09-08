// menu bar

function myMenuFunction() {
    var menuBtn = document.getElementById("myNavMenu");
        if (menuBtn.className === "nav-menu"){
            menuBtn.className += " responsive";
        } else {
            menuBtn.className = "nav-menu";
        }
}

// main scroll

window.onscroll = function() {headerShadow()};

function headerShadow() {
    const navHeader = document.getElementById("header");

    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "80px";
        navHeader.style.lineHeight = "80px";
    } else {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";
    }
}

// typing effect
var typingEffect = new Typed(".typedText", {
    strings : ["Web Development", "Designer", "Web Development"],
    loop : true,
    typeSpeed : 100,
    backSpeed : 100,
    backDelay : 2000
})

// scroll reveal 
const sr = ScrollReveal ({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

// HOME 
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-text-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social-icons',{delay: 200})
sr.reveal('.featured-image',{delay: 200})

// PROJECTS
sr.reveal('.projects-box', {interval: 200})

sr.reveal('.top-header', {})

// LEFT ANIMATION 
const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
})

// ABOUT CONTACT
srLeft.reveal('.about-info', {delay: 100})
srLeft.reveal('.contact-info', {delay: 100})

// RIGHT ANIMATION 
const srRight = ScrollReveal ({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
})

// SKILL FORM 
srRight.reveal('.skills-info', {delay: 100})
srRight.reveal('.form-control', {delay: 100})

// ACTIVE LINK
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)