const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

context.canvas.width = window.innerWidth;
context.canvas.height = window.innerHeight;

let board = [20][20];
let rows = 20;
let colums = 20;

let tileWidth = window.innerWidth / rows;
let tileHeight = window.innerHeight / colums;

for(i = 0; i < rows; i++)
{
    board = [];
    for(j = 0; i < colums; j++)
    {
        board[i][j] = new Tile(new Vector2(tileWidth * i, tileHeight * j));
    }
}


console.log(tileHeight);

class Tile
{
    constructor(position)
    {
        this.position = position;
    }
}

class Vector2
{
    constructor(x,y)
    {
        this.x = x;
        this.y = y;
    }
}