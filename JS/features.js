function updateDonation(currentAmountId, donationAmountId, totalAmountId) {
          var currentAmount = document.getElementById(currentAmountId).innerText;
          var inputDonate = document.getElementById(donationAmountId).value;
          if (isNaN(inputDonate) || inputDonate.trim() === "") {
              alert("Please enter a valid donation amount.");
              document.getElementById(donationAmountId).value = '0';
              inputDonate = '0';
          }
          var totalBalance = document.getElementById(totalAmountId).innerText;

          var newDonationAmount = parseFloat(currentAmount) + parseFloat(inputDonate);
          document.getElementById(currentAmountId).innerText = newDonationAmount.toFixed(2);
          document.getElementById(donationAmountId).value = '';

          var newTotalBalance = parseFloat(totalBalance) - parseFloat(inputDonate);
          document.getElementById(totalAmountId).innerText = newTotalBalance.toFixed(2);

           var donationAmount = document.getElementById('donationAmount').value;
          if (donationAmount.trim() !== "" && !isNaN(donationAmount)) {
                   document.getElementById('donate-history-btn').addEventListener('click',function(event){
                    event.preventDefault();
                    var donationHistory = document.getElementById('donate-history-btn');
                    var newHistoryItem = document.createElement('li');
                    var currentTime = new Date().toLocaleString();
                    newHistoryItem.textContent = `Donated $${parseFloat(donationAmount).toFixed(2)} at ${currentTime}`;
                    donationHistory.appendChild(newHistoryItem);
                    donationHistory.style.display = 'block';
                   })
          }
}
