const botao = document.getElementById("botao-evento");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", function() {
    mensagem.textContent = "Participe conosco! Será uma noite especial de fé e comunhão.";
});