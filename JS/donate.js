document.getElementById('btn-flood-donate').addEventListener('click', function(event) {
          event.preventDefault();
          setTimeout(function() {
          updateDonation('current-amount', 'donation-amount', 'total-amount');
          }, 0);
});
document.getElementById('flood-relief-donate').addEventListener('click', function(event) {
          event.preventDefault();
          setTimeout(function() {
            updateDonation('currentFloodAmount', 'floodDonationAmount', 'total-amount');
          }, 0);
});

document.getElementById('quota-btn-donate').addEventListener('click', function() {
          setTimeout(function() {
              updateDonation('currentQuotaAmount', 'quotaDonationAmount', 'total-amount');
          }, 0);
});





// function updateDonation(currentAmountId, donationAmountId, totalAmountId) {
//           var currentAmount = document.getElementById(currentAmountId).innerText;
//           var inputDonate = document.getElementById(donationAmountId).value;
//           if (isNaN(inputDonate) || inputDonate.trim() === "") {
//               alert("Please enter a valid donation amount.");
//               document.getElementById(donationAmountId).value = '0';
//               inputDonate = '0';
//           }
//           var totalBalance = document.getElementById(totalAmountId).innerText;

//           var newDonationAmount = parseFloat(currentAmount) + parseFloat(inputDonate);
//           document.getElementById(currentAmountId).innerText = newDonationAmount.toFixed(2);
//           document.getElementById(donationAmountId).value = '';

//           var newTotalBalance = parseFloat(totalBalance) - parseFloat(inputDonate);
//           document.getElementById(totalAmountId).innerText = newTotalBalance.toFixed(2);
// }