document.querySelector("#loginFrom").addEventListener("submit",function(){
	
	var pwd = document.querySelector("#password").value;
	var countpwd = pwd.length;
	
	if(countpwd <= 8){
		
	document.querySelector("#pwderrormag").innerHTML="Password is to short";

	}else{
		
	document.querySelector("#showdata").innerHTML="Pwd";
	
	}
	
});