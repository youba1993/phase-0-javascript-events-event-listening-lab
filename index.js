
function addingEventListener() {
    const input = document.getElementById('input');

    function clickAlert(){
        alert('I WAS CLICKED')
    }
    
    input.addEventListener('click', clickAlert);
}
addingEventListener()