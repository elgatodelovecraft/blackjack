input.onPinPressed(TouchPin.P0, function () {
    if (Jugador_1 > Jugador_2 && Jugador_1 <= 21) {
        win_1()
    }
    if (Jugador_2 > Jugador_1 && Jugador_2 <= 21) {
    	
    }
})
input.onButtonPressed(Button.A, function () {
    Jugador_1 = Jugador_1 + randint(1, 11)
    basic.showNumber(Jugador_1)
})
function lose () {
    if (Jugador_1 > 21) {
        basic.showString("Jugador 1 loses")
        basic.clearScreen()
    }
    if (Jugador_2 > 21) {
        basic.showString("Jugador 2 loses")
        basic.clearScreen()
    }
}
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(Jugador_2)
    basic.pause(1500)
    basic.clearScreen()
})
function win_1 () {
    basic.showNumber(Jugador_1)
    basic.showString("Congratulations Jugador 1")
    game.gameOver()
}
input.onButtonPressed(Button.B, function () {
    Jugador_2 = Jugador_2 + randint(1, 11)
    basic.showNumber(Jugador_2)
})
function win_2 () {
    basic.showNumber(Jugador_2)
    basic.showString("Congratulations Jugador 2")
    game.gameOver()
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber(Jugador_1)
    basic.pause(1500)
    basic.clearScreen()
})
let Jugador_2 = 0
let Jugador_1 = 0
Jugador_1 = randint(2, 21)
Jugador_2 = randint(2, 21)
basic.forever(function () {
    lose()
})
