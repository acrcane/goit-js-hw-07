import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const lightboxContainer = document.querySelector('.gallery');

addToHtml(lightboxContainer)

lightboxContainer.addEventListener('click', clickImages)

function createLightboxGallery(array){
    return array.map(({preview, original, description}) => {
        return `<li class="gallery__item" >
                    <a href="${original}" class="gallery__link">
                        <img src="${preview}" alt="${description}" data-source="${original}" class="gallery__image">
                    </a>
                </li>`           
    }).join('')
}
console.log(createLightboxGallery(galleryItems));

function addToHtml(container){
    container.innerHTML = createLightboxGallery(galleryItems)
}

function clickImages(event){
    event.preventDefault()
    if(event.target.nodeName !== "IMG"){
        return
    }
    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" height="600">`,
        {onShow: () => {
            document.addEventListener('keydown', closeWindowEsc)
        },
        onClose: () => {
            document.removeEventListener('keydown', closeWindowEsc)
        }
    }
    )
    instance.show()

    function closeWindowEsc(event){
        if(event.code !== 'Escape'){
            return
        }
        instance.close()
    }
}