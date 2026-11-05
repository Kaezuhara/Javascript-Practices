export let cart = [{
  productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  qty: 2
}, {
  productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
  qty: 1
}];    // push, pop, modify still works with const

export function addToCart(productId, productQty){
  // check if the product is already in the cart
  let matchingItem;
  
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId){
      matchingItem = cartItem;
    }
  });

  if (matchingItem){    // if the product is in the cart already, then just add the quantity
    matchingItem.productQty += productQty;
  } else {              // if not yet, add the product to the cart
    cart.push({
      productId,    // shorthand property
      productQty    // shorthand property
    });
  }
}

export function removeFromCart(productId){
  let newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId){
      newCart.push(cartItem);
    }
  });

  cart = newCart;
}