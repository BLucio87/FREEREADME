// Alternar tema escuro/claro
document.getElementById("toggle-theme").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Abrir quadrinho no modal
function abrirQuadrinho(pdfPath) {
  document.getElementById("pdf-viewer").src = pdfPath + "#toolbar=0&navpanes=0&scrollbar=0";
  document.getElementById("leitor").style.display = "flex";
}

// Fechar modal
function fecharQuadrinho() {
  document.getElementById("leitor").style.display = "none";
  document.getElementById("pdf-viewer").src = "";
}
