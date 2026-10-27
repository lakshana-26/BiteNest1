let foods = [
    {
        name: "South Indian Meals",
        price: 120,
        mood: "comfort",
        image: "traditional-indian-thali-meal-served-on-banana-leaf-displaying-culinary-delights-photo.jpg"
    },
    {
        name: "Masala Dosa",
        price: 80,
        mood: "breakfast",
        image: "masala-dosa-3.webp"
    },
    {
        name: "Idly",
        price: 50,
        mood: "breakfast",
        image: "south-indian-idli-hot-sambar-and-coconut-chutney-served-on-a-banana-leaf-traditional-style-photo.jpg"
    },
    {
        name: "Poori",
        price: 60,
        mood: "breakfast",
        image: "poori-picture_thumb3.webp"
    },
    {
        name: "Pongal",
        price: 70,
        mood: "breakfast",
        image: "pongal-ven-pongal-500x500.jpg"
    },
    {
        name: "Vada",
        price: 40,
        mood: "hungry",
        image: "Medu-Vada-5.jpg"
    },
    {
        name: "Parotta",
        price: 70,
        mood: "comfort",
        image: "360_F_322274314_MEln9YzXVGc35pXYz4hqkFzJzvGMgmvt.jpg"
    }
];

let cart = [];
function displayFoods(list) {

    let output = "";

    list.forEach(function(food) {

        output += `
            <div class="food-card">

                <img src="${food.image}">

                <h3>${food.name}</h3>

                <p class="price">₹${food.price}</p>

                <button onclick="addToCart('${food.name}')">
                    Add to Cart
                </button>

            </div>
        `;
    });

    document.getElementById("foodContainer").innerHTML = output;
}
displayFoods(foods);
function addToCart(name) {

    let food = foods.find(function(item) {
        return item.name == name;
    });

    let item = cart.find(function(item) {
        return item.name == name;
    });

    if (item) {
        item.quantity++;
    }
    else {
        cart.push({
            name: food.name,
            price: food.price,
            quantity: 1
        });
    }

    displayCart();

    alert(name + " added successfully!");
}
function displayCart() {

    let output = "";
    let total = 0;

    cart.forEach(function(item, index) {

        total = total + item.price * item.quantity;

        output += `
            <div class="cart-item">

                <b>${item.name}</b>

                <span>
                    ₹${item.price * item.quantity}
                </span>

                <div class="quantity">

                    <button onclick="decrease(${index})">
                        −
                    </button>
                    ${item.quantity}
                    <button onclick="increase(${index})">
                        +
                    </button>
                    <button onclick="removeItem(${index})">
                        Remove
                    </button>

                </div>

            </div>
        `;
    });

    document.getElementById("cartContainer").innerHTML = output;

    document.getElementById("total").innerHTML =
        "Total: ₹" + total;
}

function increase(index) {

    cart[index].quantity++;

    displayCart();

    alert("Quantity increased!");
}

function decrease(index) {

    if (cart[index].quantity > 1) {

        cart[index].quantity--;

        displayCart();

        alert("Quantity decreased!");

    }
    else {

        alert("Minimum quantity is 1!");

    }
}
function removeItem(index) {

    let name = cart[index].name;

    cart.splice(index, 1);

    displayCart();

    alert(name + " removed successfully!");
}

function searchFood() {

    let value =
        document.getElementById("search").value.toLowerCase();

    let result = foods.filter(function(food) {

        return food.name.toLowerCase().includes(value);

    });

    displayFoods(result);
}
function showFood(mood) {

    if (mood == "all") {

        displayFoods(foods);

    }
    else {

        let result = foods.filter(function(food) {

            return food.mood == mood;

        });

        displayFoods(result);
    }

    alert("Food menu updated!");
}
function placeOrder() {

    if (cart.length == 0) {

        alert("Please add food to cart!");

    }
    else {

        alert(
            "🎉 Order placed successfully!\n" +
            "Payment: Cash on Delivery"
        );

        cart = [];

        displayCart();
    }
}