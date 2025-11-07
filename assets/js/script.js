
const dict = {
  "Pariz": "Paris",
  "Krakov": "Krakow",
  "Lisabon": "Lisabon",
  "London": "London",
  "Barselona": "Barcelona",
  "Dolomiti": "Dolomites",
  "Malta": "Malta",
  "Kambodža": "Cambodia",
  "Iceland": "Iceland",
  "Sevilla": "Seville",
  "Maroko": "Morocco",

}

let rates = {
  "barcelona": { avgRate: 0, numbersOfRate: 0 },
  "london": { avgRate: 0, numbersOfRate: 0 },
  "lisabon": { avgRate: 0, numbersOfRate: 0 },
  "dolomites": { avgRate: 0, numbersOfRate: 0 },
  "iceland": { avgRate: 0, numbersOfRate: 0 },
  "malta": { avgRate: 0, numbersOfRate: 0 },
  "cambodia": { avgRate: 0, numbersOfRate: 0 },
  "morocco": { avgRate: 0, numbersOfRate: 0 },
  "seville": { avgRate: 0, numbersOfRate: 0 },
  "krakow": { avgRate: 0, numbersOfRate: 0 },
  "paris": { avgRate: 0, numbersOfRate: 0 },
}

// Rezervacije
var myReservations = [];
const RES_KEY = 'alteruta.reservations';

// Helpers za localStorage
function loadReservations() {
  let idTraveller = localStorage.getItem('idTraveller') || 1;
  return JSON.parse(localStorage.getItem(RES_KEY)).filter(r => r.idTraveller == idTraveller) || [];
}
function saveReservations() {
  localStorage.setItem(RES_KEY, JSON.stringify(myReservations));
}

// Inicijalizacija na svakoj strani
document.addEventListener('DOMContentLoaded', () => {
  myReservations = loadReservations();

  // Ako smo na profilu i kontejner postoji, nacrtaj
  if (document.getElementById('my-reservations')) {
    renderReservations();
  }

  // Veži zatvaranje popupa (tek kad DOM postoji)
  const closeBtn = document.getElementById('closeBtn');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      const overlay = document.getElementById('overlay');
      if (overlay) overlay.style.display = 'none';
    });
  }
});

// Submit sa booking strane
function handleBookingSubmit(e, tourName, tourGroupEn, tourNameEn) {
  if (e) e.preventDefault();

  const form = e?.target || document.querySelector('.php-email-form');
  if (!form) return false;

  const dateSelect = form.querySelector('#travel-date');
  const travelersSelect = form.querySelector('#travelers');

  const dateValue = dateSelect?.value?.trim() || '';
  const dateText = dateSelect?.options[dateSelect.selectedIndex]?.text?.trim() || '';
  const travelersValue = travelersSelect?.value?.trim() || '';
  const travelersText = travelersSelect?.options[travelersSelect.selectedIndex]?.text?.trim() || '';

  let lang = localStorage.getItem('lang') || 'sr';

  const image = `gallery/${tourGroupEn}/${tourNameEn}/1.jpg`;
  const link = `${tourNameEn}.html`;
  const date = dateText.split(" - ");

  for (let i = 0; i < myReservations.length; i++) {
    if (myReservations[i].tourNameEn === tourNameEn && myReservations[i].dateFrom === date[0] && myReservations[i].dateTo === date[1]) {
      const overlay = document.getElementById('overlay');
      const popupText = document.getElementById('popup-text');
      const popup = document.getElementById('popup');
      popupText.textContent = lang === 'en' ? 'You have already reserved this tour!' : 'Vec ste rezervisali ovaj aranžman!';
      popup.style.backgroundColor = 'red';
      popupText.style.color = 'white';
      overlay.style.display = 'flex';
      return false;
    }
  }

  const data = {
    id: Date.now(),
    idTraveller: localStorage.getItem('idTraveller') || 1,
    tourName,
    tourGroupEn,
    tourNameEn,
    image,
    link,
    dateValue,
    dateFrom: date[0],
    dateTo: date[1],
    dateText,
    travelersValue,
    travelersText,
    rate: 0,
    createdAt: new Date().toISOString()
  };

  myReservations.push(data);
  saveReservations();

  if (document.getElementById('my-reservations')) renderReservations();

  const overlay = document.getElementById('overlay');
  const popupText = document.getElementById('popup-text');
  popupText.textContent = lang === 'en' ? 'You have successfully reserved the tour!' : 'Uspešno ste rezervisali aranžman!';
  overlay.style.display = 'flex';

  const closeBtn = document.getElementById('closeBtn');
  closeBtn.textContent = lang === 'en' ? 'Close' : 'Zatvori';

  form.reset();
  return false;
}

function parseDate(d) {
  const [day, month, year] = d.split('.');
  return new Date(year, month - 1, day);
}

// Prikaz rezervacija na profilu
function renderReservations() {
  const wrap = document.getElementById('my-reservations');
  if (!wrap) return;

  wrap.innerHTML = '';

  if (!myReservations.length) {
    wrap.innerHTML = `
      <div class="col-12">
        <div class="card border-0 shadow-sm text-center">
          <div class="card-body py-5">
            <div class="mb-2"><i class="bi bi-calendar2-x" style="font-size:2rem;"></i></div>
            <p class="mb-0 text-muted">Još uvek nemate rezervacije.</p>
          </div>
        </div>
      </div>`;
    return;
  }
  let lang = localStorage.getItem('lang') || 'sr';

  const parts = [];
  for (const r of myReservations.slice().reverse()) {
    const title = r.tourName || r.tourNameEn || 'Aranžman';
    const canCancel = Date.now() <= parseDate(r.dateFrom).getTime() - 5 * 24 * 60 * 60 * 1000;
    const notPast = Date.now() < parseDate(r.dateTo).getTime()

    parts.push(`
    <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
      <a href="${r.link}" class="tour-link">
        <div class="tour-card">
          <div class="tour-image">
            <img src="${r.image}" alt="${lang === 'sr' ? title : dict[title]}" class="img-fluid" loading="lazy">
          </div>
          <div class="tour-content">
            <h4>${lang === 'sr' ? title : dict[title]}</h4>
            <div class="tour-meta">
              <span class="duration"><i class="bi bi-calendar-event"></i> ${r.dateText}</span>
              <span class="group-size"><i class="bi bi-people"></i> ${r.travelersText}</span>
            </div>
            <div class="tour-action">
              ${notPast
        ? canCancel ? `<a href="#"
                    class="btn-book" id="btn-cancel"
                    onclick="return cancelReservation(event, ${r.id})">
                    <i class="bi bi-x-lg"></i> ${lang === 'sr' ? "Otkaži" : "Cancel"}
                  </a>`
          : ''
        : ''
      }
            </div>
          </div>
        </div>
      </a>
      ${notPast
        ? '' : `
        <div style="text-align: center;"><b>${lang === 'sr' ? "Ocenite aranžman" : "Rate the tour"}</b></div>
        <div class="rating" data-id="${r.id}">
          <i class="bi ${r.rate >= 1 ? 'bi-star-fill active' : 'bi-star'}" data-value="1"></i>
          <i class="bi ${r.rate >= 2 ? 'bi-star-fill active' : 'bi-star'}" data-value="2"></i>
          <i class="bi ${r.rate >= 3 ? 'bi-star-fill active' : 'bi-star'}" data-value="3"></i>
          <i class="bi ${r.rate >= 4 ? 'bi-star-fill active' : 'bi-star'}" data-value="4"></i>
          <i class="bi ${r.rate >= 5 ? 'bi-star-fill active' : 'bi-star'}" data-value="5"></i>
        </div>`
      }
    </div>
  `);

  }

  wrap.innerHTML = parts.join('');
}

// Brisanje rezervacije
function deleteReservation(id) {
  myReservations = myReservations.filter(r => r.id !== id);
  saveReservations();
  renderReservations();
}

// Otkazivanje rezervacije
function cancelReservation(evt, id) {
  if (evt) { evt.preventDefault(); evt.stopPropagation(); }
  deleteReservation(id);
  return false;
}


document.addEventListener("click", function (e) {
  if (e.target.matches(".rating i")) {
    const star = e.target;
    const value = parseInt(star.getAttribute("data-value"));
    const container = star.closest(".rating");
    const id = Number(container.dataset.id)

    myReservations.find(r => r.id === id).rate = value;
    saveReservations();

    container.querySelectorAll("i").forEach((s, idx) => {
      if (idx < value) {
        s.classList.add("active");
        s.classList.remove("bi-star");
        s.classList.add("bi-star-fill");
      } else {
        s.classList.remove("active");
        s.classList.remove("bi-star-fill");
        s.classList.add("bi-star");
      }
    });
  }
});
