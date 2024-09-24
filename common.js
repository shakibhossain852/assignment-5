function getInputValueById(id){
    const inputValue =document.getElementById(id).value;
    valueOfDonate= parseFloat(inputValue)
    return valueOfDonate;
}
function getValueById(id){
    const inputValue =document.getElementById(id).innerText;
    valueOfDonate= parseFloat(inputValue)
    return valueOfDonate;
}


 function showSectionById(id){
    document.getElementById('cards').classList.add('hidden');
    document.getElementById('history').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');

 }
