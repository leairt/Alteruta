document.addEventListener("DOMContentLoaded", () => {
    const lang = localStorage.getItem("lang") || "sr"

    if (lang === "en") {
        document.getElementById("title").textContent = "Alteruta | Barcelona"
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
        document.getElementById("main-title").textContent = "Barcelona"
        document.getElementById("hero-duration").textContent = "5 days"
        document.getElementById("hero-destination").textContent = "Spain"
        document.getElementById("hero-tagline").textContent =
            "A Mediterranean city where Gaudí’s imagination, lively streets, and sandy beaches move in the same rhythm."
        document.getElementById("hero-cta").textContent = "Check availability"
        document.getElementById("what-awaits-title").textContent = "What awaits you in Barcelona?"
        document.getElementById("what-awaits-p1").textContent =
            "Barcelona is a city that combines art, history and the rhythm of the Mediterranean. You will experience the avant-garde architecture of Antoni Gaudí, walk along wide avenues and enjoy the smell of the sea. You will walk down the famous La Rambla street, discover the colors and flavors of the Boqueria market and climb to Park Güell, from where you can see a view that will be remembered forever."
        document.getElementById("what-awaits-p2").textContent =
            "A walk in the Gothic Quarter takes you through hidden squares and medieval alleys, while the evenings bring the atmosphere of tapas bars, music and energy of the city that never sleeps. Sagrada Familia, Casa Batlló and the sandy beaches of Barceloneta - everything is within reach and waiting to become part of your adventure."
        document.getElementById("included-title").innerText = "What’s included?"
        document.getElementById("inc-flights").innerText = "Round-trip flight (Belgrade – Barcelona – Belgrade)"
        document.getElementById("inc-hotel").innerText = "4 nights in a 4★ hotel (double rooms)"
        document.getElementById("inc-breakfast").innerText = "Daily breakfast"
        document.getElementById("inc-transfers").innerText = "Airport ↔ hotel Sagrada transfers"
        document.getElementById("inc-citytour").innerText = "Panoramic city tour with a local guide"
        document.getElementById("inc-sagrada").innerText = "Sagrada Família ticket (basic package)"
        document.getElementById("inc-support").innerText = "24/7 support in Serbian"
        document.getElementById("excluded-title").innerText = "What’s not included?"
        document.getElementById("ex-citytax").innerText = "City tax (payable at the hotel)"
        document.getElementById("ex-meals").innerText = "Lunches and dinners (unless specified otherwise)"
        document.getElementById("ex-personal").innerText = "Personal expenses and souvenirs"
        document.getElementById("ex-insurance").innerText = "Travel insurance (recommended)"
        document.getElementById("ex-tips").innerText = "Tips for guides/drivers (optional)"
        document.getElementById("ex-optional").innerText = "Optional excursions and activities"
        document.getElementById("ex-alcohol").innerText = "Alcoholic beverages with meals"
        document.getElementById("ex-visa").innerText = "Visa (if required for your passport)"
        document.getElementById("ex-single").innerText = "Single room supplement"
        document.getElementById("prices-title").textContent = "Prices & Dates"
        document.getElementById("regular-price-title").textContent = "Regular price"
        document.getElementById("price-amount").textContent = "600€"
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