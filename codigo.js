const botao1 = document.getElementById("links-arrow");
const botao2 = document.getElementById("share-arrow");

function compartilhar() {
  const links = document.getElementById("links");
  const share = document.getElementById("share");

  if (links.style.display == "flex") {
    links.style.display = "none";
    share.style.display = "flex";
  } else {
    share.style.display = "none";
    links.style.display = "flex";
  }
}

botao1.addEventListener("click", compartilhar);
botao2.addEventListener("click", compartilhar);
