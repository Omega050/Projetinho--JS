var products = JSON.parse(localStorage.getItem('products')) || [
    { title: "Losartana 50mg 30 cpr", price: "R$4,83", image: "losartana.png" },
    { title: "Dorflex 36 cpr", price: "R$19,99", image: "dorflex.png" },
    { title: "Aspirina 500mg 20cpr", price: "R$14,98", image: "aspirina.png" },
    { title: "Epocler 10ml", price: "R$3,99", image: "epocler.png" },
    { title: "Loratadina 1mg/ml XPE c/100 ml", price: "R$12,41", image: "loratadina.png" },
];

function saveProductsToLocalStorage() {
    localStorage.setItem('products', JSON.stringify(products));
}

function newProduct(){
    const productName = document.getElementById("productName").value;
    const price = document.getElementById("price").value;
    const img = document.getElementById("img").value;

    products.push({title: productName, price: price, image: img});
    saveProductsToLocalStorage();

    location.replace(location.href);
}

function generateCatalog() {
    const catalogContainer = document.getElementById("catalogContainer");
    catalogContainer.innerHTML = "";

    products.forEach((product, index) => { 
        const card = document.createElement("div");
        card.className = "card";

        const image = document.createElement("img");
        image.className = "image";
        image.src = `img/${product.image}`;

        const title = document.createElement("span");
        title.className = "title";
        title.textContent = product.title;

        const price = document.createElement("span");
        price.className = "price";
        price.textContent = product.price;

       
        card.addEventListener("click", () => {
            redirectToProductPage(index); 
        });

        card.appendChild(image);
        card.appendChild(title);
        card.appendChild(price);

        catalogContainer.appendChild(card);
    });
}

function redirectToProductPage(index) {
    const product = products[index];
    const url = `product.html?id=${index}&title=${encodeURIComponent(product.title)}&price=${encodeURIComponent(product.price)}&image=${encodeURIComponent(product.image)}`;
    window.location.href = url;
}

function displayProducts() {
    const productListItems = document.getElementById("productListItems");
    productListItems.innerHTML = "";

    products.forEach(product => {
        const listItem = document.createElement("li");
        listItem.className = "product-list-item"; 
        listItem.textContent = `${product.title} - ${product.price}`;
        productListItems.appendChild(listItem);
    });
}