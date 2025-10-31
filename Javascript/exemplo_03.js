//=========== criar o objeto aluno ============

let alunos = {
    nome: "Ana",
    idade: 16,
    matricula: "8AT123",
    ausente: false
};

console.log(alunos); // Imprime tudo
console.log(alunos.nome); // Imprime parte
console.log("Nome do(a) aluno(a): %s", alunos.nome);
console.log("Matrícula do(a) aluno(a): %s", alunos.matricula)


let aluno1 = {
    nome: "Ana",
    idade: 16,
    matricula: "8AT123",
    ausente: false
}

let aluno2 = {
    nome: "Joana",
    idade: 17,
    matricula: "8AT321",
    ausente: false
}

let aluno3 = {
    nome: "Paula",
    idade: 15,
    matricula: "8AT123",
    ausente: false
}
let turma = [aluno1, aluno2, aluno3]

console.log(turma)