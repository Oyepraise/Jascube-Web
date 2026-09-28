/* =========================================================
   JASCUBE TECHNOLOGY
   MAIN JAVASCRIPT
========================================================= */


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("show");

        // Change menu icon
        if (navMenu.classList.contains("show")) {
            menuToggle.textContent = "✕";
        } else {
            menuToggle.textContent = "☰";
        }

    });

}


/* =========================================================
   MOBILE DROPDOWNS
========================================================= */

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {

    const button = dropdown.querySelector(".dropdown-btn");

    if (!button) return;

    button.addEventListener("click", (event) => {

        // Prevent the click from doing anything unexpected
        event.stopPropagation();

        // On mobile, toggle the dropdown
        if (window.innerWidth <= 760) {

            dropdown.classList.toggle("open");

        }

    });

});


/* =========================================================
   CLOSE MOBILE MENU WHEN A LINK IS CLICKED
========================================================= */

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        if (window.innerWidth <= 760) {

            navMenu.classList.remove("show");

            if (menuToggle) {
                menuToggle.textContent = "☰";
            }

        }

    });

});


/* =========================================================
   CLOSE MENU WHEN CLICKING OUTSIDE
========================================================= */

document.addEventListener("click", (event) => {

    if (
        navMenu &&
        menuToggle &&
        !navMenu.contains(event.target) &&
        !menuToggle.contains(event.target)
    ) {

        navMenu.classList.remove("show");

        menuToggle.textContent = "☰";

        dropdowns.forEach((dropdown) => {
            dropdown.classList.remove("open");
        });

    }

});


/* =========================================================
   RESET MOBILE MENU WHEN SCREEN BECOMES DESKTOP
========================================================= */

window.addEventListener("resize", () => {

    if (window.innerWidth > 760) {

        navMenu.classList.remove("show");

        if (menuToggle) {
            menuToggle.textContent = "☰";
        }

        dropdowns.forEach((dropdown) => {
            dropdown.classList.remove("open");
        });

    }

});