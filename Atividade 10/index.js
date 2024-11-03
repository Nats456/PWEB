document.getElementById('formu').addEventListener('submit', function(event) {
    event.preventDefault();
 
    const n1 = Number(document.getElementById('altura').value)/ 100;
    const n2 = Number(document.getElementById('peso').value);



    const iMC = n2 / (Math.pow(n1,2));
    let classificacao = "";
    let obesidade = "";

    if(iMC < 18.5){
        classificacao = "Magreza";
        obesidade = "0";

    }else if(iMC <= 24.9){
        classificacao = "Normal"
        obesidade = "0";

    }else if(iMC <= 29.9){
        classificacao = "Sobrepeso"
        obesidade = "1";

    }else if(iMC <= 39.9){
        classificacao = "Obesidade"
        obesidade = "2";
    }else{
        classificacao = "Obesidade Grave"
        obesidade = "3";
    }
        

    document.getElementById('formu').reset();
    document.getElementById('saida').value = `IMC: ${iMC.toFixed(2)}, Classificação: ${classificacao} e Grau: ${obesidade}`;
 
});