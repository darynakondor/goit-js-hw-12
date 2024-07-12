const gallery = document.querySelector('.gallery')
import en from '../languages/en.json';
import ua from '../languages/ua.json';
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
            </a>s
            <ul class="info">s
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
  return lang == "ua" ? ua : en
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

  
  const translation = loadTranslations(savedLang);
  translatePage(translation);

  languageLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const selectedLang = event.target.getAttribute('data-lang');
      saveLanguageCode(selectedLang);
    });
  });
});
