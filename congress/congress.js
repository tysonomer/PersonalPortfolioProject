import { senators } from '../data/senators.js'
import { representitives } from ' ../data/representitives.js'

const rebupButton = document.querySelector('#republicains')

repubButton.addEventLitstener('click', () => {
    showRepublicans()
})

function showRepublicans() {
    const repubs = representitives.filter(rep => rep.party === 'R')
    const repubs = representitives.map(rep => {
        let smallRepub = {}
        if (rep.party === 'R') {
            smallRepub.id = rep.id
            smallRepub.name = `${rep.first.name} ${rep.middle.name} ${rep.last.name}`
            }
        }
        return smallRepub
    })
    console.log(repubs)
}