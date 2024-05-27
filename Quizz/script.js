// Selecting Element 
var btn = document.querySelector("button")
var questionone = document.getElementsByName("questionone")
var questiontwo = document.getElementsByName("questiontwo")
var questionthree = document.getElementsByName("questionthree")
var questionfour = document.getElementsByName("questionfour")
var questionfive = document.getElementsByName("questionfive")
var userscore = document.querySelector(".userscore")
var popupresult = document.querySelector(".popupresult")


//answer
var oneans = "style"
var twoans = "/"
var threeans = "color"
var fourans = "True"
var fiveans = "#demo"


//event
btn.addEventListener("click",function(){
    var score = 0   
    for (let i = 0; i < questionone.length; i++) {
        const element = questionone[i];
       
        if(element.checked){
            if(element.value == oneans){
                score = score+1
            }
        }
    }
    for (let i = 0; i < questiontwo.length; i++) {
        const element = questiontwo[i];
       
        if(element.checked){
            if(element.value == twoans){
                score = score+1
            }
        }
    }
    for (let i = 0; i < questionthree.length; i++) {
        const element = questionthree[i];
       
        if(element.checked){
            if(element.value == threeans){
                score = score+1
            }
        }
    }
    for (let i = 0; i < questionfour.length; i++) {
        const element = questionfour[i];
       
        if(element.checked){
            if(element.value == fourans){
                score = score+1
            }
        }
    }
    for (let i = 0; i < questionfive.length; i++) {
        const element = questionfive[i];
       
        if(element.checked){
            if(element.value == fiveans){
                score = score+1
            }
        }
    }
    popupresult.style.display="flex"
    userscore.textContent=`Score: ${score}`
    console.log(score);
    setTimeout(() => {
        window.location.reload()
    }, 3000);
})