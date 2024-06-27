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