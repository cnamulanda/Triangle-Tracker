function calculate(){
var L=parseFloat(document.getElementById("l").value);
var W=parseFloat(document.getElementById("w").value);
var B=parseFloat(document.getElementById("b").value);

if(Trianglelength + Trianglewidth<Trianglebase||Trianglewidth+Trianglebase<=Trianlgelength||(Trianglebase+Trianglelength)<=Trianglebase{
document.getElementById('answer').innerHTML="Not a triangle"
}
}else if((Trianglelength == Trianglewidth) && (Trianglewidth == Trianglebase) && (Trianglebase == Trianglelength))
{ document.getElementById('answer') .innerHTML="Equilateral"
}else if((Trianglelength == TriangleWidth)||(Trianglwidth == Trianglebase)||(Trianglebase == Trianglelength)){
    document.getElementById('answer') .innerHTML="isoceles"

}else if ((Trianglelength!==Trianglewidth) && (Trianglewidth!==Trianglebase)&&(Trianglebase!==Trianglelength)){
    document.getElementById('answer').innerHTML="scalene"
   
   };
   
   function change(){
    document.getElementByClassName('reset').innerHTML="";
   }
