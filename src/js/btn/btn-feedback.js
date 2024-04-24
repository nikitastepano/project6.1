const menuCall = document.querySelector('.menu-call')
const btnMenuOpen = document.querySelector('.btn-menu-open')
const btnMenuCallClose = document.querySelector('.btn-menu-call-close')
const menu = document.querySelector('.menu')
const idcontainer = document.getElementById('container')
const btnsecond = document.getElementById('openbtnsecond')

btnMenuOpen.addEventListener('click', function () {
  menuCall.style.transform = 'translate(0)'
  menuCall.style.transition = '0.5s transform'

  document.body.classList.add('container-hidden-second')

  menu.style.removeProperty('transform')

  idcontainer.classList.remove('container-hidden')

  document.body.addEventListener('click', menuCallClose)
})

btnMenuCallClose.addEventListener('click', function () {
  menuCall.style.removeProperty('transform')

  document.body.classList.remove('container-hidden-second')
  document.body.removeEventListener('click', menuCallClose)

  setTimeout(function () {
    menuCall.style.removeProperty('transition')
  }, 200)
})

function menuCallClose(event) {
  if (
    !menuCall.contains(event.target) &&
    !event.target.closest('.btn-menu-open')
  ) {
    menuCall.style.removeProperty('transform')

    document.body.classList.remove('container-hidden-second')

    setTimeout(function () {
      menuCall.style.removeProperty('transition')
    }, 200)
  }
}

btnsecond.addEventListener('click', function (event) {
  event.stopPropagation()
  menuCall.style.transform = 'translate(0)'
  menuCall.style.transition = '0.5s transform'

  document.body.classList.add('container-hidden-second')

  menu.style.removeProperty('transform')

  idcontainer.classList.remove('container-hidden')

  document.body.addEventListener('click', menuCallClose)
})
