document.getElementById('donate-main-btn').addEventListener('click',function(event){
          var currentBalance=document.getElementById('current-amount').innerText;
                    //console.log(currentBalance);
          document.getElementById('btn-flood-donate').addEventListener('click',function(event){
                   var currentFloodDonation=document.getElementById('current-amount').innerText;
                   //console.log(typeof(currentFloodDonation));
                   var inputDonate=document.getElementById('donation-amount').value; 
                   var newFloodDonationAmount=parseFloat(currentFloodDonation)+parseFloat(inputDonate);
                   
                   currentBalance.innerText=newFloodDonationAmount.innerText;
                   console.log(newFloodDonationAmount);
                   if(isNaN(inputDonate)){

                   }
          });
});
