const respostas = [
    { idade: 25, sexo: 'F', opiniao: 4 },
    { idade: 30, sexo: 'M', opiniao: 3 },
    { idade: 22, sexo: 'F', opiniao: 2 },
    { idade: 40, sexo: 'M', opiniao: 1 },
    { idade: 29, sexo: 'F', opiniao: 4 },
    { idade: 35, sexo: 'M', opiniao: 2 },
    { idade: 19, sexo: 'F', opiniao: 1 },
    { idade: 33, sexo: 'M', opiniao: 3 },
    { idade: 44, sexo: 'F', opiniao: 2 },
    { idade: 26, sexo: 'M', opiniao: 4 }
  ];
  
  function processaPesquisa(dados) {
    let somaIdade = 0;
    let maiorIdade = -Infinity;
    let menorIdade = Infinity;
    let qtdPessimo = 0;
    let qtdOtimoBom = 0;
    let qtdMulheres = 0;
    let qtdHomens = 0;
  
    dados.forEach((resposta) => {
      somaIdade += resposta.idade;
      if (resposta.idade > maiorIdade) maiorIdade = resposta.idade;
      if (resposta.idade < menorIdade) menorIdade = resposta.idade;
      if (resposta.opiniao === 1) qtdPessimo++;
      if (resposta.opiniao === 4 || resposta.opiniao === 3) qtdOtimoBom++;
      if (resposta.sexo === 'F') qtdMulheres++;
      if (resposta.sexo === 'M') qtdHomens++;
    });
  
    let mediaIdade = somaIdade / dados.length;
    let percentualOtimoBom = (qtdOtimoBom / dados.length) * 100;
  
    return {
      mediaIdade,
      maiorIdade,
      menorIdade,
      qtdPessimo,
      percentualOtimoBom,
      qtdMulheres,
      qtdHomens
    };
  }
  
  let resultado = processaPesquisa(respostas);
  console.log("Média da idade: ", resultado.mediaIdade);
  console.log("Idade da pessoa mais velha: ", resultado.maiorIdade);
  console.log("Idade da pessoa mais nova: ", resultado.menorIdade);
  console.log("Quantidade que respondeu péssimo: ", resultado.qtdPessimo);
  console.log("Percentual que respondeu ótimo e bom: ", resultado.percentualOtimoBom + "%");
  console.log("Quantidade de mulheres: ", resultado.qtdMulheres);
  console.log("Quantidade de homens: ", resultado.qtdHomens);
  