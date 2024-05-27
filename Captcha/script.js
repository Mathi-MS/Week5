//Selecting Elements
var randomcaptcha = document.querySelector("h2")
var inputcaptcha = document.querySelector("input")
var verify = document.querySelector("a")


//Random password Function
var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
var result =""

for (let i = 0; i < 6; i++) {
        result = result+alpha[Math.floor(Math.random()*alpha.length)] 
}
randomcaptcha.textContent=result

verify.addEventListener("click",function () {
    if (result == inputcaptcha.value) {
        alert("CAPTCHA Verified Successfully!")
        window.location.reload()
    }
    else{
        alert("CAPTCHA Verified Failed,Please Try Again")
        window.location.reload()
    }
})


