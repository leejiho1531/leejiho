def on_button_pressed_a():
    radio.send_number(320)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    radio.send_number(270)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    radio.send_number(150)
input.on_button_pressed(Button.B, on_button_pressed_b)

radio.set_group(255)
basic.show_leds("""
    . . . . .
        # # # . .
        . . # . .
        . . # # #
        . . . . .
""")
basic.pause(100)
basic.clear_screen()

def on_forever():
    radio.set_group(255)
basic.forever(on_forever)
