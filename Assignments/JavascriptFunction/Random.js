var button = document.getElementById("start");
var wins = 0;
var comp = [];
var player = [];
var playerInput;
var count = 0;
var money = 0;
var spend = 0;
var total = 0;
var weekInputTest;
var answerDiv = document.getElementById("answer");

answerDiv.style.display = "none";

button.addEventListener('click', function(){
    var amountOfWeeks = document.getElementById("weeksRan").value;
    weekInputTest = /^\d+$/.test(amountOfWeeks);
    if(weekInputTest == true){
        while(amountOfWeeks > 0){
            comp = winningNumbers();
            player = playerNumbers();
            for(var i = 0; i < 10; i++){
                if(comp[i] == player[i]){
                    count++;
                }
            }
            switch(count){
                case 3:
                    money += 100;
                    wins++;
                    break;
                case 10:
                    money += 1000000;
                    wins++;
                    break;
            }
            count = 0;
            comp = [];
            player = [];
            amountOfWeeks--;
            spend++;
        }

        total = money - spend;
        
        answerDiv.style.display = "block";

        document.getElementById("answer").innerHTML = "You made $" + total + " and won " + wins + " times!" + " you paid a total of $" + spend;
    }else{
        document.getElementById("weeks").value = '';
        alert("Please Enter Valid Input");
        location.reload();
    }
    
}, false);

function winningNumbers(){
    var temp = 0;
    var repeate = true;
    var chosenNumber = [];
    for(var i = 0; i < 10; i++){
        var lottNumber = Math.floor(Math.random()*50) + 1;
        while(repeate){
            if(lottNumber == temp){
                repeate = true;
                lottNumber = Math.floor(Math.random()*50) + 1;
            }else{
                chosenNumber.push(lottNumber);
                temp = lottNumber;
                repeate = false;
            }
        }
        repeate = true;
    }
    chosenNumber.sort(function(a, b){return a-b});
    return chosenNumber;
}

function playerNumbers(){
    var temp = 0;
    var chosenNumber = [];
    for(var i = 0; i < 10; i++){
        var lottNumber = Math.floor(Math.random()*50) + 1;
        if(lottNumber == temp){
            lottNumber = Math.floor(Math.random()*50) + 1;
        }else{
            chosenNumber.push(lottNumber);
            temp = lottNumber;
        }
    }
    player.sort(function(a, b){return a-b});
    return chosenNumber;
}
