function goToPage(page){
    window.location.href = page;
}

function addToCart(name, price, image){

    let cart =
        JSON.parse(localStorage.getItem("cart"))
        || [];

    let product = {
        id:Date.now(),
        name:name,
        price:price,
        image:image
    };

    cart.push(product);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    updateCartCounter();
}

function updateCartCounter(){

    let cart =
        JSON.parse(localStorage.getItem("cart"))
        || [];

    let counter =
        document.getElementById("cartCounter");

    if(counter){
        counter.innerText = cart.length;
    }
}

function loadCart(){

    let cart =
        JSON.parse(localStorage.getItem("cart"))
        || [];

    let cartContainer =
        document.getElementById("cartItems");

    if(!cartContainer){
        return;
    }

    cartContainer.innerHTML = "";

    cart.forEach(product => {

        let div = document.createElement("div");

        div.classList.add("product-card");

        div.innerHTML = `
            <img src="${product.image}"
                 alt="${product.name}">

            <h3>${product.name}</h3>

            <p>${product.price}</p>

            <button onclick="removeFromCart(${product.id})">
                Ta bort
            </button>
        `;

        cartContainer.appendChild(div);
    });
}

function removeFromCart(id){

    let cart =
        JSON.parse(localStorage.getItem("cart"))
        || [];

    cart = cart.filter(product =>
        product.id !== id
    );

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    loadCart();
    updateCartCounter();
}

function clearCart(){

    localStorage.removeItem("cart");

    loadCart();
    updateCartCounter();
}