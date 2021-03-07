function alertme(){
	
	document.querySelector("#demo").innerHTML = "Hi!";
	
}

function removeme(){
	
	document.querySelector("#demo").innerHTML = "";
	
}

document.querySelector("#clickbutton").addEventListener("mousedown",function(){
		
	document.querySelector("#demo").innerHTML = "Hi!";

});	

document.querySelector("#clickbutton").addEventListener("mouseup",function(){
		
	document.querySelector("#demo").innerHTML = "";

});	

document.querySelector("#clickbutton").addEventListener("click",function(){
		
	this.classList.add("shaoun");     // this keyword uses
});	
