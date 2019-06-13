// console.log('app loaded', window);

document.addEventListener('DOMContentLoaded', () => {
  const title = document.querySelector('h1')
  title.textContent = "Hello Sarab"

  const coloursTitle = document.querySelector('.red')
  coloursTitle.textContent = "I've changed the title"

  const welcome = document.querySelector('#welcome-paragraph')
  welcome.textContent = "Welcome"

  // console.log(welcome);
  // console.dir(welcome);

  const listItems = document.querySelectorAll('li')
  // console.dir(listItems); //shows nodeList in browser.

const redListItem = document.querySelector('li.red')
redListItem.textContent = "RED!!"
redListItem.classList.add('bold')
// console.dir(redListItem);

const purpleListItem = document.createElement('li')
purpleListItem.textContent = "Purple"
purpleListItem.classList.add('purple')

const ul = document.querySelector('ul')
ul.appendChild(purpleListItem) //appendChild is used to attach element to parent child and parent child is ul.
  // document.get
})
