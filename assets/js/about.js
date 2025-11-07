document.addEventListener("DOMContentLoaded", () => {
    const lang = localStorage.getItem("lang") || "sr"

    if (lang === "en") {
        document.getElementById("title").textContent = "Alteruta | About Us"
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
        document.getElementById("main-title").textContent = "About Us"
        document.getElementById("story-title").textContent = "Our Story"
        document.getElementById("story-p3").textContent =
            "At Alteruta, we are focused on young people, which is why our trips are not classic tourist tours, but experiences that combine adventure, culture and socializing. Our offer is affordable, flexible and adapted to the pace of life of young people, and we make each arrangement so that it brings more freedom and authentic experiences than what standard agencies offer."
        document.getElementById("motto-title").textContent = "Our Motto"
        document.getElementById("motto-text").textContent = "\"Every journey tells a story.\""
        document.getElementById("awards-title").textContent = "Awards & Achievements"
        document.getElementById("awards-subtitle").textContent =
            "Recognitions that confirm our quality and travelers' trust"
        document.getElementById("award1-title").textContent = "Best Agency of 2020"
        document.getElementById("award1-text").textContent = "Award for service quality and customer trust."
        document.getElementById("award1-back").textContent =
            "Winner of the prestigious award for the best travel agency in the region in 2020."
        document.getElementById("award2-title").textContent = "Tourism Leader 2022"
        document.getElementById("award2-text").textContent = "Award for innovative travel programs."
        document.getElementById("award2-back").textContent =
            "Recognized as an agency that brings new destinations and unique arrangements."
        document.getElementById("award3-title").textContent = "Eco Travel Award 2024"
        document.getElementById("award3-text").textContent = "For sustainable and responsible tourism."
        document.getElementById("award3-back").textContent =
            "Awarded for care of nature and promoting eco-friendly travel."
        document.getElementById("award4-title").textContent = "Most Trips in 2024"
        document.getElementById("award4-text").textContent = "Record number of travel arrangements worldwide."
        document.getElementById("award4-back").textContent =
            "We organized the largest number of trips, more than any other agency."
        document.getElementById("award5-title").textContent = "Highest Number of Satisfied Clients"
        document.getElementById("award5-text").textContent = "Thousands of travelers who trusted us."
        document.getElementById("award5-back").textContent =
            "Our greatest award is satisfied clients who keep coming back."
        document.getElementById("award6-title").textContent = "Fastest Growing Travel Agency"
        document.getElementById("award6-text").textContent = "Leader in growth and expansion of offers."
        document.getElementById("award6-back").textContent =
            "Recognized as the fastest growing agency thanks to innovation and customer trust."
        document.getElementById("city").textContent = "11000 Belgrade"
        document.getElementById("phone").textContent = "Phone:"
        document.getElementById("social").textContent = "Follow us on social media!"
    }
})


function setLanguage(lang) {
    localStorage.setItem("lang", lang)
    location.reload()
}
