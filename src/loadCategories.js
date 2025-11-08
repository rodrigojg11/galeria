import {categories} from "./data/categories.js"

const cards = document.querySelector('.cards')
  categories.forEach( category => {

    const html =  `
    <a href="#" class="card">
    <img data-category="${category.id}" class="card__imagen" src="${category.image_path}" alt="Africa">
    <h3 class="card__continents">${category.name}</h3>
    <p class="card__photo-quantity">${category.quantity_photo}</p>
    </a>`

    cards.insertAdjacentHTML('beforeend', html)
  })
