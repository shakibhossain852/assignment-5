document.getElementById('pay-donate-btn-3').addEventListener('click',function(){
    const donateAmount_3 =getInputValueById('donate-amount-3')
    const totalDonatedAmount_3 = getValueById('donated-balance-3')
    const recentBalance =getValueById('recent-Balance')
    const nowDonatedBalance_3 = totalDonatedAmount_3 + donateAmount_3;
    const  nowBalance_3= recentBalance - donateAmount_3;
    if (!isNaN(donateAmount_3) && donateAmount_3 > 0 && recentBalance>=donateAmount_3) {
        document.getElementById('donated-balance-3').innerText = nowDonatedBalance_3;
        document.getElementById('recent-Balance').innerText = nowBalance_3;
        document.getElementById('modal-3').classList.remove('hidden');
    } else {
        alert("Failed to add money. Please enter a valid amount.");
    }
 
})

document.getElementById('close-btn-3').addEventListener('click', function() {
    document.getElementById('modal-3').classList.add('hidden');
});