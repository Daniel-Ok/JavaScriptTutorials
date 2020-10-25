const defaultResult = 0;
let currentResults = defaultResult;//initialise with another variable
let logEntries = [];

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, CalcNum){
    const calcDescription = `${resultBeforeCalc} ${operator} ${CalcNum}`;
    outputResult(currentResults, calcDescription); // from vendor file
}

function getUserNumInput(){
    return parseInt(userInput.value);
}
function add(){
    const enteredNum = getUserNumInput();
    const initialRes = currentResults;
    currentResults += enteredNum;
    createAndWriteOutput('+', initialRes, enteredNum);
    const logEntry = {
        operation: 'ADD',
        prevRes: initialRes,
        number: enteredNum,
        result: currentResults
    };//object created
    logEntries.push(LogEntry);
    console.log(logEntry.operation);
}



function subtract(){
    const enteredNum = getUserNumInput();
    const initialRes = currentResults;
    currentResults -= enteredNum;
    createAndWriteOutput('-', initialRes, enteredNum);
}

function multiply(){
    const enteredNum = getUserNumInput();
    const initialRes = currentResults;
    currentResults *= enteredNum;
    createAndWriteOutput('*', initialRes, enteredNum);
}
function divide(){
    const enteredNum = getUserNumInput();
    const initialRes = currentResults;
    currentResults /= enteredNum;
    createAndWriteOutput('/', initialRes, enteredNum);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click', divide);