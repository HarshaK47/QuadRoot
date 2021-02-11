function calci(){


var a = parseFloat(document.getElementById("a").value);
var b = parseFloat(document.getElementById("b").value);
var c = parseFloat(document.getElementById("c").value);
if((b*b)>=(4*a*c)){
     var D = parseFloat((b*b) - (4*a*c));
    var u = parseFloat(Math.sqrt(D));
    var r1 = (((-b)+(u))/(2*a));
    var r2 = parseFloat(((-b)-(u))/(2*a));
    document.getElementById("result1").value=r1.toPrecision(4);
    document.getElementById("result2").value=r2.toPrecision(4);
}
else{
    var D = parseFloat((4*a*c)-(b*b));
    var u = parseFloat(Math.sqrt(D));
    var ra1 = (-b)/(2*a);
    var ra2 = (u)/(2*a);
    
    document.getElementById("result1").value= ra1.toPrecision(4)+'+'+ra2.toPrecision(4)+'i';
    document.getElementById("result2").value= ra1.toPrecision(4) +'-'+ra2.toPrecision(4)+'i';
}


}

