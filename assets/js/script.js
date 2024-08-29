const Table = document.getElementById("mainTable");
const arrayNumbers = [];
const extractedNumbers = [];

window.onload = () => {
    for (let i = 0; i < 76; i++) {
        const NewNum = document.createElement("div");
        NewNum.className = "number";
        NewNum.innerText = i + 1;
        Table.appendChild(NewNum);
        arrayNumbers.push(NewNum);
    }
    //console.log(arrayNumbers);
};

const Estract = () => {
    let NumEx;

    do {
        NumEx = Math.floor(Math.random() * 76) + 1;
    } while (extractedNumbers.includes(NumEx));
    //.includes verifica se un valore è presente o meno di un array o uns stringa ritornando un boolean
    // finchè la condizione è vera continua a generare il numero quando diventa false esce dal loop

    extractedNumbers.push(NumEx);
    return NumEx;
};

const extractBtn = document.getElementById("estrazione");

extractBtn.addEventListener("click", function () {
    if (extractedNumbers.length >= 76) {
        alert("Tutti i numeri sono stati estratti!");
        return;
    }

    let Num = Estract();
    //console.log(arrayNumbers);
    arrayNumbers.forEach((element) => {
        if (parseInt(element.innerText) === Num) {
            // console.log(element.innerText);
            element.classList.add("selected");
        }
    });
});
