const { Player } = require("./player");
const { Player }= require("./player");
const {HumanOne } = require("./human");
const {HumanTwo} = require("./human");
const Prompt = ("prompt-sync");

class AI extends Player{
    constructor(){
        super();
    }

    chooseOption(){
       return this.arrayGestures[Math.floor(Math.random()* this.arrayGestures.length)]
    }

}

module.exports.AI= AI;