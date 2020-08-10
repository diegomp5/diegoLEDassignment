function lightup (num: number) {
    led.plot(num % 5, num / 5)
}
// plots a random led that has not alredy been lit and adds its position to a list
input.onButtonPressed(Button.A, function () {
    if (list.length == 25) {
        // if all the lights are on it flashs off for a 0.1 seconds
        for (let index = 0; index <= 24; index++) {
            lightoff(index)
        }
        basic.pause(100)
        for (let index2 = 0; index2 <= 24; index2++) {
            lightup(index2)
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
// when a+b is pressed it prints reset and clears the list
input.onButtonPressed(Button.AB, function () {
    for (let index3 = 0; index3 <= 24; index3++) {
        lightoff(index3)
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
//when button b is pressed it grabs the first number in the list and removes it at the same time turnign off its led
input.onButtonPressed(Button.B, function () {
    if (list.length == 0) {
        for (let index4 = 0; index4 <= 24; index4++) {
            lightup(index4)
        }
        basic.pause(100)
        for (let index5 = 0; index5 <= 24; index5++) {
            lightoff(index5)
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
