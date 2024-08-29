const Table = document.getElementById("mainTable");
const arrayNumbers = [];

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
    let NumEx = Math.floor(Math.random() * 77);
    return NumEx;
};

const extractBtn = document.getElementById("estrazione");

extractBtn.addEventListener("click", function () {
    let Num = Estract();
    //console.log(arrayNumbers);
    arrayNumbers.forEach((element) => {
        if (parseInt(element.innerText) === Num) {
            // console.log(element.innerText);
            element.classList.add("selected");
        }
    });
});
