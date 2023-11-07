// 1. Deposit some money
// 2. Determine number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. Check if the user won
// 6. Give the user their winnings
// 7. Play again

const prompt = require("prompt-sync")();

//Global variables
const ROWS = 3;
const COLS = 3;

//Symbols on slot machine (written as object)
const SYMBOLS_COUNT = {
    A: 2,
    B: 4,
    C: 6,
    D: 8
}
const SYMBOL_VARIABLES = {
    A: 5,
    B: 4,
    C: 3,
    D: 2
}



// Step 1: Deposit some money
const deposit = () => {
    while (true) {
    const depositAmount = prompt("Enter a deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
        console.log("Invalid deposit amount, please try again.")
    } else {
        return numberDepositAmount;
    }
 }
};

// Step 2: Determine number of lines to bet on
const getNumberOfLines = () => {
    while (true) {
        const lines = prompt("Enter the number of lines you'd like to bet on (1-3): ");
        const numberOfLines = parseFloat(lines);
    
        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log("Invalid number of lines, please try again.")
        } else {
            return numberOfLines;
        }
     }
};

//Step 3: Get bet amount
const getBet = (balance, lines) => {
    while (true) {
        const bet = prompt("Enter your total bet per line: ");
        const numberBet = parseFloat(bet);
    
        if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
            console.log("Invalid bet, please try again.")
        } else {
            return numberBet;
        }
     }
};

//Step 4: Spin the slot
const spin = () => {
    const symbols = [];
    for ( const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
       for (let i = 0; i < count; i++) {
        symbols.push(symbol);
       }
    }

    const reels = [[], [], []];
    for (let i = 0; i < COLS; i++) {
        const reelSymbols = [...symbols];
        for (let j = 0; j < ROWS; j++) {
            const randomIndex = Math.floor(Math.random() * reelSymbols.length)
            const selectedSymbol = reelSymbols[randomIndex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex, 1);
        }
    }

    return reels;
};


//Calling functions
const reels = spin();
console.log(reels);
let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);