let cart = [];

function addToCart(item, price) {
    cart.push({ item, price });
    updateCart();

    // Add bounce effect when item is added
    let lastItem = document.querySelector(".cart-items li:last-child");
    if (lastItem) {
        lastItem.style.transform = "scale(1.1)";
        setTimeout(() => {
            lastItem.style.transform = "scale(1)";
        }, 200);
    }
}

function updateCart() {
    let cartList = document.getElementById("cart-items");
    let total = 0;
    cartList.innerHTML = "";

    cart.forEach((product, index) => {
        total += product.price;
        let li = document.createElement("li");
        li.textContent = `${product.item} - ₹${product.price}`;
        cartList.appendChild(li);
    });

    document.getElementById("cart-total").textContent = total;
    let cartCount = document.getElementById("cart-count");
    cartCount.textContent = cart.length;

    // Scale up and down animation for cart count
    cartCount.style.transform = "scale(1.3)";
    setTimeout(() => {
        cartCount.style.transform = "scale(1)";
    }, 200);
}

function checkout() {
    if (cart.length > 0) {
        alert("Order placed successfully! 🎉 Thank you for shopping.");
        cart = [];
        updateCart();
    } else {
        let checkoutBtn = document.querySelector(".checkout-btn");
        if (checkoutBtn) {
            checkoutBtn.classList.add("shake");
            setTimeout(() => {
                checkoutBtn.classList.remove("shake");
            }, 300);
        }
    }
}
