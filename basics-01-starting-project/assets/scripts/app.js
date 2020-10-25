const defaultResult = 0;
let currentResults = defaultResult;//initialise with another variable

function createAndWriteOutput(operator, resultBeforeCalc, CalcNum){
    const calcDescription = `${resultBeforeCalc} ${operator} ${CalcNum}`;
    outputResult(currentResults, calcDescription)
}

function getUserNumInput(){
    return parseInt(userInput.value);
}
function add(){
    const enteredNum = getUserNumInput();
    const initialRes = currentResults;
    currentResults = currentResults + enteredNum;
    createAndWriteOutput('+', initialRes, enteredNum);
}



function subtract(){
    const enteredNum = getUserNumInput();
    const initialRes = currentResults;
    currentResults = currentResults - enteredNum;
    createAndWriteOutput('-', initialRes, enteredNum);
}

function multiply(){
    const enteredNum = getUserNumInput();
    const initialRes = currentResults;
    currentResults = currentResults*enteredNum;
    createAndWriteOutput('*', initialRes, enteredNum);
}
function divide(){
    const enteredNum = getUserNumInput();
    const initialRes = currentResults;
    currentResults = currentResults/enteredNum;
    createAndWriteOutput('/', initialRes, enteredNum);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click', divide);