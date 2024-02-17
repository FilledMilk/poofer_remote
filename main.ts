radio.setGroup(1)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P8) == 1) {
        radio.sendNumber(0)
    } else if (pins.digitalReadPin(DigitalPin.P16) == 1) {
        radio.sendNumber(1)
    } else if (pins.digitalReadPin(DigitalPin.P14) == 1) {
        radio.sendNumber(2)
    } else if (pins.digitalReadPin(DigitalPin.P15) == 1) {
        radio.sendNumber(3)
    } else if (pins.digitalReadPin(DigitalPin.P9) == 1) {
        radio.sendNumber(4)
    } else if (pins.digitalReadPin(DigitalPin.P13) == 1) {
        radio.sendNumber(5)
    }
})
