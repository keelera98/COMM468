var request = new XMLHttpRequest();
var sub = document.getElementById("submit");

request.open('GET', 'https://api.nasa.gov/planetary/apod?api_key=Lvre45FXqbw0Iq8Uzv1TigJh7K2PhsYlgvumzg7X', true);
	
	request.send();

request.onload = function(){
		var data = JSON.parse(request.responseText);
    if(data.media_type == "video"){
        document.getElementById("pic").style.display = "none";
        var frame = document.querySelector("iframe");
        var frameCont = document.getElementById("iframe-container");
            frameCont.style.display = "block";
        frame.style.display = "block";
        frame.src = data.url;
        document.getElementById("date").innerHTML = "DATE: " + data.date;
		  document.getElementById("exp").innerHTML = data.explanation;
		  document.getElementById("title").innerHTML = data.title;
    }else{
		  document.getElementById("date").innerHTML = "DATE: " + data.date;
		  document.getElementById("pic").src = data.hdurl;
		  document.getElementById("exp").innerHTML = data.explanation;
		  document.getElementById("title").innerHTML = data.title;
        }
	}

sub.addEventListener("click", function(){
	var value = document.getElementById("value");
	var date = value.value;
	request.open('GET', 'https://api.nasa.gov/planetary/apod?api_key=Lvre45FXqbw0Iq8Uzv1TigJh7K2PhsYlgvumzg7X&date=' + date, true);
	
	request.send();

	request.onload = function(){
		var data = JSON.parse(request.responseText);
		if(data.media_type == "video"){
            document.getElementById("pic").style.display = "none";
            var frame = document.querySelector("iframe");
            var frameCont = document.getElementById("iframe-container");
            frameCont.style.display = "block";
            frame.style.display = "block";
            frame.src = data.url;
            document.getElementById("date").innerHTML = "DATE: " + data.date;
              document.getElementById("exp").innerHTML = data.explanation;
              document.getElementById("title").innerHTML = data.title;
    }else{
          var frameCont = document.getElementById("iframe-container");
          document.getElementById("pic").style.display = "block";
          frameCont.style.display = "none";
		  document.getElementById("date").innerHTML = "DATE: " + data.date;
		  document.getElementById("pic").src = data.hdurl;
		  document.getElementById("exp").innerHTML = data.explanation;
		  document.getElementById("title").innerHTML = data.title;
        }
	}
}, false);



