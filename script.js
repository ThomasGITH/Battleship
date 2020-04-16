let board = [20][20];

let rows = 10;
let colums = 15;
let tileWidth;
let tileHeight;

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

context.canvas.width = window.innerWidth;
context.canvas.height = window.innerHeight;

tileWidth = (context.canvas.width * 0.75) / rows;
tileHeight = (context.canvas.height * 0.75) / colums;

class Grid {

    constructor() {
    }

    drawGrid() {
        for (let x = 0; x < rows; x++) {
            for (let y = 0; y < colums; y++) {
                let t = new Tile(x, y);
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

        context.rect(beginPoint + (this.posX * tileWidth), this.posY * tileHeight, tileWidth, tileHeight);
        context.stroke();
    }
}




g = new Grid;
g.drawGrid();