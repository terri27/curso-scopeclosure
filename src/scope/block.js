

const Frutas = () => {
    if (true) {
        var fruits1 = 'Apple';
        let fruits2 = 'Guineo';
        const fruits3 = 'Fresa';

        console.log(fruits2);
    console.log(fruits3);
    }
    console.log(fruits1);
    
    
}

Frutas();

var x = 1;

{
    var x = 2;
    console.log(x);
}
console.log(x);


function example() {
    for (let i =0; i < 10; i++){
      setTimeout(function(){
        console.log(i)
      }, 1000)
    }
  }
  
  example()