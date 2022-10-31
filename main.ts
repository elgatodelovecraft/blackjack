input.onPinPressed(TouchPin.P0, function () {
    if (Jugador_1 > Jugador_2 && Jugador_1 <= 21) {
        win_1()
    }
    if (Jugador_2 > Jugador_1 && Jugador_2 <= 21) {
        win_2()
    }
})
input.onButtonPressed(Button.A, function () {
    Jugador_1 = Jugador_1 + randint(1, 11)
    basic.showNumber(Jugador_1)
    if (Jugador_1 > 21) {
        lose_1()
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(Jugador_2)
    basic.pause(1500)
    basic.clearScreen()
})
function win_1 () {
    basic.showNumber(Jugador_1)
    basic.showString("Congratulations Jugador 1")
    game.gameOver()
    control.reset()
}
input.onButtonPressed(Button.B, function () {
    Jugador_2 = Jugador_2 + randint(1, 11)
    basic.showNumber(Jugador_2)
    if (Jugador_2 > 21) {
        lose_2()
    }
})
function win_2 () {
    basic.showNumber(Jugador_2)
    basic.showString("Congratulations Jugador 2")
    game.gameOver()
    control.reset()
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber(Jugador_1)
    basic.pause(1500)
    basic.clearScreen()
})
function lose_2 () {
    basic.showString("Jugador 2 loses")
    basic.clearScreen()
}
function lose_1 () {
    basic.showString("Jugador 1 loses")
    basic.clearScreen()
}
let Jugador_2 = 0
let Jugador_1 = 0
Jugador_1 = randint(2, 11)
Jugador_2 = randint(2, 11)
