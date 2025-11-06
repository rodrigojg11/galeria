import {continents} from "./photo.js"
const cards = document.querySelector('.cards')

const categories = [
  {id: "africa", name: "Africa", image_path: './src/assets/africa.jpg', quantity_photo: continents.africa.length},
  {id: "america", name: "America", image_path: './src/assets/america.jpg', quantity_photo: continents.america.length},
  {id: "antartida", name: "Antartida", image_path: './src/assets/antartida.jpg', quantity_photo: continents.antartida.length},
  {id: "asia", name: "Asia", image_path: './src/assets/asia.jpg', quantity_photo: continents.asia.length},
  {id: "europa", name: "Europa", image_path: './src/assets/europa.jpg', quantity_photo: continents.europa.length},
  {id: "oceania", name: "Oceania", image_path: './src/assets/oceania.jpg', quantity_photo: continents.oceania.length}
]

categories.forEach( category => {

  const html =  `
  <a href="#" class="card">
  <img class="card__imagen" src="${category.image_path}" alt="Africa">
  <h3 class="card__continents">${category.id}</h3>
  <p class="card__photo-quantity">${category.quantity_photo}</p>
  </a>`

  cards.insertAdjacentHTML('beforeend', html)
})
