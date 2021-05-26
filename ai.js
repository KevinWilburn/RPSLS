const { Player } = require("./player");

class AI extends Player{
    constructor(){
        super();
    }

    chooseOption(arrayGestures){
       return arrayGestures[Math.floor(Math.random()* arrayGestures)]
    }

}