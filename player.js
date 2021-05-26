class Player{
    constructor(name){
        this.name = name;
        this.gesture;
        this.score = 0;
        this.arrayGestures = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
    }

    chooseOption(){
    }
}


module.exports.Player = Player;