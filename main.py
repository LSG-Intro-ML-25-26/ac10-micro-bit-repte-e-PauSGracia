show_graph = True
x = 2
y = 2

def on_forever():
    global show_graph
    if input.button_is_pressed(Button.A):
        show_graph = True
    elif input.button_is_pressed(Button.B):
        show_graph = False  

    if show_graph == True:
        graph()
    elif show_graph == False:
        show_drop()
    pass


def graph():
    led.plot_bar_graph(input.temperature(), 50)

def show_drop():
    accX = input.acceleration(Dimension.X)
    accY = input.acceleration(Dimension.Y)
    led.plot(x, y)
    basic.pause(500)
    basic.clear_screen()

    if accX <= 150 and x > 0:
        x = x - 1
    
    if accX > 150 and y < 4:
        x = x + 1

    if accY <= 150 and y > 0:
        y = y - 1

    if accY > 150 and y < 4:
        y = y + 1

basic.forever(on_forever)
    