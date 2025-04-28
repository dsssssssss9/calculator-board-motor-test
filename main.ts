keyboard.kbEvent(KeyValue.key1, function () {
    lcdDisplay.lcdSetBgIamge("fruit.png")
})
input.onButtonPressed(Button.A, function () {
    keyboard.motorRun(Motors.M1, Dir.CW, 170)
    lcdDisplay.lcdSetBgcolor(0xFF0000)
})
input.onButtonPressed(Button.B, function () {
    keyboard.motorStop(Motors.All)
    lcdDisplay.lcdSetBgcolor(0xffffff)
})
basic.showIcon(IconNames.No)
lcdDisplay.lcdInitIIC()
lcdDisplay.lcdClearAll()
keyboard.motorStop(Motors.All)
basic.forever(function () {
	
})
