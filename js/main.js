
function getInputValue(inputElement, querySelect){
    // Selecting the input element and get its value ()
    console.log(inputElement);
    var inputVal = document.getElementById(inputElement).value;
  
    console.log(inputVal);
    var box = document.querySelector(querySelect);
    console.log(querySelect);
    console.log(box);
    
 inputVal = inputVal.replace(" ", "");
    box.style.backgroundColor = inputVal;
    

    // box1.style.backgroundColor(inputVal);

   
}  

function addADot(){
var newDot = document.createElement("div");
   
    newDot.classList.add("colorBlock");
    newDot.textContent = "color"

 var dotPosition = document.querySelector(".container");
 dotPosition.appendChild(newDot);


 //this adds the field to enter a color


 var newColorField = document. createElement("input"); 
 newColorField. setAttribute('type', 'text'); 
 newColorField. setAttribute('onclick', 'getInputValue()'); 
 newColorField. setAttribute('placeholder', 'enter a color name'); 
 var newButton = document.createElement("button");

 //Then you can use appendChild to append the created element to the desired parent element.
 var fieldPosition = document.querySelector(".container");
 fieldPosition.appendChild(newColorField);

 var buttonPosition = document.querySelector(".container");
buttonPosition.appendChild(newButton);

}


    
    
       
    
    
   
    