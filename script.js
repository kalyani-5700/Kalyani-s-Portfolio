// Project Filtering Logic
document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectItems = document.querySelectorAll(".project-item");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const category = button.dataset.filter;
            projectItems.forEach(item => {
                if (category === "all" || item.classList.contains(category)) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });
});

// Testimonials Auto-Slider
let index = 0;
const testimonials = document.querySelectorAll(".testimonial");

function showTestimonial() {
    testimonials.forEach(t => t.style.display = "none");
    testimonials[index].style.display = "block";
    index = (index + 1) % testimonials.length;
}

if (testimonials.length > 0) {
    showTestimonial(); // Show the first testimonial
    setInterval(showTestimonial, 5000); // Change every 5 seconds
}


document.addEventListener("DOMContentLoaded", function () {
    function updateGreeting() {
        let greeting;
        const hour = new Date().getHours(); // Get the current hour (0-23)

        if (hour < 12) {
            greeting = "Good Morning! ☀️";
        } else if (hour < 18) {
            greeting = "Good Afternoon! 🌤️";
        } else {
            greeting = "Good Evening! 🌙";
        }

        // Check if element exists before modifying it
        const greetingElement = document.getElementById("greeting");
        if (greetingElement) {
            greetingElement.textContent = greeting;
        } else {
            console.error("Greeting element not found!");
        }
    }

    updateGreeting(); // Call function on page load
});

window.addEventListener("error", function () {
    window.location.href = "/404.html";
});

const menubar = document.querySelector('#menu');
const Navbar = document.querySelector('.navbar');
menubar.onclick = () => {
    menubar.classList.toggle('bx-x');
    Navbar.classList.toggle('active')
}
const section = document.querySelectorAll('section');
const navlink = document.querySelectorAll('header nav a')
window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')
        if (top > offset && top < offset + height) {
            sec.classList.add('start-animation');
            navlink.forEach(links => {
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')

            })
        }
    })

    var header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100)
    menubar.classList.remove('bx-x');
    Navbar.classList.remove('active')
}


const filterSelect = document.getElementById('filterSelect');
const projectItems = document.querySelectorAll('.project-item');

filterSelect.addEventListener('change', function () {
    const filterValue = this.value;

    projectItems.forEach(item => {
        if (filterValue === 'all') {
            item.style.display = 'block';
        } else {
            if (item.classList.contains(filterValue)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        }
    });
});
