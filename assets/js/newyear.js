document.addEventListener("DOMContentLoaded", () => {
    const lang = localStorage.getItem("lang") || "sr"

    if (lang === "en") {
        document.getElementById("title").textContent = "Alteruta | New Year 2026"
        document.getElementById("menu-home").textContent = "Home"
        document.getElementById("menu-gallery").textContent = "Gallery"
        document.getElementById("menu-trips").textContent = "Trips"
        document.getElementById("menu-europe").textContent = "Europe"
        document.getElementById("menu-summer").textContent = "Summer 2025"
        document.getElementById("menu-winter").textContent = "Winter 2025"
        document.getElementById("menu-profile").textContent = "My Profile"
        document.getElementById("menu-about").textContent = "About Us"
        document.getElementById("menu-lang").textContent = "Language"
        document.getElementById("menu-partners").textContent = "Our Partners"
        document.getElementById("menu-newyear").textContent = "New Year 2026"
        document.getElementById("menu-contact").textContent = "Contact"
        document.getElementById("main-title").textContent = "New Year 2026"
        document.getElementById("krakow-badge").textContent = "New"
        document.getElementById("krakow-price").textContent = "Price from 500€"
        document.getElementById("krakow-title").textContent = "Krakow"
        document.getElementById("krakow-duration-txt").textContent = "5 days"
        document.getElementById("krakow-group-txt").textContent = "30 travelers"
        document.getElementById("krakow-desc").textContent = "Medieval charm, lively squares and an unforgettable New Year’s vibe."
        document.getElementById("krakow-book").textContent = "Book now"
        document.getElementById("paris-badge").textContent = "Most visited"
        document.getElementById("paris-price").textContent = "Price from 570€"
        document.getElementById("paris-title").textContent = "Paris"
        document.getElementById("paris-duration-txt").textContent = "5 days"
        document.getElementById("paris-group-txt").textContent = "45 travelers"
        document.getElementById("paris-desc").textContent = "City lights, champagne and a countdown by the Eiffel Tower."
        document.getElementById("paris-book").textContent = "Book now"
        document.getElementById("city").textContent = "11000 Belgrade"
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