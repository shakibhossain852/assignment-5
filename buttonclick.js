document.getElementById('history-btn').addEventListener('click',function(){
   showSectionById('history')
})

document.getElementById('donation-btn-home').addEventListener('click',function(){
   showSectionById('cards')
})

const historyTab =document.getElementById('history-btn');
const donateTab =document.getElementById('donation-btn-home');
historyTab.addEventListener('click',function(){
   historyTab.classList.add(
      "text-black",
      "bg-lime-400"
   );
   donateTab.classList.remove(
      "text-black",
      "bg-lime-400"
   );
});
donateTab.addEventListener('click',function(){
   donateTab.classList.add(
     "text-black",
      "bg-lime-400"
   )
   historyTab.classList.remove(
     "text-black",
      "bg-lime-400"
   );
});
