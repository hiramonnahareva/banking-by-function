// Update total Field value 
 function preTotalAmount(Totalvalue , inputField) {
     const totalField = document.getElementById (Totalvalue);
    const totalFieldtext = totalField.innerText ;
    const totalFieldAmount =parseFloat(totalFieldtext) ;
    totalField.innerText =  totalFieldAmount +  inputField ; 
   
 }

 /* function inputField() {

 } */
 function inputField (inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldText = inputField.value ;
    const inputFieldAmount = parseFloat (inputFieldText) 
     inputField.value = '' 
     return inputFieldAmount ;
 }
 function preTotalBalanceAmount () {
   const totalbalanceField = document.getElementById ('balanceTotal');  
   const totalbalanceFieldtext = totalbalanceField.innerText ;
   const totalbalanceFieldAmount =parseFloat(totalbalanceFieldtext) ;
   return totalbalanceFieldAmount ;
 }
 function balanceamount ( preBalancevalue , isAdd) {
   const totalbalanceField = document.getElementById ('balanceTotal');
  const totalbalanceAmount =  preTotalBalanceAmount () 
   if (isAdd == true){
   totalbalanceField.innerText =  totalbalanceAmount +  preBalancevalue ; 
  }
  else {
   totalbalanceField.innerText =  totalbalanceAmount -  preBalancevalue ; 
  }
 }

document.getElementById('Deposit-button').addEventListener('click' , function (){
   const depositAmount =  inputField ('Deposit-input') ;
   if (depositAmount > 0) {
    preTotalAmount ('depositTotal' , depositAmount) ;
   balanceamount (depositAmount , true) ;
   }
})
document.getElementById('withdraw-button').addEventListener('click' , function (){
   const withdrawAmount = inputField ('withdraw-input') ;
   const preBalance = preTotalBalanceAmount ()
   if (withdrawAmount > 0 && withdrawAmount <=preBalance) {
   preTotalAmount ('withDrawTotal' , withdrawAmount ) ;
   balanceamount (withdrawAmount ,false ) ;
   }
})
