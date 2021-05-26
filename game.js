const { Player }= require("./player");
const {HumanOne } = require("./human");
const {HumanTwo} = require("./human");
const {AI} = require("./ai");
const Prompt = ("prompt-sync");

class Game {
    constructor(){
        this.ai = new AI;
        this.playerOne= new Player();
        this.PlayerTwo = new Player();
        
    }

    runGame(){
        this.rules();

    }

    rules(){
        console.log("Let's play Rock Paper Scissors Lizard Spock!!");
        console.log("The rules are simple: Guess a gesture that beats your opponents!");
        console.log("GOOD LUCK!");
        
}




