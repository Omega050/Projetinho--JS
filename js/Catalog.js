// Sample product data
var products = [
    { title: "Losartana 50mg 30 cpr", price: "R$100", image: "losartana.png" },
    { title: "Dorflex 36 cpr", price: "R$24,24", image: "dorflex.png" },
    { title: "Aspirina 500mg 20cpr", price: "R$200", image: "aspirina.png" },
    { title: "Epocler 10ml", price: "R$100", image: "epocler.png" },
    { title: "Loratadina 1mg/ml XPE c/100 ml", price: "R$12,41", image: "loratadina.png" }, 
    // Add more product objects as needed
];
products.push({ title: "Dura", price:"R$111,12" , image: "durateston.png"})

function newProduct(){
    const productName = document.getElementById("productName").value;
    const price = document.getElementById("price").value;
    const img = document.getElementById("img").value;

    products.push({title: productName, price: price, image: img});

    document.getElementById("productName").value = "";
    document.getElementById("price").value = "";
    document.getElementById("img").value = "";
}

// Function to generate card elements
function generateCatalog() {
    const catalogContainer = document.getElementById("catalogContainer");

    products.forEach(product => {
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

        card.appendChild(image);
        card.appendChild(title);
        card.appendChild(price);

        catalogContainer.appendChild(card);
    });
}

function displayProducts() {
    const productListItems = document.getElementById("productListItems");

    products.forEach(product => {
        const listItem = document.createElement("li");
        listItem.textContent = `${product.title} - ${product.price}`;
        productListItems.appendChild(listItem);
    });
}