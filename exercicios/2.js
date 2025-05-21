let notas = [];
let nota;
let soma = 0;
let aluno = prompt("Bem vindo ao sistema de média de alunos, digite o nome do aluno para começar!")
for (let i = 0; i < 4; i++) {
  nota = parseInt(prompt(`Digite a nota do ${i + 1} bimestre`));
  if (!isNaN(nota)) {
    notas[i] = nota;
    soma = soma + nota;
  } else {
    alert("Digite uma nota valida");
    i--;
  }
}
console.log(soma)
console.log(`As notas foram ${notas} e a média do aluno ${aluno} foi ${soma / 4}`);