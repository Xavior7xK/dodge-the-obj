input.onButtonPressed(Button.A, function () {
    mainCharacter.move(1)
    basic.pause(500)
    mainCharacter.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    Fireball = game.createSprite(2, 2)
    Fireball.set(LedSpriteProperty.X, 1)
    Fireball.set(LedSpriteProperty.Y, 3)
    for (let index = 0; index < 3; index++) {
        basic.pause(500)
        Fireball.move(1)
    }
    Fireball.delete()
})
input.onButtonPressed(Button.B, function () {
    mainCharacter.move(2)
    basic.pause(400)
    mainCharacter.move(-1)
    basic.pause(100)
    mainCharacter.move(-1)
})
let Fireball: game.LedSprite = null
let mainCharacter: game.LedSprite = null
mainCharacter = game.createSprite(1, 3)
let S1 = game.createSprite(0, 4)
let S2 = game.createSprite(1, 4)
let S3 = game.createSprite(2, 4)
let S4 = game.createSprite(3, 4)
let S5 = game.createSprite(4, 4)
let S6 = game.createSprite(4, 3)
let S7 = game.createSprite(4, 2)
let x1 = game.createSprite(4, 3)
mainCharacter.turn(Direction.Left, 90)
let x = 250
let x2 = 2
basic.showNumber(0)
S6.delete()
S7.delete()
x1.delete()
game.setLife(3)
Fireball = game.createSprite(2, 2)
Fireball.delete()
let live1 = game.createSprite(0, 0)
let live2 = game.createSprite(1, 0)
let live3 = game.createSprite(2, 0)
let live4 = 3
basic.pause(2000)
loops.everyInterval(1, function () {
    x = x * 0.95
    S6 = game.createSprite(4, 3)
    for (let index = 0; index < 5; index++) {
        basic.pause(x)
        S6.move(-1)
    }
    S6.delete()
    S7 = game.createSprite(4, 2)
    x1 = game.createSprite(4, 3)
    for (let index = 0; index < 5; index++) {
        basic.pause(x)
        S7.move(-1)
        x1.move(-1)
    }
    S7.delete()
    x1.delete()
})
basic.forever(function () {
    if (mainCharacter.isTouching(S6) || mainCharacter.isTouching(S7) || mainCharacter.isTouching(x1)) {
        game.removeLife(1)
        live4 = live4 - 1
        if (live4 == 2) {
            live3.delete()
        } else if (live4 == 1) {
            live2.delete()
        } else if (live4 == 0) {
            live1.delete()
        } else {
        	
        }
        basic.pause(500)
    }
    if (x2 < 0) {
        basic.showString("You Lose")
    }
    if (Fireball.isTouching(x1)) {
        x1.delete()
    }
    if (Fireball.isTouching(S6)) {
        S6.delete()
    }
    if (Fireball.isTouching(S7)) {
        S7.delete()
    }
})
control.inBackground(function () {
    if (input.buttonIsPressed(Button.B)) {
        music.play(music.stringPlayable("F C5 - - - - - - ", 500), music.PlaybackMode.UntilDone)
    }
    if (input.buttonIsPressed(Button.A)) {
        music.play(music.stringPlayable("F A - - - - - - ", 500), music.PlaybackMode.UntilDone)
    }
})
