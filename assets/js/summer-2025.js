document.addEventListener("DOMContentLoaded", () => {
    const lang = localStorage.getItem("lang") || "sr"

    if (lang === "en") {
        document.getElementById("title").textContent = "Alteruta | Summer 2025"
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
        document.getElementById("main-title").textContent = "Summer 2025"
        document.getElementById("dolomites-badge").textContent = "New"
        document.getElementById("dolomites-price").textContent = "Price from 640€"
        document.getElementById("dolomites-title").textContent = "Dolomites"
        document.getElementById("dolomites-duration-txt").textContent = "9 days"
        document.getElementById("dolomites-group-txt").textContent = "5 travelers"
        document.getElementById("dolomites-desc").textContent = "Spectacular Alpine landscapes—perfect for hiking, skiing, and nature escapes."
        document.getElementById("dolomites-book").textContent = "Book now"
        document.getElementById("iceland-price").textContent = "Price from 730€"
        document.getElementById("iceland-title").textContent = "Iceland"
        document.getElementById("iceland-duration-txt").textContent = "10 days"
        document.getElementById("iceland-group-txt").textContent = "8 travelers"
        document.getElementById("iceland-desc").textContent = "Land of volcanoes, glaciers, and geysers—unforgettable outdoor adventures."
        document.getElementById("iceland-book").textContent = "Book now"
        document.getElementById("malta-badge").textContent = "Most visited"
        document.getElementById("malta-price").textContent = "Price from 460€"
        document.getElementById("malta-title").textContent = "Malta"
        document.getElementById("malta-duration-txt").textContent = "7 days"
        document.getElementById("malta-group-txt").textContent = "16 travelers"
        document.getElementById("malta-desc").textContent = "A sunny island nation—rich history, turquoise sea, and picture-perfect towns."
        document.getElementById("malta-book").textContent = "Book now"
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
