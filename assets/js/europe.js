document.addEventListener("DOMContentLoaded", () => {
    const lang = localStorage.getItem("lang") || "sr"

    if (lang === "en") {
        document.getElementById("title").textContent = "Alteruta | Europe"
        document.getElementById("menu-home").textContent = "Home"
        document.getElementById("menu-gallery").textContent = "Gallery"
        document.getElementById("menu-trips").textContent = "Trips"
        document.getElementById("menu-europe").textContent = "Europe"
        document.getElementById("menu-summer").textContent = "Summer 2025"
        document.getElementById("menu-winter").textContent = "Winter 2025"
        document.getElementById("menu-newyear").textContent = "New Year 20202625"
        document.getElementById("menu-profile").textContent = "My Profile"
        document.getElementById("menu-about").textContent = "About Us"
        document.getElementById("menu-contact").textContent = "Contact"
        document.getElementById("menu-partners").textContent = "Our Partners"
        document.getElementById("menu-lang").textContent = "Language"
        document.getElementById("main-title").textContent = "Europe"
        document.getElementById("barcelona-badge").textContent = "New"
        document.getElementById("barcelona-price").textContent = "Price from 600€"
        document.getElementById("barcelona-title").textContent = "Barcelona"
        document.getElementById("barcelona-duration").textContent = "5 days"
        document.getElementById("barcelona-group").textContent = "20 travelers"
        document.getElementById("barcelona-desc").textContent =
            "A Mediterranean city where Gaudí’s imagination, lively streets, and sandy beaches move in the same rhythm."
        document.getElementById("barcelona-book").textContent = "Book now"
        document.getElementById("lisabon-price").textContent = "Price from 1000€"
        document.getElementById("lisabon-title").textContent = "Lisabon"
        document.getElementById("lisabon-duration").textContent = "5 days"
        document.getElementById("lisabon-group").textContent = "30 travelers"
        document.getElementById("lisabon-desc").textContent =
            "A city of seven hills that charms with colorful trams, fado music, and sweeping views of the Atlantic."
        document.getElementById("lisabon-book").textContent = "Book now"
        document.getElementById("london-price").textContent = "Price from 850€"
        document.getElementById("london-title").textContent = "London"
        document.getElementById("london-duration").textContent = "5 days"
        document.getElementById("london-group").textContent = "10 travelers"
        document.getElementById("london-desc").textContent =
            "A vibrant city on the Thames blending royal tradition, modern skyscrapers, and the pulse of a global metropolis."
        document.getElementById("london-book").textContent = "Book now"
        document.getElementById("phone").textContent = "Phone:"
        document.getElementById("email-label").textContent = "Email:"
        document.getElementById("social").textContent = "Follow us on social media!"
        document.getElementById("sort-asc").textContent = "Ascending price"
        document.getElementById("sort-desc").textContent = "Descending price"
        document.getElementById("search-input").placeholder = "Search destination"

    }
})

function setLanguage(lang) {
    localStorage.setItem("lang", lang)
    location.reload()
}


document.addEventListener('DOMContentLoaded', function () {
    const grid = document.querySelector('#featured-tours .row');
    if (!grid) return;

    function getCards() {
        return Array.from(grid.children);
    }

    function parsePrice(title) {
        let price = title.querySelector('.tour-price').textContent;
        price = price.match(/(\d+)(?=\s*€)/);
        return parseInt(price[1]);
    }
    function sortByPrice(dir = 'asc') {
        const items = getCards();
        items.sort((a, b) => {
            const pa = parsePrice(a), pb = parsePrice(b);
            return dir === 'asc' ? pa - pb : pb - pa;
        });
        items.forEach(it => grid.appendChild(it));
    }

    const asc = document.getElementById('sort-asc');
    const desc = document.getElementById('sort-desc');
    asc && asc.addEventListener('click', () => { sortByPrice('asc'); });
    desc && desc.addEventListener('click', () => { sortByPrice('desc'); });
});