document.addEventListener("DOMContentLoaded", () => {
    const lang = localStorage.getItem("lang") || "sr"

    if (lang === "en") {
        document.getElementById("title").textContent = "Alteruta | Winter 2025"
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
        document.getElementById("main-title").textContent = "Winter 2025"
        document.getElementById("cambodia-badge").textContent = "New"
        document.getElementById("cambodia-price").textContent = "Price from 1590€"
        document.getElementById("cambodia-title").textContent = "Cambodia"
        document.getElementById("cambodia-duration-txt").textContent = "23 days"
        document.getElementById("cambodia-group-txt").textContent = "12 travelers"
        document.getElementById("cambodia-desc").textContent = "An exotic land of ancient temples, tropical nature and rich Southeast Asian culture."
        document.getElementById("cambodia-book").textContent = "Book now"
        document.getElementById("morocco-price").textContent = "Price from 690€"
        document.getElementById("morocco-title").textContent = "Morocco"
        document.getElementById("morocco-duration-txt").textContent = "14 days"
        document.getElementById("morocco-group-txt").textContent = "50 travelers"
        document.getElementById("morocco-desc").textContent = "Oriental bazaars, Saharan dunes and colorful cities make Morocco unforgettable."
        document.getElementById("morocco-book").textContent = "Book now"
        document.getElementById("seville-badge").textContent = "Most visited"
        document.getElementById("seville-price").textContent = "Price from 570€"
        document.getElementById("seville-title").textContent = "Seville"
        document.getElementById("seville-duration-txt").textContent = "5 days"
        document.getElementById("seville-group-txt").textContent = "10 travelers"
        document.getElementById("seville-desc").textContent = "The heart of Andalusia—flamenco, grand history and lively sunlit squares."
        document.getElementById("seville-book").textContent = "Book now"
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