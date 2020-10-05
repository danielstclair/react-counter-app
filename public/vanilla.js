let count = 0

function displayCount(count) {
  const countElement = document.querySelector('.count h1')
  countElement.innerHTML = count
}

function increaseCount() {
    count = count + 1
    displayCount(count)
}

function decreaseCount() {
    count = count - 1
    displayCount(count)
}

(function() {
  displayCount(count)
  document
    .querySelector('#decrease-button')
    .addEventListener('click', decreaseCount)
  document
    .querySelector('#increase-button')
    .addEventListener('click', increaseCount)
})()
