const Box = (coins) => {
    var saveCoins = 0;
    saveCoins += coins;
    console.log('MoneyBox: $' + saveCoins);
}



const moneyBox = (coins) => {
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log('MoneyBox: $' + saveCoins)
    }
    return countCoins;
}

let myMoneyBox = moneyBox();

myMoneyBox(4);
myMoneyBox(10);
myMoneyBox(2);



