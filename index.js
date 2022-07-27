var numberOfKey = document.querySelectorAll(".key").length;

for(var i  = 0; i < numberOfKey; i++){
    document.querySelectorAll(".key")[i].addEventListener("click", function(){
        var button = this.innerHTML;
        
        makeSound(button);
        
    
    })
}


    document.addEventListener("keydown", function(event){
  
        makeSound(event.key);
        
    
    })

function makeSound(key){

    switch (key) {
        case "g":
            var C = new Audio("sounds/c3.mp3");
            C.play();
            break;

            case "f":
            var D = new Audio("sounds/d3.mp3");
            D.play();
            break;

            case "a":
            var E = new Audio("sounds/e3.mp3");
            E.play();
            break;

            case "c":
            var F = new Audio("sounds/f3.mp3");
            F.play();
            break;

            case "b":
            var G = new Audio("sounds/g3.mp3");
            G.play();
            break;

            case "d":
            var A = new Audio("sounds/a4.mp3");
            A.play();
            break;

            case "e":
            var B = new Audio("sounds/b3.mp3");
            B.play();
            break;
    
        default: console.log("press the wrong key");
            break;
    }

}

var nb_check = document.querySelectorAll("#accept").length;

for(i = 0 ;i < nb_check; i++ ){
    document.querySelectorAll("#accept")[i].addEventListener("click",)

    getItRight();
}

function getItRight(){
    switch (cas) {
        case "a":
            return true;
            break;
    
        default:
            break;
    }
}


var checked = false;

function check(){
    
    if(document.get = true){
        alert("hee");
    }
}

var btn_a = document.getElementById("btn-a");
btn_a.addEventListener("click", check );

