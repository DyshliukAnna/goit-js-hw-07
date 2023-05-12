import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryBox = document.querySelector(".gallery")

galleryBox.insertAdjacentHTML("afterbegin", createImg(galleryItems));

function createImg(galleryItems) {
return galleryItems.map(({ preview, original, description }) => {
    return `
<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`})
    .join("")
}
const lightbox = new SimpleLightbox(".gallery a", {
  captionType: 'attr',
  captionsData: 'alt',
    captionDelay: 250,
  captionPosition:'bottom',
});





// galleryContainer.innerHTML = galleryItems.reduce(
//     (html, el) =>
//         html +
//         `<li>
//             <a class="gallery__item" href="${el.original}">
//                 <img class="gallery__image" src="${el.preview}" alt="${el.description}" />
//             </a>
//         </li>`,
//     ''
// );

