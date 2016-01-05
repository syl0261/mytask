/**
 * Created by Administrator on 2015/12/24.
 */
function mp3(){
    var mp3=document.getElementById("mp3");
    if(mp3.paused){
        mp3.play();
    }
    else{
       mp3.pause();
    }
}


