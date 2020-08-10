function lightup (num: number) {
    led.plot(num % 5, num / 5)
}
input.onButtonPressed(Button.A, function () {
    if (list.length == 25) {
        for (let index = 0; index <= 24; index++) {
            lightoff(index)
        }
        basic.pause(100)
        for (let index = 0; index <= 24; index++) {
            lightup(index)
        }
    } else {
        position = randint(0, 24)
        while (list.indexOf(position) != -1) {
            position = randint(0, 24)
        }
        lightup(position)
        list.push(position)
    }
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index <= 24; index++) {
        lightoff(index)
    }
    images.createBigImage(`
        # # # . # # # . # #
        # . # . # . . . # .
        # # . . # # . . # #
        # . # . # . . . . .
        # . # . # # # . # #
        `).scrollImage(1, 200)
    images.createBigImage(`
        # . # # # . # # # .
        . . # . . . . # . .
        # . # # . . . # . .
        # . # . . . . # . .
        # . # # # . . # . .
        `).scrollImage(1, 200)
    images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `).scrollImage(1, 200)
    list = []
})
input.onButtonPressed(Button.B, function () {
    if (list.length == 0) {
        for (let index = 0; index <= 24; index++) {
            lightup(index)
        }
        basic.pause(100)
        for (let index = 0; index <= 24; index++) {
            lightoff(index)
        }
    } else {
        lightoff(list.shift())
    }
})
function lightoff (num: number) {
    led.unplot(num % 5, num / 5)
}
let position = 0
let list: number[] = []
list = []
