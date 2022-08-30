 
const person = () => {
    var saveName = "Name";
    return{
        getName: () => { //debemos crear estos metodos
            return saveName;
        },
        setName: (name) => { // debemos crear estos metodos
            saveName = name;
        },
    };
};

newPerson = person();
console.log(newPerson.getName());
newPerson.setName('Ivan');
console.log(newPerson.getName());