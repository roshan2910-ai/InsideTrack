
/* ==========================================
   INSIDE TRACK
   DIGITAL JOURNALISM MUSEUM
   JavaScript Functionality
========================================== */


/* ==========================================
   01. ARCHIVE SEARCH
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("archive-search");

    const archiveCards = document.querySelectorAll(".archive-card");

    if (searchInput) {

        searchInput.addEventListener("input", function () {

            const searchValue = this.value.toLowerCase().trim();

            let visibleCount = 0;

            archiveCards.forEach(function (card) {

                const cardContent = card.textContent.toLowerCase();

                const matches = cardContent.includes(searchValue);

                card.style.display = matches ? "" : "none";

                if (matches) {
                    visibleCount++;
                }

            });

            updateNoResults(visibleCount);

        });

    }


    /* ==========================================
       02. NO SEARCH RESULTS MESSAGE
    ========================================== */

    function updateNoResults(count) {

        let message = document.getElementById("no-results");

        if (!message) {

            message = document.createElement("p");

            message.id = "no-results";

            message.className = "no-results";

            message.textContent = "No matching reports found.";

            const archiveGrid = document.querySelector(".archive-grid");

            if (archiveGrid) {
                archiveGrid.after(message);
            }

        }

        message.hidden = count !== 0;

    }


    /* ==========================================
       03. CURRENT YEAR IN FOOTER
    ========================================== */

    const footerCopyright = document.querySelector(".footer-bottom p");

    if (footerCopyright) {

        footerCopyright.textContent =
            `© ${new Date().getFullYear()} INSIDE TRACK. All Rights Reserved.`;

    }


    /* ==========================================
       04. ACTIVE NAVIGATION
    ========================================== */

    const navigationLinks = document.querySelectorAll(
        ".main-navigation a"
    );

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navigationLinks.forEach(function (item) {
                item.classList.remove("active");
            });

            this.classList.add("active");

        });

    });


    /* ==========================================
       05. SCROLL TO TOP
    ========================================== */

    const backToTop = document.createElement("button");

    backToTop.id = "back-to-top";

    backToTop.innerHTML = "↑";

    backToTop.setAttribute("aria-label", "Back to top");

    backToTop.type = "button";

    document.body.appendChild(backToTop);


    window.addEventListener("scroll", function () {

        if (window.scrollY > 400) {

            backToTop.classList.add("visible");

        } else {

            backToTop.classList.remove("visible");

        }

    });


    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    /* ==========================================
       06. IMAGE LOADING FALLBACK
    ========================================== */

    document.querySelectorAll("img").forEach(function (image) {

        image.addEventListener("error", function () {

            this.style.backgroundColor = "#D9D9D9";

            this.alt = "Image currently unavailable";

        });

    });


    /* ==========================================
       07. CONSOLE INFORMATION
    ========================================== */

    console.log(
        "INSIDE TRACK | Digital Journalism Museum Loaded Successfully"
    );

});
