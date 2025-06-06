const menu = document.querySelector('.fa-bars');
const nav = document.querySelector('.nav');

menu.addEventListener('click', () => {
    if (nav.style.left !== '0px') {
        nav.style.left = '0';
        menu.classList.add('fa-close');
        menu.classList.remove('fa-bars');
        document.body.style.overflow = 'hidden';
    } else {
        nav.style.left = '480px';
        menu.classList.add('fa-bars');
        menu.classList.remove('fa-close');
        document.body.style.overflow = 'auto';
    }
});

const navLinks = document.querySelectorAll('.navlink');

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        nav.style.left = '480px';
        menu.classList.add('fa-bars');
        menu.classList.remove('fa-close');
        document.body.style.overflow = 'auto';
    });
});
   
