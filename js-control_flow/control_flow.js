let tipVehicul = prompt("Alege tipul de vehicul din lista urmatoare: Autoturism, Autobus, Autocar, Microbus, Tractor")

let capacitate = prompt('Ce capacitate are motorul?')

let capacitateCalc = capacitate; 
capacitate = Number(capacitate)
let impozit

switch (tipVehicul) {
    case "Autoturism":
        if (capacitate < 1600){ 
            capacitate = 0} else if (capacitate < 2000) {
                capacitate = 1600} else if (capacitate < 2600) {
                    capacitate = 2000} else if (capacitate < 3000) {
                        capacitate = 2600} else if (capacitate > 3000) {
                            capacitate = 3000} 
        
        
          switch (capacitate) {
            case 0:
                console.log ('Impozit', Math.ceil(impozit = capacitateCalc/200*8));
                break;
            case 1600:
                console.log ('Impozit', Math.ceil(impozit = capacitateCalc/200*22));
                break;
            case 2000:
                console.log ('Impozit', Math.ceil(impozit = capacitateCalc/200*85));
                break;
            case 2600:
                console.log ('Impozit', Math.ceil(impozit = capacitateCalc/200*171));
                break;    
            case 3000:
                console.log ('Impozit', Math.ceil(impozit = capacitateCalc/200*345));
                break;    
            default:
                console.log ('Nu sa aplicat nici o reducere')
        }
        break;

    case "Autobus":   
    case "Autocar": 
    case "Microbus": 
                 console.log ('Impozit', Math.ceil(impozit = capacitateCalc/200*28));
                 break;  
    case "Microbus": 
                 console.log ('Impozit', Math.ceil(impozit = capacitateCalc/200*22));
                 break;     
}


