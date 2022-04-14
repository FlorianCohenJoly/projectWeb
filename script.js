var icon_search = document.getElementById('icon-search');
var search_input = document.getElementById('search-input');
let x = document.getElementsByClassName('product-name');
let products = document.querySelectorAll('#products');

icon_search.addEventListener('click', function(e) {
    search_input.focus();
});

search_input.addEventListener("input", function(e) {
    console.log(search_input.value);
    var xml = new XMLHttpRequest();
    xml.open("GET", `http://10.57.29.22:8080/articles`)
    xml.send();

    /*xml.onload = function () {
        console.log(xml.responseText)
    }*/
});

function searchFunction() {
    //search_input = search_input.toLowerCase();

    /*for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.includes(search_input)) {
    }
        else {
            products[i].style.display = "block";  
            }
        }
    if (search_input == "") {
        products[i].style.display = "block";  
    } */
}


let carts = document.querySelectorAll('.add-cart ');

let products = [
{
    name:'Airpods Max',
    tag:'airpodsmax',
    price: 650,
    inCart:0

},
{
    name:'Airpods 3eme generation',
    tag:'airpod3emegene',
    price:300,
    inCart:0

},
{
    name:'Iphone 13 Pro',
    tag:'iphone13pro',
    price:1158,
    inCart:0

},
{
    name:'Iphone Se',
    tag:'iphonese',
    price:529,
    inCart:0

},
{
    name:'iMac24 yellow',
    tag:'mac24y',
    price:1449,
    inCart:0

},
{
    name:'iMac24 blue',
    tag:'mac24b',
    price:1449,
    inCart:0

}
];


for (let i = 0; i < carts.length; i++){
    carts[i].addEventListener('click',()=> {
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers; 
    }
}

function cartNumbers(product){
    let productNumbers = localStorage.getItem('cartNumbers');


    productNumbers = parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);

        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }

    setItems(product);
  
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    
    if(cartItems != null){

        if(cartItems[product.tag] == undefined){
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }

        cartItems[product.tag].inCart += 1;
    }else{
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
    
}

function totalCost(product){
    let cartCost = localStorage.getItem('totalCost');

    console.log("my cartcost is", cartCost);
    console.log(typeof cartCost);

    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    }
    else{
        localStorage.setItem("totalCost", product.price);

    }

}


function displayCart(){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products-container");
    let cartCost = localStorage.getItem('totalCost');

    console.log(cartItems);
    if(cartItems && productContainer){
    productContainer.innerHTML = '';
    Object.values(cartItems).map(item => {
        productContainer.innerHTML += `
       
    <div class="product">
        <img src="./ressources/${item.tag}.jpg " width="150px" height="150px">
        <span>${item.name}</span>
    </div>
        <div class="quantity">
        <ion-icon class="decrease" name="arrow-dropleft-circle"></ion-icon>
        <span>${item.inCart}</span>
        <ion-icon class="increase" name="arrow-dropright-circle"></ion-icon>
    </div>
    <div class="total">
        ${item.inCart * item.price},00
    </div>
        `
    });
    
    productContainer.innerHTML += `
    <div class="basketTotalContainer">
        <h4 class="basketTotalTitle">
          Total
        </h4>
        <h4 class="basketTotal">
            $${cartCost},00
        </h4>

    `
    }
}

function deleteItems() {
    // Clear localStorage items 
    localStorage.clear();
    location.reload();
  }


onLoadCartNumbers();
displayCart();
