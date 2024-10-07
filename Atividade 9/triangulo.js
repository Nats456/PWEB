function maiorDeTres(a, b, c) {
    return Math.max(a, b, c);
  }
  
  function ordenarTresNumeros(a, b, c) {
    let numeros = [a, b, c];
    return numeros.sort((x, y) => x - y);
  }
  
  function ehPalindromo(str) {
    let strUpper = str.toUpperCase();
    let strReversa = strUpper.split('').reverse().join('');
    return strUpper === strReversa;
  }
  
  function tipoTriangulo(a, b, c) {
    if (a + b > c && a + c > b && b + c > a) {
      if (a === b && b === c) {
        return "Equilátero";
      } else if (a === b || a === c || b === c) {
        return "Isósceles";
      } else {
        return "Escaleno";
      }
    } else {
      return "Não forma um triângulo";
    }
  }
  
  console.log(maiorDeTres(5, 9, 3));
  console.log(ordenarTresNumeros(5, 9, 3));
  console.log(ehPalindromo("arara"));
  console.log(tipoTriangulo(3, 4, 5));
  