document.getElementById('pay-donate-btn-3').addEventListener('click',function(){
    const donateAmount_3 =getInputValueById('donate-amount-3')
    const totalDonatedAmount_3 = getValueById('donated-balance-3')
    const recentBalance =getValueById('recent-Balance')
    const nowDonatedBalance_3 = totalDonatedAmount_3 + donateAmount_3;
    const  nowBalance_3= recentBalance - donateAmount_3;
    
    const now =new Date();
    const D = now.toLocaleDateString();
    const T = now.toTimeString();
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const Day=dayNames[now.getDay()];
    if (!isNaN(donateAmount_3) && donateAmount_3 > 0 && recentBalance>=donateAmount_3) {
        document.getElementById('donated-balance-3').innerText = nowDonatedBalance_3;
        document.getElementById('recent-Balance').innerText = nowBalance_3;
        document.getElementById('modal-3').classList.remove('hidden');
        const oneDonate_3= document.getElementById('quota').innerText;
        const p =document.createElement('p');
        p.style.width = '100%';       // Set width
        p.style.height = '25%';      // Set height
        p.style.border = '2px solid gray'; // Set border
        p.style.borderRadius = '15px';
        p.style.padding = '20px';
        p.style.marginBottom = '20px';
         p.innerHTML = `${donateAmount_3} ${oneDonate_3}<br>date:${Day} ${D} ${T}`;
         document.getElementById('history-container').appendChild(p)
    } else {
        alert("Failed to add money. Please enter a valid amount.");
    }
 
})

document.getElementById('close-btn-3').addEventListener('click', function() {
    document.getElementById('modal-3').classList.add('hidden');
});