gsap.from('.summary', {x: -200, opacity: 0})

gsap.from('.summary__card', {duration: 0.6, opacity: 0, x: -100, stagger: 0.25})

const resultadoTotal = document.querySelector('.result__circle__value')
const reaction = document.querySelector('.reaction')
const memory = document.querySelector('.memory')
const verbal = document.querySelector('.verbal')
const visual = document.querySelector('.visual')

const reloadButton = document.querySelector('.summary__button')

const reload = () => {
    let total = {number: 0}
    let totalReaction = {number: 0}
    let totalMemory = {number: 0}
    let totalVerbal = {number: 0}
    let totalVisual = {number: 0}
    
    gsap.to(total, {duration: 5, ease: 'all', number: 76, onUpdate: () => {
        resultadoTotal.innerText = Math.round(total.number)
    }})

    gsap.to(totalReaction, {duration: 2, ease: 'all', number: 80, onUpdate: () => {
        reaction.innerText = Math.round(totalReaction.number)
    }})

    gsap.to(totalMemory, {duration: 3, ease: 'all', number: 92, onUpdate: () => {
        memory.innerText = Math.round(totalMemory.number)
    }})

    gsap.to(totalVerbal, {duration: 4, ease: 'all', number: 61, onUpdate: () => {
        verbal.innerText = Math.round(totalVerbal.number)
    }})

    gsap.to(totalVisual, {duration: 5, ease: 'all', number: 72, onUpdate: () => {
        visual.innerText = Math.round(totalVisual.number)
    }})
}

reload()

reloadButton.addEventListener('click', reload)