const botao1 = document.getElementById("links-arrow");
const botao2 = document.getElementById("share-arrow");

function compartilhar() {
  const links = document.getElementById("links");
  const share = document.getElementById("share");

  if (window.matchMedia("(max-width:799px").matches) {
    if (links.style.display == "flex") {
      links.style.display = "none";
      share.style.display = "flex";
    } else {
      share.style.display = "none";
      links.style.display = "flex";
    }
  } else {
    if (share.style.display == "none"){
      share.style.display = "flex";
    } else {
      share.style.display = "none"
    }
  }
}

botao1.addEventListener("click", compartilhar);
botao2.addEventListener("click", compartilhar);
