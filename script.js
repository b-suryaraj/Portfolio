
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-xmark');
    navbar.classList.remove('active');

    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150; 
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document
                    .querySelector('header nav a[href="#' + id + '"]')
                    .classList.add('active');
            });
        }
    });
};

window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const homeSection = document.querySelector('#home'); 

    if (!homeSection) return;

    const homeTop = homeSection.getBoundingClientRect().top;

    if (homeTop < -100) {
        header.classList.add('floating');
    } else {
        header.classList.remove('floating');
    }
});

const typed = new Typed('.multiple-text', {
    strings: ['Android Developer', 'Flutter Developer', 'UI/UX Designer', 'Graphic Designer'],
    typeSpeed: 40,
    backSpeed: 40,
    backDelay: 1200,
    loop: true
});
