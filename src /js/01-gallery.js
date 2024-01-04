import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');
const createGalleryMarkup = galleryItems => galleryItems.map((item) => 
        `<li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
          />
        </a>
      </li>`
    ).join(' ');

galleryList.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));



const clickImage = (event) => {
    event.preventDefault();
    if(event.target.nodeName !== 'IMG') {
        return;
    }
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">`);
    instance.show();

   const closeOnEscape = event => {
    if (event.code === 'Escape') {
        instance.hide();
        document.removeEventListener('keydown', closeOnEscape);
    };
    document.addEventListener('keydown', closeOnEscape);
   }
}
galleryList.addEventListener('click', clickImage);