const { Player } = require("./player");
const { Player }= require("./player");
const {HumanOne } = require("./human");
const {HumanTwo} = require("./human");
const Prompt = ("prompt-sync");

class AI extends Player{
    constructor(){
        super();
    }

    chooseOption(arrayGestures){
       return arrayGestures[Math.floor(Math.random()* arrayGestures)]
    }

}

module.exports.AI= AI;