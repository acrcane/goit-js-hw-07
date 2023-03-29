import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const lightboxContainer = document.querySelector('.gallery');

addToHtml(lightboxContainer)

lightboxContainer.addEventListener('click', showImage)

function createLightboxGallery(array){
    return array.map(({preview, original, description}) => {
        return `<li class="gallery__item" >
                    <a href="${original}" class="gallery__link">
                        <img src="${preview}" alt="${description}" data-source="${original}" class="gallery__image">
                    </a>
                </li>`           
    }).join('')
}

function addToHtml(container){
    container.innerHTML = createLightboxGallery(galleryItems)
}

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    preload: false
})

function showImage(event){
    event.preventDefault()
    lightbox.open();
}