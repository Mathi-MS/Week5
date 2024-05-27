//Selecting Elements
var popupimg = document.querySelector(".popupimg")
var closepopup = document.querySelector(".closepopup")
var popup = document.querySelector(".popup")
var imgbox = document.querySelectorAll(".img__box")
var box = document.querySelector(".box")


closepopup.addEventListener("click",function(){
    popup.style.display="none"
    box.style.display="block"
})

imgbox.forEach(function(el) {
    var boximg = el.querySelector("img")
    boximg.addEventListener("click",function(){
        popresult = boximg
        var popupimage = popupimg.querySelector("img")
        popupimage.setAttribute("src",popresult.src)
        popup.style.display="flex"
        box.style.display="none"
    })
});