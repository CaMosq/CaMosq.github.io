
////////////////////mobile menu setup
// document.getElementById("hamburger").addEventListener("click", function() {
//     const menu = document.getElementById("menu");
//     menu.classList.toggle("active");
// });

//////////////////////////////data-num
// Select the .about-title div
const aboutTitle = document.querySelector('.about-title');

// Get the value of data-num
const number = aboutTitle.dataset.num;




////////////////////////////////// highlight active menu item on scroll
// Select all menu links
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const menuLinks = document.querySelectorAll('.menu-link');

// Toggle menu open/close when hamburger is clicked
hamburger.addEventListener('click', () => {
    menu.classList.toggle('open');
});

// Close menu when a link is clicked (on mobile)
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (menu.classList.contains('open')) {
            menu.classList.remove('open');
        }
    });
});

// Function to highlight active link based on scroll position
window.addEventListener('scroll', () => {
    let fromTop = window.scrollY + 50; // Add offset to adjust when it becomes active

    menuLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));

        // Debugging: log section and its position
        // console.log(section.id, section.offsetTop, section.offsetHeight);

        if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
            // Add 'active' class to the current section link
            link.classList.add('active');
        } else {
            // Remove 'active' class from non-current section links
            link.classList.remove('active');
        }
    });
});

///////////////////////////////////// close mobile menu automatically after clicking a menu link
