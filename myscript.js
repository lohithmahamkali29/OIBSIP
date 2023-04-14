
function calcNumbers(result){
    form.displayResult.value=form.displayResult.value+result;
}

function clearCalculator() {
document.form.displayResult.value = "";

}
function deleteLastChar() {
var currentValue = form.displayResult.value;
if (currentValue.length > 0) {
    form.displayResult.value = currentValue.substring(0, currentValue.length - 1);
}
}
function addParentheses(parentheses) {
    form.displayResult.value = form.displayResult.value + parentheses;
}

function calculatePercent() {
var input = form.displayResult.value;
var percent = parseFloat(input) / 100;
form.displayResult.value = percent;
}


function calculateSquare() {
let num = document.getElementsByName("displayResult")[0].value;
if (!isNaN(num)) {
var input = form.displayResult.value;
    var squareRoot = Math.sqrt(parseFloat(input));
    form.displayResult.value = squareRoot;
} else {
document.getElementsByName("displayResult")[0].value = "Please enter a valid number";
}
}





function changeSign() {
var currentValue = form.displayResult.value;
if (currentValue !== "") {
    var newValue = parseFloat(currentValue) * -1;
    form.displayResult.value = newValue;
}
}



