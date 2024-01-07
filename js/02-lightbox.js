import { galleryItems } from "./gallery-items.js";

const galleryEl = document.querySelector(".js-gallery");

createGallery(galleryItems);

function createGallery(arr) {
  const str = arr
    .map(({ preview: url, description: alt, original }) => {
      return `<li class="gallery__item">
          <a class="gallery__link">
            <img
              class="gallery__image"
               href="${original}"
              src="${url}"
              alt="${alt}"
            />
          </a>
        </li>`;
    })
    .join("");

  galleryEl.insertAdjacentHTML("beforeend", str);
}
