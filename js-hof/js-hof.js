let arr = [ 1, 2,  4,  6]


let isPair = (currentValue) => currentValue % 2 == 0;


console.log(arr.every(isPair));


arr.forEach((currentValue) => console.log(currentValue));


let sum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue);
        console.log(sum);


