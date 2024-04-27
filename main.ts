input.onButtonPressed(Button.A, function () {
    mainCharacter.move(1)
    basic.pause(600)
    mainCharacter.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    if (firex >= 1) {
        Fireball = game.createSprite(2, 2)
        Fireball.set(LedSpriteProperty.X, 1)
        Fireball.set(LedSpriteProperty.Y, 3)
        for (let index = 0; index < 4; index++) {
            basic.pause(500)
            Fireball.move(1)
        }
        firex = 0
        Fireball.delete()
    }
})
input.onButtonPressed(Button.B, function () {
    mainCharacter.move(2)
    basic.pause(400)
    mainCharacter.move(-1)
    basic.pause(100)
    mainCharacter.move(-1)
})
let firex = 0
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
let x = 350
let x2 = 2
S6.delete()
S7.delete()
x1.delete()
game.setLife(3)
led.setBrightness(100)
Fireball = game.createSprite(2, 2)
Fireball.delete()
led.setBrightness(255)
let live1 = game.createSprite(0, 0)
let live2 = game.createSprite(1, 0)
let live3 = game.createSprite(2, 0)
let live4 = 3
firex = 3
let obsata = randint(4, 4)
game.setScore(0)
basic.pause(3000)
loops.everyInterval(1, function () {
    x = x - 5
    if (obsata == 1) {
        S6 = game.createSprite(4, 3)
        for (let index = 0; index < 5; index++) {
            basic.pause(x)
            S6.move(-1)
        }
        S6.delete()
        game.addScore(0.5)
        firex = firex + 0.2
    } else if (obsata == 2) {
        S7 = game.createSprite(4, 2)
        x1 = game.createSprite(4, 3)
        for (let index = 0; index < 5; index++) {
            basic.pause(x)
            S7.move(-1)
            x1.move(-1)
        }
        S7.delete()
        x1.delete()
        game.addScore(1)
        firex = firex + 0.2
    } else if (obsata == 3) {
        S6 = game.createSprite(4, 3)
        S7 = game.createSprite(4, 1)
        for (let index = 0; index < 5; index++) {
            basic.pause(x)
            S6.move(-1)
            S7.move(-1)
        }
        S6.delete()
        S7.delete()
        firex = firex + 0.2
        game.addScore(1)
    } else if (obsata == 4) {
        S6 = game.createSprite(4, 1)
        S7 = game.createSprite(4, 2)
        for (let index = 0; index < 5; index++) {
            basic.pause(x)
            S6.move(-1)
            S7.move(-1)
        }
        S6.delete()
        S7.delete()
        firex = firex + 0.2
        game.addScore(0.5)
    } else {
    	
    }
    obsata = randint(1, 3)
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
    if (input.buttonIsPressed(Button.B)) {
        music.play(music.stringPlayable("F C5 - - - - - - ", 500), music.PlaybackMode.UntilDone)
    }
    if (input.buttonIsPressed(Button.A)) {
        music.play(music.stringPlayable("F A - - - - - - ", 500), music.PlaybackMode.UntilDone)
    }
    if (input.buttonIsPressed(Button.AB)) {
        music.play(music.stringPlayable("A C G C E C D C ", 500), music.PlaybackMode.UntilDone)
    }
    if (x2 < 0) {
        basic.showString("You Lose")
    }
    if (Fireball.isTouching(x1)) {
        x1.delete()
        Fireball.delete()
    }
    if (Fireball.isTouching(S6)) {
        S6.delete()
        Fireball.delete()
    }
    if (Fireball.isTouching(S7)) {
        S7.delete()
        Fireball.delete()
    }
})
