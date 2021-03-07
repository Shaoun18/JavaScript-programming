var name1 = new Array(
	
	"Shaoun Chandra Shill",
	"Anupom	Chandra Shill",
	"Parthana Chandra Shill",
	
);

var name2 = [

	"shanta Rani Shill",
	
];

var show1 = name1.slice(0,2);             // number to array print

var merge = name1.concat(name2);      // name1 to connect to name2 

name1.shift();                             // first element delete
name1.unshift("Wife");                    // insert element 
name1.pop();                  // last element delete
delete name1[0];                  // element delete
name1.push("Shanta Rani Shill");    // another name to push

document.getElementById("name").innerHTML=name1[0];           // array to 0 num print
document.write("<br/>");
document.getElementById("name").innerHTML=name1.toString();   // string to length 
document.write("<br/>");
document.getElementById("name").innerHTML=name1.join(" * ");   // string to star ptint  
document.write("<br/>");
document.getElementById("name").innerHTML=merge;   // add to concat   
document.write("<br/>");
document.getElementById("name").innerHTML=show1;    
