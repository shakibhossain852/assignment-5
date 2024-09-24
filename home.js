document.getElementById('blog-nav-btn').addEventListener('click',function(){
    window.location.href='another.html'
})
document.getElementById('pay-donate-btn').addEventListener('click',function(){
    const donateAmount =getInputValueById('donate-amount')
    const totalDonatedAmount = getValueById('donated-balance')
    const recentBalance =getValueById('recent-Balance')
    const nowDonatedBalance = totalDonatedAmount + donateAmount;
    const  nowBalance= recentBalance-donateAmount;
    if (!isNaN(donateAmount) && donateAmount > 0 && recentBalance>=donateAmount) {
        document.getElementById('donated-balance').innerText = nowDonatedBalance;
        document.getElementById('recent-Balance').innerText = nowBalance;

        document.getElementById('modal-1').classList.remove('hidden');
    } else {
        alert("Failed to add money. Please enter a valid amount.");
    }
    
})

document.getElementById('close-btn-1').addEventListener('click', function() {
    document.getElementById('modal-1').classList.add('hidden');
});