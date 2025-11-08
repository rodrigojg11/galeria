const cards = document.querySelector('.cards')

  cards.addEventListener('click', e => {
    e.preventDefault()
    console.log(e.target.dataset.category)
  })
