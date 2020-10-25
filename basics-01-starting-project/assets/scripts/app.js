const defaultResult = 0;
let currentResults = defaultResult;//initialise with another variable
let logEntries = [];

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, CalcNum){
    const calcDescription = `${resultBeforeCalc} ${operator} ${CalcNum}`;
    outputResult(currentResults, calcDescription); // from vendor file
}

function writeToLog(operationIdentifier, prevResult, operationNumber, newResult){
   
    const logEntry = {
        operation: operationIdentifier,
        prevRes: prevResult,
        number: operationNumber,
        result: newResult
    };//object created
    logEntries.push(logEntry);
    console.log(logEntries);
}

function getUserNumInput(){
    return parseInt(userInput.value);
}
function add(){
    const enteredNum = getUserNumInput();
    const initialRes = currentResults;
    currentResults += enteredNum;
    createAndWriteOutput('+', initialRes, enteredNum);
    writeToLog('ADD', initialRes, enteredNum,currentResults)
}



function subtract(){
    const enteredNum = getUserNumInput();
    const initialRes = currentResults;
    currentResults -= enteredNum;
    createAndWriteOutput('-', initialRes, enteredNum);
    writeToLog('SUBTRACT', initialRes, enteredNum,currentResults)
}

function multiply(){
    const enteredNum = getUserNumInput();
    const initialRes = currentResults;
    currentResults *= enteredNum;
    createAndWriteOutput('*', initialRes, enteredNum);
    writeToLog('MULTIPLY', initialRes, enteredNum,currentResults)
}
function divide(){
    const enteredNum = getUserNumInput();
    const initialRes = currentResults;
    currentResults /= enteredNum;
    createAndWriteOutput('/', initialRes, enteredNum);
    writeToLog('DIVIDE', initialRes, enteredNum,currentResults)
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click', divide);