function goToPage(page){
window.location.href = page;
}

function addToCart(name, price, image){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let product = {
id:Date.now(),
name:name,
price:price,
image:image
};

cart.push(product);

localStorage.setItem("cart", JSON.stringify(cart));

updateCartCounter();
}

function updateCartCounter(){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let counter = document.getElementById("cartCounter");

if(counter){
counter.innerText = cart.length;
}

}

function loadCart(){

const cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartDiv = document.getElementById("cartItems");

if(!cartDiv) return;

cartDiv.innerHTML = "";

cart.forEach(product => {

let item = document.createElement("article");
item.classList.add("product-card");

item.innerHTML =
'<img src="' + product.image + '" alt="' + product.name + '">' +
'<h3>' + product.name + '</h3>' +
'<p>' + product.price + '</p>' +
'<button onclick="deleteProduct(' + product.id + ', this)">Ta bort</button>';

cartDiv.appendChild(item);

});

}

function deleteProduct(productId, button){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

cart = cart.filter(p => p.id !== productId);

localStorage.setItem("cart", JSON.stringify(cart));

button.parentElement.remove();

updateCartCounter();

}

function clearCart(){

localStorage.removeItem("cart");

let cartDiv = document.getElementById("cartItems");

if(cartDiv){
cartDiv.innerHTML = "";
}

updateCartCounter();

}