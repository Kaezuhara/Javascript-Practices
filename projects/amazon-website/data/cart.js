export const cart = [];    // push, pop, modify still works with const

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