var slideItem = 0;

window.onload = function () {
    setInterval(passarSlide,4000);

    
    var slideWidth = document.getElementById("slideshow").offsetWidth;
    var objs = this.document.getElementsByClassName("slide");

    for(var i=0;i<objs.length;i++) {
        objs[i].style.width  = slideWidth+"px";
    }

}

function passarSlide(){
    slideWidth = document.getElementById("slideshow").offsetWidth;
    
    if (slideItem >=3) {
        slideItem = 0;
    }else {
        slideItem ++;
    }
    document.getElementsByClassName("slideshowarea")[0].style.marginLeft = "-"+(slideWidth * slideItem)+"px";

}

function mudarSlide(pos){
    slideItem = pos;
    slideWidth = document.getElementById("slideshow").offsetWidth;
    document.getElementsByClassName("slideshowarea")[0].style.marginLeft = "-"+(slideWidth * slideItem)+"px";



}