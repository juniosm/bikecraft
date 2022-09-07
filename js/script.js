// Menu Ativo

const links = document.querySelectorAll(".menu a");
const widthAfter = document.querySelector(".menu a::after");

function menuAtivo(link) {
  const url = location.href;

  if (url.includes(link.href)) {
    link.classList.add("ativo");
  }
}

links.forEach(menuAtivo);

// Urls orçamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);

// perguntas frequentes

const seta = document.querySelectorAll(".lista-pergunta summary");

function areaAtiva(event) {
  const modificar = event.currentTarget;
  const verificar = modificar.getAttribute("aria-expanded");
  modificar.setAttribute("aria-expanded", "true");
  if (verificar === "true") {
    modificar.setAttribute("aria-expanded", "false");
  }
}

function setaClick(event) {
  event.addEventListener("click", areaAtiva);
}

seta.forEach(setaClick);

// Galeria

const galeria = document.querySelectorAll(".imagens-bike img");
const galeriaConteiner = document.querySelector(".imagens-bike");

function trocarImagem(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 1000px)").matches;
  if (media) {
    galeriaConteiner.prepend(img);
  }
}

function eventoGaleria(imagem) {
  imagem.addEventListener("click", trocarImagem);
}

galeria.forEach(eventoGaleria);

// Animação

if (window.SimpleAnime) {
  new SimpleAnime();
}
