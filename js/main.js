let billAmount=document.getElementById('bill-amount');
let percentageTip=document.getElementById('Percentage-Tip');
let tipAmount=document.getElementById('Tip-amount');
let total=document.getElementById('total');
let calculate=document.getElementById('calculate');

calculate.addEventListener("click",function(){
    billAmount=Number(billAmount.value);
    percentageTip=Number(percentageTip.value);

    if(isNaN(billAmount) || billAmount === 0 || billAmount ===null){
        alert('Please Enter Bill Amount')
    }else if(isNaN(percentageTip) || percentageTip === 0  || percentageTip === null){
        alert('Please Enter Percentage Amount')
        
    }else{
        let calculateTip= Math.round(billAmount * percentageTip / 100);
        tipAmount.value= '₾' + calculateTip;

        let calculatedTotal = billAmount + calculateTip;
        total.value= '₾' + calculatedTotal;
    }
})

function isFloat(number){
    return number % 1 !=0;
}