// import { supabase } from './script2';


const canvasReference = document.getElementById('board');
const pen = canvasReference.getContext('2d');
const fpsReference = document.getElementById('fpsDisplay');


// So what we need is and have put here is the number of rows and columns, the width and height of both the canvas and every tile. Now this widths and height of the canvases and tiles will change but the rows and columns won't. We also have to add in a pretend grid (or measurements for one) which doesn't change. The reason for this is that the actual grid, the one that stuff is being displayed on changes, so the coordinates are different depending on the scale of the grid. For instance, resizing your window to make it smaller could shift you (the dot on the screen) down and to the right. Of course we don't want this to happen so we say that the variable tileRes is equal to how much precision you can get on each tile, basically how many pixels if it were being displayed. Then we find out how that compares to the displayed one to create accurate x and y coordinates.
const numOfTilesX = 10; // Number of columns
const numOfTilesY = 10; // Number of rows


// For testing (mainly loops)
let gra = false


let canvasWidth, canvasHeight;
const tileRes = 10;
const gridXRes = tileRes * numOfTilesX;
const gridYRes = tileRes * numOfTilesY


// Hitbox stuff 
let TLco;
let TRco;
let BLco;
let BRco;


let scale;
let tileWidth, tileHeight;

// let canvasGridAspectRatio;

refreshValues();


// This function is useful for other functions that only take radians
function  toRadians(angle) {
    let pi = Math.PI;
    result = angle * (pi / 180);
    return result
}

const keysPressed = {};


window.onkeydown = (event) => {
    keysPressed[event.keyCode] = true;
    // console.log(event.keyCode);
    eventHandler(event);
}

// In the keyup event:
window.onkeyup = (event) => {
    keysPressed[event.keyCode] = false;
    eventHandler(event);
}



function eventHandler(event) {
    event.preventDefault();

    // Player movement forwards and backwards 
    if (keysPressed[38]) player.forwardUpdate = -1;
    else if (keysPressed[40]) player.forwardUpdate = 1;
    else player.forwardUpdate = 0;

    // Player rotation right and left
    if (keysPressed[37]) player.rotateRightUpdate = 1;
    else if (keysPressed[39]) player.rotateRightUpdate = -1;
    else player.rotateRightUpdate = 0;

    // Show hitbox or not
    if (keysPressed[72]) {
        if (player.drawHitbox) {
            player.drawHitbox = false;
        } else {
            player.drawHitbox = true;
        }
    }
}





class Player {
    constructor(x, y, size, FOV) {
        // Position
        this.x = x;
        this.y = y;
        
        // Color and size of player on map
        this.color = 'Red';
        this.size = size;

        // Direction and FOV
        this.FOV = FOV;
        this.direction = 0;

        // Handling updates
        this.update = 0; // Updated to 1 when an update happens to one of the other update variables and needs to be checked
        this.forwardUpdate = 0;
        this.rotateRightUpdate = 0;

        // Speeds for when keys are down
        this.forwardSpeed = 1;
        this.rotateRightSpeed = 5;

        // Rotating variables
        // this.adj;
        // this.opp;

        // Hitbox
        this.hitboxLength = scale * this.size;
        this.hitbox = {};
        this.drawHitbox = true;


    }

    display() {

        let adj;
        let opp;
        pen.fillStyle = this.color;
        pen.beginPath();
        pen.arc(scale * this.x, scale * this.y, scale * this.size, toRadians(0), toRadians(360));
        pen.fill();

        let lineSize = 10;
        adj = lineSize * Math.cos(toRadians((this.direction)));
        opp = lineSize * Math.sin(toRadians((this.direction)));

        let newX = this.x - opp;
        let newY = this.y - adj;

        pen.strokeStyle = 'green';
        pen.lineWidth = 5;

        pen.beginPath();
        pen.moveTo(this.x * scale, this.y * scale);
        pen.lineTo(newX  * scale, newY * scale);
        pen.stroke();
        

    }

    singleRay() {
        //pass
        

    }

    updateHandler() {

        let adj;
        let opp;

        
        if (this.rotateRightUpdate !== 0) {
            // console.log('rotating');
            this.direction += (this.rotateRightSpeed * this.rotateRightUpdate);
        
        }

        // console.log(this.forwardUpdate)
        if (this.forwardUpdate !== 0) {
            let hyp = (this.forwardSpeed  * this.forwardUpdate);
            adj = hyp * Math.cos(toRadians(this.direction));
            opp = hyp * Math.sin(toRadians(this.direction));

            let xChange = opp;
            let yChange = adj;

            let playerNewX = this.x + xChange;
            let playerNewY = this.y + yChange;
            let playerOldX = this.x;
            let playerOldY = this.y;
            let playerFinalX;
            let playerFinalY;


            // As a default finalX and finalY = newX and newY
            playerFinalX = playerNewX;
            playerFinalY = playerNewY;

            // console.log('newX : ', newX);
            // console.log('gridXRes : ', gridXRes);
            // console.log('newY : ', newY);
            // console.log('gridYRes : ', gridYRes);

            if ((playerNewX < 0) || (playerNewX > gridXRes))  {
                // console.log('Thats outa bounds')
                playerFinalX = playerOldX;
            }

            if ((playerNewY < 0) || (playerNewY > gridYRes))  {
                // console.log('Thats outa bounds')
                playerFinalY = playerOldY;
            }

            let gridCoordNewX = Math.floor(playerFinalX / numOfTilesX);
            let gridCoordNewY = Math.floor(playerFinalY / numOfTilesY);

            let gridCoordOldX = Math.floor(playerOldX / numOfTilesX);
            let gridCoordOldY = Math.floor(playerOldY / numOfTilesY);


            // Debugging stuff

            // console.log('grid : ', grid);
            // console.log('newX : ', newX);
            // console.log('scale : ', scale);
            // console.log('newX / scale : ', newX / scale);
            // console.log('gridCoordNewX : ', gridCoordNewX);
            // console.log('gridCoordNewY : ', gridCoordNewY);
            // console.log('grid[gridCoordNewY][gridCoordNewX] : ', grid[gridCoordNewY][gridCoordNewX]);
            
            
            // // If new position is a 1 then
            // if (grid[gridCoordNewY][gridCoordNewX] == 1) {

            //     // If oldY newX is a 0 then go with that and loop through other possibilities aswell
            //     if (grid[gridCoordOldY][gridCoordNewX] == 0) {
            //         finalX = newX;
            //         finalY = oldY;
            //     } else if (grid[gridCoordNewY][gridCoordOldX] == 0) {
            //         finalX = oldX;
            //         finalY = newY;
            //     } else if (grid[gridCoordOldY][gridCoordOldX] == 0) {
            //         finalX = oldX;
            //         finalY = oldY;
            //     }
            // } else {
            //     // Just pass (below is for debugging)
            //     // console.log('alright');
            // }



            // Collision detection with hitbox

            // For newX and stuff
            // Get all four corners



            let size = this.size
            let oldHitbox = this.updateHitbox(playerOldX, playerOldY, size);
            let newHitbox = this.updateHitbox(playerNewX, playerNewY, size);
            
            if (gra == true) {
                console.log('-------oldHitbox : ', oldHitbox);
                console.log('-------newHitbox : ', newHitbox);
                gra = false;
            }
            // X :
            let hitboxOldX;
            let hitboxOldY;
            let hitboxNewX;
            let hitboxNewY;
            // for each of the four corners:
                




            // Y :







            // TLco = (this.hitbox.x, this.hitbox.y);
            // TRco = (this.hitbox.x, this.hitbox.y + this.hitbox.length);
            // BLco = (this.hitbox.x + this.hitbox.length, this.hitbox.y);
            // BRco = (this.hitbox.x + this.hitbox.length, this.hitbox.y + this.hitbox.length);


            // console.log('TLco : ', TLco[0]);
            // console.log('NewX : ', newX)
            // let coords = [TLco, TRco, BLco, BRco];

            // let i;
            // let length = coords.length;

            // for (i = 0; i < length; i++) {
            //     let currentX = coords[i][0];
            //     let currentY = coords[i][1];

                
            //     let currentgridCoordX

            //     // If new position is a 1 then
            //     if (grid[gridCoordNewY][gridCoordNewX] == 1) {
            //         // If oldY newX is a 0 then go with that and loop through other possibilities as well
            //         if (grid[gridCoordOldY][gridCoordNewX] == 0) {
            //             finalX = newX;
            //             finalY = oldY;
            //         } else if (grid[gridCoordNewY][gridCoordOldX] == 0) {
            //             finalX = oldX;
            //             finalY = newY;
            //         } else if (grid[gridCoordOldY][gridCoordOldX] == 0) {
            //             finalX = oldX;
            //             finalY = oldY;
            //         }
            //     } else {
                    // Just pass (below is for debugging)
                    // console.log('alright');
        //         }


        //     }


        //     this.x = finalX
        //     this.y = finalY; // This means that as long as their is some kind of changing for forwardUpdate then it will change the this.x value without having to do 2 seperate ifs. Because it is just multiplying this.forwardSpeed by either -1 or 1 which will turn it negative or keep it as it is.
        }



    }

    move() {
        //pass
    }

    updateHitbox(x, y, size) {

        // Hitbox

        // The reason I do all of this and then basically copy it over is because then there are no issues with reading this.hitbox.something from within this.hitbox

        let hitboxLength = size * 2;

        let hitboxTop = (y) - (hitboxLength / 2);
        // this.hitboxTop = (this.y);
        let hitboxBottom = (x + (hitboxLength));

        let hitboxLeft = (x) - (hitboxLength / 2);
        // this.hitboxLeft = (this.x);
        let hitboxRight = (x + hitboxLength);

        let hitbox = {
            'length': hitboxLength,
            'y': hitboxTop,
            'yLength': y + hitboxBottom,
            'x': hitboxLeft,
            'xLength': x + hitboxRight
        }

        return hitbox;
    }


    displayHitbox() {

        // Only draw if draw is on
        if (this.drawHitbox) {
            pen.fillStyle = 'grey';
            pen.fillRect(scale * player.hitbox.x, scale * player.hitbox.y, scale * player.hitbox.length, scale * player.hitbox.length);
        }
    }
}




// Function to refresh canvas dimensions and tile sizes
function refreshValues() {
    canvasHeight = window.innerHeight * 0.9; // 90% of the window height
    let canvasGridAspectRatio = numOfTilesX / numOfTilesY; // Determine aspect ratio of the grid
    canvasWidth = canvasHeight * canvasGridAspectRatio; // Calculate width based on height and aspect ratio

    // Set canvas width and height
    canvasReference.width = canvasWidth;
    canvasReference.height = canvasHeight;

    // Calculate tile width and height based on the number of tiles and canvas dimensions
    tileWidth = canvasWidth / numOfTilesX;
    tileHeight = canvasHeight / numOfTilesY;

    // To calculate the variable scale we have to find the aspect ratio of gridRes(number of columns multiplyed by the res of each tile) 

    scale = (canvasWidth / gridXRes);

    // console.log('canvasWidth : ', canvasWidth);
    // console.log('canvasHeight : ', canvasHeight);
    // console.log('tileWidth:', tileWidth);
    // console.log('tileHeight:', tileHeight);
}

function makeGrid(numColumnsOfGrid, numRowsOfGrid) {
    let grid = [];
    for (let i = 0; i < numColumnsOfGrid; i++) {
        grid.push([]);
        for (let j = 0; j < numRowsOfGrid; j++) {
            grid[i].push(0); // Fill grid with 0s initially
        }
    }
    return grid;
}

function displayGrid(grid) {

    let numOfTilesX = grid[0].length; // Number of columns
    let numOfTilesY = grid.length;    // Number of rows

    for (let row = 0; row < numOfTilesY; row++) {
        for (let col = 0; col < numOfTilesX; col++) {
            // Set fill color based on grid value
            pen.fillStyle = grid[row][col] == 1 ? 'Turquoise' : 'burlywood';
            
            // Draw rectangle for each tile (adjust position based on row/col)
            pen.fillRect(col * tileWidth, row * tileHeight, tileWidth, tileHeight);
        }
    }
}

function displayPlayer(player) {
    player.display();
}


//This function give us the correct aspect-ratio for the canvas height and width
function getAspectRatio(grid) {
   // window.innerHeight//Pass
   let numOfTilesX = grid[0].length;
   let numOfTilesY = grid.length;

   higher = Math.max(numOfTilesX, numOfTilesY);

   higher = Math.max(numOfTilesX, numOfTilesY);
   lower = Math.min(numOfTilesX, numOfTilesY);

   let aspectRatio = higher / lower
   
   return aspectRatio

}

// Create grid and display it
let grid = makeGrid(numOfTilesX, numOfTilesY);


// Potential Grid to enter so you don't have to click all every time
grid = [
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 1],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 1],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 1, 1],
    [1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 1, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
]



// FPS stuff:
const fps = 60;
const cycleDelay = Math.floor(1000 / fps); //This is to calculate the number of milliseconds between each fps tick
let oldCycleTime = 0;
let cycleCount = 0;
let fpsRate = '...'; //This is the actual fpsRate rather than the desired fpsRate (fps);

// Setting up player class instance 
let player = new Player(30, 30, 2);
// let player = new Player(canvasWidth / 2, canvasWidth / 2, 10);

let xReference1 = document.getElementById('xReference1');
let yReference1 = document.getElementById('yReference1');
let xReference2 = document.getElementById('xReference2');
let yReference2 = document.getElementById('yReference2');


hitboxDisplayReference = document.getElementById('hitboxDisplay');


// Gameloop:

function gameLoop() {

    //Calculate fps ----- NOT NEEDED for now because requestAnimationFrame will be used instead
    cycleCount++;
    if (cycleCount >= 60) {
        cycleCount = 0;
    }
    let startTime = Date.now();
    let cycleTime = startTime - oldCycleTime;
    oldCycleTime = startTime;
    if (cycleCount % 60 == 0) {
        fpsRate = Math.floor(1000 / cycleTime);
    }

    //RefeshValues
    refreshValues();

    //Update player hitbox
    player.hitbox = player.updateHitbox(player.x, player.y, player.size);
    

    

    // pen.fillRect(0, 0, 500, 500);

    //Display board
    displayGrid(grid);



    


    // Display character and character hitbox
    player.updateHandler();
    displayPlayer(player);
    player.displayHitbox();

    // Display hitbox (so as to not be overriden by the display grid or player)
    // pen.fillStyle = 'Grey';
    
    // pen.fillRect(25, 25, 100, 100);


    // Also display hitbox stats to screen
    hitboxDisplayReference.innerHTML = `
    <h1 id="hitboxX">Hitbox X : ${Math.floor(player.hitbox.x)}</h1>
    <h1 id="hitboxY">Hitbox Y : ${Math.floor(player.hitbox.y)}</h1>
    <h1 id="hitboxLength">Hitbox length : ${Math.floor(player.hitbox.length)}</h1>
    `

    //Display fps
    fpsReference.innerHTML = "FPS: " + String(fpsRate);

    // console.log('gridXRes : ', gridXRes);
    // console.log('gridYRes : ', gridYRes);

    // Display position on board
    gridCoordX = Math.floor(player.x / numOfTilesX);
    gridCoordY = Math.floor(player.y / numOfTilesY);
    extendedCoordX = Math.floor(player.x);
    extendedCoordY = Math.floor(player.y);

    xReference1.innerHTML = 'X: ' + String(gridCoordX);
    yReference1.innerHTML = 'Y: ' + String(gridCoordY);

    xReference2.innerHTML = '   (' + String(extendedCoordX) + ')';
    yReference2.innerHTML = '   (' + String(extendedCoordY) + ')';

    


    //Repeat to gameLoop
    // setTimeout(gameLoop, cycleDelay);
    requestAnimationFrame(gameLoop);

    
    
}
//Start game
window.onload = function() {
    gameLoop();
};