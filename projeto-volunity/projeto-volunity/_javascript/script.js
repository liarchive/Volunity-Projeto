// pagina de entrar

function trocarAba(tipo) {
  var abaVoluntario = document.getElementById("aba-voluntario");
  var abaInstituicao = document.getElementById("aba-instituicao");

  if (tipo === "voluntario") {
    abaVoluntario.classList.add("aba-ativa");
    abaInstituicao.classList.remove("aba-ativa");
  } else {
    abaInstituicao.classList.add("aba-ativa");
    abaVoluntario.classList.remove("aba-ativa");
  }
}

// pagina de criar conta 

function escolherPerfil(tipo) {
  var perfilVoluntario = document.getElementById("perfil-voluntario");
  var perfilInstituicao = document.getElementById("perfil-instituicao");
  var botaoContinuar = document.getElementById("botao-continuar");

  if (tipo === "voluntario") {
    perfilVoluntario.classList.add("perfil-selecionado");
    perfilInstituicao.classList.remove("perfil-selecionado");
    botaoContinuar.textContent = "Continuar como voluntário";
  } else {
    perfilInstituicao.classList.add("perfil-selecionado");
    perfilVoluntario.classList.remove("perfil-selecionado");
    botaoContinuar.textContent = "Continuar como instituição";
  }
}

// marcar/desmarcar as areas de interesse

function alternarTag(elemento) {
  elemento.classList.toggle("tag-selecionada");
}


function entrar(evento) {
  evento.preventDefault(); // impede a pagina de recarregar
  window.location.href = "pagina-principal.html"; // leva o usuario para a pagina principal
}
 
// funcao chamada ao enviar o formulario de criar conta (cadastro)
 
function criarConta(evento) {
  evento.preventDefault();
  window.location.href = "pagina-principal.html"; 
} 