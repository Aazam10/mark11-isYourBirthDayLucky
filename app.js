var birthDateRef=document.querySelector("#birth-date");
var luckyNumberRef=document.querySelector("#lucky-number");
var btnRef=document.querySelector("#tell-me");
var outputRef=document.querySelector(".output");
var crossRef=document.querySelector("#cross");
var noticeRef=document.querySelector("#notice");



function calculateSumOfDigitsInBirthDate(){
    var birthdateWithoutHyphen=birthDateRef.value.replaceAll("-","");
    var sumOfDigits=0
    for(var i=0;i<birthdateWithoutHyphen.length;i++){
        sumOfDigits=sumOfDigits+Number(birthdateWithoutHyphen.charAt(i));
    }
   return sumOfDigits;
}
function hidemessage(){
    outputRef.innerText="";
}

function checkIfLucky(){
    hidemessage();
    if(birthDateRef.value!=="" && !(Number(luckyNumberRef.value<=0))){
        var calculatedSumOfDigits=calculateSumOfDigitsInBirthDate();
        var luckyNumber=Number(luckyNumberRef.value);
        if(calculatedSumOfDigits%luckyNumber===0){
            outputRef.innerText="YAYYY!!! Your Birthdate Is Lucky"
        }
        else{
            outputRef.innerText="OOPS!! Your Birthdate Is NOT SO Lucky!"
        }
    }else if((Number(luckyNumberRef.value<0))){
        outputRef.innerText="Lucky Number cannot be negative"
    }
    else{
        outputRef.innerText="INPUT FIELDS CANNOT BE EMPTY";
    }
    
    
    
}



btnRef.addEventListener("click",checkIfLucky);
crossRef.addEventListener("click",()=>{
    noticeRef.style.display="none";
})