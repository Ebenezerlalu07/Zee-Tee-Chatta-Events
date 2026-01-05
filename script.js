document.addEventListener("DOMContentLoaded", () => {

    // Load Navbar
    fetch("/components/navbar.html")
        .then(res => res.text())
        .then(html => {
            document.getElementById("navbar").innerHTML = html;

            // AFTER navbar is loaded → attach events
            initNavbar();
        });

    // Load Footer (optional)
    fetch("/components/footer.html")
        .then(res => res.text())
        .then(html => {
            document.getElementById("footer").innerHTML = html;
        });

    // Navbar logic
    function initNavbar() {
        const hamburger = document.getElementById("hamburgerBtn");
        const nav = document.getElementById("desktopNav");

        if (!hamburger || !nav) return;

        let open = false;

        hamburger.addEventListener("click", () => {
            open = !open;

            if (open) {
                nav.classList.add(
                    "opacity-0",
                    "translate-x-8",
                    "pointer-events-none"
                );
            } else {
                nav.classList.remove(
                    "opacity-0",
                    "translate-x-8",
                    "pointer-events-none"
                );
            }
        });
    }

});
