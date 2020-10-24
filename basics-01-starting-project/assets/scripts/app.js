const defaultResult = 0;
let currentResults = defaultResult;//initialise with another variable

function add(){
    const calcDescription = `${currentResults} + ${userInput.value}`;
    currentResults = currentResults + parseInt(userInput.value);
    outputResult(currentResults, calcDescription );
}
addBtn.addEventListener('click', add);


