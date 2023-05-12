import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryBox = document.querySelector(".gallery");


galleryBox.innerHTML = galleryItems.map(({ preview, original, description }) => {
  return `
<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
})
  .join("")

galleryBox.addEventListener("click", onClick);

function onClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return
  }
  const urlOriginal = event.target.dataset.source;
  // Створеня екземпляра бібліотеки basicLightbox
  // по кліку на картинку відкривається картинка оригільного розміру в окремому модальному вікні
  const instance = basicLightbox.create(
    `
    <img src="${urlOriginal}" width="800" height="600">
	`,
    // Об'єкт налаштувань basicLightbox
    {
      onShow: (instance) => {
        document.addEventListener("keydown", onEscape);
      },
      onClose: (instance) => {
        document.removeEventListener("keydown", onEscape);
      },
    }
  );
  instance.show();
  function onEscape(event) {
    console.log(event.code);
    if (event.code === "Escape") {
      // close() - метод бібліотеки basicLightbox, закриває модальне вікно
      instance.close();
    }
  }
}






























// import { galleryItems } from './gallery-items.js';
// // Change code below this line

// // console.log(galleryItems);

// const galleryContainer = document.querySelector('.gallery');

// galleryContainer.innerHTML = galleryItems.reduce(
//     (html, el) =>
//         html +
//         `<div class="gallery__item">
//         <a class="gallery__link" href="${el.original}">
//             <img
//             class="gallery__image"
//             src="${el.preview}"
//             data-source="${el.original}"
//             alt="Image description"
//             />
//         </a>
//         </div>`,
//     ''
// );

// const onImageClick = e => {
//     if (e.target.nodeName !== 'IMG') {
//         return;
//     }
//     e.preventDefault();

//     const onEscape = e => {
//         const keyCode = 'Escape';
//         // console.log(e.code);
//         if (e.code === keyCode) {
//             instance.close();
//         }
//     };

//     const instance = basicLightbox.create(
//         `<img class="gallery__image"
//             src="${e.target.dataset.source}"
//             alt="Image description"
//             />`,
//         {
//             onShow: () => window.addEventListener('keydown', onEscape),
//             onClose: () => window.removeEventListener('keydown', onEscape)
//         }
//     );
//     instance.show();
// };

// galleryContainer.addEventListener('click', onImageClick);