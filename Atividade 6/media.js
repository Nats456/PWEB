function calcularMedia() {
    let nome = prompt("Digite o nome do aluno:");
    let notas = [];
    for (let i = 1; i <= 4; i++) {
        let nota = parseFloat(prompt(`Digite a nota ${i}:`));
        notas.push(nota);
    }
    
    let soma = notas.reduce((acc, nota) => acc + nota, 0);
    let media = soma / notas.length;

    alert(`Aluno: ${nome}\nMédia: ${media.toFixed(2)}`);
}
