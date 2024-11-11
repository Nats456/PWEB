const prompt = require('prompt-sync')(); 
// parênteses indicam que estamos executando a função prompt-sync. Ao fazer //isso, a função retorna um valor, que é 
//uma nova função que pode ser usada //para criar prompts. 
// não esquecer de instalar 
// npm install prompt-sync 
function saudacao(nome) { 
 console.log(' OI ' + nome); 
} 
function entradaNome(callback) { 
 var nome = prompt('Digite seu nome:'); 
 callback(nome); // chamando a função callback (saudação) 
} 
entradaNome(saudacao); 
