//player factory
const player = (name,sign) => {
    return {name, sign}
}

const adam = player('ryan', "X");

//game module
const game = () => {
    let board = ["", "", "",
                 "", "", "",
                 "", "", ""];

    const turn = (sign,pos) => {
        board[pos] = sign;
    };



    return {turn};
}

//menu Start Button script
let menuBtn = document.querySelector("#startMenu > div > button");
let textBoard = document.querySelector("#textOutput");

menuBtn.addEventListener("click", function(){
    document.querySelector("#startMenu").style.height = 0;
    textBoard.innerText = "Player 1 (X) Move"
});