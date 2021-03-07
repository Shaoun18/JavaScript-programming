function time(){
var datobject = new Date();

document.getElementById("dfat").innerHTML="Current Date : "+ datobject.getHours() + ":" 
+ datobject.getMinutes() +":"+ datobject.getSeconds() + " PM "+" Year : "+
 datobject.getYear(); 

};

setInterval(time,1000);
