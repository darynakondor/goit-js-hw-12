import { getGallery } from "./js/pixabay-api";
import { renderPhotosList } from './js/render-functions';
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const refs = {
    form: document.querySelector('.form'),
    gallery: document.querySelector('.gallery'),
    loader: document.querySelector('.loader'),
    loadMoreBtn: document.querySelector('.load-more'),
    galleryItem: document.querySelector('.gallery-item')
}

let currentPage = 1;
let currentQuery = '';

refs.form.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    currentQuery = ev.target.elements['search'].value;
    refs.gallery.innerHTML = '';
    refs.loader.style.display = 'block';
    refs.loadMoreBtn.style.display = 'none';
    currentPage = 1;
    if (currentQuery !== '') {
        try {
            const data = await getGallery(currentQuery);
            renderPhotosList(data.hits);
            refs.loader.style.display = 'none';
            refs.loadMoreBtn.style.display = 'inline-block';
            hideLoadMoreBtn(data.totalHits);

            if (!data.hits.length) {
                iziToast.error({
                    message: "Sorry, there are no images matching your search query. Please try again!",
                    position: 'topRight'
                });
            }

            lightbox.refresh();
        } catch (error) {
            console.error('Error fetching gallery:', error);
        }
    } else {
        refs.loader.style.display = 'none';
        refs.loadMoreBtn.style.display = 'none';
    }
})

refs.gallery.addEventListener('click', (e) => {
    e.preventDefault();
});

var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250
});

async function loadMore() {
    try {
        currentPage++;
        const data = await getGallery(currentQuery, currentPage);
        refs.loader.style.display = 'none';
        renderPhotosList(data.hits);
        hideLoadMoreBtn(data.totalHits);
        lightbox.refresh();
        smoothScroll();
    } catch {
        console.error('Error fetching gallery:', error);
    }
}

refs.loadMoreBtn.addEventListener('click', loadMore);

function hideLoadMoreBtn(totalHits) {
    const totalImages = currentPage * 15;
    if (totalImages >= totalHits) {
        refs.loadMoreBtn.style.display = 'none';
        iziToast.info({
            message: "We're sorry, but you've reached the end of search results.",
            position: 'topRight'
        });
    }
}

function smoothScroll() {
    const galleryItem = document.querySelector('.gallery-item');
    const rect = galleryItem.getBoundingClientRect();
    const { height: cardHeight } = rect;
    window.scrollBy({
        top: cardHeight * 2 + 237.5,
        behavior: 'smooth',
    });
        
}
