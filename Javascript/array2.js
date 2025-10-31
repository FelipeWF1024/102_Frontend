let frutas = ['Maca', 'Banana', 'Morango', 'Uva', 'Melancia'];

frutas.unshift ('Mamao', 'Manga');
console.log(frutas);

frutas.pop ();
console.log(frutas);

frutas.splice (0, 1, 'Limao');
frutas.splice (2, 1, 'Laranja');
frutas.splice (3, 1, 'Bergamota');
console.log(frutas);

frutas.splice (1, 1);
console.log(frutas);

console.log ("Tamanho da lista de frutas: ", frutas.length)
for (let i = 0; i < frutas.length; i++) {
    console.log("Fruta nº %d:", i+1);
    console.log("Nome: %s", frutas[i]);
}