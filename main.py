def lightup(num: number):
    led.plot(num % 5, num / 5)

def on_button_pressed_a():
    global position
    position += randint(0, 24)
    lightup(position)
    list2.append(position)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    list2.shift()
input.on_button_pressed(Button.B, on_button_pressed_b)

position = 0
list2: List[number] = []
list2 = []
position = 0
lightup(position)

def on_forever():
    pass
basic.forever(on_forever)
