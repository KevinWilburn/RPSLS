const { Player }= require("./player");
const {Human } = require("./human");
const {AI} = require("./ai");
const Prompt = ("prompt-sync");

class Game {
    constructor(){
        this.ai = new AI("Sheldon");
        this.playerOne= new Player("Kevin");
        
        
    }
     
    runGame(){                                                        //"main" method 
        this.rules();

        this.playerOneTurn = new Human();                            //users turn
        let ai = new AI();                                         // creates new AI and assigns it to ai
        ai.chooseOption();                                        //AI chooses random gesture from arrayGestures

       switch(this.playerOneTurn){
           case "Rock":
           
           case "Paper":

           case "Scissiors": 

           case "Lizard":

           case "Spock":
       }

        

    }

    rules(){
        console.log("Let's play Rock Paper Scissors Lizard Spock!!");
        console.log("The rules are simple: Guess a gesture that beats your opponents!");
        console.log("GOOD LUCK!");
        
}


module.exports.Game = Game;

