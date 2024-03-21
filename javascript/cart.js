function togglePaymentForm() {
    var cardForm = document.getElementById("cardForm");
    var cashForm = document.getElementById("cashForm");
    var paymentMethod = document.getElementById("payment-method");

    if (paymentMethod.value === "card") {
        cardForm.style.display = "block";
        cashForm.style.display = "none";
    } else if (paymentMethod.value === "cash") {
        cardForm.style.display = "none";
        cashForm.style.display = "block";
    }
}




function displayCart() {
    let cart = JSON.parse(localStorage.getItem("cart"));
    let html = "";
    let totalPrice = 0;

    if (!cart || Object.keys(cart).length === 0) {
        document.getElementById('container').innerHTML = "Your cart is empty";
    } else {
        Object.keys(cart).forEach(id => {
            let item = cart[id];
            html += `<div class="cart-item">
                        <img class="img" src="${cart[id].image}" >
                        <div><h6 class=h6>${cart[id].product_name} - ${cart[id].price}</h6></div>
                    </div> `;

            totalPrice += parseFloat(item.price.replace('$', '').replace(',', ''));
        });

        document.getElementById('container').innerHTML = html;
    }

    // Display the total price
    document.getElementById('total-container').innerHTML = `Total: $${totalPrice.toFixed(2)}`;
}

// Call the displayCart function when the page loads
displayCart();


function clearCart() {
    localStorage.removeItem("cart");
    alert("Payment successful! Your cart has been cleared.");
}