input.onGesture(Gesture.LogoUp, function () {
    radio.sendString("B")
    basic.showArrow(ArrowNames.South)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendString("L")
    basic.showArrow(ArrowNames.West)
})
function 左轉燈 () {
    bitbot.ledClear()
    數學 = 0
    for (let index = 0; index <= 5; index++) {
        bitbot.setPixelColor(數學 + index, 0xFFC000)
    }
}
input.onButtonPressed(Button.A, function () {
    basic.showNumber(5)
    radio.sendString("number")
})
input.onGesture(Gesture.ScreenUp, function () {
    radio.sendString("S")
    basic.showIcon(IconNames.No)
})
input.onGesture(Gesture.LogoDown, function () {
    radio.sendString("F")
    basic.showArrow(ArrowNames.North)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("D")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "F") {
        bitbot.go(BBDirection.Forward, 100)
        bitbot.ledClear()
        bitbot.setLedColor(0xFFC000)
    } else if (receivedString == "B") {
        bitbot.go(BBDirection.Reverse, 100)
        bitbot.ledClear()
        bitbot.setLedColor(0xFF0000)
    } else if (receivedString == "L") {
        左轉燈()
        bitbot.rotatems(BBRobotDirection.Left, 30, 500)
    } else if (receivedString == "R") {
        右轉燈()
        bitbot.rotatems(BBRobotDirection.Right, 30, 500)
    } else if (receivedString == "number") {
        basic.showNumber(2)
    } else if (receivedString == "S") {
        bitbot.stop(BBStopMode.Brake)
        bitbot.ledClear()
    } else if (receivedString == "D") {
        while (bitbot.sonar(BBPingUnit.Centimeters) > 10) {
            bitbot.go(BBDirection.Forward, 100)
        }
        while (bitbot.sonar(BBPingUnit.Centimeters) <= 10) {
            bitbot.stop(BBStopMode.Brake)
        }
    } else {
        bitbot.stop(BBStopMode.Brake)
        bitbot.ledClear()
    }
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendString("R")
    basic.showArrow(ArrowNames.East)
})
function 右轉燈 () {
    bitbot.ledClear()
    數學 = 6
    for (let index = 0; index <= 5; index++) {
        bitbot.setPixelColor(數學 + index, 0xFFC000)
    }
}
let 數學 = 0
basic.showNumber(5)
radio.setGroup(5)
basic.forever(function () {
	
})
