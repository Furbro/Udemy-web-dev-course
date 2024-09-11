/*The objective is to put beepers in a diagonal line the Standford Karel module only using turnLeft move and putBeeper. 
https://stanford.edu/~cpiech/karel/ide.html */
function main(){
    beepMovebeep();
    turnLeft3();
    moveBeep();
    turnLeft3();
    moveBeep();
    turnLeft3();
    moveBeep();

    
 }

function beepMovebeep(){
    putBeeper();
    move();
    turnLeft();
    move();
    putBeeper();
}

function moveBeep(){
    move();
    turnLeft();
    move();
    putBeeper();
}

function turnLeft3(){
    turnLeft();
    turnLeft();
    turnLeft();
}

/*V2 Using all the means necessary to create an efficient code to put down a diagonal line of beepers */

function putBeeperDiagonalLine(){
    putBeeper();
    move();
    turnLeft();
    move();
    putBeeper();
    turnRight();
    move();
    turnLeft();
    move();
    putBeeper();
    turnRight();
    move();
    turnLeft();
    move();
    putBeeper();
    turnRight();
    move();
    turnLeft();
    move();
    putBeeper();
    turnRight();
}


/*V3 Making a chessboard pattern with Karel on 15x15 */

/*
function main(){
    chessboard5x5();
}
    */
   
function chessboard5x5(){
       putBeeper();
       move();
       move();
       putBeeper();
       move();
       move();
       putBeeper();
       turnLeft(); 
       move();
       turnLeft();
       move();
       putBeeper();
       move();
       move();
       putBeeper();
       move();
       turnRight();
       move();
       turnRight();
       putBeeper();
       move();
       move();
       putBeeper();
       move();
       move();
       putBeeper();
       turnLeft(); 
       move();
       turnLeft();
       move();
       putBeeper();
       move();
       move();
       putBeeper();
       move();
       turnRight();
       move();
       turnRight();
       putBeeper();
       move();
       move();
       putBeeper();
       move();
       move();
       putBeeper();
   }
   
/* chessboard 5x5:
function main(){
    threeBeeper();
    turnLeftMoveLeft();
    twoBeeper();
    turnRightMoveRight();
    threeBeeper();
    turnLeftMoveLeft();
    twoBeeper();
    turnRightMoveRight();
    threeBeeper();
}
*/

function threeBeeper(){
    putBeeper();
    move();
    move();
    putBeeper();
    move();
    move();
    putBeeper();
}

function twoBeeper(){
    move();
    putBeeper();
    move();
    move();
    putBeeper();
    move();
}

function turnLeftMoveLeft(){
    turnLeft(); 
    move();
    turnLeft();
}

function turnRightMoveRight(){
    turnRight();
    move();
    turnRight();
}
