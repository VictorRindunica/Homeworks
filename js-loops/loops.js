
// Media aritmetica

let values = [9, 10, 24, 80, 70, 89, 10,'asd', true];
let result = 0;
let count = 0;


for (let i = 0; i < values.length; i++){
    if (typeof values[i] == "number"){
        result = result + values[i];
        count = count + 1;       
    }
}
console.log(result/count);


// sirul fibonacci


const number = prompt('Introdu numarul de cifre dorite ');
let n1 = 0, n2 = 1, urmatorulT = 0;

for (let i = 1; i <= number; i++) { 
    rmatorulT = n1 + n2;
    n1 = n2;
    n2 = rmatorulT;    
}
console.log(n1);