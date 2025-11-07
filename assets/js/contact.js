document.addEventListener("DOMContentLoaded", () => {
    const lang = localStorage.getItem("lang") || "sr"

    if (lang === "en") {
        document.getElementById("title").textContent = "Alteruta | Contact"
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
        document.getElementById("main-title").textContent = "Contact"
        document.getElementById("addr-title").textContent = "You can find us at"
        document.getElementById("addr-text").textContent = "Bulevar kralja Aleksandra 73, 11000 Belgrade"
        document.getElementById("email-title").textContent = "Email"
        document.getElementById("email-text").textContent = "alteruta@gmail.com"
        document.getElementById("hours-title").textContent = "Working Hours"
        document.getElementById("hours-monfri").textContent = "Monday – Friday: 08:00 – 20:00"
        document.getElementById("hours-sat").textContent = "Saturday: 08:00 – 16:00"
        document.getElementById("hours-sun").textContent = "Sunday: closed"
        document.getElementById("form-title").textContent = "Have a question?"
        document.getElementById("form-name").placeholder = "Name"
        document.getElementById("form-subject").placeholder = "Subject"
        document.getElementById("form-message").placeholder = "Message"
        document.getElementById("submit-btn").textContent = "SEND MESSAGE"
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
