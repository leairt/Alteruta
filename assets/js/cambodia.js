document.addEventListener("DOMContentLoaded", () => {
    const lang = localStorage.getItem("lang") || "sr";
    if (lang === "en") {
        document.getElementById("title").textContent = "Alteruta | Cambodia";
        document.getElementById("menu-home").textContent = "Home";
        document.getElementById("menu-gallery").textContent = "Gallery";
        document.getElementById("menu-trips").textContent = "Trips";
        document.getElementById("menu-europe").textContent = "Europe";
        document.getElementById("menu-summer").textContent = "Summer 2025";
        document.getElementById("menu-winter").textContent = "Winter 2025";
        document.getElementById("menu-newyear").textContent = "New Year 2026";
        document.getElementById("menu-profile").textContent = "My Profile";
        document.getElementById("menu-about").textContent = "About Us";
        document.getElementById("menu-contact").textContent = "Contact";
        document.getElementById("menu-partners").textContent = "Our Partners";
        document.getElementById("menu-lang").textContent = "Language";
        document.getElementById("main-title").textContent = "Cambodia";
        document.getElementById("hero-duration").textContent = "23 days";
        document.getElementById("hero-destination").textContent = "Cambodia";
        document.getElementById("hero-tagline").textContent = "Angkor Wat’s jungle-wrapped temples, Tonlé Sap’s floating villages, vibrant Phnom Penh, and Koh Rong’s tropical beaches.";
        document.getElementById("hero-cta").textContent = "Check availability";
        document.getElementById("what-awaits-title").textContent = "What awaits you in Cambodia?";
        document.getElementById("what-awaits-p1").textContent = "Siem Reap reveals the wonder of Angkor: the magnificent sunrise over Angkor Wat, the mystical Bayon with hundreds of stone smiles and the famous Ta Prom, which have been guarding the roots of giant trees for centuries. On the Tonle Sap lake, a boat ride through floating villages and an authentic insight into life on the water awaits you.";
        document.getElementById("what-awaits-p2").textContent = "In the capital, Phnom Penh, you will visit the Royal Palace and the Silver Pagoda, walk along the river and try the best street-food specialties. For complete relaxation there are the white sandy beaches of Koh Rong and Koh Rong Samloem islands.";
        document.getElementById("included-title").innerText = "What’s included?";
        document.getElementById("inc-flights").innerText = "Round-trip flight (Belgrade – Cambodia – Belgrade)";
        document.getElementById("inc-hotel").innerText = "22 nights in 3–4★ hotels (double rooms)";
        document.getElementById("inc-breakfast").innerText = "Daily breakfast";
        document.getElementById("inc-transfers").innerText = "Airport ↔ hotel Marriott transfers";
        document.getElementById("inc-angkor").innerText = "Angkor complex ticket and guided tour (basic package)";
        document.getElementById("inc-tonlesap").innerText = "Boat trip on Tonlé Sap to floating villages";
        document.getElementById("inc-support").innerText = "24/7 support in Serbian";
        document.getElementById("excluded-title").innerText = "What’s not included?";
        document.getElementById("ex-citytax").innerText = "Local/eco taxes (payable at the accommodation)";
        document.getElementById("ex-meals").innerText = "Lunches and dinners (unless specified otherwise)";
        document.getElementById("ex-personal").innerText = "Personal expenses and souvenirs";
        document.getElementById("ex-insurance").innerText = "Travel insurance (recommended)";
        document.getElementById("ex-tips").innerText = "Tips for guides/drivers (optional)";
        document.getElementById("ex-optional").innerText = "Optional excursions (Koh Rong, Bokor, Battambang, Apsara show)";
        document.getElementById("ex-alcohol").innerText = "Alcoholic beverages and extra tastings";
        document.getElementById("ex-visa").innerText = "Visa/e-visa (if required for your passport)";
        document.getElementById("ex-single").innerText = "Single room supplement";
        document.getElementById("prices-title").textContent = "Prices & Dates";
        document.getElementById("regular-price-title").textContent = "Regular price";
        document.getElementById("price-amount").textContent = "€1590";
        document.getElementById("price-perperson").textContent = "per person";
        document.getElementById("departures-title").textContent = "Departures 2025";
        document.getElementById("avail1").textContent = "Available";
        document.getElementById("avail2").textContent = "Available";
        document.getElementById("booking-title").textContent = "Book this tour";
        document.getElementById("travel-date-label").textContent = "Preferred travel date";
        document.getElementById("travelers-label").textContent = "Number of travelers";
        document.getElementById("booking-submit").textContent = "Book now";
        document.getElementById("gallery-title").textContent = "Gallery";
        document.getElementById("city").textContent = "11000 Belgrade";
        document.getElementById("phone").textContent = "Phone:";
        document.getElementById("email-label").textContent = "Email:";
        document.getElementById("social").textContent = "Follow us on social media!";
    }
});

function setLanguage(lang) {
    localStorage.setItem("lang", lang);
    location.reload();
}
