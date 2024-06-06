var backgroundSound = new Audio("resources/game-music-loop-7-145285.mp3");
var jumpSound = new Audio("resources/cartoon-jump-6462.mp3");
var deadSound = new Audio("resources/dead-8bit-41400.mp3");
var startSound = new Audio("resources/game-start-6104.mp3");
var winSound = new Audio("resources/success-fanfare-trumpets-6185.mp3");

backgroundSound.loop =true;

var robo = document.getElementById("robo");
idleImageNumber = 1;
idleAnimationNumber = 0;

function idleAnimation(){

    idleImageNumber = idleImageNumber+1;

    if(idleImageNumber ==11){
        idleImageNumber=1;
    }

    robo.src="resources/idle ("+idleImageNumber+").png";
}

function idleAnimationStart(){
    idleAnimationNumber = setInterval(idleAnimation,200);
}


runImageNumber = 1;
runAnimationNumber = 0;

function runAnimation(){

    runImageNumber = runImageNumber+1;

    if(runImageNumber ==9){
        runImageNumber=1;
    }


    robo.src="resources/run ("+runImageNumber +").png";
}

function runAnimationStart(){
    runAnimationNumber = setInterval(runAnimation,100);
    clearInterval(idleAnimationNumber);
}

jumpImageNumber = 1;
jumpAnimationNumber = 0;
roboMarginTop = 390;

function jumpAnimation(){

    jumpImageNumber = jumpImageNumber+1;

    if (jumpImageNumber <=6){
        roboMarginTop = roboMarginTop -50;
        robo.style.marginTop = roboMarginTop + "px";
    }

    if(jumpImageNumber >= 7){
        roboMarginTop = roboMarginTop +50;
        robo.style.marginTop = roboMarginTop + "px";
    }

    if(jumpImageNumber ==11){
        jumpImageNumber=1;
        clearInterval(jumpAnimationNumber);
        jumpAnimationNumber = 0;
        runImageNumber =0;
        runAnimationStart ();
    }

    robo.src="resources/jump ("+jumpImageNumber +").png";
}

function jumpAnimationStart(){
    clearInterval(idleAnimationNumber);
    runImageNumber=0;
    clearInterval(runAnimationNumber);
    jumpAnimationNumber = setInterval(jumpAnimation,100);
}


function keyCheck(event){
   // alert(event.which);
    //enter=13

    backgroundSound.play();

    var keyCode=event.which;

    if (keyCode == 13){
        if(runAnimationNumber == 0){
            runAnimationStart();
        }
        if(moveBackgroundAnimationId == 0){
            moveBackgroundAnimationId = setInterval(moveBackground,100);
        }
        if(boxAnimationId == 0){
            boxAnimationId = setInterval(boxAnimation,100);
        }
    }

    if (keyCode == 32){
        if (jumpAnimationNumber == 0){
            jumpAnimationStart();
            jumpSound.play();
        }

        if(moveBackgroundAnimationId == 0){
            moveBackgroundAnimationId = setInterval(moveBackground,100);
        }
        if(boxAnimationId == 0){
            boxAnimationId = setInterval(boxAnimation,100);
        }
    }


}

var backgroundImagePositionX = 0;
var moveBackgroundAnimationId = 0;

var score = 0;

function moveBackground(){

    backgroundImagePositionX = backgroundImagePositionX -20;

    document.getElementById("background").style.backgroundPositionX = backgroundImagePositionX + "px";

    score = score + 1;
    document.getElementById("score").innerHTML = score;

    if(score == 250){
        document.getElementById("win").style.visibility = "visible";

        clearInterval(boxAnimationId);

        clearInterval(runAnimationNumber);
        runAnimationNumber = -1;

        clearInterval(jumpAnimationNumber);
        jumpSound.pause();
        jumpAnimationNumber = -1;

        clearInterval(moveBackgroundAnimationId);
        moveBackgroundAnimationId = -1;
        winSound.play();

        backgroundSound.pause();
    }
}

function restartGame() {
    window.location.href = "level2.html";
}

function goToLevel1() {
    window.location.href = "index.html";
}

boxMarginLeft = 1600;

function createBoxes(){

    for(var i=0; i<= 10; i++){
        
        var box = document.createElement("div");
        box.className = "box";
        document.getElementById("background").appendChild(box);
        box.style.marginLeft = boxMarginLeft + "px";
        box.id = "box" + i;

        // boxMarginLeft= boxMarginLeft + 1000;

        if (i < 2){
            boxMarginLeft = boxMarginLeft + 2000;
        }

        if (i >= 2 ){
            boxMarginLeft = boxMarginLeft + 1000;
        }
    }

}

var boxAnimationId= 0;
function boxAnimation(){
    for (var i=0; i<10; i++){

        var box = document.getElementById("box"+i);
        var currentMarginLeft = getComputedStyle(box).marginLeft;
        var newMarginLeft = parseInt(currentMarginLeft)-35;
        box.style.marginLeft = newMarginLeft + "px";


        if (newMarginLeft >= -110 & newMarginLeft <= 100){
            if(roboMarginTop > 300){
                clearInterval(boxAnimationId);
        
                clearInterval(runAnimationNumber);
                runAnimationNumber = -1;
        
                clearInterval(jumpAnimationNumber);
                jumpAnimationNumber = -1;
        
                clearInterval(moveBackgroundAnimationId);
                moveBackgroundAnimationId = -1;

                deadAnimationNumber = setInterval(roboDeadAnimation,100);
                deadSound.play(); 
            }
        }
    }
}

deadImageNumber = 1;
deadAnimationNumber = 0;



function roboDeadAnimation(){
    backgroundSound.pause();

    deadImageNumber = deadImageNumber+1;

    if(deadImageNumber == 11){
        deadImageNumber= 10;
        

        document.getElementById("end").style.visibility = "visible";
        document.getElementById("endScore").innerHTML = score;
    }
    robo.src= "resources/Dead ("+deadImageNumber+").png";
}


function reload(){
    location.reload();
}


//Start Idle
var robo1 = document.getElementById("robo1");
idleImageNumber = 1;
idleAnimationNumber = 0;

startSound.play();

function idleAnimation(){

    idleImageNumber = idleImageNumber+1;

    if(idleImageNumber == 11){
        idleImageNumber= 1;
    }

    robo1.src="resources/idle ("+idleImageNumber+").png";
}

function idleAnimationStart(){
    idleAnimationNumber = setInterval(idleAnimation,200);
}



 
