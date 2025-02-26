const passwordinput = document.querySelector("#password");
const togglepassword = document.querySelector("#togglepassword");
const Submitbtn = document.querySelector("#Submitbtn");
const criteriaList = document.querySelector("#criteriaList");
const togglepasswordconfirm = document.querySelector("#togglepasswordconfirm");

const letterCriteria = document.querySelector("#letter")

const capitalCriteria = document.querySelector("#capital")
const numberCriteria = document.querySelector("#number")
const symbolCriteria = document.querySelector("#symbol")
const lengthCriteria = document.querySelector("#length")

const letterRegex=/[a-z]/;
const capitalRegex=/[A-Z]/;
const numberRegex=/[0-9]/;
const symbolRegex=/[@$!%*?&#]/;
// const length


togglepassword.addEventListener("click",()=>{
     const type=passwordinput.type === "password"?"text":"password";
     passwordinput.type=type;
     togglepassword.textContent = type === "password" ? "👁️" :"🙈";
});


togglepasswordconfirm.addEventListener("click", () => {
    const type = confirmpassword.type === "password" ? "text" : "password";  
    confirmpassword.type = type;
    togglepasswordconfirm.textContent = type === "password" ? "👁️" : "🙈";
});





passwordinput.addEventListener('input',(e)=>{
    //  console.log(e.target.value)
    const value = passwordinput.value;
    
    // check for lowercase letter

    if(letterRegex.test(value)){ 
        letterCriteria.classList.remove("invalid");
        letterCriteria.classList.add("valid");

    }else{
        letterCriteria.classList.remove("valid");
        letterCriteria.classList.add("invalid");
    }



    // check for uppercase letter

    if(capitalRegex.test(value)){
        capitalCriteria.classList.remove("invalid");
        capitalCriteria.classList.add("valid");
    }else{
        capitalCriteria.classList.remove("valid");
        capitalCriteria.classList.add("invalid");
    }

    // check for number 

    if(numberRegex.test(value)){
        numberCriteria.classList.remove("invalid");
        numberCriteria.classList.add("valid");
    }else{
        numberCriteria.classList.remove("valid");
        numberCriteria.classList.add("invalid");
    }


    // check for symbol  

    if(symbolRegex.test(value)){
        symbolCriteria.classList.remove("invalid");
        symbolCriteria.classList.add("valid");

    }else{
        symbolCriteria.classList.remove("valid");
        symbolCriteria.classList.add("invalid");
    }
    
    // check for length
 
    if(value.length>=8){
        lengthCriteria.classList.remove("invalid");
        lengthCriteria.classList.add("valid");

    }else{
        lengthCriteria.classList.remove("valid");
        lengthCriteria.classList.add("invalid");
    }

});

Submitbtn.addEventListener("click",()=>{
     criteriaList.style.display = "none";
    alert("Data submitted successfully");
});


