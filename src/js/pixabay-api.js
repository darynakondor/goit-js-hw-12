import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/';

export async function getGallery(tag, page = 1) {
    const params = {
        key: '44594941-2a4acc61a8cc3b7fa403a0877',
        q: tag,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: page,
        per_page: 15
    };
    const urlParams = new URLSearchParams(params).toString();

    const response = await axios.get(`?${urlParams}`);
    return response.data;
}