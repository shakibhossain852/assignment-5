document.getElementById('blog-nav-btn').addEventListener('click',function(){
    window.location.href='blog.html'
})
document.getElementById('pay-donate-btn').addEventListener('click',function(){
    const donateAmount =getInputValueById('donate-amount')
    const totalDonatedAmount = getValueById('donated-balance')
    const recentBalance =getValueById('recent-Balance')
    const nowDonatedBalance = totalDonatedAmount + donateAmount;
    const  nowBalance= recentBalance-donateAmount;

    const now =new Date();
    const D = now.toLocaleDateString();
    const T = now.toTimeString();
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const Day=dayNames[now.getDay()];

    if (!isNaN(donateAmount) && donateAmount > 0 && recentBalance>=donateAmount) {
        document.getElementById('donated-balance').innerText = nowDonatedBalance;
        document.getElementById('recent-Balance').innerText = nowBalance;
        document.getElementById('modal-1').classList.remove('hidden');

        const oneDonate= document.getElementById('noakhali').innerText;
        const p =document.createElement('p');
        p.style.width = '100%';       // Set width
        p.style.height = '25%';      // Set height
        p.style.border = '2px solid gray'; // Set border
        p.style.borderRadius = '15px';
        p.style.padding = '20px';
        p.style.marginBottom = '20px';
         p.innerHTML = `${donateAmount} ${oneDonate}<br>date:${Day} ${D} ${T}`;
         document.getElementById('history-container').appendChild(p)
         console.log(p);
    } else {
        alert("Failed to add money. Please enter a valid amount.");
    }
    
})

document.getElementById('close-btn-1').addEventListener('click', function() {
    document.getElementById('modal-1').classList.add('hidden');
});
 

