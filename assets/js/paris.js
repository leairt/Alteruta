document.addEventListener("DOMContentLoaded", () => {
    const lang = localStorage.getItem("lang") || "sr"
    if (lang == "en") {
        document.getElementById("title").textContent = "Alteruta | Paris"
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
        document.getElementById("main-title").textContent = "Paris"
        document.getElementById("hero-duration").textContent = "5 days"
        document.getElementById("hero-destination").textContent = "France"
        document.getElementById("hero-tagline").textContent =
            "City of Light—Eiffel Tower, the Louvre, Montmartre, and a dreamy Seine cruise."
        document.getElementById("hero-cta").textContent = "Check availability"
        document.getElementById("what-awaits-title").textContent = "What awaits you in Paris?"
        document.getElementById("what-awaits-p1").textContent =
            "Paris is a city that never ceases to inspire. Discover the Trocadero and the Eiffel Tower, stroll down the Champs Elysées to the magnificent Arc de Triomphe and visit the Place de la Concorde with the glass pyramid of the Louvre. Notre Dame and the charming Latin Quarter await you on the island of Cité, and the ascent to Montmartre leads to the Church of Sacre Coeur and the picturesque Square of Artists - Tertes."
        document.getElementById("what-awaits-p2").textContent =
            "If you wish, you can visit the luxurious Versailles with the Grand Palace and Gardens, enjoy Disneyland Paris, discover works of art in the Musée d'Orsay or experience the magic of an evening cruise on the Seine while the Eiffel Tower shines in the lights. And in free moments - croissants, macarons and shopping in the glamorous Boulevard Osman make the Parisian experience complete."
        document.getElementById("included-title").innerText = "What’s included?"
        document.getElementById("inc-flights").innerText = "Round-trip flight (Belgrade – Paris – Belgrade)"
        document.getElementById("inc-hotel").innerText = "4 nights in a 4★ hotel (double rooms)"
        document.getElementById("inc-breakfast").innerText = "Daily breakfast"
        document.getElementById("inc-transfers").innerText = "Airport ↔ hotel Belle transfers"
        document.getElementById("inc-citytour").innerText =
            "Panoramic Paris tour (Trocadéro – Champs-Élysées – Arc de Triomphe – Latin Quarter)"
        document.getElementById("inc-seine").innerText = "Seine river cruise (basic package)"
        document.getElementById("inc-support").innerText = "24/7 support in Serbian"
        document.getElementById("excluded-title").innerText = "What’s not included?"
        document.getElementById("ex-citytax").innerText = "City/tourist taxes (payable at the accommodation)"
        document.getElementById("ex-meals").innerText = "Lunches and dinners (unless specified otherwise)"
        document.getElementById("ex-personal").innerText = "Personal expenses and souvenirs"
        document.getElementById("ex-insurance").innerText = "Travel insurance (recommended)"
        document.getElementById("ex-tips").innerText = "Tips for guides/drivers (optional)"
        document.getElementById("ex-optional").innerText =
            "Optional excursions (Versailles, Disneyland, Musée d’Orsay)"
        document.getElementById("ex-transport").innerText =
            "Public transport tickets and zones beyond the program"
        document.getElementById("ex-visa").innerText = "Visa (if required for your passport)"
        document.getElementById("ex-single").innerText = "Single room supplement"
        document.getElementById("prices-title").textContent = "Prices & Dates"
        document.getElementById("regular-price-title").textContent = "Regular price"
        document.getElementById("price-amount").textContent = "570€"
        document.getElementById("price-perperson").textContent = "per person"
        document.getElementById("departures-title").textContent = "Departures 2025"
        document.getElementById("avail1").textContent = "Available"
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
