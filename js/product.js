imagemProduto = document.querySelector("#imagemProduto");
descricao = document.querySelector("#descricao");

const url = window.location.href;

const parameters = url
  .slice(url.indexOf("?") + 1)
  .split("&")
  .reduce((acc, paramText) => {
    const [key, value] = paramText.split("=");
    acc[key] = value;
    return acc;
  }, {});

const descricaoBloco = document.createElement("div");
descricaoBloco.classList = ["jumbotron"];

const title = document.createElement("h1");
title.classList = ["display-4"];

if (!parameters.id) {
  title.textContent = "Medicamento não encontrado";
} else {
  var products = JSON.parse(localStorage.getItem("products") ?? []);
  const { id } = parameters;
  const product = products[id];
  
  title.textContent = product.title;

  const price = document.createElement("p");
  price.textContent = "Preço: " + product.price;
  
  const image = document.createElement("img");
  image.src = `img/${product.image}`;
  image.alt = "Imagem do Produto";

  descricaoBloco.appendChild(title);
  descricaoBloco.appendChild(price);
  descricaoBloco.appendChild(image);
  descricao.appendChild(descricaoBloco);
}