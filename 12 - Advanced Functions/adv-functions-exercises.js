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
  cartButton.innerHTML = 'Adding...';

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
    orderButton.innerHTML = 'Ordering...';

    orderID = setTimeout(() => {
      successDisp.innerHTML = 'Success!';
      orderButton.innerHTML = 'Order';

      pressed = false;
    }, 3000);

  } else {
    pressed = false;
    clearTimeout(orderID);

    orderButton.innerHTML = 'Order';
    successDisp.innerHTML = 'Order cancelled.';
  }
}



// Prompt a notification 3 times only on the title page
function notify(){
  let count = 0;
  let isShowNotif = 'false';

  const setIntID = setInterval(() => {
    if (isShowNotif){
      document.title = '(2) Notifications';
    } else {
      document.title = 'Advanced Functions';
    }
    
    isShowNotif = !isShowNotif;
    count++;
    
    if (count >= 6){
      clearInterval(setIntID);
      document.title = 'Advanced Functions';
    }
  }, 1000);
}



// Add or remove a message count by 1 and prompt it twice in the notification.
let messageCount = 0;   // outside the function so message count is saved

function message(isAdd){
  let promptCount = 0;
  let isShowMessage = false;

  if (isAdd){
    messageCount++;
  } else if (!isAdd && messageCount > 0){   // cant subtract if message = 0
    messageCount--;
  }

  const intMessageID = setInterval(() => {

    if (isShowMessage){
      document.title = `(${messageCount}) Messages`;
    } else {
      document.title = 'Advanced Functions';
    }

    isShowMessage = !isShowMessage;
    promptCount++;

    if (promptCount > 4){
      clearInterval(intMessageID);
      document.title = 'Advanced Functions';
    }
  }, 1000);

  return messageCount; // saves message count
}