/**
 * Created by Administrator on 2015/12/27.
 */
var bg=document.getElementById("bn1");
var i=0;
var banner= new Array();
banner[0]="images/banner1.jpg";
banner[1]="images/banner2.jpg";
banner[2]="images/banner3.jpg";

function  PageDown(){
    i++;
    if(i>=3){i=0}
    bg.setAttribute("src",banner[i]);
}

function PageUp(){
    i--;
    if(i<0){i=2}
    bg.setAttribute("src",banner[i]);
}
//按钮
function appears(){
    var s=document.getElementById("sub");
    if(s.style.display=="block"){
        s.style.display="none";
    }
    else{
        s.style.display="block";
    }
}