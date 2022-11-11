input.onButtonPressed(Button.A, function () {
    radio.sendNumber(320)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(270)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(150)
})
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
