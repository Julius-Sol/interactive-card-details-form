const form = document.querySelector(".card-info");
const cardName = document.querySelector("#cardholder-name");
const cardNumber = document.querySelector("#card-number");
const cardMonth = document.querySelector("#exp-month");
const cardYear = document.querySelector("#exp-year");
const cardCvc = document.querySelector("#cvc-number");
const formButton = document.querySelector(".submit-button");
const completeMsg = document.querySelector(".confirmation-container");

//Regex to check if value is composed of just numbers
const numberRegex = new RegExp("^[0-9]*$");

const checkCardName = ()=>{
  let valid = false
  if(cardName.value.length === 0){
    cardName.nextElementSibling.classList.remove("no-error");
    cardName.classList.add("error-input");
    cardName.nextElementSibling.textContent = "Can't be blank"; 
  }else{
    valid = true;
  }
  return valid;
}

const checkCardNumber = ()=>{
  let valid = false
  if(cardNumber.value.length === 0){
    cardNumber.nextElementSibling.classList.remove("no-error");
    cardNumber.classList.add("error-input");
    cardNumber.nextElementSibling.textContent = "Can't be blank"; 
  }else if(!numberRegex.test(cardNumber.value)){
    cardNumber.nextElementSibling.textContent = "Wrong format, numbers only";
    cardNumber.nextElementSibling.classList.remove("no-error");
    cardNumber.classList.add("error-input");
  }else if(cardNumber.value.length > 0 && cardNumber.value.length < 13 || cardNumber.value.length > 19){
    cardNumber.nextElementSibling.textContent = "Card number must be between 13-19 digits";
    cardNumber.nextElementSibling.classList.remove("no-error");
    cardNumber.classList.add("error-input");
  }else{
    valid = true;
  }
  return valid;
 }

 const checkMonth = () =>{
  let valid = false;
  if(cardMonth.value.length === 0){
    cardMonth.nextElementSibling.classList.remove("no-error");
    cardMonth.classList.add("error-input");
    cardMonth.nextElementSibling.textContent = "Can't be blank"; 
  }else if(!numberRegex.test(cardMonth.value)){
    cardMonth.nextElementSibling.textContent = "Wrong format, numbers only";
    cardMonth.nextElementSibling.classList.remove("no-error");
    cardMonth.classList.add("error-input");
    
  }else if(cardMonth.value.length > 0 && cardMonth.value.length < 2 || cardMonth.value.length > 3){
    cardMonth.nextElementSibling.textContent = "Month must be two digits";
    cardMonth.nextElementSibling.classList.remove("no-error");
    cardMonth.classList.add("error-input");
    
  }else{
    valid = true;
  }
  return valid;
 }

 const checkYear = () =>{
  let valid = false;
  if(cardYear.value.length === 0){
    cardYear.nextElementSibling.classList.remove("no-error");
    cardYear.classList.add("error-input");
    cardYear.nextElementSibling.textContent = "Can't be blank"; 
  }else if(!numberRegex.test(cardYear.value)){
    cardYear.nextElementSibling.textContent = "Wrong format, numbers only";
    cardYear.nextElementSibling.classList.remove("no-error");
    cardYear.classList.add("error-input");
    
  }else if(cardYear.value.length > 0 && cardYear.value.length < 2 || cardYear.value.length > 3){
    cardYear.nextElementSibling.textContent = "Year must be two digits";
    cardYear.nextElementSibling.classList.remove("no-error");
    cardYear.classList.add("error-input");
    
  }else{
    valid = true;
  }
  return valid;
 }

 const checkCvc = () =>{
  let valid = false;
  if(cardCvc.value.length === 0){
    cardCvc.nextElementSibling.classList.remove("no-error");
    cardCvc.classList.add("error-input");
    cardCvc.nextElementSibling.textContent = "Can't be blank"; 
  }else if(!numberRegex.test(cardCvc.value)){
    cardCvc.nextElementSibling.textContent = "Wrong format, numbers only";
    cardCvc.nextElementSibling.classList.remove("no-error");
    cardCvc.classList.add("error-input");
    
  }else if(cardCvc.value.length > 0 && cardCvc.value.length < 3 || cardCvc.value.length > 4){
    cardCvc.nextElementSibling.textContent = "Cvc must be three or four digits";
    cardCvc.nextElementSibling.classList.remove("no-error");
    cardCvc.classList.add("error-input");
    
  }else{
    valid = true;
  }
  return valid;
 }

form.addEventListener("submit",(event)=>{
  event.preventDefault(); 
  // For loop to remove any previous and check for blank inputs
  for(let i = 0; i< form.length-1; i++){
    form[i].nextElementSibling.classList.add("no-error");
    form[i].classList.remove("error-input");
  }

    let isNameValid = checkCardName();
    //Check if card number is only composed of numbers and to make sure card number falls between 13 and 19 digits
    let isNumberValid = checkCardNumber();
    //Check if expiration month is only composed of numbers and to make sure expiration month is 2 digits
    let isMonthValid = checkMonth();
    //Check if expiration year is only composed of numbers and to make sure expiration year is 2 digits
    let isYearValid = checkYear();
    //Check if cvc is only composed of numbers and to make sure cvc is 3 to 4 digits
    let isCvcValid = checkCvc();
    
    let isFormValid = isNameValid && isNumberValid && isMonthValid &&
    isYearValid && isCvcValid;  

    if(isFormValid){
      form.classList.toggle("hide");
      completeMsg.classList.toggle("hide");
    }
});