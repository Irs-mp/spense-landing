const aside = document.getElementById('aside')
const headerToggle = document.getElementById('header__toggle')
const containerNav = document.getElementById('container-nav')

headerToggle.addEventListener('click', () => {
  containerNav.classList.toggle('show-nav')
  aside.classList.toggle('hide-aside')
})

window.addEventListener('resize', () => {
  if (containerNav.classList.contains('show-nav')){
    containerNav.classList.remove('show-nav')
    aside.classList.remove('hide-aside')
  }
})