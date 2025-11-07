document.addEventListener('DOMContentLoaded', () => {
    let allReservations = JSON.parse(localStorage.getItem(RES_KEY))
    allReservations.forEach(r => {
        if (r.rate && r.rate > 0 && rates[r.tourNameEn]) {
            rates[r.tourNameEn].numbersOfRate++;
            rates[r.tourNameEn].avgRate += r.rate;
        }
    });

    for (const key in rates) {
        if (rates[key].numbersOfRate > 0) {
            rates[key].avgRate = (rates[key].avgRate / rates[key].numbersOfRate).toFixed(1);
        } else {
            rates[key].avgRate = 0;
        }
    }

    let lang = localStorage.getItem("lang") || "sr";
    for (const key in rates) {
        const nodes = document.querySelectorAll(`[id="rate-${key}"]`);
        nodes.forEach(el => {
            el.innerHTML = `${rates[key].avgRate} (${rates[key].numbersOfRate} ${lang === "sr" ? "recenzija" : "reviews"})`;
        });
    }
});