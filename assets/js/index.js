document.addEventListener("DOMContentLoaded", () => {
    const lang = localStorage.getItem("lang") || "sr"

    if (lang === "en") {
        document.getElementById("title").textContent = "Alteruta | Home"
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
        document.getElementById("whyus-title").textContent = "Explore the World with Our Agency"
        document.getElementById("whyus-p1").textContent =
            "Our mission is to make every journey simple and carefree. While we take care of all the details, you can fully enjoy exploring new destinations.”"
        document.getElementById("whyus-p2").textContent =
            "With carefully selected destinations, trusted partners and dedicated support, you’ll get a journey tailored to you."
        document.getElementById("guides-title").textContent = "Our Guides"
        document.getElementById("guides-subtitle").textContent =
            "Our guides are young and energetic people. They are experienced in their work, licensed and well connected to local communities. They are your ticket in authentic experiences and hidden gems of each destination."
        document.getElementById("g1-name").textContent = "Alesa Milić"
        document.getElementById("g1-bio").textContent =
            "Always smiling and ready to help, he makes sure that every trip is stress-free."
        document.getElementById("g2-name").textContent = "Lea Irt"
        document.getElementById("g2-bio").textContent =
            "Loves sharing experiences and inspiring travelers to see every journey in a unique way."
        document.getElementById("g3-name").textContent = "Dušica Petrović"
        document.getElementById("g3-bio").textContent =
            "Her energy and enthusiasm inspire the group, turning every trip into an unforgettable adventure."
        document.getElementById("g4-name").textContent = "Minja Krivokapić"
        document.getElementById("g4-bio").textContent =
            "She knows all the best places for shopping and local markets where you can find the right souvenirs."
        document.getElementById("g5-name").textContent = "Željko Simić"
        document.getElementById("g5-bio").textContent =
            "A historian by education, he turns every journey into a fascinating story about the past and traditions."
        document.getElementById("g6-name").textContent = "Nikola Jovanović"
        document.getElementById("g6-bio").textContent =
            "A local food expert, recommending authentic specialties and the best restaurants."
        document.getElementById("featured-title").textContent = "Most Popular Destinations"
        document.getElementById("malta-price").textContent = "Price from 460€"
        document.getElementById("malta-title").textContent = "Malta"
        document.getElementById("malta-duration").textContent = "7 days"
        document.getElementById("malta-group").textContent = "16 travelers"
        document.getElementById("malta-desc").textContent = "A sunny island nation with rich history, turquoise sea and charming towns."
        document.getElementById("malta-link").textContent = "View offer"
        document.getElementById("cambodia-price").textContent = "Price from 1590€"
        document.getElementById("cambodia-title").textContent = "Cambodia"
        document.getElementById("cambodia-duration").textContent = "23 days"
        document.getElementById("cambodia-group").textContent = "12 travelers"
        document.getElementById("cambodia-desc").textContent = "An exotic land of ancient temples, tropical nature and rich Southeast Asian culture."
        document.getElementById("cambodia-link").textContent = "View offer"
        document.getElementById("morocco-price").textContent = "Price from 690€"
        document.getElementById("morocco-title").textContent = "Morocco"
        document.getElementById("morocco-duration").textContent = "14 days"
        document.getElementById("morocco-group").textContent = "8 travelers"
        document.getElementById("morocco-desc").textContent = "Oriental bazaars, Sahara dunes and vibrant cities make Morocco unique."
        document.getElementById("morocco-link").textContent = "View offer"
        document.getElementById("testimonials-title").textContent = "Our Travelers' Reviews"
        document.getElementById("comment1").textContent =
            "The trip we organized with Alteruta was perfect! Everything was carefully planned and the guide was excellent and always available."
        document.getElementById("comment2").textContent =
            "We have been traveling with this agency for three years now and are always delighted. The arrangements are affordable and the service is top-notch."
        document.getElementById("comment3").textContent =
            "The best summer vacation ever! The hotel was outstanding, transfers without any problems and great communication with the agents."
        document.getElementById("comment4").textContent =
            "What I liked the most was that the agency customized the trip to our wishes. Highly recommended!"
        document.getElementById("comment5").textContent =
            "I traveled with my friends to Rome and everything was organized down to the last detail. Alteruta is the agency I trust and will definitely return to."
        document.getElementById("city").textContent = "11000 Belgrade"
        document.getElementById("phone").textContent = "Phone:"
        document.getElementById("social").textContent = "Follow us on social media!"
    }
})


function setLanguage(lang) {
    localStorage.setItem("lang", lang)
    location.reload()
}
