const canvasReference = document.getElementById('board');
const pen = canvasReference.getContext('2d');

// let .canvasReference.offsetWidth = canvasReference.offsetWidth;
// let canvasReference.offsetHeight = canvasReference.offsetHeight;
// console.log('canvasReference.offsetHeight', canvasReference.offsetHeight);

// let boardWidth = canvasReference.offsetHeight;
// let boardHeight = canvasReference.offsetHeight;

let numOfTilesX = 10;
let numOfTilesY = 10;

// The reason i use canvasReference.offsetHeight for both tileWidth and Height is because the canvas should be a square 
// and the width of a typical person's browser is normally bigger than the height of a typical person's browser
let tileWidth = canvasReference.offsetHeight / numOfTilesX;
let tileHeight = canvasReference.offsetHeight / numOfTilesY;

console.log('tileWidth : ', tileWidth);
console.log('tileHeight : ', tileHeight);




console.log(canvasReference);
console.log('.canvasReference.offsetWidth : ', canvasReference.offsetWidth);
console.log('canvasReference.offsetHeight : ', canvasReference.offsetHeight);
console.log();


let mouseDown = 0;
window.onmousedown = () => {
    mouseDown++;
}
window.onmouseup = () => {
    mouseDown--;
}



function refreshValues() {
    // .canvasReference.offsetWidth = canvasReference.offsetWidth;
    // canvasReference.offsetHeight = canvasReference.offsetHeight;

    // boardWidth = canvasReference.offsetHeight;
    // boardHeight = canvasReference.offsetHeight;

    numOfTilesX = 10;
    numOfTilesY = 10;
    let tileWidth = canvasReference.offsetHeight / numOfTilesX;
    let tileHeight = canvasReference.offsetHeight / numOfTilesY;
}


function makeGrid(numColumnsOfGrid, numRowsOfGrid) {
    let step1;
    let step2;
    let grid = [];

    for (step1 = 0; step1 < numColumnsOfGrid; step1 ++) {
        grid.push([]);
        for (step2 = 0; step2 < numRowsOfGrid; step2++) {
            grid[step1].push(0);
        }

    }

    return grid;
}


function logGrid(grid) {
    let step1;
    
    let numColumnsOfGrid = grid.length;
    let numRowsOfGrid = grid[0].length;
    console.log('grid being display is :', grid);

    for (step1 = 0; step1 < numColumnsOfGrid; step1 ++) {
        console.log(grid[step1]);

    }
}




function displayGrid(grid, referenceCanvas) {
    refreshValues();

    let numOfTilesX = grid[0].length;
    let numOfTilesY = grid.length - 1;

    console.log('numOfTilesX : ', numOfTilesX);
    console.log('numOfTilesY : ', numOfTilesY);
    console.log('tileWidth : ', tileWidth);
    console.log('tileHeight : ', tileHeight);

    let step1;
    let step2;

    // console.log('numOfTilesX = ', numOfTilesX);
    // console.log('numOfTilesY = ', numOfTilesY);
    // console.log('step1 = ', step1);
    // console.log('step2 = ', step2);

    for (step1 = 0; step1 < numOfTilesY; step1++) {
        for (step2 = 0; step2 < numOfTilesX; step2++) {
            // console.log(step1, step2);
            if (grid[step1][step2] == 1) {
                pen.fillStyle = 'Turquoise';
            } else {
                pen.fillStyle = 'burlywood';
            }

            // console.log('step2 * tileWidth : ', step2 * tileWidth);
            // console.log('step1 * tileHeight : ', step1 * tileHeight);
            // console.log('tileWidth : ', tileWidth);
            // console.log('tileHeight : ', tileHeight);
            // console.log();
            // console.log();

            // pen.fillRect((step2 * tileWidth) + ((.canvasReference.offsetWidth / 2) - ((.canvasReference.offsetWidth / 2) / 2)), step1 * tileHeight, tileWidth, tileHeight);
            pen.strokeRect((step2 * tileWidth), step1 * tileHeight / 2, tileWidth, tileHeight);
            // console.log('checking');
            // pen.fillRect(x, y, width, height)

        }
    }
}

let grid = makeGrid(numOfTilesX, numOfTilesY);
logGrid(grid);


// Potential Grid to enter so you don't have to click all every time
grid = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
]

displayGrid(grid, canvasReference);





// while (true) {
//     refreshValues();
//     displayGrid(grid, canvasReference);
// }
console.log('done for some reason');