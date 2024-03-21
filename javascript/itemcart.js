const products = [
    {
        "image": "images/black leather jacket.jpg",
        "product_name": "black leather jacket",
        "price": "$399.99",
        "details": "Stay warm and stylish with our Coffee Jacket. Made from premium quality materials, this jacket features a modern design with a comfortable fit. Perfect for both casual outings and formal occasions. The Coffee Jacket comes with a 1-year warranty, ensuring durability and customer satisfaction. Only 2 stocks remaining, so grab yours now and elevate your winter wardrobe!"
    },
    {
        "image": "images/Green hiking jacket.webp",
        "product_name": "Green hiking jacket",
        "price": "$320.99",
        "details": "Add a touch of sophistication to your wardrobe with our Navy Blue Jacket. Crafted with care, this jacket combines style and functionality effortlessly. Whether you're heading to a business meeting or a weekend getaway, this versatile piece is a must-have. The Navy Blue Jacket comes with a 6-month warranty, guaranteeing quality and performance. Only 3 stocks remaining, so don't miss out on this wardrobe essential!"
    },
    {
        "image": "images/light green ragwear jacket.png.",
        "product_name": "Light green ragwear",
        "price": "$240.99",
        "details": "Elevate your look with our Off White Jacket. Designed for comfort and elegance, this jacket is perfect for layering during chilly days. Its timeless appeal makes it a versatile addition to any wardrobe. The Off White Jacket comes with a 3-month warranty, ensuring peace of mind with your purchase. Only 1 stock remaining, so hurry up and make this stylish piece yours today!"
    },
    {
        "image": "images/camel jacket.webp",
        "product_name": "Camel Jacket",
        "price": "$230.99",
        "details": "Stay cozy and chic with our Camel Jacket. This classic piece adds a touch of sophistication to any outfit. Whether you're running errands or meeting friends for brunch, this jacket is a perfect choice. The Camel Jacket comes with a 1-year warranty, offering durability and quality assurance. Only 2 stocks remaining, so don't wait too long to make it yours!"
    },
    {
        "image": "images/red thin jacket.webp",
        "product_name": "red thin jacket",
        "price": "$320.99",
        "details": "Make a statement with our Zebra Jacket. Featuring a unique zebra print design, this jacket is sure to turn heads wherever you go. Made from high-quality materials, it offers both style and comfort. The Zebra Jacket comes with a 6-month warranty, ensuring long-lasting wear. Only 3 stocks remaining, so grab yours before it's too late!"
    },
    {
        "image": "images/olive jacket.webp",
        "product_name": "olive jacket",
        "price": "$710.99",
        "details": "Stay cozy and stylish with our Brown Comfy Jacket. Made from soft and luxurious materials, this jacket is perfect for chilly days and evenings. Whether you're out for a walk or relaxing at home, this jacket is a versatile addition to your wardrobe. The Brown Comfy Jacket comes with a 1-year warranty, ensuring quality and comfort. Only 2 stocks remaining, so don't miss out!"
    },
    {
        "image": "images/jean jacket.jpg",
        "product_name": "jean jacket",
        "price": "$820.99",
        "details": "Achieve a classic and timeless look with our Black Leather Jacket. Crafted from genuine leather, this jacket exudes elegance and sophistication. Whether you're dressing up for a night out or adding an edge to your everyday look, this jacket is a must-have. The Black Leather Jacket comes with a 1-year warranty, guaranteeing durability and style. Only 2 stocks remaining, so grab yours now!"
    },
    {
        "image": "images/mud jacket.jpg",
        "product_name": "Mud jacket",
        "price": "$667.99",
        "details": "Stay warm and fashionable with our Grey Coat. Made from high-quality materials, this coat offers both style and functionality. Whether you're heading to work or running errands, this versatile piece is a perfect choice. The Grey Coat comes with a 6-month warranty, ensuring durability and satisfaction. Only 3 stocks remaining, so get yours today!"
    },
    {
        "image": "images/winter jacket.jpg",
        "product_name": "Winter jacket",
        "price": "$810.99",
        "details": "Make a statement with our Camel Coat. Crafted from premium materials, this coat combines style and comfort effortlessly. Whether you're dressing up for a special occasion or adding a chic layer to your everyday look, this coat is a versatile choice. The Camel Coat comes with a 1-year warranty, ensuring quality and durability. Only 2 stocks remaining, so don't wait!"
    },
    {
        "image": "images/yellow coat.webp",
        "product_name": "yellow coat",
        "price": "$1220.99",
        "details": "Stay cozy and stylish with our Black Hoodie. Made from soft and comfortable fabric, this hoodie is perfect for casual outings and lounging at home. The classic black color makes it easy to pair with any outfit. The Black Hoodie comes with a 6-month warranty, ensuring quality and satisfaction. Only 2 stocks remaining, so don't miss out!"
    },
    {
        "image": "images/green cotton coat.jpg",
        "product_name": "Green cotton coat",
        "price": "$799.99",
        "details": "Upgrade your casual look with our Navy Blue Sweatshirt. Made from soft and comfortable fabric, this sweatshirt is perfect for everyday wear. The navy blue color adds a touch of sophistication to your outfit. The Navy Blue Sweatshirt comes with a 6-month warranty, ensuring quality and satisfaction. Only 2 stocks remaining, so grab yours now!"
    },
    {
        "image": "images/Brown winter coat.webp",
        "product_name": "Brown winter coat",
        "price": "$699.99",
        "details": "Add a pop of color to your wardrobe with our Leaf Green Hoodie. Made from soft and comfortable fabric, this hoodie is perfect for casual outings and lounging at home. The vibrant green color adds a playful touch to your look. The Leaf Green Hoodie comes with a 6-month warranty, ensuring quality and satisfaction. Only 2 stocks remaining, so grab yours now!"
    },
    {
        "image": "images/silver coat.jpg",
        "product_name": "Silver coat",
        "price": "$889.99",
        "details": "Stay cozy and stylish with our Light Peach Sweatshirt. Made from soft and comfortable fabric, this sweatshirt is perfect for everyday wear. The light peach color adds a feminine touch to your outfit. The Light Peach Sweatshirt comes with a 6-month warranty, ensuring quality and satisfaction. Only 2 stocks remaining, so grab yours now!"
    },
    {
        "image": "images/Check coat.webp",
        "product_name": "Check coat",
        "price": "$1299.99",
        "details": "Make a style statement with our Black and Grey Hoodie. Featuring a color block design, this hoodie adds a modern edge to your look. Made from soft and comfortable fabric, it's perfect for casual outings and lounging at home. The Black and Grey Hoodie comes with a 6-month warranty, ensuring quality and satisfaction. Only 1 stock remaining, so don't miss out!"
    },
    {
        "image": "images/Green long coat.webp",
        "product_name": "Green long coat",
        "price": "$999.99",
        "details": "Stay cozy and stylish with our Black Hoodie. Made from soft and comfortable fabric, this hoodie is perfect for casual outings and lounging at home. The classic black color makes it easy to pair with any outfit. The Black Hoodie comes with a 6-month warranty, ensuring quality and satisfaction. Only 2 stocks remaining, so don't miss out!"
    },
    {
        "image": "images/green seed hoodie.webp",
        "product_name": "Green seed hoodie",
        "price": "$999.99",
        "details": "Elevate your casual look with our Dark Leaf Green Hoodie. Made from high-quality fabric, this hoodie offers both style and comfort. The rich green color adds a touch of sophistication to your outfit. The Dark Leaf Green Hoodie comes with a 3-month warranty, ensuring durability and satisfaction. Only 2 stocks remaining, so grab yours now!"
    },
    {
        "image": "images/Off white sweatshirt.webp",
        "product_name": "Off white sweatshirt",
        "price": "$399.99",
        "details": "Stay cozy and stylish with our Light Grey Sweatshirt. Made from soft and comfortable fabric, this sweatshirt is perfect for everyday wear. The light grey color makes it easy to pair with any outfit. The Light Grey Sweatshirt comes with a 6-month warranty, ensuring quality and satisfaction. Only 2 stocks remaining, so grab yours now!"
    },
    {
        "image": "images/Light grey sweatshirt.webp",
        "product_name": "Light grey sweatshirts",
        "price": "$499.99",
        "details": "Add a touch of shine to your wardrobe with our Silver Hoodie. Made from soft and comfortable fabric, this hoodie is perfect for casual outings and lounging at home. The metallic silver color adds a stylish edge to your look. The Silver Hoodie comes with a 3-month warranty, ensuring durability and satisfaction. Only 2 stocks remaining, so grab yours now!"
    },
    {
        "image": "images/bushwalking jogers.png",
        "product_name": "Bushwalking jogers",
        "price": "$499.99",
        "details": "Step out in style with our Silver Long Shoes. Made from high-quality materials, these shoes offer both comfort and durability. Whether you're dressing up for a special occasion or adding a stylish touch to your everyday look, these shoes are a perfect choice. The Silver Long Shoes come with a 1-year warranty, ensuring quality and satisfaction. Only 2 stocks remaining, so don't wait!"
    },
    {
        "image": "images/White jogers.webp",
        "product_name": "White jogers",
        "price": "$399.99",
        "details": "Make a statement with our Zebra Shoes. Featuring a unique zebra print design, these shoes are sure to turn heads wherever you go. Made from high-quality materials, they offer both style and comfort. The Zebra Shoes come with a 6-month warranty, ensuring long-lasting wear. Only 3 stocks remaining, so grab yours now!"
    },
    {
        "image": "images/Black and blue jogers.jpg",
        "product_name": "Black and blue jogers",
        "price": "$599.99",
        "details": "Stay comfortable and stylish with our Black Joggers. Made from durable and breathable fabric, these joggers are perfect for workouts or casual outings. The classic black color makes them easy to pair with any outfit. The Black Joggers come with a 3-month warranty, ensuring quality and satisfaction. Only 2 stocks remaining, so don't wait!"
    },
    {
        "image": "images/Black long shoes.jpg",
        "product_name": "Black long shoes",
        "price": "$999.99",
        "details": "Boost your performance with our Running Boost Shoes. Designed for comfort and support, these shoes are perfect for running or other athletic activities. The lightweight design ensures agility and flexibility. The Running Boost Shoes come with a 6-month warranty, ensuring durability and performance. Only 2 stocks remaining, so grab yours now!"
    },
    {
        "image": "images/Dark brown long shoes.webp",
        "product_name": "Dark brown long shoes",
        "price": "$399.99",
        "details": "Step out in style with our Leather Coated Shoes. Made from genuine leather, these shoes exude elegance and sophistication. Whether you're dressing up for a formal event or adding a stylish touch to your everyday look, these shoes are a perfect choice. The Leather Coated Shoes come with a 1-year warranty, ensuring quality and satisfaction. Only 2 stocks remaining, so don't miss out!"
    },
    {
        "image": "images/Camel high heel shoe.webp",
        "product_name": "Camel high heel shoe",
        "price": "$499.99",
        "details": "Achieve your fitness goals in style with our Black and Grey Running Shoes. Made from breathable and lightweight materials, these shoes offer both comfort and performance. Whether you're hitting the gym or going for a run, these shoes are a perfect choice. The Black and Grey Running Shoes come with a 6-month warranty, ensuring quality and satisfaction. Only 3 stocks remaining, so grab yours now!"
    },
    {
        "image": "images/Black and white shoe.jpg",
        "product_name": "Black and white shoe",
        "price": "$999.99",
        "details": "Step out in style with our Black Long Leather Shoes. Made from high-quality leather, these shoes offer both durability and sophistication. Whether you're dressing up for a formal event or adding a touch of elegance to your everyday look, these shoes are a perfect choice. The Black Long Leather Shoes come with a 1-year warranty, ensuring quality and satisfaction. Only 2 stocks remaining, so don't wait!"
    },
    {
        "image": "images/White wedding shoes.webp",
        "product_name": "White wedding shoes",
        "price": "$399.99",
        "details": "Add a pop of color to your workout gear with our Rainbow Running Shoes. Made from lightweight and breathable materials, these shoes offer both comfort and style. Whether you're hitting the gym or going for a run, these shoes are a perfect choice. The Rainbow Running Shoes come with a 3-month warranty, ensuring quality and satisfaction. Only 2 stocks remaining, so grab yours now!"
    },
    {
        "image": "images/Silver long shoes.webp",
        "product_name": "Silver long shoes",
        "price": "$499.99",
        "details": "Stay steady on your feet with our Hiking Grip Shoes. Designed for outdoor adventures, these shoes offer excellent traction and support on various terrains. The durable construction ensures long-lasting wear. The Hiking Grip Shoes come with a 6-month warranty, ensuring quality and satisfaction. Only 2 stocks remaining, so grab yours now and hit the trails!"
    },
    {
        "image": "images/Bracelet watch.webp",
        "product_name": "Bracelet watch",
        "price": "$499.99",
        "details": "Make a statement with our Exporio Armani Watch. Featuring a sleek and stylish design, this watch is perfect for both casual and formal occasions. The stainless steel construction ensures durability, while the quartz movement provides accurate timekeeping. The Exporio Armani Watch comes with a 1-year warranty, ensuring quality and satisfaction. Only 2 stocks remaining, so don't miss out!"
    },
    {
        "image": "images/Korean watch.webp",
        "product_name": "Korean watch",
        "price": "$599.99",
        "details": "Stay on time and on trend with our Seiko SQ1 00 Watch. Featuring a classic design with a modern twist, this watch is a perfect blend of style and functionality. The stainless steel case offers durability, while the quartz movement provides accurate timekeeping. The Seiko SQ1 00 Watch comes with a 6-month warranty, ensuring quality and satisfaction. Only 2 stocks remaining, so grab yours now!"
    },
    {
        "image": "images/OIMG Geneva.webp",
        "product_name": "OIMG Geneva",
        "price": "$699.99",
        "details": "Add a touch of luxury to your wrist with our Exporio Armani Meccanico Watch. Featuring a sophisticated design with intricate detailing, this watch is sure to elevate your look. The stainless steel construction offers durability, while the automatic movement provides precise timekeeping. The Exporio Armani Meccanico Watch comes with a 1-year warranty, ensuring quality and satisfaction. Only 2 stocks remaining, so don't wait!"
    },
    {
        "image": "images/Wrist watch.jpg",
        "product_name": "Wrist watch",
        "price": "$899.99",
        "details": "Stay on time and on trend with our Seiko 100M Watch. Designed for active lifestyles, this watch offers water resistance up to 100 meters, making it perfect for swimming and water sports. The stainless steel case and bracelet offer durability, while the quartz movement provides accurate timekeeping. The Seiko 100M Watch comes with a 6-month warranty, ensuring quality and satisfaction. Only 2 stocks remaining, so grab yours now!"
    },
    {
        "image": "images/Adidas watch.jpg",
        "product_name": "Adidas watch",
        "price": "$399.99",
        "details": "Add a touch of elegance to your wrist with our Seiko Black and Silver Addition Watch. Featuring a classic design with a modern twist, this watch is a perfect blend of style and functionality. The stainless steel case and bracelet offer durability, while the quartz movement provides accurate timekeeping. The Seiko Black and Silver Addition Watch comes with a 1-year warranty, ensuring quality and satisfaction. Only 2 stocks remaining, so don't miss out!"
    },
    {
        "image": "images/julilus star js.jpg",
        "product_name": "julilus star js",
        "price": "$499.99",
        "details": "Make a statement with our Eberhard Mcmlix Scafograf Watch. Featuring a bold and rugged design, this watch is perfect for adventurers and outdoor enthusiasts. The stainless steel case offers durability, while the automatic movement provides precise timekeeping. The Eberhard Mcmlix Scafograf Watch comes with a 6-month warranty, ensuring quality and satisfaction. Only 2 stocks remaining, so grab yours now!"
    },
    {
        "image": "images/Vintage silver.webp",
        "product_name": "Vintage silver",
        "price": "$999.99",
        "details": "Stay on track with our Tag Heuer Formula Watch. Featuring a sporty design with a touch of luxury, this watch is perfect for active lifestyles. The stainless steel case offers durability, while the quartz movement provides accurate timekeeping. The Tag Heuer Formula Watch comes with a 1-year warranty, ensuring quality and satisfaction. Only 2 stocks remaining, so don't wait!"
    },
    {
        "image": "images/White smart watch.jpg",
        "product_name": "White smart watch",
        "price": "$799.99",
        "details": "Add a touch of elegance to your wrist with our Ingrosoll Golden Addition Watch. Featuring a classic design with a luxurious touch, this watch is perfect for both formal and casual occasions. The stainless steel case and bracelet offer durability, while the quartz movement provides accurate timekeeping. The Ingrosoll Golden Addition Watch comes with a 6-month warranty, ensuring quality and satisfaction. Only 2 stocks remaining, so grab yours now!"
    },
    {
        "image": "images/VIRAKTI structure.webp",
        "product_name": "VIRAKTI structure",
        "price": "$399.99",
        "details": "Stay on time and on trend with our Luminor Marina Watch. Featuring a sleek and sophisticated design, this watch is perfect for both casual and formal occasions. The stainless steel case offers durability, while the quartz movement provides accurate timekeeping. The Luminor Marina Watch comes with a 1-year warranty, ensuring quality and satisfaction. Only 2 stocks remaining, so don't miss out!"
    },
    {
        "image": "images/Green cargo pants.webp",
        "product_name": "Green cargo pants",
        "price": "$299.99",
        "details": "Add a touch of sophistication to your wardrobe with our Mud Brown Trouser. Made from high-quality fabric, these trousers offer both style and comfort. Whether you're dressing up for work or going for a casual look, these trousers are a perfect choice. The Mud Brown Trouser comes with a 6-month warranty, ensuring quality and satisfaction. Only 2 stocks remaining, so don't wait!"
    },
    {
        "image": "images/Sky blue trouser.jpg",
        "product_name": "Sky blue trouser",
        "price": "$150.99",
        "details": "Stay comfortable and stylish with our Grey Stretchable Trousers. Made from stretchable fabric, these trousers offer a perfect fit and all-day comfort. Whether you're running errands or lounging at home, these trousers are a versatile addition to your wardrobe. The Grey Stretchable Trousers come with a 3-month warranty, ensuring quality and satisfaction. Only 2 stocks remaining, so grab yours now!"
    },
    {
        "image": "images/Black trouser.webp",
        "product_name": "Black trouser",
        "price": "$99.99",
        "details": "Elevate your casual look with our Military Cargo Trousers. Made from durable fabric, these trousers offer both style and functionality. The cargo pockets add a utilitarian touch to your outfit. The Military Cargo Trousers come with a 1-year warranty, ensuring quality and satisfaction. Only 2 stocks remaining, so don't wait!"
    },
    {
        "image": "images/Orange cargo pants.webp",
        "product_name": "Orange cargo pants",
        "price": "$200.00",
        "details": "Look sharp and sophisticated with our Navy Blue Formal Trousers. Made from premium fabric, these trousers offer a tailored fit and timeless style. Whether you're heading to the office or attending a formal event, these trousers are a perfect choice. The Navy Blue Formal Trousers come with a 6-month warranty, ensuring quality and satisfaction. Only 2 stocks remaining, so grab yours now!"
    },
    {
        "image": "images/Black trouser.webp",
        "product_name": "Black trouser",
        "price": "$79.99",
        "details": "Stay comfortable and stylish with our Dark Blue Trousers. Made from soft and breathable fabric, these trousers offer both style and comfort. The classic dark blue color makes them easy to pair with any outfit. The Dark Blue Trousers come with a 6-month warranty, ensuring quality and satisfaction. Only 2 stocks remaining, so grab yours now!"
    },
    {
        "image": "images/Dark brown trouser.jpg",
        "product_name": "Dark brown trouser",
        "price": "$299.99",
        "details": "Stay on-trend with our Army Cargo Trousers. Made from durable fabric, these trousers offer both style and functionality. The cargo pockets add a utilitarian touch to your outfit. The Army Cargo Trousers come with a 1-year warranty, ensuring quality and satisfaction. Only 2 stocks remaining, so don't wait!"
    },
    {
        "image": "images/Baggy trouser.webp",
        "product_name": "Baggy trouser",
        "price": "$99.99",
        "details": "Add a touch of edge to your look with our Black Cargo Trousers. Made from durable fabric, these trousers offer both style and functionality. The cargo pockets add a utilitarian touch to your outfit. The Black Cargo Trousers come with a 6-month warranty, ensuring quality and satisfaction. Only 2 stocks remaining, so grab yours now!"
    },
    {
        "image": "images/Peach trouser.webp",
        "product_name": "Peach trouser",
        "price": "$149.99",
        "details": "Stay stylish and comfortable with our Grey Cargo Trousers. Made from durable fabric, these trousers offer both style and functionality. The cargo pockets add a utilitarian touch to your outfit. The Grey Cargo Trousers come with a 6-month warranty, ensuring quality and satisfaction. Only 2 stocks remaining, so grab yours now!"
    },
    {
        "image": "images/Black pants.webp",
        "product_name": "Black pants",
        "price": "$35.99",
        "details": "Add a pop of color to your wardrobe with our Dark Green Trousers. Made from soft and comfortable fabric, these trousers are perfect for casual outings and everyday wear. The dark green color adds a stylish touch to your look. The Dark Green Trousers come with a 3-month warranty, ensuring quality and satisfaction. Only 2 stocks remaining, so grab yours now!"
    }
];




// Function to load and display the cart items
// window.addEventListener('DOMContentLoaded', async () => {
// const productFeaturedImage = document.getElementById("featured-product-image")
// const productTitle = document.getElementById("product-title")
// const productprice = document.getElementById("product-price")





// const current_product = await JSON.parse(localStorage.getItem("current_item"))
// productTitle.innerText = current_product['product_name']

// productFeaturedImage.src = current_product['image']

// productprice.innerText = current_product['price']
// })



// let productRow = document.getElementById("product-row");
// let out = "";
// let count = 0;
function displayCart() {
    let cart = JSON.parse(localStorage.getItem("cart"));
    let html = "";
    let totalPrice = 0;

    if (!cart || Object.keys(cart).length === 0) {
        document.getElementById('product-container').innerHTML = "<h2 class=empty-cart>Your cart is empty 😞</h2>";
    } else {
        // Calculate total price
        Object.keys(cart).forEach(id => {
            totalPrice += parseFloat(cart[id].price.replace('$', '').replace(',', ''));
        });

        // Display total price at the top
        html += `<div class="total-price" style="position: fixed; top: 130px; left: 24%;">Total: $${totalPrice.toFixed(2)}</div>`;

        // Display individual cart items
        Object.keys(cart).forEach(id => {
            html += `<div>
                        <img class="img" src="${cart[id].image}" >
                        <div>
                            <h6 class="h6">${cart[id].product_name} - ${cart[id].price}</h6>
                            <div class="color-dropdown">
                                <select id="color-select-${id}" onchange="changeColor(this.value, '${id}')">
                                    <option value="${cart[id].color || 'black'}">${(cart[id].color || 'Color').charAt(0).toUpperCase() + (cart[id].color || 'Color').slice(1)}</option>
                                    <option value="black">Black</option>
                                    <option value="white">White</option>
                                    <option value="brown">Brown</option>
                                </select>
                            </div>
                        </div>
                        <div class="quantity">
                            <button onclick="decreaseQuantity('${id}')" class="quantity-button">-</button>
                            <span class="quantity-value">${cart[id].quantity || 1}</span>
                            <button onclick="increaseQuantity('${id}')" class="quantity-button">+</button>
                        </div>
                        <button onclick="removeFromCart('${id}')" class="delete-button">Delete</button>
                    </div>`;
        });

        document.getElementById('product-container').innerHTML = html;
    }
}

function changeColor(color, id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart[id].color = color; // Store the selected color in localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
}

function increaseQuantity(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart[id].quantity) {
        cart[id].quantity = 1; // Initialize to 1 if undefined
    }
    // Preserve the selected color
    let selectedColor = cart[id].color;
    cart[id].quantity += 1;
    cart[id].color = selectedColor; // Restore the selected color
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

// Function to decrease quantity
function decreaseQuantity(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (cart[id].quantity > 1) {
        // Preserve the selected color
        let selectedColor = cart[id].color;
        cart[id].quantity -= 1;
        cart[id].color = selectedColor; // Restore the selected color
        localStorage.setItem("cart", JSON.stringify(cart));
        displayCart();
    }
}


// Call displayCart function when the page loads to display the cart items
displayCart();



// Call displaycart function when the page loads to display the cart items
function removeFromCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    delete cart[id];
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart(); // Update cart display after removing item
}


const addToCart = async (w) => {

    
    console.log("button called")
    const id = w
    const cart_previsou_data = await JSON.parse(localStorage.getItem("cart"));

    await localStorage.setItem("cart", JSON.stringify({ ...cart_previsou_data, [id]: products[id] }))
    await localStorage.setItem("current_item", JSON.stringify(products[id]))

    window.location.href = "cart.html";

    // Redirect to another page
}
