const{ Player }= require("./player");
const Human = require("./human");
const Prompt = ("prompt-sync");

class Game {
    constructor(){
        this.playerOne = new Player(prompt("What is your name, Player?"))
    }


}


module.exports.Game = Game;

