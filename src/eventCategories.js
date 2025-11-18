import { continents } from "./data/photo.js"

const cards = document.querySelector('.cards')
const section = document.querySelector('.galeria')
const down = document.querySelector('.down')
const button = document.querySelector('.button')
const upImg = document.querySelector('.up img')



cards.addEventListener('click', e => {
  e.preventDefault()
  document.body.style.overflow = 'hidden'
  section.classList.add('galeria--show')

  const id = e.target.dataset.category.toLowerCase()
  console.log(id)
  upImg.dataset.name = id
  down.innerHTML = ''

  if (id === 'africa') {
    down.innerHTML = continents.africa.map(i => `<img src="${i.image_path}" data-id="${i.id}" data-name="${i.name}" data-category="${id}" alt="">`).join('')
  } else if (id === 'america') {
    down.innerHTML = continents.america.map(i => `<img src="${i.image_path}" data-id="${i.id}" data-name="${i.name}" alt="">`).join('')
  } else if (id === 'antartida') {
    down.innerHTML = continents.antartida.map(i => `<img src="${i.image_path}" data-id="${i.id}" "data-name="${i.name}" alt="">`).join('')
  } else if (id === 'asia') {
    down.innerHTML = continents.asia.map(i => `<img src="${i.image_path}" data-id="${i.id}" "data-name="${i.name}" alt="">`).join('')
  } else if (id === 'europa') {
    down.innerHTML = continents.europa.map(i => `<img src="${i.image_path}" data-id="${i.id}" "data-name="${i.name}" alt="">`).join('')
  } else if (id === 'oceania') {
    down.innerHTML = continents.oceania.map(i => `<img src="${i.image_path}" data-id="${i.id}" "data-name="${i.name}" alt="">`).join('')
  } else {
    down.innerHTML = `<p>No existe esa categoría</p>`
  }

  const images = down.querySelectorAll('img')

  if (images.length > 0) {
    upImg.src = images[0].src
    images[0].classList.add('active')
  }

  images.forEach(img => {
    img.addEventListener('click', () => {
      upImg.src = img.src
      const titulo = document.querySelector('.tercero__titulo')
      const imagenes = document.querySelector('.down')
      titulo.innerText = img.dataset.name
    })
  })

  const arrowLeft = document.querySelector('.mv-button-left ')
  let contador1 = 1
  arrowLeft.addEventListener('click', () => {
    contador1++
    upImg.src = `/src/assets/${upImg.dataset.name}/${contador1}.jpg`
  })

  const arrowRight = document.querySelector('.mv-button-right ')
  let contador2 = 1
  arrowRight.addEventListener('click', () => {
    contador2++
    upImg.src = `/src/assets/${upImg.dataset.name}/${contador2}.jpg`
  })
})

button.addEventListener('click', e => {
  e.preventDefault
  document.body.style.overflow = 'auto'
  section.classList.remove('galeria--show')
})
