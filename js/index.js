let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    const scrollers = document.querySelectorAll('.scroller');

    if (!window.matchMedia("(prefers-reduced-motion:reduce)").matches) {
        addAnimation();
    }

    function addAnimation() {
        scrollers.forEach((scroller) => {
            scroller.setAttribute("data-animated", true);
            scroller.classList.add("animated"); // Add a class to trigger animation
            const scrollerInner = scroller.querySelector('.inner-scroller');
            const scrollerContent = Array.from(scrollerInner.children);

            scrollerContent.forEach(item => {
                const duplicatedItem = item.cloneNode(true);
                duplicatedItem.setAttribute("aria-hidden", true);
                scrollerInner.appendChild(duplicatedItem);
            });

            // Reset animation by removing and re-adding the 'animated' class
            scroller.classList.remove("animated");
            setTimeout(() => {
                scroller.classList.add("animated");
            }, 10); // Adding a small delay to ensure proper reset
        });
    }
});

// JavaScript
document.addEventListener("DOMContentLoaded", function() {
    var readMoreBtn = document.getElementById("readMoreBtn");
    var hiddenText = document.querySelectorAll(".hiddenText");

    readMoreBtn.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default action of anchor element
        hiddenText.forEach(text => {
            if (text.style.display === "none") {
                text.style.display = "block";
            } else {
                text.style.display = "none";
            }
        });
        readMoreBtn.textContent = readMoreBtn.textContent === "Read more" ? "Read less" : "Read more";
    });
});



menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            });

            sec.classList.add('show-animate');
        }
        else {
            sec.classList.remove('show-animate');

        }
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100)

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

}

window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealTop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');

        }
    }
}