input.onButtonPressed(Button.A, function () {
    mode += -1
    showStatus()
})
function showStatus () {
    if (mode < 1) {
        mode = 1
        error()
    } else if (mode > 3) {
        mode = 3
        error()
    }
    strip.clear()
    strip.setPixelColor(mode - 1, neopixel.colors(NeoPixelColors.Green))
    strip.show()
    basic.showNumber(mode)
}
input.onButtonPressed(Button.B, function () {
    mode += 1
    showStatus()
})
function error () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    strip.show()
    basic.showIcon(IconNames.No)
}
function changeMode () {
    key = piano.Touch()
    if (key == piano.TouchButton(piano.touch.L)) {
        mode = 1
        showStatus()
    } else if (key == piano.TouchButton(piano.touch.M)) {
        mode = 2
        showStatus()
    } else if (key == piano.TouchButton(piano.touch.H)) {
        mode = 3
        showStatus()
    }
}
let key = 0
let strip: neopixel.Strip = null
let mode = 0
mode = 2
strip = neopixel.create(DigitalPin.P1, 3, NeoPixelMode.RGB)
strip.setBrightness(20)
showStatus()
basic.forever(function () {
    changeMode()
    piano.PlayPiano(mode)
})
