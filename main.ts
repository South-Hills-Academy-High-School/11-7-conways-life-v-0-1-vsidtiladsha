function drawgrid () {
    gridsprites = []
    current_y = 0
    for (let row of grid) {
        for (let griddpace of row) {
            if (griddpace == 1) {
                gridsprite = sprites.create(img`
                    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                    7 7 7 2 2 2 2 7 7 2 7 7 7 7 7 7 
                    7 7 7 7 7 7 7 7 7 2 2 2 2 2 7 7 
                    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                    7 7 7 7 2 7 7 7 7 7 7 7 7 7 7 7 
                    7 7 7 7 2 7 7 7 7 7 7 7 2 7 7 7 
                    7 7 7 7 2 2 2 2 2 2 2 2 2 7 7 7 
                    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                    `, SpriteKind.Player)
                gridsprite.setPosition(current_x, current_y)
                gridsprites.push(gridsprite)
            }
            current_x += 10
        }
        current_y += 10
    }
}
let current_x = 0
let gridsprite: Sprite = null
let current_y = 0
let gridsprites: Sprite[] = []
let grid: number[][] = []
let row_template = [
0,
1,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0
]
let row: number[] = []
for (let index = 0; index < 16; index++) {
    grid.push(row_template)
}
game.onUpdate(function () {
    drawgrid()
})
