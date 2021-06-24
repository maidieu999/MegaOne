const v = document.querySelector.bind(document);
const vv = document.querySelectorAll.bind(document);

var menuLists = vv('.menu__list .menu__item');
var menuTab = vv('.menu__content .menu__content-item');


// document.addEventListener("DOMContentLoaded",function(){
//     var trangthai = "duoi300";
//     window.addEventListener('scroll',function(){
//         if(window.pageYOffset > 300){
//            if(trangthai=="duoi300"){ 
//             console.log('ở 300 làm gì thì làm')
//             trangthai=="tren300";
//            }
//         }
//     })
//  },false)


const cookie = ""

//left navigation script
const buttonOpen = v('.hamburger__item');
const buttonClose = v('.btn--close');
const leftNav = v('.left-nav');
buttonOpen.onclick = function(){
    leftNav.classList.add('active')
}
buttonClose.onclick = function(){
    leftNav.classList.remove('active')
}
// menu checkout script
menuLists.forEach((listitem, index) => {
    const tab = menuTab[index];
    listitem.onclick = function(){
        
        v('.menu__list .menu__item.active').classList.remove('active');
        v('.menu__content-item.active').classList.remove('active');



        this.classList.add('active');
        tab.classList.add('active');
    }
});



