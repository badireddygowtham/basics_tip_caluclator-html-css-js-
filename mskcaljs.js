const billAmountElement=document.getElementById("bill_amount");
const percentageTipElement=document.getElementById("percntage_tip");
const tipAmountElement=document.getElementById("tip_amount");
const totalAmountElement=document.getElementById("total_amount");
const errorMessageElement=document.getElementById("error_message");


function calculate(){
    let billAmountValue=billAmountElement.value;
    let percentageTipValue=percentageTipElement.value;
    if(billAmountValue===""){
        errorMessageElement.value="Please enter valid input!";
    }
    else if(percentageTipValue===""){
        errorMessageElement.value="Please enter valid percentage tip value";
    }
    else{
        errorMessageElement.value="";
        tipAmountElement.value=(parseInt(percentageTipValue)/100)*(parseInt(billAmountValue));
        totalAmountElement.value=parseInt(tipAmountElement.value) + parseInt(billAmountValue);
    }

}

