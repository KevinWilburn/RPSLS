const{ Player }= require("./player");

class Human extends Player{
    constructor(){
        super();
    }

    chooseOption(){
        this.gesture= prompt("Choose a gesture " + this.stringBuilder(this.arrayGestures))//make sure using prompt-sync


    }

    stringBuilder(arrayGestures){
        let menuString ="";
        for(let i = 0; i <arrayGestures; i++){
            this.arrayGestures.push(menuString);
        }


    }
}




