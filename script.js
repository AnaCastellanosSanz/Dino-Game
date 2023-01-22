
const player = document.getElementById("player");
const cactus = document.getElementById("cactus");
const background = document.getElementById("background");
const buttonPlayStop = document.getElementById("buttonPlayStop")

let scoreInterval;
let score = 0;

const board = document.getElementById("board")


//Cuando se le haga click se le asigna la clase a player 
board.addEventListener("click", function(){
    playerJump();
    
})


function playerJump() {
    player.classList.add("playerJump")
}


//Una vez termina la animación le pido que me elimine la clase player Jump 
player.addEventListener("animationend", () =>{
    removeJump();
})

function removeJump () {
    player.classList.remove("playerJump");
}

//Función que permite parar la animación del cactus, del player 
//Se llama a la función en el botón para que se ejecute cuando demos click sobre él.
function pauseGame () {
    //Se llama a la animación del cactus, del jugador y del fondo para que se paren, despúes de llama a clearinterval 
    cactus.style.animationPlayState = "paused";
    player.style.animationPlayState = "paused";
    background.style.animationPlayState = "paused";
    stopScore ();
}


//Función que reanuda el contador del score
function resumeScore () {
    scoreInterval = setInterval(() =>{
        score ++;
        document.getElementById("score").innerText = score; 
    }, 1000)
}

//Función que para el contador del score
function stopScore () {
    clearInterval(scoreInterval);
}


function resumeGame () {
    cactus.style.animationPlayState = "running";
    player.style.animationPlayState = "running";
    background.style.animationPlayState = "running";
    resumeScore();
}


//Llamo a buttonPlayStop, y después le asigno el evento toggle, que permite cambiar dos estados diferentes, en este caso play y pause, le digo que cambie el estado de play y sale el botón de pausa.
//El toggle funciona como un if --> if buttonPlayStop.classList tiene la clase Play se la saco, else no la tiene se la pongo.

buttonPlayStop.addEventListener("click", () =>{
    if (buttonPlayStop.classList.contains("play")){
        resumeGame();
    }
    else{
        pauseGame();
    }
    buttonPlayStop.classList.toggle("play");
   
})





//setInterval es una función que se ejecuta cada cierto tiempo, score++ es lo mismo que decir score = score + 1, por lo que cada segundo que pasa al score se le suma 1

resumeScore(); 

/*scoreInterval = setInterval(() =>{
    score ++;
    document.getElementById("score").innerText = score; 
}, 1000)*/



function resetScore() {
    score = 0;
        document.getElementById("score").innerText = score; 
}










