import produce from 'immer';

const cart = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CART':
      return produce(state, draft => {

        const { product } = action;
        draft.push(product)

      });

    case 'REMOVE_CART':
      return produce(state, draft => {

        const productIndex = draft.findIndex(p => p.id === action.id)

        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }

      });

    case 'UPDATE_AMOUNT': {
      return produce(state, draft => {

        const productIndex = draft.findIndex(p => p.id === action.id)

        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.amount);
        }
        
      });
    }

    default:
      return state;
  }
}

export default cart;