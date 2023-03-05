

const prompt =require("prompt-sync")();


const ROWS = 3;
const COLS =3;

const SYMBOLS_COUNT= {
    "A": 2,
    "B": 4,
    "C": 6,
    "D": 8
}

const SYMBOLS_VALUES ={
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 2
}


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

const getBet =(balance, lines) => {
    while (true){
        const bet = prompt("Enter bet per line: ");
        const numberBet =parseFloat(bet);
    
        if (isNaN(numberBet) || numberBet <=0 || numberBet >  balance / lines) {
            console.log("Invalid bet, Try again");
        } else {
            return numberBet;
        }
    }
};

const spin =() => {
    const symbols =[];
    for ([symbol, count] of Object.entries(SYMBOLS_COUNT)){
        for( let i=0;i<count; i++){
            symbols.push(symbol);
        }
    }
    const reels = [[], [], []];
    for (let i = 0; i < COLS; i++) {
        const reelSymbols = [...symbols];
        for (let j =0; j < ROWS; j++){
            const randomIndex = math.floor(math.random() * reelSymbols.length)
            const selectedSymbol = reelSymbols[randomIndex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex, 1);
        }
    }
        return reels

};
const reels = spin()
let balance = deposit();
const NumberOfLines =getNumberOfLines();
const bet = getBet(balance, NumberOfLines);


