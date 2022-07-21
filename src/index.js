import './styles/index.scss'
import kei from '../assets/Kei.webp'

const profilePicture = document.querySelector('.profile img')
profilePicture.setAttribute('src', kei)

const greetingPicture = document.querySelector('.greeting img')
greetingPicture.setAttribute('src', kei)

const sidebarIcons = document.querySelectorAll('li')

sidebarIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
        document.querySelector('.selected').classList.remove('selected')
        icon.classList.add('selected')
    })
})
