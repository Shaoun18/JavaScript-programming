document.getElementById("clickbtn1").addEventListener("click",show);

function show(){
	
	alert("hello");
	
}

document.getElementByClassName("clickbtn1")[0].addEventListener("click",function(){
	
	alert("hello");
	
});

document.getElementByTagName("button")[0].addEventListener("click",show);


function show(){
	
	alert("hello");
	
}