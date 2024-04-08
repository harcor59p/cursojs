let user = {
    id: 1,
    name: 'Chanchito Feliz' ,
    age: 25 ,
};

for (let prop in user){
    console.log(prop , user[prop]);
}

// con for in tambien se podria recorre los elementos de un array pero es mejor con for of

let animales = ['Chanchito Feliz', 'Dragon','Canguro'] ;
for (let indice in animales) {
    console.log(indice, animales[indice]);
}