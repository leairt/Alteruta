document.addEventListener("DOMContentLoaded", () => {
    const lang = localStorage.getItem("lang") || "sr"

    if (lang === "en") {
        document.getElementById("title").textContent = "Alteruta | My Profile"
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
        const loc = document.getElementById("profile-location")
        if (loc) loc.textContent = "Belgrade, Serbia"
        const member = document.getElementById("member-since")
        if (member) member.textContent = "Member since: 12 March 2022."
        document.getElementById("basic-info-title").textContent = "Basic information"
        document.getElementById("label-fullname").textContent = "Full name"
        document.getElementById("label-dob").textContent = "Date of birth"
        document.getElementById("label-email").textContent = "Email"
        document.getElementById("label-phone").textContent = "Phone"
        document.getElementById("address-title").textContent = "Address"
        document.getElementById("label-street").textContent = "Street & number"
        document.getElementById("label-city-country").textContent = "City / Country"
        document.getElementById("label-postal").textContent = "Postal code"
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
