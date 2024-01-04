import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryListEl = document.querySelector('.gallery');

const createMarkupGallery = (items) => {
    return items.reduce((acc, item) => acc +
        `<li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
           <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
        </a>
     </li>`, "");
};

galleryListEl.insertAdjacentHTML('beforeend', createMarkupGallery(galleryItems));

const options = {
    captionsData: 'alt',
    captionDelay: 250,

}; 

const lightbox = new SimpleLightbox('.gallery a', options);