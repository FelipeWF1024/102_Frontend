let livro1 = {
    titulo: "Spy x Family",
    ano: 2019,
    autor: "Tatsuya Endo",
    genero: "Slice of Life"
}
let livro2 = {
    titulo: "Darling in the Franxx",
    ano: 2018,
    autor: "Atsushi Nishigori",
    genero: "Romance"
}

let livro3 = {
    titulo: "Attack on Titan",
    ano: 2009,
    autor: "Hajime Isayama",
    genero: "Ação"
}

let livro4 = {
    titulo: "Bocchi the Rock",
    ano: 2023,
    autor: "Aki Hamaji",
    genero: "Slice of Life"
}

let livro5 = {
    titulo: "Black Clover",
    ano: 2017,
    autor: "Yuki Tabata",
    genero: "Ação"
}

let livro6 = {
    titulo: "Blue Box",
    ano: 2021,
    autor: "Kouji Miura",
    genero: "Romance"
}

let livros = [livro1, livro2, livro3, livro4, livro5, livro6]

for (let i = 0; i < livros.length; i++) {
    console.log("Livro nº %d:", i+1);
    console.log("Título: %s", livros[i].titulo);
}

livros.livro7 = {
    titulo: "Fire Force",
    ano: "2015",
    autor: "Atsushi Okubo",
    genero: "Ação"
}

let escolhido = "Romance"

for(let chave in livros){
    if (livros[chave].genero === escolhido){
        console.log("Livros de Romance: ", livros[chave].titulo)
    }
}

let titulivro = "a"
let anoantigo = 3000

for(let chave in livros){
    if(livros[chave].ano < anoantigo){
        anoantigo = livros[chave].ano
        titulivro= livros[chave].titulo
    }
}

console.log("O livro mais antigo é: %s", titulivro, "publicado em:", anoantigo)