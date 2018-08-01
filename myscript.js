var heena = document.getElementById('heena');

function pushBtn(obj)
{
    var pushed=obj.innerHTML;
    if(pushed=="="){
        heena.innerHTML=eval(heena.innerHTML); //calculate the value
    }
else if(pushed=="AC")
{ 
heena.innerHTML = "0"; //clear
} else {
    if (heena.innerHTML=="0")
     {
        heena.innerHTML=pushed; 
    }else{
        heena.innerHTML+=pushed;
    }
}

}