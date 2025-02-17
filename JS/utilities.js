

function calculateTotalDonations(donationIds) {
                      let total = 0;
                      donationIds.forEach(id => {
                                                  const value = parseFloat(getInputDonationValueById(id));
                                                  if (!isNaN(value)) {
                                                                        total += value;
                                                  }
                      });
                      return total;
}
