document.getElementById('pay-donate-btn-2').addEventListener('click',function(){
    const donateAmount_2 =getInputValueById('donate-amount-2')
    const totalDonatedAmount_2 = getValueById('donated-balance-2')
    const recentBalance =getValueById('recent-Balance')
    const nowDonatedBalance_2 = totalDonatedAmount_2 + donateAmount_2;
    const  nowBalance_2= recentBalance - donateAmount_2;
    if (!isNaN(donateAmount_2) && donateAmount_2 > 0 && recentBalance>=donateAmount_2) {
        document.getElementById('donated-balance-2').innerText = nowDonatedBalance_2;
        document.getElementById('recent-Balance').innerText = nowBalance_2;
        document.getElementById('modal-2').classList.remove('hidden');
    } else {
        alert("Failed to add money. Please enter a valid amount.");
    }
 
})

document.getElementById('close-btn-2').addEventListener('click', function() {
    document.getElementById('modal-2').classList.add('hidden');
});