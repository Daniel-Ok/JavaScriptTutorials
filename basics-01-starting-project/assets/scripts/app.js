const defaultResult = 0;
let currentResults = defaultResult;//initialise with another variable

function add(num1, num2){
    const result = num1 + num2;
    alert('The result is ' + result);
}
add(1,2);
add(3,5);
currentResults = (currentResults + 10) * 3 / 2 - 1;
let calculationDescription = '(' + defaultResult + '+ 10)'; 

outputResult(currentResults,calculationDescription);

