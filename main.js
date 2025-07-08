/*toggle icon navbar*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.mobile-nav');

menuIcon.onclick = () => {
    // Toggle 'fa-x' class on menuIcon to switch between hamburger and 'X'
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
};

/*scroll navbar link color*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};

// Add a scroll event listener
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 100);

    // Reset menu icon when scrolling (close the menu if it's open)
    if (navbar.classList.contains('active')) {
        menuIcon.classList.remove('fa-x');  // Remove the 'fa-x' class when scrolling
        navbar.classList.remove('active');  // Close the navbar
    }
});

// Initialize ScrollReveal for .home-img
ScrollReveal().reveal('.home-img', {
    origin: 'bottom',
    distance: '80px',
    duration: 2000,
    delay: 100
});

// Apply ScrollReveal to input boxes in the contact form
ScrollReveal().reveal('.input-box input, .textarea textarea', {
    origin: 'bottom',
    distance: '80px',
    duration: 2000,
    delay: 50
});

// Other ScrollReveal setups remain unchanged
ScrollReveal().reveal('.home-content', {
    origin: 'top',
    distance: '80px',
    duration: 2000,
    delay: 50
});

ScrollReveal().reveal('.heading', {
    origin: 'top',
    distance: '40px',
    duration: 2000,
    delay: 50
});

ScrollReveal().reveal('.home-content h1,.about-img,.service-card .service', {
    origin: 'left',
    distance: '80px',
    duration: 2000,
    delay: 50
});
ScrollReveal().reveal('.home-content p .service-card .service', {
    origin: 'right',
    distance: '80px',
    duration: 2000,
    delay: 50
});

ScrollReveal().reveal('.skill-container .skill-left, .skill-container .skill-right', {
    origin: 'bottom',
    distance: '80px',
    duration: 2000,
    delay: 50
});

ScrollReveal().reveal('.project-container .project', {
    origin: 'bottom',
    distance: '80px',
    duration: 2000,
    delay: 50
});

ScrollReveal().reveal('.abt-content p', {
    origin: 'bottom',
    distance: '20px',
    duration: 2000,
    delay: 50
});

// typed js
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'FullStack Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});



// Example of how to dynamically set radial bar progress for each radial bar
function updateRadialProgress(percentage) {
    const progressBar = document.querySelectorAll('.radial-bar .progress-bar');
    const totalLength = 502; // Total length for the circle (circumference)

    progressBar.forEach((bar, index) => {
        const percentageValue = percentage[index]; // Dynamic percentage
        const offset = totalLength - (totalLength * (percentageValue / 100)); // Calculate dash offset based on percentage
        bar.style.strokeDashoffset = offset; // Apply the stroke-dashoffset
    });
}

// Example call to update progress for each skill
updateRadialProgress([85, 70, 80, 75]); // Pass an array of percentages for each skill
