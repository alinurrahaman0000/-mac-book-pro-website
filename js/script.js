

const extraMemoryConst = document.getElementById('mamory-price');
const extraStorageCost = document.getElementById('storege-price'); 
const deliveryCost = document.getElementById('delivery-pirce'); 
const fristPriceId = document.getElementById('frist-price');
const totalPrice = document.getElementById('total-price');
const grandTotalPrice =document.getElementById('grande-total-price');



function updateTotalCost(){
   const  bestPrice = parseInt(fristPriceId.innerText);
   const memory = parseInt(extraMemoryConst.innerText);
   const storage = parseInt(extraStorageCost.innerText);
   const delivery = parseInt(deliveryCost.innerText);
   const grandTotalText = parseInt(grandTotalPrice.innerText);
   const grandTotal = bestPrice + memory + storage + delivery;
   totalPrice.innerText = grandTotal;
   grandTotalPrice.innerText = grandTotal;
}


 


document.getElementById('8gb-memory-cost').addEventListener('click',function(){
     extraMemoryConst.innerText = '0';
     updateTotalCost()
    
    
});
document.getElementById('16gb-memory-cost').addEventListener('click',function(){
     extraMemoryConst.innerText = '180';
     updateTotalCost()
    
    
});
document.getElementById('256gb-ssd-cost').addEventListener('click',function(){
    extraStorageCost.innerText = '0';
    updateTotalCost()
    
    
});
document.getElementById('512gb-ssd-cost').addEventListener('click',function(){
    extraStorageCost.innerText = '100';
    updateTotalCost()
    
    
});
document.getElementById('1tb-ssd-cost').addEventListener('click',function(){
    extraStorageCost.innerText = '180';
    updateTotalCost()
    
    
});
document.getElementById('free-delivery').addEventListener('click',function(){
    deliveryCost.innerText = '0';
    updateTotalCost()
    
    
});
document.getElementById('paid-delivery-cost').addEventListener('click',function(){
    deliveryCost.innerText = '20';
    updateTotalCost()
    
    
});






document.getElementById('promo-button').addEventListener('click', function(){
    const inputValue = document.getElementById('pormo-input');
    const total = document.getElementById('grande-total-price');
    if(inputValue.value == 'stevekaku'){
        const totaltext = parseInt(total.innerText);
        const newTotal = totaltext * .8;
        total.innerText = newTotal;
        document.getElementById("promo-button").disabled = true;
        inputValue.value = '';
    }

    else{
        alert(' Please Enter Right Code');
        document.getElementById("promo-button").disabled = false;
        inputValue.value = '';
    }
    
    
});