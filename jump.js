// jump.js © 2023 by Austin is licensed under Attribution 4.0 International. To view a copy of this license, visit http://creativecommons.org/licenses/by/4.0/
'use strict'
let keys = new Set([])
addEventListener('keydown', ev => keys.add(ev.key))
addEventListener('keyup', ev => keys.delete(ev.key))
let coords = [0, 0]
let char = document.createElement('div')
char.style.backgroundColor = 'black'
char.style.position = 'absolute'
char.style.width = `${512 / 2 ** 3}px`
char.style.height = `${512 / 2 ** 3}px`
document.body.append(char)
let setPos = () => {
    char.style.left = `${coords[0]}px`
    char.style.bottom = `${coords[1]}px`
    return requestAnimationFrame(setPos)
}
requestAnimationFrame(setPos)
let ySpeed = 0
let gravDivide = 4
let gravSpeed = 1 / gravDivide
let gravity = () => {
    if (coords[1] < gravSpeed) coords[1] = 0
    if (!coords[1]) {
        gravSpeed = 1 / gravDivide
        return requestAnimationFrame(gravity)
    }
    coords[1] -= gravSpeed - ySpeed
    gravSpeed += 2 / gravDivide
    return requestAnimationFrame(gravity)
}
requestAnimationFrame(gravity)
let jump = speed => {
    ySpeed = speed
    coords[1] = 1
}
