var num = [1,2,3,4,5,1,6,2,7,1,3]

// Normal method 
var newArray = []
for(let i=0;i<num.length;i++){
    if(newArray.indexOf(num[i])<0){
        newArray.push(num[i])
    }
    
}
console.log("Normal Method");
console.log(newArray);

// O(n) Complexity 
function removeRepeated() {
    let uniqueValue = new Set(num)
    console.log("O(n) Complexity  Method");
    console.log(uniqueValue)
}
removeRepeated()