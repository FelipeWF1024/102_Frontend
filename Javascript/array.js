let numeros = [1, 2 , 3];

console.log (numeros);
numeros.push(6)
console.log (numeros);

numeros.shift(1);
console.log (numeros);

numeros.unshift(-3);
console.log(numeros);

console.log(numeros[3]);
console.log("Mostrando: " + numeros[3]) 

// inserir em posicao especifica
numeros.splice (2, 0, 17);
console.log(numeros);

numeros.splice(0, 2);
console.log(numeros);




// marcas de carros garagem

let garage = ["BYD","Tesla","Koegnisegg","Ferrari","BMW","Mercedes","Volvo","Fiat","Pagani"];

garage.push("Audi");

console.log("Tamanho do Array: "+garage.length);

for (let i = 0; i < garage.length; i++) {
    console.log("Carro nº %d:", i+1);
    console.log("Marca: %s", garage[i]);
}

for (let carro in garage) {
    console.log(carro.valueOf);
}