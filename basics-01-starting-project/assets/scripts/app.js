const defaultResult = 0;
let currentResults = defaultResult;//initialise with another variable

function add(num1, num2){
    const result = num1 + num2;
    return result;
}
currentResults = add(1,2);


let calculationDescription ='( '+ defaultResult +' + 10) * 3 / 2 - 1' ; 

outputResult(currentResults,calculationDescription);

