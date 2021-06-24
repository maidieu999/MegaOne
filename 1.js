document.addEventListener("DOMContentLoaded",function(){
    var trangthai = "duoi300";
    window.addEventListener('scroll',function(){
        if(window.pageYOffset > 300){
           if(trangthai=="duoi300"){ 
            console.log('ở 300 làm gì thì làm')
            trangthai=="tren300";
           }
        }
    })
 },false)