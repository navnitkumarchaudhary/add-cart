  
  export function addToCart(product) {
    return {
      type: 'ADD_CART',
      product,
    };
  }
  
  export function removeFromCart(id) {
    return {
      type: 'REMOVE_CART',
      id,
    };
  }
  
  export function updateAmount(id, amount) {
    return {
      type: 'UPDATE_AMOUNT',
      id,
      amount,
    }
  }
  