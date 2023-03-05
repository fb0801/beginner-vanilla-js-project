

const prompt =require("prompt-sync")();

const deposit =() => {
    while (true){
    const depositAmount = prompt("Enter a desposit amount: ");
    const numberDepositAmount =parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <=0) {
        console.log("Invalid amount, try again");
    } else {
        return numberDepositAmount;
    }
}

};

const getNumberOfLines =() =>{
    while (true){
        const lines = prompt("Enter number of lines to bet on (1-3): ");
        const NumberOfLines =parseFloat(lines);
    
        if (isNaN(NumberOfLines) || NumberOfLines <=0 || NumberOfLines > 3) {
            console.log("Invalid number of lines, try again");
        } else {
            return NumberOfLines;
        }
    }
    
}

let balance = deposit();
const NumberOfLines =getNumberOfLines();