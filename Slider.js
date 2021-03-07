setInterval(function(){
	
	if(document.getElementsByClassName("sliderItems")[0].classList.contains("active")){
		
	document.getElementsByClassName("sliderItems")[1].classList.add("active");
	document.getElementsByClassName("sliderItems")[0].classList.remove("active");

	}else if(document.getElementsByClassName("sliderItems")[1].classList.contains("active")){
		
	document.getElementsByClassName("sliderItems")[2].classList.add("active");
	document.getElementsByClassName("sliderItems")[1].classList.remove("active");
		
	}else if(document.getElementsByClassName("sliderItems")[2].classList.contains("active")){
		
	document.getElementsByClassName("sliderItems")[3].classList.add("active");
	document.getElementsByClassName("sliderItems")[2].classList.remove("active");
		
	}else if(document.getElementsByClassName("sliderItems")[3].classList.contains("active")){
		
	document.getElementsByClassName("sliderItems")[0].classList.add("active");
	document.getElementsByClassName("sliderItems")[3].classList.remove("active");
		
	}	
},2000);