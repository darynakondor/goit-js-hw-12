const gallery = document.querySelector('.gallery')

export function renderPhotosList(photos) {
    let html = ''
    photos.forEach(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) =>
        html += `<li class="gallery-item">
            <a class="gallery-link" href="${largeImageURL}">
              <img
                class="gallery-image"
                src="${webformatURL}"
                alt="${tags}"
              />
            </a>
            <ul class="info">
                <li class="item">
                    <p class="bold">Likes</p>
                    <p>${likes}</p>
                </li>
                <li class="item">
                    <p class="bold">Views</p>
                    <p>${views}</p>
                </li>
                <li class="item">
                    <p class="bold">Comments</p>
                    <p>${comments}</p>
                </li>
                <li class="item">
                    <p class="bold">Downloads</p>
                    <p>${downloads}</p>
                </li>
            </ul>
        </li>
    `);
    gallery.insertAdjacentHTML("beforeend", html);
}

function saveLanguageCode(langugageCode) {
    localStorage.setItem('language', langugageCode)
}

function getLanguageCode() {
     return localStorage.getItem('language') || 'en'
}
  
function loadTranslations(lang) {
  return fetch(`./languages/${lang}.json`)
    .then(response => response.json())
    .catch(error => console.error('Error loading translations:', error));
}
  
function translatePage(translations) {
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    if (element.tagName === 'INPUT' && element.placeholder === 'comments') {
      element.placeholder = translations[key] || element.placeholder;
    } else {
      element.innerHTML = translations[key] || element.textContent;
    }
  });
}
document.addEventListener('DOMContentLoaded', () => {
  const languageLinks = document.querySelectorAll('.languages .link')

  const savedLang = getLanguageCode();
  document.documentElement.lang = savedLang;

  loadTranslations(savedLang).then(translations => {
    translatePage(translations);
  });

  languageLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const selectedLang = event.target.getAttribute('data-lang');
      saveLanguageCode(selectedLang);
      window.location.href = `/${selectedLang}`;
    });
  });
});
