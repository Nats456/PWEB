function transformarTexto() {
    const textoInput = document.getElementById('texto').value;
    const opcaoMaiusculas = document.getElementById('maiusculas').checked;
    const opcaoMinusculas = document.getElementById('minusculas').checked;
    
    if (opcaoMaiusculas) {
        document.getElementById('resultado').innerText = textoInput.toUpperCase();
    } else if (opcaoMinusculas) {
        document.getElementById('resultado').innerText = textoInput.toLowerCase();
    }
}
