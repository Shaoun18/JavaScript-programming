function call(){
	
var myprice = 200;
var devideprice = myprice / 100;
var taxamount = 10;
var totaltax = devideprice + 10;
var actualprice = myprice + totaltax;

return actualprice;

}

document.write("Total Price : " + call());