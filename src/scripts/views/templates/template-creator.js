/* eslint-disable import/no-extraneous-dependencies */
// import CONFIG from '../../globals/config';

const createMakananDetailTemplate = (makanan) => `
    <div class="food__overview lg:flex gap-20 my-24 shadow-2xl p-8">
    <div class="food__info">
        <h2 class="food__title font-semibold text-gray-700 text-4xl mb-5">${makanan.name || '-'}</h2>
        <img
            class="food__poster mb-5"
            src="${
    makanan.image
    }"
            alt="${makanan.name}"
        />
            <h4 class="font-semibold text-gray-700 text-2xl">
                Publisher : <span class="font-normal">${makanan.publisher}</span>
            </h4>
            <h4 class="font-semibold text-gray-700 text-2xl">Rating : <span class="font-normal">⭐️ ${makanan.rating}</span></h4>
        </div>
        <div class="food__ringkasan shadow-2xl p-5">
            <h3 class="text-3xl font-semibold text-gray-700 mb-4 flex items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="3"
                    stroke="currentColor"
                    class="size-9 text-yellow-300"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59"
                    />
                </svg>
                <span class="ml-4">Ringkasan</span>
            </h3>
            <p class="text-base font-normal leading-relaxed">
                ${makanan.description}
            </p>
            <p class="text-base font-normal leading-relaxed">
                ${makanan.bahan}
            </p>
            <br>
            <div class="shadow-2xl p-5 top-7">
            <h3 class="text-3xl font-semibold text-gray-700 mb-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" class="size-9 text-orange-700">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
            </svg>
        
            <span class="ml-4">Tingkat Kesulitan</span>
            </h3> 
        
            <p class="text-2xl">${makanan.tingkatSulit}</p>
            </div>
            <div class="shadow-2xl p-5 top-7">
            <h3 class="text-3xl font-semibold text-gray-700 mb-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-9 text-green-800">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <span class="ml-4">Waktu Pengerjaan</span>
            </h3> 
     
              <p class="text-2xl">${makanan.waktu}</p>
            </div>
        </div>
    </div>

    <h2 tabindex="0" id="makan-detail-form-coment-title" class="font-bold text-5xl text-center  text-gray-700"> Ulasan </h2>
    <div tabindex="0" class="detail-coment">
      ${makanan.coments
    .map(
      (coment) => `
       <div class="detail-comment-item bg-white rounded-lg shadow-lg p-6 mb-4 transform rotate-2">
            <div class="comment-header flex items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5 mr-5">
              <path fill-rule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-5.5-2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM10 12a5.99 5.99 0 0 0-4.793 2.39A6.483 6.483 0 0 0 10 16.5a6.483 6.483 0 0 0 4.793-2.11A5.99 5.99 0 0 0 10 12Z" clip-rule="evenodd" />
            </svg>
            <p class="comment-name text-lg font-semibold text-gray-800">
            ${coment.name}
            </p>
            </div>
            <div class="comment-body text-gray-700">
                <p>${coment.komentar}</p>
            </div>
        </div>


      `,
    )
    .join('')}
    </div>
  
`;

const createMakananItemTemplate = (makanan) => `
  <div class="food-item jelajah">
    <div class="food-item__header">
      <img class="lazyload food-item__header__poster" data-src="${makanan.image}" alt="${
  makanan.name || '-'
}">
      <div class="food-item__header__rating">
        <p>⭐️<span class="food-item__header__rating__score">${
  makanan.rating || '-'
}</span></p>
      </div>
    </div>
    <div class="food-item__content">
      <h3 class="food__title"><a href="/#/detail/${makanan.id}">${makanan.name || '-'}</a></h3>
      <p class="text-black">${makanan.description || '-'}</p>
      
    </div>

  </div>
`;
const createDaerahDetailTemplate = (daerah) => `
<div class="container">
        <div class="image-container">
            <img src="${
              daerah.pictureId
            }" alt="${daerah.name}"/>
        </div>
        <div class="text-container">
            <h1>${daerah.name}</h1>
            <p>${daerah.deskripsi}</p>
        </div>
    </div>
    </div>
<div class="content">
<h2 class="content__heading font-bold text-8xl text-center  text-gray-700">Kelezatan Nusantara Makanan Khas Provinsi ${daerah.name || '-'}</h2>
<div class="foods">
      ${daerah.makanans
    .map(
      (makanan) => `
      <div class="food-item">
      <div class="food-item__header">
        <img class="lazyload food-item__header__poster" data-src="${makanan.image}" alt="${
    makanan.name || '-'
  }">
        <div class="food-item__header__rating">
          <p>⭐️<span class="food-item__header__rating__score">${
    makanan.rating || '-'
  }</span></p>
        </div>
      </div>
      <div class="food-item__content">
        <h3 class="food__title"><a href="/#/detail/${makanan.id}">${makanan.name || '-'}</a></h3>
        <p>${makanan.description || '-'}</p>
        
      </div>
  
    </div>

      `,
    )
    .join('')}
    </div>
  </div>
`;

const createDaerahItemTemplate = (daerah) => `
  <div class="food-item">
    <div class="food-item__header">
      <img class="lazyload food-item__header__poster" data-src="${daerah.pictureId}" alt="${
  daerah.name || '-'
}">    
<div class="food-item__content">
<h3 class="food__title"><a href="/#/detail-daerah/${daerah.daerahId}">${daerah.name || '-'}</a></h3>
<p>${daerah.deskripsi || '-'}</p>
    </div>
    </div>
  </div>
`;

const createLikeMakananButtonTemplate = () => `
  <button aria-label="like this makanan" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeMakananButtonTemplate = () => `
  <button aria-label="unlike this makanan" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createMakananItemTemplate,
  createMakananDetailTemplate,
  createDaerahItemTemplate,
  createDaerahDetailTemplate,
  createLikeMakananButtonTemplate,
  createUnlikeMakananButtonTemplate,
};
