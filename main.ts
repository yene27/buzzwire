input.onButtonPressed(Button.A, function () {
    radio.sendNumber(2)
})
let Number2 = 0
basic.showNumber(Number2)
radio.setGroup(1)
basic.forever(function () {
    if (input.lightLevel() < 50) {
        Number2 += 1
        if (Number2 > 9) {
            Number2 = 0
            radio.sendNumber(2)
        }
        basic.showNumber(Number2)
    }
})
