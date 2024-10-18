
////////////////////mobile menu setup
document.getElementById("hamburger").addEventListener("click", function() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
});

//////////////////////////////data-num
// Select the .about-title div
const aboutTitle = document.querySelector('.about-title');

// Get the value of data-num
const number = aboutTitle.dataset.num;

// Display the number in the span with class "display-num"
// const displayNum = document.querySelector('.display-num');
// displayNum.textContent = number;



////////////////////////////////// highlight active menu item on scroll
// Select all menu links
const menuLinks = document.querySelectorAll('.menu-link');

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
