const defaultResult = 0;
let currentResults = defaultResult;//initialise with another variable

function add(){
    currentResults = currentResults + userInput.value;
    outputResult(currentResults, '');
}
addBtn.addEventListener('click', add);


