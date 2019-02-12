var genButton = document.getElementById("gen-start");
var genYes = document.getElementById("gen-yes");
var genNo = document.getElementById("gen-no");
var wins = 0;
var comp = [];
var player = [];
var playerInput;
var count = 0;
var money = 0;
var spend = 0;
var total = 0;
var numInputTest;
var weekInputTest;
var answerDiv = document.getElementById("answer");
var playerDiv = document.getElementById("playerEntered");
var container = document.getElementById("container");
var choice;
var jackpot = false;

answerDiv.style.display = "none";
playerDiv.style.display = "none";
container.style.display = "none";

genYes.addEventListener('click', function(){
    choice = true;
    chosen();
}, false);
genNo.addEventListener('click', function(){
    choice = false;
    chosen();
}, false);

function chosen(){
    if(choice == false){
        container.style.display = "flex";
        genButton.addEventListener('click', function(){
            var amountOfWeeks = document.getElementById("weeks").value;
            weekInputTest = /^\d+$/.test(amountOfWeeks);
            if(weekInputTest == true){
                getPlayerInput();
                while(amountOfWeeks > 0){
                    comp = winningNumbers();
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
                    amountOfWeeks--;
                    spend++;
                }

                total = money - spend;

                answerDiv.style.display = "block";
                playerDiv.style.display = "block";

                document.getElementById("answer").innerHTML = "You made $" + total + " and won " + wins + " times!" + " you paid a total of $" + spend;
            }else{
                document.getElementById("weeks").value = '';
                alert("Please Enter Valid Input");
                location.reload();
            }
        }, false);
    }else{
        container.style.display = "flex";
        document.getElementById("weeks").disabled = true;
        genButton.addEventListener('click', function(){
                player = getPlayerInput();
                while(!jackpot){
                    comp = winningNumbers();
                    comp.sort(function(a, b){return a-b});
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
                            jackpot = true;
                            break;
                    }
                    count = 0;
                    comp = [];
                    spend++;
                }

                total = money - spend;

                answerDiv.style.display = "block";
                playerDiv.style.display = "block";

                document.getElementById("answer").innerHTML = "You made $" + total + " and won " + wins + " times!" + " you paid a total of $" + spend;
            }, false);
    }
}

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


function getPlayerInput(){
    playerInput = document.getElementById("numbers").value;
    numInputTest = /[\d,]{20}?/.test(playerInput);
    if(numInputTest == true){
        player = playerInput.split(",");
        player.sort(function(a, b){return a-b});
        document.getElementById("playerEntered").innerHTML = "You entered: " + player;
        return player;
    }else{
        document.getElementById("numbers").value = '';
        alert("Please Enter Valid Input");
        location.reload();
    }
}
