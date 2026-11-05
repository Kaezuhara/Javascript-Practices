// Display HTML
import { cart, addToCart } from '../data/cart.js';
import { products } from '../data/products.js';
import { formatCurrency } from './utils/money.js';

let productsHTML = '';        // contain the visible HTML structure for every product
let addedMsgTimeouts = {};    // contains active timer for each products, for notif display when adding to cart

// generate each product's HTML and save it to productsHTML
products.forEach((product) => {               // 'products' is located in the data folder.
  productsHTML += `
    <div class="product-container">
      <div class="product-image-container">
        <img class="product-image"
          src="${product.image}">
      </div>

      <div class="product-name limit-text-to-2-lines">
        ${product.name}
      </div>

      <div class="product-rating-container">
        <img class="product-rating-stars"
          src="images/ratings/rating-${product.rating.stars * 10}.png">
        <div class="product-rating-count link-primary">
          ${product.rating.count}
        </div>
      </div>

      <div class="product-price">
        $${formatCurrency(product.priceCents)}
      </div>

      <div class="product-quantity-container">
        <select class="product-qty-${product.id}">
          <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div class="product-spacer"></div>

      <div class="added-to-cart added-to-cart-${product.id}">
        <img src="images/icons/checkmark.png">
        Added
      </div>

      <button class="add-to-cart-button button-primary"
        data-product-id="${product.id}">
        Add to Cart
      </button>
    </div>    
  `;
});

document.querySelector('.products-grid').innerHTML = productsHTML;    // load the products to the webpage



// count and save all the quantity of each product inside the cart
function updateCartQty(){
  let cartQty = 0;
  cart.forEach((cartItem) => {
    cartQty += cartItem.productQty;
  });

  document.querySelector('.cart-quantity').innerHTML = cartQty;   // load the cart quantity to the webpage
}



// display confirmation when adding a product to cart is successful
function addedToCartNotif(productId){
  // Add to Cart Notification
  const added = document.querySelector(`.added-to-cart-${productId}`);
  added.classList.add('added-to-cart-visible');   // add the css visible classlist

  clearTimeout(addedMsgTimeouts[productId]);    // cancel the timer for the product's notif if it is active; for multiple clicks bug

  // remove the notif after 2 seconds
  addedMsgTimeouts[productId] = setTimeout(() => {    // ex. addedMsgTimeouts[productId-123]: # (new int)
    added.classList.remove('added-to-cart-visible');  // ^ bracket notation is used for dynamic variable
  }, 2000);
}



// Add to cart interaction
document.querySelectorAll('.add-to-cart-button').forEach((button) => {    // make every products have its own button
  button.addEventListener('click', () => {
    const { productId } = button.dataset;   // destructure --- unique identifier for each products using 'data' attribute
    const productQty = Number(document.querySelector(`.product-qty-${productId}`).value);   // convert the selector value to a number
    
    addToCart(productId, productQty);
    updateCartQty();
    addedToCartNotif(productId);
  });
});