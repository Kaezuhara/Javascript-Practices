// Make the button load when clicking and display "Finished!" after a delay.
const delayedButton = document.querySelector('.delayedButton');

function delayedDisp(){
  delayedButton.innerHTML = 'Loading...';
  setTimeout(() => {
    delayedButton.innerHTML = 'Finished!';
  }, 3000);
};



// Click a button that displays a message below and be removed after a delay.
const addedToCart = document.querySelector('.addedToCart');
const cartButton = document.querySelector('.cartButton');

function addToCart(){
  cartButton.innerHTML = 'adding...';

  setTimeout(() => {                      // this runs first after 3s
    addedToCart.innerHTML = 'Added!';
    cartButton.innerHTML = 'Add to cart';
    
    setTimeout(() => {                    // then this runs next 2s after the first setTimeout
      addedToCart.innerHTML = '';
    }, 2000);

  }, 3000);
}



// Click a button to order, then displayes "Success" below after a short delay, which can be cancelled by clicking it again.
const orderButton = document.querySelector('.orderButton');
const successDisp = document.querySelector('.successDisp');
let pressed = false;
let orderID = '';

function order(){
  if (pressed === false){
    pressed = true;
    orderButton.innerHTML = 'ordering...';

    orderID = setTimeout(() => {
      successDisp.innerHTML = 'Success!';
      orderButton.innerHTML = 'order';

      pressed = false;
    }, 3000);

  } else {
    pressed = false;
    clearTimeout(orderID);

    orderButton.innerHTML = 'order';
    successDisp.innerHTML = 'Order cancelled.';
  }
}