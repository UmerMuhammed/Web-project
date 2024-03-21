const products = [
    {
        "image": "images/black leather jacket.jpg",
        "product_name": "Black leather jacket",
        "price": "$399.99",
        "details": "Stay warm and stylish with our Black Leather Jacket. Made from premium quality materials, this jacket features a modern design with a comfortable fit. Perfect for both casual outings and formal occasions. The Black Leather Jacket comes with a 1-year warranty, ensuring durability and customer satisfaction. Only 2 stocks remaining, so grab yours now and elevate your winter wardrobe!"
    },
    {
        "image": "images/Green hiking jacket.webp",
        "product_name": "Green hiking jacket",
        "price": "$320.99",
        "details": "Add a touch of sophistication to your wardrobe with our Green Hiking Jacket. Crafted with care, this jacket combines style and functionality effortlessly. Whether you're heading to a business meeting or a weekend getaway, this versatile piece is a must-have. The Green Hiking Jacket comes with a 6-month warranty, guaranteeing quality and performance. Only 3 stocks remaining, so don't miss out on this wardrobe essential!"
    },
    {
        "image": "images/light green ragwear jacket.png.",
        "product_name": "Light green ragwear",
        "price": "$240.99",
        "details": "Elevate your look with our Light Green Ragwear Jacket. Designed for comfort and elegance, this jacket is perfect for layering during chilly days. Its timeless appeal makes it a versatile addition to any wardrobe. The Light Green Ragwear Jacket comes with a 3-month warranty, ensuring peace of mind with your purchase. Only 1 stock remaining, so hurry up and make this stylish piece yours today!"
    },
    {
        "image": "images/camel jacket.webp",
        "product_name": "Camel jacket",
        "price": "$230.99",
        "details": "Stay cozy and chic with our Camel Jacket. This classic piece adds a touch of sophistication to any outfit. Whether you're running errands or meeting friends for brunch, this jacket is a perfect choice. The Camel Jacket comes with a 1-year warranty, offering durability and quality assurance. Only 2 stocks remaining, so don't wait too long to make it yours!"
    },
    {
        "image": "images/red thin jacket.webp",
        "product_name": "Red thin jacket",
        "price": "$320.99",
        "details": "Make a statement with our Red Thin Jacket. Featuring a unique zebra print design, this jacket is sure to turn heads wherever you go. Made from high-quality materials, it offers both style and comfort. The Red Thin Jacket comes with a 6-month warranty, ensuring long-lasting wear. Only 3 stocks remaining, so grab yours before it's too late!"
    },
    {
        "image": "images/olive jacket.webp",
        "product_name": "Olive jacket",
        "price": "$710.99",
        "details": "Stay cozy and stylish with our Olive Jacket. Made from soft and luxurious materials, this jacket is perfect for chilly days and evenings. Whether you're out for a walk or relaxing at home, this jacket is a versatile addition to your wardrobe. The Olive Jacket comes with a 1-year warranty, ensuring quality and comfort. Only 2 stocks remaining, so don't miss out!"
    },
    {
        "image": "images/jean jacket.jpg",
        "product_name": "Jean jacket",
        "price": "$820.99",
        "details": "Achieve a classic and timeless look with our Jean Jacket. Crafted from genuine leather, this jacket exudes elegance and sophistication. Whether you're dressing up for a night out or adding an edge to your everyday look, this jacket is a must-have. The Jean Jacket comes with a 1-year warranty, guaranteeing durability and style. Only 2 stocks remaining, so grab yours now!"
    },
    {
        "image": "images/mud jacket.jpg",
        "product_name": "Mud jacket",
        "price": "$667.99",
        "details": "Stay warm and fashionable with our Mud Jacket. Made from high-quality materials, this coat offers both style and functionality. Whether you're heading to work or running errands, this versatile piece is a perfect choice. The Mud Jacket comes with a 6-month warranty, ensuring durability and satisfaction. Only 3 stocks remaining, so get yours today!"
    },
    {
        "image": "images/winter jacket.jpg",
        "product_name": "Winter jacket",
        "price": "$810.99",
        "details": "Make a statement with our Winter Jacket. Crafted from premium materials, this coat combines style and comfort effortlessly. Whether you're dressing up for a special occasion or adding a chic layer to your everyday look, this coat is a versatile choice. The Winter Jacket comes with a 1-year warranty, ensuring quality and durability. Only 2 stocks remaining, so don't wait!"
    },
    {
        "image": "images/yellow coat.webp",
        "product_name": "Yellow coat",
        "price": "$1220.99",
        "details": "Stay cozy and stylish with our Yellow Coat. Made from soft and comfortable fabric, this hoodie is perfect for casual outings and lounging at home. The classic black color makes it easy to pair with any outfit. The Yellow Coat comes with a 6-month warranty, ensuring quality and satisfaction. Only 2 stocks remaining, so don't miss out!"
    },
    {
        "image": "images/green cotton coat.jpg",
        "product_name": "Green cotton coat",
        "price": "$799.99",
        "details": "Upgrade your casual look with our Green Cotton Coat. Made from soft and comfortable fabric, this coat is perfect for everyday wear. The green color adds a refreshing touch to your outfit. The Green Cotton Coat comes with a 6-month warranty, ensuring quality and satisfaction. Only 2 stocks remaining, so grab yours now!"
    },
    {
        "image": "images/Brown winter coat.webp",
        "product_name": "Brown winter coat",
        "price": "$699.99",
        "details": "Add a pop of color to your wardrobe with our Brown Winter Coat. Made from soft and comfortable fabric, this coat is perfect for chilly days and evenings. The vibrant brown color adds warmth and style to your look. The Brown Winter Coat comes with a 1-year warranty, ensuring quality and satisfaction. Only 2 stocks remaining, so grab yours now!"
    },
    {
        "image": "images/silver coat.jpg",
        "product_name": "Silver coat",
        "price": "$889.99",
        "details": "Stay cozy and stylish with our Silver Coat. Made from soft and comfortable fabric, this coat is perfect for everyday wear. The silver color adds a touch of elegance to your outfit. The Silver Coat comes with a 6-month warranty, ensuring quality and satisfaction. Only 2 stocks remaining, so grab yours now!"
    },
    {
        "image": "images/Check coat.webp",
        "product_name": "Check coat",
        "price": "$1299.99",
        "details": "Make a style statement with our Check Coat. Featuring a classic checkered design, this coat adds a sophisticated touch to your look. Made from high-quality materials, it offers both style and comfort. The Check Coat comes with a 6-month warranty, ensuring long-lasting wear. Only 1 stock remaining, so don't miss out!"
    },
    {
        "image": "images/Green long coat.webp",
        "product_name": "Green long coat",
        "price": "$999.99",
        "details": "Stay cozy and stylish with our Green Long Coat. Made from soft and comfortable fabric, this coat is perfect for chilly days and evenings. The green color adds a refreshing touch to your outfit. The Green Long Coat comes with a 6-month warranty, ensuring quality and satisfaction. Only 2 stocks remaining, so grab yours now!"
    },
    {
        "image": "images/green seed hoodie.webp",
        "product_name": "Green seed hoodie",
        "price": "$999.99",
        "details": "Elevate your casual look with our Green Seed Hoodie. Made from high-quality fabric, this hoodie offers both style and comfort. The rich green color adds a touch of sophistication to your outfit. The Green Seed Hoodie comes with a 3-month warranty, ensuring durability and satisfaction. Only 2 stocks remaining, so grab yours now!"
    },
    {
        "image": "images/Off white sweatshirt.webp",
        "product_name": "Off white sweatshirt",
        "price": "$399.99",
        "details": "Stay cozy and stylish with our Off White Sweatshirt. Made from soft and comfortable fabric, this sweatshirt is perfect for everyday wear. The off-white color makes it easy to pair with any outfit. The Off White Sweatshirt comes with a 6-month warranty, ensuring quality and satisfaction. Only 2 stocks remaining, so grab yours now!"
    },
    {
        "image": "images/Light grey sweatshirt.webp",
        "product_name": "Light grey sweatshirts",
        "price": "$499.99",
        "details": "Add a touch of shine to your wardrobe with our Light Grey Sweatshirt. Made from soft and comfortable fabric, this sweatshirt is perfect for casual outings and lounging at home. The metallic silver color adds a stylish edge to your look. The Light Grey Sweatshirt comes with a 3-month warranty, ensuring durability and satisfaction. Only 2 stocks remaining, so grab yours now!"
    },
    {
        "image": "images/bushwalking jogers.png",
        "product_name": "Bushwalking jogers",
        "price": "$499.99",
        "details": "Step out in style with our Bushwalking Joggers. Made from high-quality materials, these joggers offer both comfort and durability. Whether you're hiking in the mountains or strolling through the park, these joggers are a perfect choice. The Bushwalking Joggers come with a 1-year warranty, ensuring quality and satisfaction. Only 2 stocks remaining, so don't wait!"
    },
    {
        "image": "images/White jogers.webp",
        "product_name": "White jogers",
        "price": "$399.99",
        "details": "Make a statement with our White Joggers. Featuring a sleek and stylish design, these joggers are perfect for both casual and athletic wear. Made from high-quality materials, they offer both comfort and durability. The White Joggers come with a 6-month warranty, ensuring long-lasting wear. Only 2 stocks remaining, so grab yours now!"
    },
    {
        "image": "images/Black and blue jogers.jpg",
        "product_name": "Black and blue jogers",
        "price": "$599.99",
        "details": "Stay comfortable and stylish with our Black and Blue Joggers. Made from durable and breathable fabric, these joggers are perfect for workouts or casual outings. The classic black and blue color combination makes them versatile for any occasion. The Black and Blue Joggers come with a 3-month warranty, ensuring quality and satisfaction. Only 2 stocks remaining, so don't wait!"
    },
    {
    "image": "images/Black long shoes.jpg",
    "product_name": "Black long shoes",
    "price": "$999.99",
    "details": "Boost your performance with our Black Long Shoes. Designed for comfort and support, these shoes are perfect for running or other athletic activities. The lightweight design ensures agility and flexibility. The Black Long Shoes come with a 6-month warranty, ensuring durability and performance. Only 2 stocks remaining, so grab yours now!"
},
{
    "image": "images/Dark brown long shoes.webp",
    "product_name": "Dark brown long shoes",
    "price": "$399.99",
    "details": "Step out in style with our Dark Brown Long Shoes. Made from genuine leather, these shoes exude elegance and sophistication. Whether you're dressing up for a formal event or adding a stylish touch to your everyday look, these shoes are a perfect choice. The Dark Brown Long Shoes come with a 1-year warranty, ensuring quality and satisfaction. Only 2 stocks remaining, so don't miss out!"
},
{
    "image": "images/Camel high heel shoe.webp",
    "product_name": "Camel high heel shoe",
    "price": "$499.99",
    "details": "Achieve your fitness goals in style with our Camel High Heel Shoes. Made from breathable and lightweight materials, these shoes offer both comfort and performance. Whether you're hitting the gym or going for a run, these shoes are a perfect choice. The Camel High Heel Shoes come with a 6-month warranty, ensuring quality and satisfaction. Only 3 stocks remaining, so grab yours now!"
},
{
    "image": "images/Black and white shoe.jpg",
    "product_name": "Black and white shoe",
    "price": "$999.99",
    "details": "Step out in style with our Black and White Shoes. Made from high-quality materials, these shoes offer both durability and style. The classic black and white color combination adds a timeless appeal to your outfit. The Black and White Shoes come with a 1-year warranty, ensuring quality and satisfaction. Only 2 stocks remaining, so don't wait!"
},
{
    "image": "images/White wedding shoes.webp",
    "product_name": "White wedding shoes",
    "price": "$399.99",
    "details": "Add a pop of color to your wedding ensemble with our White Wedding Shoes. Made from premium materials, these shoes offer both elegance and comfort. Whether you're walking down the aisle or dancing the night away, these shoes are a perfect choice. The White Wedding Shoes come with a 3-month warranty, ensuring quality and satisfaction. Only 2 stocks remaining, so grab yours now!"
},
{
    "image": "images/Silver long shoes.webp",
    "product_name": "Silver long shoes",
    "price": "$499.99",
    "details": "Stay steady on your feet with our Silver Long Shoes. Designed for outdoor adventures, these shoes offer excellent traction and support on various terrains. The durable construction ensures long-lasting wear. The Silver Long Shoes come with a 6-month warranty, ensuring quality and satisfaction. Only 2 stocks remaining, so grab yours now and hit the trails!"
},
{
    "image": "images/Bracelet watch.webp",
    "product_name": "Bracelet watch",
    "price": "$499.99",
    "details": "Make a statement with our Bracelet Watch. Featuring a sleek and stylish design, this watch is perfect for both casual and formal occasions. The stainless steel construction ensures durability, while the quartz movement provides accurate timekeeping. The Bracelet Watch comes with a 1-year warranty, ensuring quality and satisfaction. Only 2 stocks remaining, so don't miss out!"
},
{
    "image": "images/Korean watch.webp",
    "product_name": "Korean watch",
    "price": "$599.99",
    "details": "Stay on time and on trend with our Korean Watch. Featuring a classic design with a modern twist, this watch is a perfect blend of style and functionality. The stainless steel case offers durability, while the quartz movement provides accurate timekeeping. The Korean Watch comes with a 6-month warranty, ensuring quality and satisfaction. Only 2 stocks remaining, so grab yours now!"
},
{
    "image": "images/OIMG Geneva.webp",
    "product_name": "OIMG Geneva",
    "price": "$699.99",
    "details": "Add a touch of luxury to your wrist with our OIMG Geneva Watch. Featuring a sophisticated design with intricate detailing, this watch is sure to elevate your look. The stainless steel construction offers durability, while the automatic movement provides precise timekeeping. The OIMG Geneva Watch comes with a 1-year warranty, ensuring quality and satisfaction. Only 2 stocks remaining, so don't wait!"
},
{
    "image": "images/Wrist watch.jpg",
    "product_name": "Wrist watch",
    "price": "$899.99",
    "details": "Stay on time and on trend with our Wrist Watch. Designed for active lifestyles, this watch offers water resistance up to 100 meters, making it perfect for swimming and water sports. The stainless steel case and bracelet offer durability, while the quartz movement provides accurate timekeeping. The Wrist Watch comes with a 6-month warranty, ensuring quality and satisfaction. Only 2 stocks remaining, so grab yours now!"
},
{
    "image": "images/Adidas watch.jpg",
    "product_name": "Adidas watch",
    "price": "$399.99",
    "details": "Add a touch of elegance to your wrist with our Adidas Watch. Featuring a classic design with a modern twist, this watch is a perfect blend of style and functionality. The stainless steel case and bracelet offer durability, while the quartz movement provides accurate timekeeping. The Adidas Watch comes with a 1-year warranty, ensuring quality and satisfaction. Only 2 stocks remaining, so don't miss out!"
},
{
    "image": "images/julilus star js.jpg",
    "product_name": "julilus star js",
    "price": "$499.99",
    "details": "Make a statement with our Julilus Star JS Watch. Featuring a bold and rugged design, this watch is perfect for adventurers and outdoor enthusiasts. The stainless steel case offers durability, while the automatic movement provides precise timekeeping. The Julilus Star JS Watch comes with a 6-month warranty, ensuring quality and satisfaction. Only 2 stocks remaining, so grab yours now!"
},

{
    "image": "images/Pink heart watch.webp",
    "product_name": "Pink heart watch",
    "price": "$799.99",
    "details": "Stay stylish and punctual with our Pink Heart Watch. Featuring a charming heart-shaped design, this watch adds a touch of romance to your wrist. The stainless steel case and bracelet offer durability, while the quartz movement provides accurate timekeeping. The Pink Heart Watch comes with a 1-year warranty, ensuring quality and satisfaction. Only 2 stocks remaining, so grab yours now!"
},
{
    "image": "images/Galaxy watch.jpg",
    "product_name": "Galaxy watch",
    "price": "$899.99",
    "details": "Stay connected and on trend with our Galaxy Watch. Featuring a vibrant AMOLED display and a host of smart features, this watch is perfect for tech-savvy individuals. Track your fitness goals, receive notifications, and more, all from your wrist. The Galaxy Watch comes with a 1-year warranty, ensuring quality and satisfaction. Only 2 stocks remaining, so grab yours now!"
},
{
    "image": "images/Smart watch.webp",
    "product_name": "Smartwatch",
    "price": "$499.99",
    "details": "Stay connected on the go with our Smart Watch. Featuring a touchscreen display and a range of smart features, this watch keeps you informed and organized throughout the day. Track your fitness goals, receive notifications, and more, all from your wrist. The Digital Smart Watch comes with a 6-month warranty, ensuring quality and satisfaction. Only 2 stocks remaining, so grab yours now!"
},

{
    "image": "images/Bracelet watch.webp",
    "product_name": "Bracelet watch",
    "price": "$499.99",
    "details": "Make a statement with our Bracelet Watch. Featuring a sleek and stylish design, this watch is perfect for both casual and formal occasions. The stainless steel construction ensures durability, while the quartz movement provides accurate timekeeping. The Bracelet Watch comes with a 1-year warranty, ensuring quality and satisfaction. Only 2 stocks remaining, so don't miss out!"
},
{
    "image": "images/Korean watch.webp",
    "product_name": "Korean watch",
    "price": "$599.99",
    "details": "Stay on time and on trend with our Korean Watch. Featuring a classic design with a modern twist, this watch is a perfect blend of style and functionality. The stainless steel case offers durability, while the quartz movement provides accurate timekeeping. The Korean Watch comes with a 6-month warranty, ensuring quality and satisfaction. Only 2 stocks remaining, so grab yours now!"
},
{
    "image": "images/OIMG Geneva.webp",
    "product_name": "OIMG Geneva",
    "price": "$699.99",
    "details": "Add a touch of luxury to your wrist with our OIMG Geneva Watch. Featuring a sophisticated design with intricate detailing, this watch is sure to elevate your look. The stainless steel construction offers durability, while the automatic movement provides precise timekeeping. The OIMG Geneva Watch comes with a 1-year warranty, ensuring quality and satisfaction. Only 2 stocks remaining, so don't wait!"
},
{
    "image": "images/Wrist watch.jpg",
    "product_name": "Wrist watch",
    "price": "$899.99",
    "details": "Stay on time and on trend with our Wrist Watch. Designed for active lifestyles, this watch offers water resistance up to 100 meters, making it perfect for swimming and water sports. The stainless steel case and bracelet offer durability, while the quartz movement provides accurate timekeeping. The Wrist Watch comes with a 6-month warranty, ensuring quality and satisfaction. Only 2 stocks remaining, so grab yours now!"
},
{
    "image": "images/Adidas watch.jpg",
    "product_name": "Adidas watch",
    "price": "$399.99",
    "details": "Add a touch of elegance to your wrist with our Adidas Watch. Featuring a classic design with a modern twist, this watch is a perfect blend of style and functionality. The stainless steel case and bracelet offer durability, while the quartz movement provides accurate timekeeping. The Adidas Watch comes with a 1-year warranty, ensuring quality and satisfaction. Only 2 stocks remaining, so don't miss out!"
},
{
    "image": "images/julilus star js.jpg",
    "product_name": "julilus star js",
    "price": "$499.99",
    "details": "Make a statement with our Julilus Star JS Watch. Featuring a bold and rugged design, this watch is perfect for adventurers and outdoor enthusiasts. The stainless steel case offers durability, while the automatic movement provides precise timekeeping. The Julilus Star JS Watch comes with a 6-month warranty, ensuring quality and satisfaction. Only 2 stocks remaining, so grab yours now!"
},
{
    "image": "images/Vintage silver.webp",
    "product_name": "Vintage silver",
    "price": "$999.99",
    "details": "Stay on track with our Vintage Silver Watch. Featuring a sporty design with a touch of luxury, this watch is perfect for active lifestyles. The stainless steel case offers durability, while the quartz movement provides accurate timekeeping. The Vintage Silver Watch comes with a 1-year warranty, ensuring quality and satisfaction. Only 2 stocks remaining, so don't wait!"
},
{
    "image": "images/White smart watch.jpg",
    "product_name": "White smart watch",
    "price": "$799.99",
    "details": "Add a touch of elegance to your wrist with our White Smart Watch. Featuring a classic design with a luxurious touch, this watch is perfect for both formal and casual occasions. The stainless steel case and bracelet offer durability, while the quartz movement provides accurate timekeeping. The White Smart Watch comes with a 6-month warranty, ensuring quality and satisfaction. Only 2 stocks remaining, so grab yours now!"
},
{
    "image": "images/VIRAKTI structure.webp",
    "product_name": "VIRAKTI structure",
    "price": "$399.99",
    "details": "Stay on time and on trend with our Virakti Structure Watch. Featuring a sleek and sophisticated design, this watch is perfect for both casual and formal occasions. The stainless steel case offers durability, while the quartz movement provides accurate timekeeping. The Virakti Structure Watch comes with a 1-year warranty, ensuring quality and satisfaction. Only 2 stocks remaining, so don't miss out!"
},
{
    "image": "images/Green cargo pants.webp",
    "product_name": "Green cargo pants",
    "price": "$299.99",
    "details": "Add a touch of sophistication to your wardrobe with our Green Cargo Pants. Made from high-quality fabric, these trousers offer both style and comfort. Whether you're dressing up for work or going for a casual look, these trousers are a perfect choice. The Green Cargo Pants come with a 6-month warranty, ensuring quality and satisfaction. Only 2 stocks remaining, so don't wait!"
},
{
    "image": "images/Sky blue trouser.jpg",
    "product_name": "Sky blue trouser",
    "price": "$150.99",
    "details": "Stay comfortable and stylish with our Sky Blue Trouser. Made from stretchable fabric, these trousers offer a perfect fit and all-day comfort. Whether you're running errands or lounging at home, these trousers are a versatile addition to your wardrobe. The Sky Blue Trouser come with a 3-month warranty, ensuring quality and satisfaction. Only 2 stocks remaining, so grab yours now!"
},
{
    "image": "images/Black trouser.webp",
    "product_name": "Black trouser",
    "price": "$99.99",
    "details": "Elevate your casual look with our Black Trouser. Made from durable fabric, these trousers offer both style and functionality. The cargo pockets add a utilitarian touch to your outfit. The Black Trouser comes with a 1-year warranty, ensuring quality and satisfaction. Only 2 stocks remaining, so don't wait!"
},
{
    "image": "images/Orange cargo pants.webp",
    "product_name": "Orange cargo pants",
    "price": "$200.00",
    "details": "Look sharp and sophisticated with our Orange Cargo Pants. Made from premium fabric, these trousers offer a tailored fit and timeless style. Whether you're heading to the office or attending a formal event, these pants will elevate your look. The Orange Cargo Pants come with a 6-month warranty, ensuring quality and satisfaction. Only 2 stocks remaining, so grab yours now!"
},
{
    "image": "images/Sea green trouser.png",
    "product_name": "Sea green trouser",
    "price": "$79.99",
    "details": "Stay comfortable and stylish with our Sea Green Trouser. Made from soft and breathable fabric, these trousers offer both style and comfort. The classic sea green color makes them easy to pair with any outfit. The Sea Green Trouser comes with a 6-month warranty, ensuring quality and satisfaction. Only 2 stocks remaining, so grab yours now!"
},
{
    "image": "images/Dark brown trouser.jpg",
    "product_name": "Dark brown trouser",
    "price": "$299.99",
    "details": "Stay on-trend with our Dark Brown Trouser. Made from durable fabric, these trousers offer both style and functionality. The cargo pockets add a utilitarian touch to your outfit. The Dark Brown Trouser comes with a 1-year warranty, ensuring quality and satisfaction. Only 2 stocks remaining, so don't wait!"
},
{
    "image": "images/Baggy trouser.webp",
    "product_name": "Baggy trouser",
    "price": "$99.99",
    "details": "Add a touch of edge to your look with our Baggy Trouser. Made from durable fabric, these trousers offer both style and functionality. The cargo pockets add a utilitarian touch to your outfit. The Baggy Trouser comes with a 6-month warranty, ensuring quality and satisfaction. Only 2 stocks remaining, so grab yours now!"
},
{
    "image": "images/Peach trouser.webp",
    "product_name": "Peach trouser",
    "price": "$149.99",
    "details": "Stay stylish and comfortable with our Peach Trouser. Made from durable fabric, these trousers offer both style and functionality. The cargo pockets add a utilitarian touch to your outfit. The Peach Trouser comes with a 6-month warranty, ensuring quality and satisfaction. Only 2 stocks remaining, so grab yours now!"
},
{
    "image": "images/Black pants.webp",
    "product_name": "Black pants",
    "price": "$35.99",
    "details": "Add a pop of color to your wardrobe with our Black Pants. Made from soft and comfortable fabric, these trousers are perfect for casual outings and everyday wear. The black color adds a stylish touch to your look. The Black Pants come with a 3-month warranty, ensuring quality and satisfaction. Only 2 stocks remaining, so grab yours now!"
}

]



let productRow = document.getElementById("product-row");
let out = "";
let count = 0;
const addToCart = async (id) => {
    const cart_previous_data = JSON.parse(localStorage.getItem("cart")) || {};
    cart_previous_data[id] = products[id];
    localStorage.setItem("cart", JSON.stringify(cart_previous_data));

    // Show the notification card
    const notification = document.getElementById('notification');
    notification.style.right = '20px'; // Move the card to the right

    // Redirect to itemcart.html after a short delay (e.g., 2 seconds)
    setTimeout(() => {
        notification.style.right = '-400px'; // Move the card back to its initial position
    }, 2000);
}


// function addToCart(itemId) {
//     // Show alert
//     var alertMessage = "Your item has been added to the cart.";
//     alertMessage += "\n\n";
//     alertMessage += "View your cart?";

//     if (confirm(alertMessage)) {
//         // Redirect to itemcart.html
//         window.location.href = 'itemcart.html';
//     }
// }





const details = async (s) => {
    console.log("button called")
    const id = s
    const cart_previsou_data2 = await JSON.parse(localStorage.getItem("cart"));

    await localStorage.setItem("cart", JSON.stringify({ ...cart_previsou_data2, [id]: products[id] }))
    await localStorage.setItem("current_item", JSON.stringify(products[id]))
    // Redirect to another page
    window.location.href = "details.html";
}


for (let i = 0; i < products.length; i++) {
    const product = products[i];
    console.log(product.image);
    out += `
                <div class="card">
                    <img id="img${i}" src="${product.image}" alt="Product Image">
                    <h2 id="name${i}">${product.product_name}</h2>
                    <p id="price${i}">${product.price}</p>
                    <button id="${i}" onclick="details(this.id)" class="view-button">View Details</button>
                    <button  id="${i}" onclick="addToCart(this.id)" class="cart-button2">Add to Cart</button>                   
                </div>
            `;
}
count++;
productRow.innerHTML = out;



document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fadeIn');
            }
        });
    });

    const elementsToAnimate = document.querySelectorAll('.company-info, .head1, .head2, .carousel-inner, .for-men, .main-head, #cont');
    elementsToAnimate.forEach(element => observer.observe(element));
});