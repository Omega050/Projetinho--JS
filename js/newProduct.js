import { products } from './Catalog.js';
function newProduct(){
    const productName = document.getElementById("productName").value;
    const price = document.getElementById("price").value;
    const img = document.getElementById("img").value;

    const newProduct = { title: productName, price: price, image: img };

    products.push(newProduct);


    document.getElementById("productName").value = "";
    document.getElementById("price").value = "";
    document.getElementById("img").value = "";
}

