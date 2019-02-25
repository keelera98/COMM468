var sub = document.getElementById("submit");
var clear = document.getElementById("clear");

sub.addEventListener("click", function(e){
    e.preventDefault();
    var val = document.getElementById("value");
    val.innerHeight = " ";
    var newItem = new Item(val.value);
    newItem.addToList();
}, false);

clear.addEventListener("click", function(e){
    e.preventDefault();
	var list = document.getElementById("list");
    while(list.firstChild){
		list.removeChild(list.firstChild);
	}
}, false);

var myList = document.querySelector('ul');

myList.addEventListener("click", function(e){
    e.preventDefault();
    
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('greenColor');
    }
}, false);

myList.addEventListener("dblclick", function(e){
    e.preventDefault();
    
    if(e.target.tagName === 'LI'){
        e.target.style.display = "none";
    }
}, false);

/*Currently Does Not Work

var NodeList = document.getElementsByTagName("LI");

for(var i = 0; i < NodeList.length; i++){
    NodeList[i].setAttribute("draggable", "true");
    NodeList[i].setAttribute("ondragover", "dragOver(event)");
    NodeList[i].setAttribute("ondragstart", "dragStart(event)");
}

var _el;

function dragOver(e) {
  if (isBefore(_el, e.target))
    e.target.parentNode.insertBefore(_el, e.target);
  else
    e.target.parentNode.insertBefore(_el, e.target.nextSibling);
}

function dragStart(e) {
  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("text/plain", null); // Thanks to bqlou for their comment.
  _el = e.target;
}

function isBefore(el1, el2) {
  if (el2.parentNode === el1.parentNode)
    for (var cur = el1.previousSibling; cur && cur.nodeType !== 9; cur = cur.previousSibling)
      if (cur === el2)
        return true;
  return false;
}*/

class Item{
    constructor(item){
        this.item = item;
    }
    
    addToList(){
        var LI = document.createElement("li");
        var text = document.createTextNode(this.item);
        LI.appendChild(text);
        document.getElementById("list").appendChild(LI);
        
    }
        
}
