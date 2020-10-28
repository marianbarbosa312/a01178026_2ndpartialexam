let Year = 0
let Baby_boom = 0
let sum = 0
let X_Generation = 0
let Millenial = 0
let Z_Generation = 0
let dice = 0
let y = 0
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 20; index++) {
        Year = randint(1949, 2010)
        basic.showNumber(Year)
        if (Year >= 1949 && Year <= 1968) {
            basic.showString("Baby Boom")
            Baby_boom += 1
            sum = sum + Year
        } else if (Year >= 1969 && Year <= 1980) {
            basic.showString("X Generation")
            X_Generation += 1
            sum = sum + Year
        } else if (Year >= 1981 && Year <= 1993) {
            basic.showString("Millenial")
            Millenial += 1
            sum = sum + Year
        } else if (Year >= 1994 && Year <= 2010) {
            basic.showString("Z Generation")
            Z_Generation += 1
            sum = sum + Year
        }
    }
    basic.showString("Average year")
    basic.showNumber((sum + 20) / 10)
    basic.showString("Millenial")
    basic.showNumber(Millenial)
    basic.showString("Baby boomers")
    basic.showNumber(Baby_boom)
})
input.onPinPressed(TouchPin.P1, function () {
    for (let numbers_1 = 0; numbers_1 <= 5; numbers_1++) {
        basic.showNumber(numbers_1)
    }
    basic.clearScreen()
    dice = randint(0, 6)
    basic.showNumber(dice)
    if (dice == 6 || dice == 3) {
        basic.showString("Win")
        music.playMelody("E F F A B C5 C5 C5 ", 120)
    } else {
        basic.showString("Lose")
        music.playTone(147, music.beat(BeatFraction.Whole))
    }
    basic.clearScreen()
})
basic.forever(function () {
    while (input.buttonIsPressed(Button.B)) {
        y = 0
        for (let x = 0; x <= 4; x++) {
            led.plot(x, y)
            basic.pause(200)
            led.unplot(x, y)
            basic.pause(200)
        }
    }
})
