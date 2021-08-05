// 1. celciusToFarenheit
function celciusToFarenheit(celcius){
    var farenheit = (celcius * (9 / 5)) + 32;
    return farenheit;
}
let temparatureInCelcius = 32;
let myFarenheit = celciusToFarenheit(temparatureInCelcius);
console.log('Converted', temparatureInCelcius,'degree celcius to farenheit :' , myFarenheit);

// 2. farenheitToCelcius
function farenheitToCelcius(farenheit) {
    var celcius = (32 * farenheit - 32) * (5 / 9);
    celcius = celcius.toFixed(2);
    return celcius;
}
let temperatureInFarenheit = 65;
let myCelcius = farenheitToCelcius(temperatureInFarenheit);
console.log('Converted', temperatureInFarenheit, 'farenheit to Celcius :', myCelcius);

// 3. simple interest calculation  formula
function simpleInterest(principal, rate, time){
    let totalAmount = principal + (principal * rate * time);
    totalAmount = totalAmount.toFixed(2);
    return totalAmount;
}
let moneyBorrowed = 10000;
let interestRate = 0.05;
let givenTime = 3;
let totalPrincipalAfterInterest = simpleInterest(moneyBorrowed, interestRate, givenTime);
console.log('Total Principal with Simple Interest after', givenTime, 'years is', totalPrincipalAfterInterest);

// 4. compound interest formula
function compoundInterest(principal, rate, time){
    let totalAmount = principal * [Math.pow((1 + rate), time) -1];
    totalAmount = totalAmount.toFixed(2);
    return totalAmount;
}
let totalCompoundedPrincipal = compoundInterest(moneyBorrowed, interestRate, givenTime);
console.log('Total Principal with Compound Interest after', givenTime, 'years is', totalCompoundedPrincipal);

// 4. grade calculation
function grade(marks){
    let result;
    if(marks >= 80 && marks <= 100){
        result = 'A+';
        return result;
    }
    else if(marks >= 70 && marks <= 79){
        result = 'A';
        return result;
    }
    else if(marks >= 60 && marks <= 69){
        result = 'A-';
        return result;
    }
    else if(marks >= 50 && marks <= 59){
        result = 'B';
        return result;
    }
    else if(marks >= 40 && marks <= 49){
        result = 'C';
        return result;
    }
    else if(marks >= 33 && marks <= 39){
        result = 'D';
        return result;
    }
    else{
        result = 'F';
        return result;
    }
}
let studentMarks = 33;
let studentResult = grade(studentMarks);
console.log('The Result Is :', studentResult);