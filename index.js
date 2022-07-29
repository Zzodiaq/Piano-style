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

// Question pour C


const checkbox = document.querySelectorAll(".mycheckbox");
const checkboxLength = checkbox.length;
const rightAnswer = document.querySelector(".r-answer-1");
const btnC = document.querySelector("#btn-a");
let buttonOn = false;

btnC.addEventListener("click", event => {
  if(event.currentTarget.click && rAnswerChecked === true){
    buttonOn = true;
    console.log('gg');
  }else {
      alert('oh oh, wrong answer !');
  }
});


for(i = 0; i < checkboxLength; i++){
    checkbox[i].addEventListener("change", (event) => {

      

    })}

 
let rAnswerChecked = false;

       rightAnswer.addEventListener("change", (event) => {
        if(event.currentTarget.checked){
            rAnswerChecked = true;
        }else{
            rAnswerChecked = false;
        }
       });

       function cbx (obj){
        const allTheBoxLen = document.querySelectorAll('.mycheckbox').length;
       const allTheBox = document.querySelectorAll('.mycheckbox');

       for(i = 0; i < allTheBoxLen; i++){
          allTheBox[i].checked = false;
       }
       obj.checked = true;

       }
       

  