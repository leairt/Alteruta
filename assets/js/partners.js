document.addEventListener("DOMContentLoaded", () => {
    const lang = localStorage.getItem("lang") || "sr"

    if (lang === "en") {
        document.getElementById("title").textContent = "Alteruta | Our Partners"
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
        document.getElementById("main-title").textContent = "Our Partners"
        document.getElementById("booking-title").textContent = "Booking"
        document.getElementById("booking-p1").textContent = "Global accommodation platform with a vast selection of hotels and apartments."
        document.getElementById("booking-p2").textContent = "Enables flexible cancellations and transparent traveler reviews."
        document.getElementById("booking-p3").textContent = "Through our partnership, we offer better rates and secure booking."
        document.getElementById("yuta-title").textContent = "YUTA"
        document.getElementById("yuta-p1").textContent = "The umbrella organization of travel agencies in Serbia."
        document.getElementById("yuta-p2").textContent = "It standardizes services and protects travelers’ rights."
        document.getElementById("yuta-p3").textContent = "Our membership guarantees safety and professionalism."
        document.getElementById("airserbia-title").textContent = "Air Serbia"
        document.getElementById("airserbia-p1").textContent = "The national airline with an extensive route network."
        document.getElementById("airserbia-p2").textContent = "Reliable departures and comfortable travel to key destinations."
        document.getElementById("airserbia-p3").textContent = "Together we provide competitive fares and convenient connections."
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
