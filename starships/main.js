import { starhips } from '../data/starships.js'
import { removeChildern, getLastNumber } from '../utils/index.js'

const main = document.querySelector('main')
const navList = document.querySelector('.navList')
const shipView = document.querySelector('.shipView')

function populateNav() {
    starhips.forEach((starship) => {
        let anchorWrap = document.createElement('a')
        anchorWrap.href = '#'
        anchorWrap.addEventListener('click', () => populateShipView(starship))
        let listItem = document.createElement('li')
        listItem.textContent = starship.name

        anchorWrap.appendChild(listItem)
        navList.appendChild(anchorWrap)
    })
}

function populateShipView(shipData) {
    removeChildern(shipView)
    let shipImage = document.createElement('img')
    let shipNum = getLastNumber(shipData.url)
    shipImage.src = 'https://starwars-visualguide.com/assests/img/starships/${shipNum}.jpg'
    shipImage.addEventListener('error', () => {
        console.log('Opps! missing image')
        shipImage.hidden = true
    })
    shipView.appendChild(shipImage)
}

populateNav()

function addStarField(element, numStars) {
    element.style.setProperty('background-color', 'black')
    for (let i = 0; i < numStars; i++) {
        let star = document.createElement('div')
        star.style.setProperty('width','2px')
        star.style.setProperty('height','2px')
        star.style.setProperty('background-color', 'white')
        let xy = getRandomPosition()
        star.style.left = `${xy[0]}px`
        star.style.top = `${xy[1]}px`
        star.style.setProperty('position', 'absolute')
        element.appendChild(star)
    }

}

function getRandomPosition() {
    let y = document.body.scrollHeight
    let x = document.body.scrollWidth
    let randomY = Math.floor(Math.random() * y)
    let randomX = Math.floor(Math.random() * x)
    return [randomX, randomY]
}

addStarField(document.querySelector('body'), 500)