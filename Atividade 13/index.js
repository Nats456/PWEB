const windowImage = document.getElementById('windowImage');
const statusText = document.getElementById('status');

windowImage.addEventListener('mouseenter', () => {
  windowImage.src = 'Imagens/janelaaberta.png';
  statusText.innerText = 'Janela Aberta';
});

windowImage.addEventListener('mouseleave', () => {
  windowImage.src = 'Imagens/janelafechada.png';
  statusText.innerText = 'Janela Fechada';
});

windowImage.addEventListener('click', () => {
  windowImage.src = 'Imagens/janelaquebrada.png';
  statusText.innerText = 'Janela Quebrada';
});
