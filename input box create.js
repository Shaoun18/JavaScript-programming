<!-- var inputvalue = document.querySelector("#myinput").value; -->

document.querySelector("#myinput").addEventListener("keyup",function(){
	
	var inputpwd = this.value;
	
	var mypwd = "Shaoun123";

	if(inputpwd == mypwd){
		
		document.querySelector("#demo h1").innerHTML = "<font color = 'green' >Password Matched <font>";
		
			
	}else{
		
		document.querySelector("#demo h1").innerHTML = "<font color = 'red' >Password Not Matched <font>";
		
	}
	
});