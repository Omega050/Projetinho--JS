// Sample product data
const products = [
    { title: "Trembo", price: "R$100" },
    { title: "Durateston", price: "R$24,24"},
    { title: "Product 2", price: "R$200" },
    { title: "Product 3", price: "R$100" },
    { title: "Product 3", price: "R$100" },
    { title: "Product 3", price: "R$100" },
    { title: "Product 3", price: "R$100" },
    { title: "Product 3", price: "R$100" },
    { title: "Product 3", price: "R$100" },
    { title: "Product 3", price: "R$100" },
    { title: "Product 32", price: "R$100" },

    // Add more product objects as needed
];

// Function to generate card elements
function generateCatalog() {
    const catalogContainer = document.getElementById("catalogContainer");

    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "card";

        const image = document.createElement("div");
        image.className = "image";
        image.innerHTML = '<span class="text">Medicamento.</span>';

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
generateCatalog();