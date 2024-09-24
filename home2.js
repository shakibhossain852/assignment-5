document.getElementById('pay-donate-btn-2').addEventListener('click',function(){
    const donateAmount_2 =getInputValueById('donate-amount-2')
    const totalDonatedAmount_2 = getValueById('donated-balance-2')
    const recentBalance =getValueById('recent-Balance')
    const nowDonatedBalance_2 = totalDonatedAmount_2 + donateAmount_2;
    const  nowBalance_2= recentBalance - donateAmount_2;
    
    const now =new Date();
    const D = now.toLocaleDateString();
    const T = now.toTimeString();
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const Day=dayNames[now.getDay()];
    if (!isNaN(donateAmount_2) && donateAmount_2 > 0 && recentBalance>=donateAmount_2) {
        document.getElementById('donated-balance-2').innerText = nowDonatedBalance_2;
        document.getElementById('recent-Balance').innerText = nowBalance_2;
        document.getElementById('modal-2').classList.remove('hidden');
        const oneDonate_2= document.getElementById('feni').innerText;

        const p =document.createElement('p');
        p.style.width = '100%';       // Set width
        p.style.height = '25%';      // Set height
        p.style.border = '2px solid gray'; // Set border
        p.style.borderRadius = '15px';
        p.style.padding = '20px';
        p.style.marginBottom = '20px';
         p.innerHTML = `${donateAmount_2} ${oneDonate_2}<br>date:${Day} ${D} ${T}`;
         document.getElementById('history-container').appendChild(p)
         console.log(p);
    } else {
        alert("Failed to add money. Please enter a valid amount.");
    }
 
})

document.getElementById('close-btn-2').addEventListener('click', function() {
    document.getElementById('modal-2').classList.add('hidden');
});