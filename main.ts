// The Magnetometer Module Blocks, Magnetic Force Stength value to Graph,  sensitivity set to graph up to value
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    input.calibrateCompass()
})
input.onButtonPressed(Button.A, function () {
    sense = sense - 50
})
input.onButtonPressed(Button.AB, function () {
    sense = 1
})
input.onButtonPressed(Button.B, function () {
    sense = sense + 50
})
/**
 * JEGYED50-BBC-MICROBIT-STUDY365-BLOCKS-05-02-C
 */
let mf = 0
let sense = 0
radio.setGroup(1)
sense = 1
input.setAccelerometerRange(AcceleratorRange.OneG)
if (input.compassHeading() == -1003) {
    basic.showIcon(IconNames.No)
    basic.pause(1000)
    input.calibrateCompass()
} else {
    basic.showIcon(IconNames.Yes)
}
basic.pause(3000)
basic.forever(function () {
    mf = input.magneticForce(Dimension.Strength)
    serial.writeValue("mf", mf)
    radio.sendValue("mf", mf)
    led.plotBarGraph(
    mf,
    500 + sense
    )
})
