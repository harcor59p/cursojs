const punto = {
    x : 10,
    y : 15,
    dibujar(){
        console.log('Dibujando.....');
    }
};
//delete punto.dibujar;
if ('dibujar' in punto) {
    punto.dibujar()
}

/* let num = 47563;

let digitos = 0;

while (num > 0){
    digitos++;
    num /= 10;

}

console.log(digitos); */