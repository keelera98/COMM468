var request = new XMLHttpRequest();
var sub = document.getElementById("submit");

request.open('GET', 'https://api.nasa.gov/planetary/apod?api_key=Lvre45FXqbw0Iq8Uzv1TigJh7K2PhsYlgvumzg7X', true);
	
	request.send();

	request.onload = function(){
		var data = JSON.parse(request.responseText);
		document.getElementById("date").innerHTML = "DATE: " + data.date;
		document.getElementById("pic").src = data.hdurl;
		document.getElementById("exp").innerHTML = data.explanation;
		document.getElementById("title").innerHTML = data.title;
	}

sub.addEventListener("click", function(){
	var value = document.getElementById("value");
	var date = value.value;
	request.open('GET', 'https://api.nasa.gov/planetary/apod?api_key=Lvre45FXqbw0Iq8Uzv1TigJh7K2PhsYlgvumzg7X&date=' + date, true);
	
	request.send();

	request.onload = function(){
		var data = JSON.parse(request.responseText);
		document.getElementById("date").innerHTML = "DATE: " + data.date;
		document.getElementById("pic").src = data.hdurl;
		document.getElementById("exp").innerHTML = data.explanation;
		document.getElementById("title").innerHTML = data.title;
	}
}, false);



