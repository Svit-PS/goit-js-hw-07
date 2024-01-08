import { galleryItems } from "./gallery-items.js";

const galleryEl = document.querySelector(".js-gallery");
galleryEl.addEventListener("click", onClickGallery);

let lightBox;

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
              data-source="${original}"
              alt="${alt}"
            />
          </a>
        </li>`;
    })
    .join("");

  galleryEl.insertAdjacentHTML("beforeend", str);
}

function onClickGallery(event) {
  const event_img = event.target;
  if (!event_img.classList.contains("gallery__image")) {
    return;
  }
  const urlEl = event_img.dataset.source;
  const card = galleryItems.find(({ original }) => original === urlEl);

  createModalCard(card);
}

function createModalCard(card) {
  const modalDiv = `<img src="${card.original}" alt="${card.description}" width="800">`;

  lightBox = basicLightbox.create(modalDiv, {
    onShow: (lightBox) => {
      document.addEventListener("keydown", onDownEsc);
    },
    onClose: (lightBox) => {
      document.removeEventListener("keydown", onDownEsc);
    },
  });
  lightBox.show();
}

function onDownEsc(event) {
  //   console.log(event.code);
  if (event.code === "Escape") {
    lightBox.close();
  }
}
