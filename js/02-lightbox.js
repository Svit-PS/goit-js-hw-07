import { galleryItems } from "./gallery-items.js";

const galleryEl = document.querySelector(".js-gallery");

createGallery(galleryItems);

function createGallery(arr) {
  const str = arr
    .map(({ preview: url, description: alt, original }) => {
      return `<li class="gallery__item">
          <a class="gallery__link"
          href="${original}"
          onclick="return false;">
            <img
              class="gallery__image"
              src="${url}"
              alt="${alt}"
            />
          </a>
        </li>`;
    })
    .join("");

  galleryEl.insertAdjacentHTML("beforeend", str);
}

let lightbox = new SimpleLightbox(".gallery__link", {
  captionsData: "alt",
  captionDelay: 250,
  captionClass: "captionPosition",
});
console.log("lightbox: ", lightbox);
