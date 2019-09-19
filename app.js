let w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0];

let x = w.innerWidth || e.clientWidth || g.clientWidth,
        y = w.innerHeight || e.clientHeight || g.clientHeight;

let width = x - 16,
    height = y - 16;
    

let currentPosition; 

let N = 1 << 0, 
    S = 1 << 1,
    W = 1 << 2,
    E = 1 << 3;
 
let body = document.querySelectorAll('body');


    let layout = [],
        fronteirTest = [];
// Determines the size of the blocks 
    let cellSize = 16,
        cellSpacing = 8,
        cellWidth = Math.floor((width - cellSpacing) / (cellSize + cellSpacing)),
        cellHeight = Math.floor((height - cellSpacing) / (cellSize + cellSpacing)),
        cells = new Array(cellWidth * cellHeight), // each cell’s edge bits
        frontier = [];

    let maxY = Math.floor((height - cellSpacing) / (cellSize + cellSpacing)) - 1,
        maxX = Math.floor((width - cellSpacing) / (cellSize + cellSpacing)) - 1;


    let canvas = document.createElement('canvas');

    canvas.setAttribute("id", "canvas");
    canvas.setAttribute("width", width);
    canvas.setAttribute("height", height);

    body[0].appendChild(canvas);

    let context = canvas.getContext("2d");


    context.translate(
        Math.round((width - cellWidth * cellSize - (cellWidth + 1) * cellSpacing) / 2),
        Math.round((height - cellHeight * cellSize - (cellHeight + 1) * cellSpacing) / 2)
    );



    let canvas2 = document.createElement('canvas');

    canvas2.setAttribute("id", "canvas2");
    // canvas2.setAttribute("width", width);
    // canvas2.setAttribute("height", height);

    body[0].appendChild(canvas2);

    let game = canvas2.getContext("2d");

    

    