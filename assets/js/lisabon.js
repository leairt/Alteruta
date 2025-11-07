document.addEventListener("DOMContentLoaded", () => {
    const lang = localStorage.getItem("lang") || "sr"

    if (lang === "en") {
        document.getElementById("title").textContent = "Alteruta | Lisabon"
        document.getElementById("menu-home").textContent = "Home"
        document.getElementById("menu-gallery").textContent = "Gallery"
        document.getElementById("menu-trips").textContent = "Trips"
        document.getElementById("menu-europe").textContent = "Europe"
        document.getElementById("menu-summer").textContent = "Summer 2025"
        document.getElementById("menu-winter").textContent = "Winter 2025"
        document.getElementById("menu-newyear").textContent = "New Year 2026"
        document.getElementById("menu-profile").textContent = "My Profile"
        document.getElementById("menu-about").textContent = "About Us"
        document.getElementById("menu-contact").textContent = "Contact"
        document.getElementById("menu-partners").textContent = "Our Partners"
        document.getElementById("menu-lang").textContent = "Language"
        document.getElementById("main-title").textContent = "Lisabon"
        document.getElementById("hero-duration").textContent = "5 days"
        document.getElementById("hero-destination").textContent = "Portugal"
        document.getElementById("hero-tagline").textContent =
            "A city of seven hills that enchants with colorful trams, fado music, and sweeping views of the Atlantic."
        document.getElementById("hero-cta").textContent = "Check availability"
        document.getElementById("what-awaits-title").textContent = "What awaits you in Lisbon?"
        document.getElementById("what-awaits-p1").textContent =
            "Lisbon is a city of colors, smells and music. Stroll through picturesque Alfama and bohemian Bairro Alto, accompanied by blue azulejos, the smell of fresh pastéis de nata and the melodious sounds of fado from small taverns. Board the legendary tram 28, discover magical viewpoints like Santa Lucia and experience an unforgettable sunset over the Tagus River."
        document.getElementById("what-awaits-p2").textContent =
            "In the Belém district, a fusion of history and seafaring awaits you: the Belém Tower, the magnificent Jerónimos Monastery, the Padrão dos Descobrimentos monument and the panoramic view of the April 25 Bridge. And just an hour from the center is the fairy-tale town of Sinta, with its castles and dreamlike gardens – a perfect end-of-trip excursion."
        document.getElementById("included-title").innerText = "What’s included?"
        document.getElementById("inc-flights").innerText = "Round-trip flight (Belgrade – Lisabon – Belgrade)"
        document.getElementById("inc-hotel").innerText = "4 nights in a 4★ hotel (double rooms)"
        document.getElementById("inc-breakfast").innerText = "Daily breakfast"
        document.getElementById("inc-transfers").innerText = "Airport ↔ hotel Luciano transfers"
        document.getElementById("inc-citytour28").innerText = "Panoramic city tour + Tram 28 ride"
        document.getElementById("inc-jeronimos").innerText = "Jerónimos Monastery ticket (basic package)"
        document.getElementById("inc-support").innerText = "24/7 support in Serbian"
        document.getElementById("excluded-title").innerText = "What’s not included?"
        document.getElementById("ex-citytax").innerText = "City tax (payable at the hotel)"
        document.getElementById("ex-meals").innerText = "Lunches and dinners (unless specified otherwise)"
        document.getElementById("ex-personal").innerText = "Personal expenses and souvenirs"
        document.getElementById("ex-insurance").innerText = "Travel insurance (recommended)"
        document.getElementById("ex-tips").innerText = "Tips for guides/drivers (optional)"
        document.getElementById("ex-optional").innerText = "Optional excursions (e.g., Sintra, Cascais)"
        document.getElementById("ex-alcohol").innerText = "Alcoholic beverages with meals / extra tastings"
        document.getElementById("ex-visa").innerText = "Visa (if required for your passport)"
        document.getElementById("ex-single").innerText = "Single room supplement"
        document.getElementById("prices-title").textContent = "Prices & Dates"
        document.getElementById("regular-price-title").textContent = "Regular price"
        document.getElementById("price-amount").textContent = "1000€"
        document.getElementById("price-perperson").textContent = "per person"
        document.getElementById("departures-title").textContent = "Departures 2025"
        document.getElementById("avail1").textContent = "Available"
        document.getElementById("avail2").textContent = "Available"
        document.getElementById("booking-title").textContent = "Book this tour"
        document.getElementById("travel-date-label").textContent = "Preferred travel date"
        document.getElementById("travelers-label").textContent = "Number of travelers"
        document.getElementById("booking-submit").textContent = "Book now"
        document.getElementById("gallery-title").textContent = "Gallery"
        document.getElementById("city").textContent = "11000 Belgrade"
        document.getElementById("phone").textContent = "Phone:"
        document.getElementById("email-label").textContent = "Email:"
        document.getElementById("social").textContent = "Follow us on social media!"
    }
})

function setLanguage(lang) {
    localStorage.setItem("lang", lang)
    location.reload()
}
