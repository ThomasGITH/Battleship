let board = [20][20];

let rows = 10;
let colums = 20;
let tileWidth;
let tileHeight;

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

context.canvas.width = window.innerWidth;
context.canvas.height = window.innerHeight;

tileWidth = (context.canvas.width * 0.80) / rows;
tileHeight = (context.canvas.height * 0.80) / colums;

class Grid {

    constructor() {
    }

    drawGrid() {
        for (let x = 0; x < rows; x++) {
            for (let y = 0; y < colums; y++) {
                let t = 0;
                if(y >= 10)
                {
                    t = new Tile(x * tileWidth, (context.canvas.height * 0.050) + (y * tileHeight));
                }
                else
                {
                    t = new Tile(x * tileWidth, (context.canvas.height * 0.025) + (y * tileHeight));
                }
                console.log(t);
                t.draw();
            }
        }
    }
}

class Tile {

    posX;
    posY;

    constructor(x, y) {
        this.posX = x;
        this.posY = y;
    }

    draw() {
        context.beginPath();

        let beginPoint = (window.innerWidth /2) - (tileWidth * 5);

        context.rect(beginPoint + this.posX, this.posY, tileWidth, tileHeight);
        context.stroke();
    }
}




g = new Grid;
g.drawGrid();