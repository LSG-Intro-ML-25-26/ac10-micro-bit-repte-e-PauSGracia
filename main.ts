let show_graph = true
let x = 2
let y = 2
function graph() {
    led.plotBarGraph(input.temperature(), 50)
}

function show_drop() {
    let x: number;
    let y: number;
    let accX = input.acceleration(Dimension.X)
    let accY = input.acceleration(Dimension.Y)
    led.plot(x, y)
    basic.pause(500)
    basic.clearScreen()
    if (accX <= 150 && x > 0) {
        x = x - 1
    }
    
    if (accX > 150 && y < 4) {
        x = x + 1
    }
    
    if (accY <= 150 && y > 0) {
        y = y - 1
    }
    
    if (accY > 150 && y < 4) {
        y = y + 1
    }
    
}

basic.forever(function on_forever() {
    
    if (input.buttonIsPressed(Button.A)) {
        show_graph = true
    } else if (input.buttonIsPressed(Button.B)) {
        show_graph = false
    }
    
    if (show_graph == true) {
        graph()
    } else if (show_graph == false) {
        show_drop()
    }
    
    
})
