const firstSentence = 'Ion castiga 5 lei/luna din salariu, 10000 lei/am bonus si 1500 lei/luna din freelancing';
const secondSentence = 'Andrei are un salariu de 100 euro/luna, un bonus de 9000 lei si mai castiga suplimentar aproximativ  500 usd/luna din freelancing';

function computeIncome(text){
    const myArray = text.split(" ");
for (let i = 0; i < myArray.length; i++){
    for (let j = 0; j < myArray[i].length; j++)
    { if (typeof myArray[i] == "number" ){
        console.log('sunt numere')
    }
}
    // if (typeof text[i] == "number" ){
    //     val = val + myArray[i]
    //     console.log('val')
      
    // }
    console.log(typeof myArray[2])




}

console.log(myArray)


}



computeIncome(firstSentence);
// computeIncome(secondSentence);

