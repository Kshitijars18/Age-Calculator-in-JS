const ageCalculator = document.getElementById("age")
const submitButton = document.getElementById("submitButton")


console.log("so you got the data as",ageCalculator);

function age(){
const age = 2023 - ageCalculator.value

console.log(age);

return age
}

submitButton.addEventListener("click", ()=>{
    const age = 2023 - ageCalculator.value

console.log(age);

return age
})