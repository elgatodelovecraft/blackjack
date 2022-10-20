input.onButtonPressed(Button.AB, function () {
    basic.showNumber(Jugador_2)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber(Jugador_1)
})
let Jugador_2 = 0
let Jugador_1 = 0
Jugador_1 = randint(2, 21)
Jugador_2 = randint(2, 21)
basic.forever(function () {
    if (Jugador_1 > 21) {
    	
    }
})
