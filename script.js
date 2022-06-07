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


