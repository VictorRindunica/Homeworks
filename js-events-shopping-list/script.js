const submitButton = document.querySelector(".submit")
const inputData = document.querySelector("input")
const outputData = document.querySelector(".list")

submitButton.addEventListener('click', submit);

function submit(click){
    const myText = document.createElement('h2');
    myText.classList.add('.text')
    myText.textContent = inputData.value;


// Aici setam limita de outputuri

    const inputs = document.querySelectorAll('h2')

    if (inputs.length < 10){

// Codul de mai jos face introducerea textului in zona de output

        if(inputData.value != ""){
            outputData.appendChild(myText)
        }
    }else {return}

// Codul de pe rindul urmator curata zona de input

        inputData.value = ""

//  Codul de mai de jos  face backgroundul coloralt (Marcat ca rezolvat)  la  click

        myText.addEventListener('click', solved);  
        function solved (){
        myText.classList.add('myClass');

      }

// Sterge element la duclu click 

    myText.addEventListener('dblclick', deletee); 
        function deletee (click){
        myText.remove()
    }

    

}

