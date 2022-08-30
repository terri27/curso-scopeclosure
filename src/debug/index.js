
var a = 'Hello';

function hello(){
    let b = 'Hello world';
    const c = 'Hello World!';

    if (true) {
        let d = 'Hello world!!';
        debugger
    }
}

hello();


const moneyBox = (coins) => {
    debugger
    var saveCoins = 0;
    const countCoins = (coins) => {
        debugger
        saveCoins += coins;
        console.log('MoneyBox: $' + saveCoins)
    }
    return countCoins;
}

let myMoneyBox = moneyBox();

myMoneyBox(4);
myMoneyBox(10);
myMoneyBox(2);
