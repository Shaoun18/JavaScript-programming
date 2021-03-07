//document.getElementById("demo1").style.display="none";

//document.getElementById("demo1").style.background="blue";
//document.getElementById("demo1").style.fontSize="50px";


//document.getElementById("clickbtn").addEventListener("click",function(){
	
	//document.getElementById("demo1").setAttribute("style",
	//"display:block;opacity:1;transform:rotate(360deg)");
	
//});

//document.getElementById("clickbtn2").addEventListener("click",function(){
	
	//document.getElementById("demo1").setAttribute("style",
	//"display:block;opacity:1;transform:rotate(-360deg)");
	
//});


document.getElementById("clickbtn").addEventListener("click",function(){
	
	document.getElementById("demo1").setAttribute("style",
	"opacity:1;transform:scale(1)");
	
});

document.getElementById("clickbtn2").addEventListener("click",function(){
	
	document.getElementById("demo1").setAttribute("style",
	"opacity:0;transform:scale(0)");
	
});
