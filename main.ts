function _ (Kommentar: string) {
	
}
let Neigung = 0
_("Erweiterung Grove laden")
let o4digit = grove.createDisplay(DigitalPin.C16, DigitalPin.C17)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    # # # # #
    . . # . .
    `)
loops.everyInterval(400, function () {
    Neigung = Math.abs(input.rotation(Rotation.Pitch))
    o4digit.show(Neigung)
    if (Neigung > 10) {
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.setLedColor(0xff0000)
        pins.digitalWritePin(DigitalPin.P2, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.setLedColor(0x00ff00)
        pins.digitalWritePin(DigitalPin.P1, 1)
    }
})
