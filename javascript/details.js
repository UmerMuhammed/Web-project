window.addEventListener('DOMContentLoaded', async () => {
    const productFeaturedImage = document.getElementById("featured-product-image");
    const productTitle = document.getElementById("product-title");
    const productPrice = document.getElementById("product-price");
    const productDetails = document.getElementById("product-details");

    const current_product = JSON.parse(localStorage.getItem("current_item"));
    productTitle.innerText = current_product['product_name'];
    productFeaturedImage.src = current_product['image'];
    productPrice.innerText = current_product['price'];
    productDetails.innerText = current_product['details'];
});
function addToCart(itemId) {
    // Show notification
    const notification = document.getElementById('notification');
    notification.style.right = '20px'; // Move the card to the right

    // Hide the notification after 2 seconds
    setTimeout(() => {
        notification.style.right = '-400px'; // Move the card back to its initial position
    }, 2000);
}
