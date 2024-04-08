/* si la constante es un objeto 
no se puede cambiar el tipo de variable
pero si se puede aguegar o eliminar o editar
propiedades o metodos al objeto  */

const user = {id: 1 };

user.name = 'Harold' ;
user.guardar = function () {
    console.log('Guardando', user.name);
}

user.guardar();

delete user.name;
delete user.guardar;

console.log(user);
/* 
si se ua un object.freeze el objeto 
no se podra modificar, agregar o eliminar 
ni propiedades ni metodos */

//const user1 = Object.freeze({id: 1});
/* 
Si se requiere que las propiedades de un objeto sean 
fijas que no se puedan agregar o eliminar pero si 
cambiar sus valores se utiliza Object.seal  */

const user1 = Object.seal({id: 1});
user1.name = 'Harold';
user1.id = 2 ;
console.log(user1);