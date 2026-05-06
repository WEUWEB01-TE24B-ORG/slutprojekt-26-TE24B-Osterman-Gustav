function test() {
    console.log("Sök klickad");
}

function toOtherPage(location) {
    window.location.href = location;
}

function sendProductToCart(divID) {
    let div = document.getElementById(divID);

    let newProduct = {
        id: Date.now(),
        productName: divID,
        productPrice: div.querySelector("h2").innerText,
        productImage: div.querySelector("img").src
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(newProduct);
    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartAmount();
}

function loadCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    let cartDiv = document.getElementById("CartSection");
    if (!cartDiv) return;

    cart.forEach(product => {
        let productDiv = document.createElement("div");
        productDiv.classList.add("Product");

        productDiv.innerHTML = `
            <img src="${product.productImage}" />
            <div>
                <h2>${product.productName}</h2>
                <h2>${product.productPrice}</h2>
                <h2 class="Button" onclick="deleteProduct(${product.id}, this)">Ta bort</h2>
            </div>
        `;

        cartDiv.appendChild(productDiv);
    });
}

function deleteProduct(productId, button) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart = cart.filter(p => p.id !== productId);

    localStorage.setItem("cart", JSON.stringify(cart));

    button.parentElement.parentElement.remove();

    updateCartAmount();
}

function clearCart() {
    localStorage.removeItem("cart");
}

function updateCartAmount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let old = document.getElementById("cartItemCounter");
    if (old) old.remove();

    let cartIcon = document.getElementById("cartIcon");

    let counter = document.createElement("p");
    counter.id = "cartItemCounter";
    counter.innerText = cart.length;

    cartIcon.insertAdjacentElement("afterend", counter);
}
