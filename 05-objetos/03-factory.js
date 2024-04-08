let user = {
    id: 1 ,
    email: 'harcor59@gmail.com',
    name: 'Harold Cortes' ,
    activo: true,
    recuperarClave: function(){
        console.log('Recumerando clave...')
    },
}

/* let user1 = {
    id: 2 ,
    email: 'chanchitop@gmail.com',
    name: 'chanchito' ,
    activo: false,
    recuperarClave: function(){
        console.log('Recumerando clave...')
    },
} */

function crearUsuario(name , email){
    return {
        email,
        name,
        activo: true,
        recuperarClave: function(){
            console.log('Recumerando clave...')
        },
    }
}

let user1 = crearUsuario('Jose' , 'jose@correo.com') ;
let user2 = crearUsuario('Bella' , 'Bella@correo.com') ;

console.log(user1,user2) ;
