
// 1.
function invertString(string) {
    const reversedString = string.split("").reverse().join("");
    return reversedString;
}

// 2.

function getStringCombos(string) {
    const stringArray = string.split("");
    let comboArray = [];
    for(let i = 0; i < stringArray.length; i++){
        let str  = stringArray[i];
        comboArray.push(str);
        for(let j = i + 1; j < stringArray.length; j++){
            str = str + stringArray[j];
            comboArray.push(str);
        }
    }
    return comboArray;
}

// 3.

function getUniqueChar(string){
    let uniqueChar = "";
    for(let i = 0; i < string.length; i++){
        if(string.indexOf(string.charAt(i), i+1) === -1 &&
            string.indexOf(string.charAt(i)) === i) {
            uniqueChar = string.charAt(i);
            break;
        }
    }
    if(uniqueChar === "") return "There was no unique characters in the string";

    return uniqueChar;
}

// 4.

function getTime() {
    let time = "";
    let now = new Date();

    time += now.getHours() +":" + now.getMinutes() + ":" + now.getSeconds();
    console.log(time);
}

setInterval(getTime, 1000);

// 5.

function sumArray(array) {
    let sum = 0;
    array.forEach( (number) =>{
        if(Number.isInteger(number))
            sum += number;
    });
    return sum;
}