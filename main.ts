namespace SpriteKind {
    export const cursor = SpriteKind.create()
    export const newcursor = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    cursorgridrow += -1
    cursory += -10
    drawgrid()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    grid[cursorgridrow][cursorgridcol] = grid[cursorgridrow[cursorgridcol]] * -1 + 1
    drawgrid()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    cursorgridcol += -1
    cursorx += -10
    drawgrid()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    cursorgridcol += 1
    cursorx += 10
    drawgrid()
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    cursorgridrow += 1
    cursory += 10
    drawgrid()
})
function drawgrid () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    gridsprites = []
    current_y = 0
    for (let row of grid) {
        for (let gridspace of row) {
            if (gridspace == 1) {
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
                gridsprite.left = current_x
                gridsprite.top = current_y
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
let cursorgridrow = 0
let cursorgridcol = 0
let grid: number[][] = []
grid = []
for (let row = 0; row <= 11; row++) {
    grid.push([])
}
for (let colum = 0; colum <= 11; colum++) {
    let row = 0
    let list: number[][] = []
    list[row].push(1)
}
let mySprite = sprites.create(img`
    2 2 2 2 . . 2 2 2 2 
    2 . . . . . . . . 2 
    2 . . . . . . . . 2 
    2 . . . . . . . . 2 
    . . . . . . . . . . 
    . . . . . . . . . . 
    2 . . . . . . . . 2 
    2 . . . . . . . . 2 
    2 . . . . . . . . 2 
    2 2 2 2 . . . 2 2 2 
    `, SpriteKind.newcursor)
cursorgridcol = 0
cursorgridrow = 0
let cursorx = 0
let cursory = 0
mySprite.x = 0
game.onUpdate(function () {
    drawgrid()
})
