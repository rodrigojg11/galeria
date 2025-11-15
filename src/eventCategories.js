import { continents } from "./data/photo.js"

const cards = document.querySelector('.cards')
const section = document.querySelector('.galeria')
const down = document.querySelector('.down')
const button = document.querySelector('.button')


cards.addEventListener('click', e => {
  e.preventDefault()
  document.body.style.overflow = 'hidden'
  section.classList.add('galeria--show')

  const id = e.target.dataset.category.toLowerCase()
  down.innerHTML = ''

  if (id === 'africa') {
    down.innerHTML = continents.africa.map(i => `<img src="${i.image_path}" alt="">`).join('')
  } else if (id === 'america') {

    down.innerHTML = continents.america.map(i => `<img src="${i.image_path}" alt="">`).join('')
  } else if (id === 'antartida') {
    down.innerHTML = continents.antartida.map(i => `<img src="${i.image_path}" alt="">`).join('')
  } else if (id === 'asia') {
    down.innerHTML = continents.asia.map(i => `<img src="${i.image_path}" alt="">`).join('')
  } else if (id === 'europa') {
    down.innerHTML = continents.europa.map(i => `<img src="${i.image_path}" alt="">`).join('')
  } else if (id === 'oceania') {
    down.innerHTML = continents.oceania.map(i => `<img src="${i.image_path}" alt="">`).join('')
  } else {
    down.innerHTML = `<p>No existe esa categoría</p>`
  }

  const upImg = document.querySelector('.up img')
  const images = down.querySelectorAll('img')

  if (images.length > 0) {
    upImg.src = images[0].src
    images[0].classList.add('active')
  }

  images.forEach(img => {
    img.addEventListener('click', () => {
      upImg.src = img.src
    })
  })


})

button.addEventListener('click', e => {
  e.preventDefault
  document.body.style.overflow = 'auto'
  section.classList.remove('galeria--show')
})
