const { Player }= require("./player");
const {Human } = require("./human");
const {AI} = require("./ai");
const Prompt = ("prompt-sync");

class Game {
    constructor(){
        this.playerTwo = new AI("Sheldon");
        this.playerOne= new Human("Kevin");
    }

    ChooseNumberOfPlayers(){
       let numberOfPlayers = prompt("How many humans are plying? One or Two?");
       switch (numberOfPlayers){
           case "One":
               this.playerTwo = new AI("Shedon");
               this.playerOne = new Human("Kevin");
               break;
            case "Two":
                this.playerTwo = new Human("Player Two");
                this.playerOne = new Human("Player One");


       }
       
    }
     
    runGame(){   
                                                             //"main" method 
        this.rules();

        // this.playerOne = new Human();                            //users turn
        // let ai = new AI();                                         // creates new AI and assigns it to ai
        this.ai.chooseOption();    
        this.playerOne.chooseOption();                                   //AI chooses random gesture from arrayGestures
        console.log(aiRandomGesture , this.playerOneTurn);

       if (this.playerOne.gesture == "Rock" && (this.ai.gesture ==="Paper" || aiRandomGesture === "Spock")){
           console.log(this.playerTwo + " Wins");
           this.ai.score++;
       }
       else if(this.playerOneTurn === "Rock" & this.ai.gesture !== "Paper" || aiRandomGesture !== "Spock"){
           console.log("You win!");
           this.playerOne.score++;
       }
       else{
           console.log("Go again");
           this.runGame()
       }
       
       
       
       
       
       
       
       if (this.playerOneTurn == "Paper" && aiRandomGesture ==="Scissors" || aiRandomGesture === "Lizard" ){
           console.log("Sheldon Wins");
           this.ai.score++;
       }
       else if(this.playerOneTurn === "Paper" & aiRandomGesture !== "Scissors" || aiRandomGesture !== "Lizard"){
           console.log("You win!");
           this.playerOne.score++;
       }
       else{
           console.log("Go again");
           this.runGame()
       }






       if (this.playerOneTurn == "Scissors" && aiRandomGesture ==="Rock" || aiRandomGesture === "Spock" ){
        console.log("Sheldon Wins");
        this.ai.score++;
        }
       else if(this.playerOneTurn === "Scissors" & aiRandomGesture !== "Rock" || aiRandomGesture !== "Spock"){
        console.log("You win!");
        this.playerOne.score++;
        }
       else{
        console.log("Go again");
        this.runGame()
        }





        if (this.playerOneTurn == "Lizard" && aiRandomGesture ==="Rock" || aiRandomGesture === "Scissors" ){
            console.log("Sheldon Wins");
            this.ai.score++;
        }
        else if(this.playerOneTurn === "Lizard" & aiRandomGesture !== "Rock" || aiRandomGesture !== "Scissors"){
            console.log("You win!");
            this.playerOne.score++;
        }
        else{
            console.log("Go again");
            this.runGame()
        }




        if (this.playerOneTurn == "Spock" && aiRandomGesture ==="Paper" || aiRandomGesture === "Lizard" ){
            console.log("Sheldon Wins");
            this.ai.score++;
        }
        else if(this.playerOneTurn === "Spock" & aiRandomGesture !== "Paper" || aiRandomGesture !== "Lizard"){
            console.log("You win!");
            this.playerOne.score++;
        }
        else{
            console.log("Go again");
            this.runGame()
        }
         
         
     
        
        

       



    }

    rules(){
        console.log("Let's play Rock Paper Scissors Lizard Spock!!");
        console.log("The rules are simple: Guess a gesture that beats your opponents!");
        console.log("GOOD LUCK!");
        
}


module.exports.Game = Game;

