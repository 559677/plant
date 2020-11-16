input.onButtonPressed(Button.A, function () {
    Mode = 0
})
input.onButtonPressed(Button.B, function () {
    Mode = 1
})
let Mode = 0
Mode = 1
basic.forever(function () {
    if (Mode == 0) {
        basic.showNumber(pins.analogReadPin(AnalogPin.P1))
    } else {
        led.plotBarGraph(
        pins.analogReadPin(AnalogPin.P1),
        1023
        )
    }
})
basic.forever(function () {
    basic.showIcon(IconNames.Rabbit)
    led.plotBarGraph(
    pins.analogReadPin(AnalogPin.P1),
    1023
    )
})
basic.forever(function () {
    if (Mode == 0) {
        if (pins.analogReadPin(AnalogPin.P1) == 0) {
            basic.showIcon(IconNames.Happy)
        } else {
            basic.showIcon(IconNames.Skull)
            music.playTone(880, music.beat(BeatFraction.Half))
            music.playTone(698, music.beat(BeatFraction.Half))
        }
    } else {
        led.plotBarGraph(
        pins.analogReadPin(AnalogPin.P1),
        1023
        )
    }
})
