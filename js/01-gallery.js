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




