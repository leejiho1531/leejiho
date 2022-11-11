input.onGesture(Gesture.TiltRight, function () {
    if (ㅎ포ㅓㅗㅠ == 5) {
        radio.sendNumber(150)
    } else if (ㅎ포ㅓㅗㅠ == 6) {
        radio.sendNumber(803)
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    if (ㅎ포ㅓㅗㅠ == 5) {
        radio.sendNumber(320)
    } else if (ㅎ포ㅓㅗㅠ == 6) {
        radio.sendNumber(809)
    }
})
input.onButtonPressed(Button.A, function () {
    ㅎ포ㅓㅗㅠ = 5
})
input.onButtonPressed(Button.AB, function () {
    if (ㅎ포ㅓㅗㅠ == 5) {
        radio.sendNumber(270)
    } else if (ㅎ포ㅓㅗㅠ == 6) {
        radio.sendNumber(802)
    }
})
input.onButtonPressed(Button.B, function () {
    ㅎ포ㅓㅗㅠ = 6
})
let ㅎ포ㅓㅗㅠ = 0
radio.setGroup(255)
basic.showLeds(`
    . . . . .
    # # # . .
    . . # . .
    . . # # #
    . . . . .
    `)
basic.pause(100)
basic.clearScreen()
basic.forever(function () {
    radio.setGroup(255)
})
