unction calculate(){
    var Trianglelength=parseFloat(document.getElementById("l").value);
    var TRianglewidth=parseFloat(document.getElementById("w").value);
    var TRianglebase=parseFloat(document.getElementById("b").value);
    
    if((Trianglelength+Trianglewidth)<=Trianglebase || (Trianglewidth+Trianglebase)<=Trianglelength||(Trianglebase+Trianglelength)<=Trianglewidth){
    document.getElementById('answer').innerHTML="Not a triangle"
    }else if((Trianglelength == Trianglewidth) && (Trianglewidth == Trianglebase) && (Trianglebase == Trianglelength)){
     document.getElementById('answer') .innerHTML="Equilateral"
    }else if((Trianglelength == TRianglewidth)||(Trianglewidth == Trianglebase)||(Trianglebase == Trianglelength)){
    document.getElementById('answer') .innerHTML="isoceles"
    }else if ((Trianglelength!==TRianglewidth) && (Trianglewidth!==Trianglebase)&&(Trianglebase!==Trianglelength)){
     document.getElementById('answer').innerHTML="scalene"
    }
    };
    
    function change(){
     document.getElementByClassName('reset').innerHTML="";
    }