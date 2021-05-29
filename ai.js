const { Player }= require("./player");
// const {HumanOne } = require("./human");
// const {HumanTwo} = require("./human");
// const Prompt = ("prompt-sync");

class AI extends Player{
    constructor(){
        super();
    }

    chooseOption(){
       this.gesture= this.arrayGestures[Math.floor(Math.random()* this.arrayGestures.length)]
    }

}

module.exports.AI= AI;