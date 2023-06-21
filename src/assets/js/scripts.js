document.addEventListener('DOMContentLoaded', function () {
  toggleContent()
})

// show or hide the card text
function toggleContent() {
  let card = document.getElementById('card')
  let title = card.querySelector('h5')
  let paragraph = card.querySelector('.card-text')

  if (title.classList.contains('hidden')) {
    title.classList.remove('hidden')
    paragraph.classList.remove('hidden')
  } else {
    title.classList.add('hidden')
    paragraph.classList.add('hidden')
  }
}
