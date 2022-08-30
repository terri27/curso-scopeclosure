const helloWorld = () => {
    const hello = 'hello';
    console.log(hello);
}

console.log(hello);


var scope = 'i am global';

const functionScope = () => {
    var scope = 'i am global a local';
    const funct = () => {
        return scope; 
    }
    console.log(funct());
}

functionScope();
console.log(scope);