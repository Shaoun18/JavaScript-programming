var x = document.querySelector("#countries").value;

document.querySelector("#countries").addEventListener("change",function(){
	
	var selectedNumber = this.value;

	if(selectedNumber == 1){
		
		//document.querySelector("#selectedNumber").innerHTML = "<select id=''><option value=''>Dhaka</option></select>";
		document.querySelector("#selectedNumber").innerHTML = "You have selected Bangladesh!";
	
	}else if(selectedNumber == 2){
		
		alert("You have selected USA");
		
	}else if(selectedNumber == 3){
		
		alert("You have selected India");
		
	}else{
			
	}	
});