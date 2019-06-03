var calculate=function(Trianglelength,Trianglewidth,Trianglebase){
var Trianglelength=document.getElementById("sideOne").value;
var Trianglewidth=document.getElementById("sideTwo").value;
var Trianglebase=document.getElementById("sideThree").value;

if(Trianglelength + Trianglewidth<Trianglebase||Trianglewidth+Trianglebase<=Trianglelength||(Trianglebase+Trianglelength)<=Trianglebase)
{
alert ("Not a triangle");

}else if((Trianglelength == Trianglewidth) && (Trianglewidth == Trianglebase) && (Trianglebase == Trianglelength))
{ 
    alert ("Equilateral");
}
else if((Trianglelength == Trianglewidth)||(Trianglewidth == Trianglebase)||(Trianglebase == Trianglelength))
{
    alert ("isoceles");

}else if ((Trianglelength!==Trianglewidth) && (Trianglewidth!==Trianglebase)&&(Trianglebase!==Trianglelength))
{
    alert ("scalene");
}
}
   
   function change(){
    location.reload();
   }
