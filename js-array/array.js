let initialValues = [1, 2, 3, "hello", true, null,undefined];
let otherValues = [2, 3, 4, 5, "word", false, "good", [6, 7]];



// initialValues.push(otherValues);
// console.log(initialValues);

// Maisus am adaugat intregul array 
// Mai jos am adauggat elementele din array



for (let i = 0; i < otherValues.length; i++){
    initialValues.push(otherValues[i]);
}

console.log(initialValues);

for (let i = 0; i < initialValues.length; i++){
    if (typeof initialValues[i] === "number"){
        initialValues[i] = initialValues[i] + 3;
    }
}
console.log(initialValues);

for (i = 0; i < initialValues.length; i++){
    if (typeof initialValues[i] === "string"){
        initialValues[i] = initialValues[i] + " happy codding";
    }
}
console.log(initialValues);
for (i = 0; i < initialValues.length; i++){
    if (typeof initialValues[i] === "boolean"){
        initialValues[i] = !initialValues[i];
    }
}
console.log(initialValues);
