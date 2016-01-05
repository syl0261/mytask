/**
 * Created by Administrator on 2015/12/23.
 */
function Button(){

    if (document.getElementById("menu").style.left!="-70%"){

        document.getElementById("menu").style.left="-70%";
        document.getElementById("container").style.left=0;
    }
   else{
        document.getElementById("menu").style.left=0;
        document.getElementById("container").style.left="70%";
    }
}