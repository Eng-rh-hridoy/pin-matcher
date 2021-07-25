var pinGenerateDis = document.getElementById("generateDis");
var generateButton = document.querySelector(".generate-btn"); 
var randomNumber = getRandomNumberBetween(1000,9999);
var inputDis = document.getElementById("inputDis");
var numbers = Array.from(document.querySelectorAll(".button"));
var submitBtn = document.getElementById("submitBtn");

document.querySelector(".wrong").style.display = "none";
document.querySelector(".right").style.display = "none";

generateButton.addEventListener("click", function(){
    pinGenerateDis.value = randomNumber;
});


for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    number.addEventListener("click", function(e){
        var clickedNumber = e.target;
        
        if(clickedNumber.innerText == "C"){
            inputDis.value = "";
        }
        else if(clickedNumber.innerText == "<"){
            inputDis.value = inputDis.value.slice(0, -1);
        }
        else{
            inputDis.value += clickedNumber.innerText;
        }   
    });
}

submitBtn.addEventListener("click", function(){
    if(inputDis.value == pinGenerateDis.value){
        document.querySelector(".right").style.display = "block";
    }
    else{
        document.querySelector(".wrong").style.display = "block";
    }
})




// ***********************//
function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}